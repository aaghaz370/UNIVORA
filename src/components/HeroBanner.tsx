import React, { useState, useEffect, Suspense } from 'react';
import { HiArrowRight, HiSparkles } from 'react-icons/hi2';
import './HeroBanner.css';

// Lazy load LiquidEther to handle potential WebGL errors
const LiquidEther = React.lazy(() => import('./LiquidEther'));

const HeroBanner: React.FC = () => {
    const [webglSupported, setWebglSupported] = useState(true);

    useEffect(() => {
        // Check WebGL support
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (!gl) {
                setWebglSupported(false);
            }
        } catch (e) {
            setWebglSupported(false);
        }
    }, []);

    return (
        <div className="hero-banner">
            {/* Background - LiquidEther or CSS fallback */}
            <div className="hero-background">
                {webglSupported ? (
                    <Suspense fallback={<div className="hero-bg-gradient"></div>}>
                        <LiquidEther
                            colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                            mouseForce={20}
                            cursorSize={100}
                            isViscous={false}
                            viscous={30}
                            iterationsViscous={32}
                            iterationsPoisson={32}
                            resolution={0.5}
                            isBounce={false}
                            autoDemo={true}
                            autoSpeed={0.5}
                            autoIntensity={2.2}
                            takeoverDuration={0.25}
                            autoResumeDelay={3000}
                            autoRampDuration={0.6}
                        />
                    </Suspense>
                ) : (
                    <>
                        <div className="hero-bg-gradient"></div>
                        <div className="hero-bg-grid"></div>
                        <div className="hero-bg-glow"></div>
                    </>
                )}
            </div>

            {/* Content Overlay */}
            <div className="hero-content">
                <div className="hero-text-container">
                    {/* Badge */}
                    <div className="hero-badge">
                        <HiSparkles className="badge-icon" />
                        <span>Your Digital Universe Awaits</span>
                    </div>

                    {/* Main Title - UNIVORA with special styling */}
                    <h1 className="hero-main-title">
                        <span className="title-main">UNIVORA</span>
                        <span className="title-tagline">One Account. Infinite Possibilities.</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="hero-subtitle">
                        Movies. Music. Books. Courses. Anime. Bots.
                        <br />
                        Everything you love, connected in one seamless ecosystem.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-cta-buttons">
                        <button
                            className="cta-button cta-primary"
                            onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <span>Explore Platforms</span>
                            <HiArrowRight className="btn-icon" />
                        </button>
                        <button
                            className="cta-button cta-secondary"
                            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            View Ecosystem
                        </button>
                    </div>

                    {/* Stats Row */}
                    <div className="hero-stats">
                        <div className="hero-stat">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Platforms</span>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div className="hero-stat">
                            <span className="stat-number">1</span>
                            <span className="stat-label">Account</span>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div className="hero-stat">
                            <span className="stat-number">∞</span>
                            <span className="stat-label">Content</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span>Scroll to explore</span>
            </div>
        </div>
    );
};

export default HeroBanner;
