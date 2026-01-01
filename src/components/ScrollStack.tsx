import React, { useLayoutEffect, useRef, useCallback } from 'react';
import type { ReactNode } from 'react';

export interface ScrollStackItemProps {
    itemClassName?: string;
    children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
    <div
        className={`scroll-stack-card relative w-full h-80 my-8 p-8 rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top will-change-transform ${itemClassName}`.trim()}
        style={{
            backfaceVisibility: 'hidden',
            transformStyle: 'preserve-3d'
        }}
    >
        {children}
    </div>
);

interface ScrollStackProps {
    className?: string;
    children: ReactNode;
    itemDistance?: number;
    itemScale?: number;
    itemStackDistance?: number;
    stackPosition?: string;
    scaleEndPosition?: string;
    baseScale?: number;
    rotationAmount?: number;
    blurAmount?: number;
    useWindowScroll?: boolean;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
    children,
    className = '',
    itemDistance = 80,
    itemScale = 0.04,
    itemStackDistance = 25,
    stackPosition = '15%',
    scaleEndPosition = '10%',
    baseScale = 0.9,
}) => {
    const cardsRef = useRef<HTMLElement[]>([]);
    const lastTransformsRef = useRef(new Map<number, any>());

    const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
        if (scrollTop < start) return 0;
        if (scrollTop > end) return 1;
        return (scrollTop - start) / (end - start);
    }, []);

    const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
        if (typeof value === 'string' && value.includes('%')) {
            return (parseFloat(value) / 100) * containerHeight;
        }
        return parseFloat(value as string);
    }, []);

    const updateCardTransforms = useCallback(() => {
        if (!cardsRef.current.length) return;

        const scrollTop = window.scrollY;
        const containerHeight = window.innerHeight;
        const stackPositionPx = parsePercentage(stackPosition, containerHeight);
        const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

        cardsRef.current.forEach((card, i) => {
            if (!card) return;

            const rect = card.getBoundingClientRect();
            const cardTop = rect.top + scrollTop;
            const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
            const triggerEnd = cardTop - scaleEndPositionPx;

            const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
            const targetScale = baseScale + i * itemScale;
            const scale = 1 - scaleProgress * (1 - targetScale);

            const newTransform = {
                scale: Math.round(scale * 1000) / 1000
            };

            const lastTransform = lastTransformsRef.current.get(i);
            if (!lastTransform || Math.abs(lastTransform.scale - newTransform.scale) > 0.001) {
                card.style.transform = `scale(${newTransform.scale})`;
                lastTransformsRef.current.set(i, newTransform);
            }
        });
    }, [itemScale, itemStackDistance, stackPosition, scaleEndPosition, baseScale, calculateProgress, parsePercentage]);

    useLayoutEffect(() => {
        const cards = Array.from(document.querySelectorAll('.scroll-stack-card')) as HTMLElement[];
        cardsRef.current = cards;

        cards.forEach((card, i) => {
            if (i < cards.length - 1) {
                card.style.marginBottom = `${itemDistance}px`;
            }
            card.style.willChange = 'transform';
            card.style.transformOrigin = 'top center';
        });

        updateCardTransforms();
        window.addEventListener('scroll', updateCardTransforms, { passive: true });

        return () => {
            window.removeEventListener('scroll', updateCardTransforms);
            cardsRef.current = [];
            lastTransformsRef.current.clear();
        };
    }, [itemDistance, updateCardTransforms]);

    return (
        <div className={`relative w-full ${className}`.trim()}>
            {children}
        </div>
    );
};

export default ScrollStack;
