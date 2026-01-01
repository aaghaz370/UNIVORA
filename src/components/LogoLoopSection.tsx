import React from 'react';
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
    { src: netflixLogo, alt: 'Netflix' },
    { src: spotifyLogo, alt: 'Spotify' },
    { src: amazonLogo, alt: 'Amazon' },
    { src: appleLogo, alt: 'Apple' },
    { src: hboLogo, alt: 'HBO' },
    { src: huluLogo, alt: 'Hulu' },
    { src: primeVideoLogo, alt: 'Prime Video' },
    { src: udemyLogo, alt: 'Udemy' },
    { src: courseraLogo, alt: 'Coursera' },
    { src: ytMusicLogo, alt: 'YT Music' },
    { src: jiosaavnLogo, alt: 'JioSaavn' },
    { src: disneyHotstarLogo, alt: 'Disney+ Hotstar' },
];

const LogoLoopSection: React.FC = () => {
    return (
        <section className="logoloop-section">
            <div className="logoloop-container">
                <p className="logoloop-text">
                    Access content from all your favorite platforms
                </p>
            </div>

            <div className="logoloop-wrapper">
                <div className="logoloop-marquee">
                    <div className="logoloop-track">
                        {platformLogos.map((logo, idx) => (
                            <img
                                key={idx}
                                src={logo.src}
                                alt={logo.alt}
                                className="logoloop-item"
                            />
                        ))}
                    </div>
                    <div className="logoloop-track" aria-hidden="true">
                        {platformLogos.map((logo, idx) => (
                            <img
                                key={idx}
                                src={logo.src}
                                alt={logo.alt}
                                className="logoloop-item"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoLoopSection;
