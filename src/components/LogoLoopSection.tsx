import React, { useEffect, useState } from 'react';
import LogoLoop from './LogoLoop';
import './LogoLoopSection.css';

// Import logo SVGs
import netflixLogo from '../assets/logos/netflix-3.svg';
import spotifyLogo from '../assets/logos/spotify-2.svg';
import amazonLogo from '../assets/logos/amazon-simple.svg';
import appleLogo from '../assets/logos/apple-13.svg';
import hboLogo from '../assets/logos/hbo-4.svg';
import huluLogo from '../assets/logos/hulu-2.svg';
import primeVideoLogo from '../assets/logos/amazon-prime-video-1.svg';
import udemyLogo from '../assets/logos/udemy-wordmark-1.svg';
import courseraLogo from '../assets/logos/coursera.svg';
import ytMusicLogo from '../assets/logos/youtube-music-1.svg';
import jiosaavnLogo from '../assets/logos/jiosaavn-logo-1.svg';
import disneyHotstarLogo from '../assets/logos/Disney+_Hotstar_2024.svg';

const platformLogos = [
    { src: netflixLogo, alt: 'Netflix', title: 'Netflix' },
    { src: spotifyLogo, alt: 'Spotify', title: 'Spotify' },
    { src: amazonLogo, alt: 'Amazon', title: 'Amazon' },
    { src: appleLogo, alt: 'Apple', title: 'Apple' },
    { src: hboLogo, alt: 'HBO', title: 'HBO' },
    { src: huluLogo, alt: 'Hulu', title: 'Hulu' },
    { src: primeVideoLogo, alt: 'Prime Video', title: 'Prime Video' },
    { src: udemyLogo, alt: 'Udemy', title: 'Udemy' },
    { src: courseraLogo, alt: 'Coursera', title: 'Coursera' },
    { src: ytMusicLogo, alt: 'YT Music', title: 'YT Music' },
    { src: jiosaavnLogo, alt: 'JioSaavn', title: 'JioSaavn' },
    { src: disneyHotstarLogo, alt: 'Disney+ Hotstar', title: 'Disney+ Hotstar' },
];

const LogoLoopSection: React.FC = () => {
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
        <section className="logoloop-section">
            <div className="logoloop-container">
                <p className="logoloop-text">
                    Access content from all your favorite platforms
                </p>
            </div>

            <div className="logoloop-wrapper">
                {isMobile ? (
                    // Simple CSS-only animation for mobile
                    <div className="logoloop-mobile">
                        <div className="logoloop-mobile-track">
                            {platformLogos.map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo.src}
                                    alt={logo.alt}
                                    title={logo.title}
                                    className="logoloop-mobile-logo"
                                />
                            ))}
                            {/* Duplicate for seamless loop */}
                            {platformLogos.map((logo, index) => (
                                <img
                                    key={`dup-${index}`}
                                    src={logo.src}
                                    alt={logo.alt}
                                    title={logo.title}
                                    className="logoloop-mobile-logo"
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    // Full LogoLoop for desktop
                    <LogoLoop
                        logos={platformLogos}
                        speed={80}
                        direction="left"
                        logoHeight={35}
                        gap={80}
                        hoverSpeed={20}
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#060010"
                        ariaLabel="Platform logos"
                    />
                )}
            </div>
        </section>
    );
};

export default LogoLoopSection;
