import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export interface ShuffleProps {
    text: string;
    className?: string;
    style?: React.CSSProperties;
    duration?: number;
    ease?: string;
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    textAlign?: React.CSSProperties['textAlign'];
    onShuffleComplete?: () => void;
    shuffleTimes?: number;
    stagger?: number;
}

const Shuffle: React.FC<ShuffleProps> = ({
    text,
    className = '',
    style = {},
    duration = 0.5,
    ease = 'power3.out',
    tag = 'h1',
    textAlign = 'left',
    onShuffleComplete,
    shuffleTimes = 2,
    stagger = 0.05
}) => {
    const ref = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const hasBuilt = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasBuilt.current) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useGSAP(
        () => {
            if (!ref.current || !isVisible || hasBuilt.current) return;

            hasBuilt.current = true;
            const el = ref.current;
            const chars = text.split('');
            const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
            const getRandomChar = () =>
                scrambleChars.charAt(Math.floor(Math.random() * scrambleChars.length));

            const charElements: HTMLElement[] = [];

            // Build the character structure
            chars.forEach((char) => {
                const charWrapper = document.createElement('span');
                charWrapper.style.display = 'inline-block';
                charWrapper.style.overflow = 'hidden';
                charWrapper.style.verticalAlign = 'top';
                charWrapper.style.height = '1em';
                charWrapper.style.lineHeight = '1';

                const charContainer = document.createElement('span');
                charContainer.style.display = 'inline-block';

                // Create the shuffle stack
                for (let i = 0; i < shuffleTimes; i++) {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : getRandomChar();
                    span.style.display = 'block';
                    span.style.height = '1em';
                    span.style.lineHeight = '1';
                    charContainer.appendChild(span);
                }

                // Add the final correct character
                const finalSpan = document.createElement('span');
                finalSpan.textContent = char;
                finalSpan.style.display = 'block';
                finalSpan.style.height = '1em';
                finalSpan.style.lineHeight = '1';
                charContainer.appendChild(finalSpan);

                charWrapper.appendChild(charContainer);
                el.appendChild(charWrapper);
                charElements.push(charContainer);
            });

            // Animate
            const tl = gsap.timeline({
                delay: 0.5,
                onComplete: () => {
                    onShuffleComplete?.();
                }
            });

            charElements.forEach((charEl, i) => {
                gsap.set(charEl, { y: 0 });
                tl.to(
                    charEl,
                    {
                        y: `-${shuffleTimes * 100}%`,
                        duration,
                        ease
                    },
                    i * stagger
                );
            });
        },
        { dependencies: [isVisible], scope: ref }
    );

    const commonStyle: React.CSSProperties = {
        textAlign,
        opacity: isVisible ? 1 : 0,
        ...style
    };

    const Tag = tag as keyof JSX.IntrinsicElements;

    return React.createElement(Tag, {
        ref: ref as any,
        className: `shuffle-text ${className}`.trim(),
        style: commonStyle
    });
};

export default Shuffle;
