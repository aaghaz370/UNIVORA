import React, { useState, useEffect, Suspense } from 'react';
import './JourneySection.css';
import { HiLightBulb } from 'react-icons/hi';
import { BiSolidMoviePlay } from 'react-icons/bi';
import { HiCubeTransparent } from 'react-icons/hi2';
import { HiBolt } from 'react-icons/hi2';
import { HiRocketLaunch } from 'react-icons/hi2';

// Lazy load LaserFlow
const LaserFlow = React.lazy(() => import('./LaserFlow'));

interface TimelineStep {
    year: string;
    icon: React.ReactNode;
    title: string;
    description: string;
}

const timelineSteps: TimelineStep[] = [
    {
        year: '2024',
        icon: <HiLightBulb />,
        title: 'The Idea',
        description: 'Started in Class 10th with a simple thought - why visit 10 different places for digital content when everything can be in one place?'
    },
    {
        year: '2024',
        icon: <BiSolidMoviePlay />,
        title: 'First Platform',
        description: 'CinemaHub was born - a premium streaming platform for movies and series. The foundation of Univora ecosystem.'
    },
    {
        year: '2024',
        icon: <HiCubeTransparent />,
        title: 'Ecosystem Build',
        description: 'Expanded to Groovia (music), Skillora (courses), Anipaca (anime), and more. One account, all platforms.'
    },
    {
        year: '2024',
        icon: <HiBolt />,
        title: 'Automation',
        description: 'Built Telegram bots and automation tools to make content management seamless and efficient.'
    },
    {
        year: '2025',
        icon: <HiRocketLaunch />,
        title: 'Expansion',
        description: 'The journey continues with new platforms, features, and improvements. Building the future of digital content.'
    }
];

const JourneySection: React.FC = () => {
    const [webglSupported, setWebglSupported] = useState(true);

    useEffect(() => {
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (!gl) setWebglSupported(false);
        } catch (e) {
            setWebglSupported(false);
        }
    }, []);

    return (
        <section className="journey-section">
            {/* LaserFlow or CSS Background */}
            {webglSupported ? (
                <Suspense fallback={<div className="journey-bg-glow"></div>}>
                    <LaserFlow
                        color="#8B5CF6"
                        horizontalBeamOffset={0.0}
                        verticalBeamOffset={-0.35}
                        verticalSizing={2.5}
                        horizontalSizing={0.8}
                        fogIntensity={0.2}
                        wispDensity={1.0}
                        flowSpeed={0.4}
                    />
                </Suspense>
            ) : (
                <>
                    <div className="journey-bg-glow"></div>
                    <div className="journey-bg-grid"></div>
                </>
            )}

            {/* Content Overlay */}
            <div className="journey-content">
                {/* Section Header */}
                <div className="journey-header">
                    <span className="journey-badge">Our Story</span>
                    <h2 className="journey-title">The Univora Journey</h2>
                    <p className="journey-subtitle">
                        From a simple idea to a complete digital ecosystem - built by a student who just loves creating things
                    </p>
                </div>

                {/* Timeline */}
                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    {timelineSteps.map((step, index) => (
                        <div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`}
                        >
                            <div className="timeline-card">
                                <div className="timeline-card__glow"></div>
                                <div className="timeline-card__icon">{step.icon}</div>
                                <span className="timeline-card__year">{step.year}</span>
                                <h3 className="timeline-card__title">{step.title}</h3>
                                <p className="timeline-card__description">{step.description}</p>
                                <div className="timeline-card__particles">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="particle" style={{ animationDelay: `${i * 0.2}s` }}></span>
                                    ))}
                                </div>
                            </div>
                            <div className="timeline-dot">
                                <span className="timeline-dot__inner"></span>
                                <span className="timeline-dot__pulse"></span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quote */}
                <div className="journey-quote">
                    <blockquote>
                        "I don't know if this will be useful for everyone, but I'm building it because I love creating things.
                        If it helps even one person, that's a win."
                    </blockquote>
                    <cite>— The Creator, Class 10th Student</cite>
                </div>
            </div>
        </section>
    );
};

export default JourneySection;
