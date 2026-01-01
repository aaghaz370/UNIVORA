import React from 'react';
import MagicBento from './MagicBento';
import './FeatureHighlights.css';

const FeatureHighlights: React.FC = () => {
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

                {/* Magic Bento Grid */}
                <MagicBento
                    textAutoHide={true}
                    enableStars={true}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={true}
                    clickEffect={true}
                    spotlightRadius={300}
                    particleCount={12}
                    glowColor="132, 0, 255"
                />
            </div>
        </section>
    );
};

export default FeatureHighlights;
