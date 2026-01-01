import React, { useState, useEffect } from 'react';
import MagicBento from './MagicBento';
import './FeatureHighlights.css';

const FeatureHighlights: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className="features-section">
            <div className="features-container">
                {/* Section Header */}
                <div className="features-header">
                    <span className="features-badge">Why Univora?</span>
                    <h2 className="features-title">Built Different, Built Better</h2>
                    <p className="features-subtitle">
                        Discover what makes Univora the ultimate digital ecosystem for entertainment and learning
                    </p>
                </div>

                {/* Magic Bento Grid - Lite version on mobile */}
                <MagicBento
                    textAutoHide={true}
                    enableStars={!isMobile}
                    enableSpotlight={!isMobile}
                    enableBorderGlow={true}
                    enableTilt={false}
                    enableMagnetism={false}
                    clickEffect={false}
                    spotlightRadius={300}
                    particleCount={isMobile ? 0 : 8}
                    glowColor="132, 0, 255"
                />
            </div>
        </section>
    );
};

export default FeatureHighlights;
