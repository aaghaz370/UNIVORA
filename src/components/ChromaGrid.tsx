import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export interface ChromaItem {
    image: string;
    title: string;
    subtitle: string;
    handle?: string;
    location?: string;
    borderColor?: string;
    gradient?: string;
    url?: string;
}

export interface ChromaGridProps {
    items?: ChromaItem[];
    className?: string;
    radius?: number;
    damping?: number;
    fadeOut?: number;
    ease?: string;
}

type SetterFn = (v: number | string) => void;

const ChromaGrid: React.FC<ChromaGridProps> = ({
    items,
    className = '',
    radius = 300,
    damping = 0.45,
    fadeOut = 0.6,
    ease = 'power3.out'
}) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const fadeRef = useRef<HTMLDivElement>(null);
    const setX = useRef<SetterFn | null>(null);
    const setY = useRef<SetterFn | null>(null);
    const pos = useRef({ x: 0, y: 0 });

    const demo: ChromaItem[] = [
        {
            image: 'https://i.pravatar.cc/300?img=8',
            title: 'Alex Rivera',
            subtitle: 'Full Stack Developer',
            handle: '@alexrivera',
            borderColor: '#4F46E5',
            gradient: 'linear-gradient(145deg,#4F46E5,#000)',
            url: 'https://github.com/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=11',
            title: 'Jordan Chen',
            subtitle: 'DevOps Engineer',
            handle: '@jordanchen',
            borderColor: '#10B981',
            gradient: 'linear-gradient(210deg,#10B981,#000)',
            url: 'https://linkedin.com/in/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=3',
            title: 'Morgan Blake',
            subtitle: 'UI/UX Designer',
            handle: '@morganblake',
            borderColor: '#F59E0B',
            gradient: 'linear-gradient(165deg,#F59E0B,#000)',
            url: 'https://dribbble.com/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=16',
            title: 'Casey Park',
            subtitle: 'Data Scientist',
            handle: '@caseypark',
            borderColor: '#EF4444',
            gradient: 'linear-gradient(195deg,#EF4444,#000)',
            url: 'https://kaggle.com/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=25',
            title: 'Sam Kim',
            subtitle: 'Mobile Developer',
            handle: '@thesamkim',
            borderColor: '#8B5CF6',
            gradient: 'linear-gradient(225deg,#8B5CF6,#000)',
            url: 'https://github.com/'
        },
        {
            image: 'https://i.pravatar.cc/300?img=60',
            title: 'Tyler Rodriguez',
            subtitle: 'Cloud Architect',
            handle: '@tylerrod',
            borderColor: '#06B6D4',
            gradient: 'linear-gradient(135deg,#06B6D4,#000)',
            url: 'https://aws.amazon.com/'
        }
    ];

    const data = items?.length ? items : demo;

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, '--x', 'px') as SetterFn;
        setY.current = gsap.quickSetter(el, '--y', 'px') as SetterFn;
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        setX.current(pos.current.x);
        setY.current(pos.current.y);
    }, []);

    const moveTo = (x: number, y: number) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                setX.current?.(pos.current.x);
                setY.current?.(pos.current.y);
            },
            overwrite: true
        });
    };

    const handleMove = (e: React.PointerEvent) => {
        const r = rootRef.current!.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    };

    const handleLeave = () => {
        gsap.to(fadeRef.current, {
            opacity: 1,
            duration: fadeOut,
            overwrite: true
        });
    };

    const handleCardClick = (url?: string) => {
        if (url) {
            if (url.startsWith('/')) {
                // Internal route
                window.location.href = url;
            } else {
                // External URL
                window.open(url, '_blank', 'noopener,noreferrer');
            }
        }
    };

    const handleCardMove: React.MouseEventHandler<HTMLElement> = e => {
        const c = e.currentTarget as HTMLElement;
        const rect = c.getBoundingClientRect();
        c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };

    return (
        <>
            <style>{`
        .chromagrid-root {
          position: relative;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          padding: 0;
        }
        
        @media (max-width: 1024px) {
          .chromagrid-root {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
        
        @media (max-width: 768px) {
          .chromagrid-root {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
            <div
                ref={rootRef}
                onPointerMove={handleMove}
                onPointerLeave={handleLeave}
                className={`chromagrid-root ${className}`}
                style={{
                    '--r': `${radius}px`,
                    '--x': '50%',
                    '--y': '50%'
                } as React.CSSProperties}
            >
                {data.map((c, i) => (
                    <article
                        key={i}
                        onMouseMove={handleCardMove}
                        style={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '420px',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            border: '2px solid transparent',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            background: c.gradient,
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                            '--card-border': c.borderColor || 'transparent',
                            '--spotlight-color': 'rgba(255,255,255,0.3)'
                        } as React.CSSProperties}
                    >
                        {/* Card Hover Spotlight */}
                        <div
                            className="card-spotlight"
                            style={{
                                position: 'absolute',
                                inset: 0,
                                pointerEvents: 'none',
                                transition: 'opacity 0.5s',
                                zIndex: 20,
                                opacity: 0,
                                background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)'
                            }}
                        />

                        {/* Image Container */}
                        <div style={{
                            position: 'relative',
                            zIndex: 10,
                            height: '240px',
                            padding: '12px',
                            boxSizing: 'border-box'
                        }}>
                            <img
                                src={c.image}
                                alt={c.title}
                                loading="lazy"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '12px'
                                }}
                            />
                        </div>

                        {/* Content Footer */}
                        <footer
                            style={{
                                position: 'relative',
                                zIndex: 10,
                                flex: 1,
                                padding: '16px 20px',
                                color: 'white',
                                fontFamily: 'Inter, sans-serif',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '8px'
                                }}>
                                    <h3 style={{
                                        margin: 0,
                                        fontSize: '1.15rem',
                                        fontWeight: 600,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    }}>
                                        {c.title}
                                    </h3>
                                    {c.handle && (
                                        <span style={{
                                            fontSize: '0.85rem',
                                            opacity: 0.75,
                                            marginLeft: '8px',
                                            whiteSpace: 'nowrap'
                                        }}>
                                            {c.handle}
                                        </span>
                                    )}
                                </div>
                                <p style={{
                                    margin: 0,
                                    fontSize: '0.9rem',
                                    opacity: 0.85,
                                    lineHeight: '1.4'
                                }}>
                                    {c.subtitle}
                                </p>
                            </div>

                            {/* Visit Site Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleCardClick(c.url);
                                }}
                                style={{
                                    marginTop: '16px',
                                    padding: '10px 20px',
                                    background: 'rgba(255, 255, 255, 0.15)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    borderRadius: '10px',
                                    color: 'white',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    fontFamily: 'Inter, sans-serif',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                Visit Site
                            </button>
                        </footer>
                    </article>
                ))}

                {/* Global Grayscale Mask */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        pointerEvents: 'none',
                        zIndex: 30,
                        backdropFilter: 'grayscale(1) brightness(0.78)',
                        WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
                        background: 'rgba(0,0,0,0.001)',
                        maskImage: 'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)',
                        WebkitMaskImage: 'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)'
                    }}
                />

                {/* Fade Overlay */}
                <div
                    ref={fadeRef}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        pointerEvents: 'none',
                        transition: 'opacity 250ms',
                        zIndex: 40,
                        backdropFilter: 'grayscale(1) brightness(0.78)',
                        WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
                        background: 'rgba(0,0,0,0.001)',
                        maskImage: 'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
                        opacity: 1
                    }}
                />
            </div>
        </>
    );
};

export default ChromaGrid;

