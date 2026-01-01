import React, { useState, useRef, useEffect } from 'react';
import {
    HiHome,
    HiSquares2X2,
    HiUser,
    HiSparkles,
    HiFilm,
    HiMusicalNote,
    HiBookOpen,
    HiAcademicCap,
    HiTv,
    HiCpuChip,
    HiXMark
} from 'react-icons/hi2';
import './Navigation.css';

interface Platform {
    name: string;
    icon: React.ReactNode;
    color: string;
    description: string;
    url: string;
}

const platforms: Platform[] = [
    {
        name: 'CinemaHub',
        icon: <HiFilm />,
        color: '#E50914',
        description: 'Movies & Series',
        url: 'https://cinemahub8.vercel.app'
    },
    {
        name: 'Groovia',
        icon: <HiMusicalNote />,
        color: '#1DB954',
        description: 'Music Streaming',
        url: 'https://groovia8.vercel.app'
    },
    {
        name: 'Bookora',
        icon: <HiBookOpen />,
        color: '#FF6B35',
        description: 'Digital Library',
        url: 'https://notora8.netlify.app'
    },
    {
        name: 'Skillora',
        icon: <HiAcademicCap />,
        color: '#6366F1',
        description: 'Learning Platform',
        url: 'https://skillora.univora.site'
    },
    {
        name: 'Fenime',
        icon: <HiTv />,
        color: '#EC4899',
        description: 'Anime Universe',
        url: 'https://anipaca.univora.site'
    },
    {
        name: 'BotForge',
        icon: <HiCpuChip />,
        color: '#10B981',
        description: 'Telegram Bots',
        url: '/bots'
    }
];

const Navigation: React.FC = () => {
    const [isPlatformsOpen, setIsPlatformsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsPlatformsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handlePlatformsClick = () => {
        if (isPlatformsOpen) {
            setIsPlatformsOpen(false);
            document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' });
        } else {
            setIsPlatformsOpen(true);
        }
    };

    const scrollToSection = (id: string) => {
        setIsPlatformsOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* Desktop Navigation */}
            <nav className={`nav-desktop ${isScrolled ? 'scrolled' : ''}`}>
                <div className="nav-desktop-container">
                    {/* Logo */}
                    <a href="/" className="nav-logo">
                        <HiSparkles className="logo-icon" />
                        <span>UNIVORA</span>
                    </a>

                    {/* Nav Links */}
                    <div className="nav-links">
                        <button
                            className="nav-link"
                            onClick={() => scrollToSection('hero')}
                        >
                            Home
                        </button>

                        {/* Platforms Dropdown */}
                        <div
                            className="nav-dropdown-wrapper"
                            ref={dropdownRef}
                        >
                            <button
                                className={`nav-link nav-dropdown-trigger ${isPlatformsOpen ? 'active' : ''}`}
                                onClick={handlePlatformsClick}
                                onMouseEnter={() => setIsPlatformsOpen(true)}
                            >
                                Platforms
                                <span className="dropdown-arrow">▾</span>
                            </button>

                            <div
                                className={`nav-dropdown ${isPlatformsOpen ? 'open' : ''}`}
                                onMouseLeave={() => setIsPlatformsOpen(false)}
                            >
                                <div className="dropdown-grid">
                                    {platforms.map((platform) => (
                                        <a
                                            key={platform.name}
                                            href={platform.url}
                                            className="dropdown-card"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div
                                                className="dropdown-card-icon"
                                                style={{ backgroundColor: `${platform.color}20`, color: platform.color }}
                                            >
                                                {platform.icon}
                                            </div>
                                            <div className="dropdown-card-info">
                                                <span className="dropdown-card-name">{platform.name}</span>
                                                <span className="dropdown-card-desc">{platform.description}</span>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button
                            className="nav-link"
                            onClick={() => scrollToSection('about')}
                        >
                            About
                        </button>

                        <button
                            className="nav-link"
                            onClick={() => scrollToSection('journey')}
                        >
                            Journey
                        </button>
                    </div>

                    {/* CTA Button */}
                    <a href="#ecosystem" className="nav-cta">
                        Explore
                    </a>
                </div>
            </nav>

            {/* Mobile Bottom Navigation */}
            <nav className="nav-mobile">
                <div className="nav-mobile-container">
                    <button
                        className="nav-mobile-item"
                        onClick={() => scrollToSection('hero')}
                    >
                        <HiHome className="nav-mobile-icon" />
                        <span>Home</span>
                    </button>

                    <button
                        className={`nav-mobile-item ${isPlatformsOpen ? 'active' : ''}`}
                        onClick={handlePlatformsClick}
                    >
                        <HiSquares2X2 className="nav-mobile-icon" />
                        <span>Platforms</span>
                    </button>

                    <button
                        className="nav-mobile-item"
                        onClick={() => scrollToSection('about')}
                    >
                        <HiUser className="nav-mobile-icon" />
                        <span>About</span>
                    </button>

                    <button
                        className="nav-mobile-item"
                        onClick={() => scrollToSection('journey')}
                    >
                        <HiSparkles className="nav-mobile-icon" />
                        <span>Journey</span>
                    </button>
                </div>

                {/* Mobile Platforms Sheet */}
                <div className={`mobile-sheet ${isPlatformsOpen ? 'open' : ''}`}>
                    <div className="mobile-sheet-header">
                        <h3>Platforms</h3>
                        <button
                            className="mobile-sheet-close"
                            onClick={() => setIsPlatformsOpen(false)}
                        >
                            <HiXMark />
                        </button>
                    </div>
                    <div className="mobile-sheet-grid">
                        {platforms.map((platform) => (
                            <a
                                key={platform.name}
                                href={platform.url}
                                className="mobile-platform-card"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div
                                    className="mobile-platform-icon"
                                    style={{ backgroundColor: `${platform.color}20`, color: platform.color }}
                                >
                                    {platform.icon}
                                </div>
                                <span className="mobile-platform-name">{platform.name}</span>
                                <span className="mobile-platform-desc">{platform.description}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Overlay */}
                {isPlatformsOpen && (
                    <div
                        className="mobile-sheet-overlay"
                        onClick={() => setIsPlatformsOpen(false)}
                    />
                )}
            </nav>
        </>
    );
};

export default Navigation;
