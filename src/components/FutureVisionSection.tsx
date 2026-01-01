import React from 'react';
import ElectricBorder from './ElectricBorder';
import './FutureVisionSection.css';
import { HiSparkles } from 'react-icons/hi2';
import { HiBolt } from 'react-icons/hi2';
import { HiFingerPrint } from 'react-icons/hi2';
import { HiSquares2X2 } from 'react-icons/hi2';

interface VisionFeature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const visionFeatures: VisionFeature[] = [
    {
        icon: <HiSparkles />,
        title: 'AI Integration',
        description: 'Smart content recommendations powered by advanced algorithms'
    },
    {
        icon: <HiBolt />,
        title: 'Smart Recommendations',
        description: 'Personalized suggestions that understand your preferences'
    },
    {
        icon: <HiFingerPrint />,
        title: 'Unified Login',
        description: 'One secure account across all Univora platforms'
    },
    {
        icon: <HiSquares2X2 />,
        title: 'App Ecosystem',
        description: 'Native apps for every device, connected seamlessly'
    }
];

const FutureVisionSection: React.FC = () => {
    return (
        <section className="future-vision-section">
            {/* Background Elements */}
            <div className="fv-bg-grid"></div>
            <div className="fv-bg-glow"></div>

            <div className="fv-container">
                {/* Main Statement */}
                <div className="fv-hero">
                    <ElectricBorder
                        color="#8B5CF6"
                        speed={0.8}
                        chaos={0.4}
                        thickness={2}
                        style={{ borderRadius: '50%' }}
                    >
                        <div className="fv-orb">
                            <div className="fv-orb__inner">
                                <span className="fv-orb__text">∞</span>
                            </div>
                        </div>
                    </ElectricBorder>

                    <div className="fv-statement">
                        <span className="fv-badge">The Future</span>
                        <h2 className="fv-title">
                            <span className="fv-title__line">UNIVORA is not a website.</span>
                            <span className="fv-title__highlight">It's a growing digital universe.</span>
                        </h2>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="fv-features">
                    {visionFeatures.map((feature, index) => (
                        <ElectricBorder
                            key={index}
                            color="#8B5CF6"
                            speed={1.2}
                            chaos={0.3}
                            thickness={1}
                            style={{ borderRadius: '20px' }}
                            className="fv-feature-card"
                        >
                            <div className="fv-feature">
                                <div className="fv-feature__icon">{feature.icon}</div>
                                <h3 className="fv-feature__title">{feature.title}</h3>
                                <p className="fv-feature__description">{feature.description}</p>
                            </div>
                        </ElectricBorder>
                    ))}
                </div>

                {/* Bottom Tagline */}
                <div className="fv-tagline">
                    <p className="fv-tagline__text">
                        <span className="fv-tagline__glow">We're just getting started.</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FutureVisionSection;
