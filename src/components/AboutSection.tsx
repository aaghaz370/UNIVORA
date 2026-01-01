import React from 'react';
import ProfileCard from './ProfileCard';
import { HiRocketLaunch, HiCubeTransparent, HiSparkles, HiCodeBracket } from 'react-icons/hi2';
import './AboutSection.css';

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            {/* Background Elements */}
            <div className="about-bg-grid"></div>
            <div className="about-bg-glow"></div>

            <div className="about-container">
                {/* Section Header */}
                <div className="about-header">
                    <span className="about-badge">The Visionary</span>
                    <h2 className="about-title">Meet the Creator</h2>
                    <p className="about-subtitle">
                        The mind behind Univora - building the future of digital content
                    </p>
                </div>

                {/* Main Content */}
                <div className="about-content">
                    {/* Profile Card */}
                    <div className="about-card-wrapper">
                        <ProfileCard
                            name="Rolex sir"
                            title="Founder & Architect"
                            handle="rolexsir"
                            status="Building the Future"
                            contactText="Connect"
                            avatarUrl="https://univora.site/Portfolio.jpg"
                            showUserInfo={true}
                            enableTilt={true}
                            behindGlowColor="rgba(139, 92, 246, 0.5)"
                            onContactClick={() => window.open('https://t.me/rolexsir', '_blank')}
                        />
                    </div>

                    {/* Bio Section */}
                    <div className="about-bio">
                        <div className="about-bio-content">
                            <div className="about-quote-mark">"</div>
                            <p className="about-bio-text">
                                At just <span className="highlight">Class 10th</span>, I embarked on a mission
                                to revolutionize how people consume digital content. What started as a simple
                                idea has evolved into <span className="highlight">Univora</span> - a complete
                                digital ecosystem.
                            </p>
                            <p className="about-bio-text">
                                I believe technology should simplify life, not complicate it. Every platform
                                in Univora is designed with this philosophy - <span className="highlight">one account,
                                    infinite possibilities</span>.
                            </p>
                            <p className="about-bio-text">
                                From CinemaHub to Groovia, from Skillora to Anipaca - each creation is a
                                step towards building something <span className="highlight">extraordinary</span>.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="about-stats">
                            <div className="about-stat">
                                <span className="about-stat-number">5+</span>
                                <span className="about-stat-label">Platforms Built</span>
                            </div>
                            <div className="about-stat">
                                <span className="about-stat-number">1</span>
                                <span className="about-stat-label">Vision</span>
                            </div>
                            <div className="about-stat">
                                <span className="about-stat-number">∞</span>
                                <span className="about-stat-label">Possibilities</span>
                            </div>
                        </div>

                        {/* Roles */}
                        <div className="about-roles">
                            <div className="about-role">
                                <span className="role-icon"><HiRocketLaunch /></span>
                                <span className="role-text">Founder</span>
                            </div>
                            <div className="about-role">
                                <span className="role-icon"><HiCubeTransparent /></span>
                                <span className="role-text">Architect</span>
                            </div>
                            <div className="about-role">
                                <span className="role-icon"><HiSparkles /></span>
                                <span className="role-text">Visionary</span>
                            </div>
                            <div className="about-role">
                                <span className="role-icon"><HiCodeBracket /></span>
                                <span className="role-text">Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
