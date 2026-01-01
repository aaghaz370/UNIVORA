import React, { useState } from 'react';
import {
    HiSparkles,
    HiEnvelope,
    HiArrowRight,
    HiFilm,
    HiMusicalNote,
    HiBookOpen,
    HiAcademicCap,
    HiTv,
    HiCpuChip,
    HiChatBubbleLeftRight,
    HiGlobeAlt,
    HiDocumentText,
    HiShieldCheck,
    HiHeart
} from 'react-icons/hi2';
import {
    FaTelegram,
    FaGithub,
    FaInstagram,
    FaDiscord
} from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    const currentYear = new Date().getFullYear();

    const platforms = [
        { name: 'CinemaHub', icon: <HiFilm />, url: 'https://cinemahub.univora.site' },
        { name: 'Groovia', icon: <HiMusicalNote />, url: 'https://groovia.univora.site' },
        { name: 'Bookora', icon: <HiBookOpen />, url: 'https://bookora.univora.site' },
        { name: 'Skillora', icon: <HiAcademicCap />, url: 'https://skillora.univora.site' },
        { name: 'Anipaca', icon: <HiTv />, url: 'https://anipaca.univora.site' },
    ];

    const bots = [
        { name: 'CinemaHub Bot', icon: <HiCpuChip />, url: 'https://t.me/cinemahub_bot' },
        { name: 'Groovia Bot', icon: <HiCpuChip />, url: 'https://t.me/groovia_bot' },
        { name: 'Support Bot', icon: <HiChatBubbleLeftRight />, url: 'https://t.me/univora_support' },
    ];

    const contact = [
        { name: 'Telegram', icon: <FaTelegram />, url: 'https://t.me/rolexsir' },
        { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com/univora' },
        { name: 'Discord', icon: <FaDiscord />, url: 'https://discord.gg/univora' },
        { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/univora' },
    ];

    const legal = [
        { name: 'Terms of Service', icon: <HiDocumentText />, url: '/terms' },
        { name: 'Privacy Policy', icon: <HiShieldCheck />, url: '/privacy' },
        { name: 'DMCA Policy', icon: <HiDocumentText />, url: '/dmca' },
    ];

    return (
        <footer className="footer">
            {/* Top Glow Effect */}
            <div className="footer-glow"></div>

            {/* Main Footer Content */}
            <div className="footer-container">
                {/* Brand Section */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <HiSparkles className="logo-sparkle" />
                        <span className="logo-text">UNIVORA</span>
                    </div>
                    <p className="footer-tagline">
                        Your Digital Universe. One account to access movies, music,
                        books, courses, anime, and more. Built with passion by a
                        Class 10th student.
                    </p>

                    {/* Newsletter */}
                    <div className="footer-newsletter">
                        <h4>Stay Updated</h4>
                        <form onSubmit={handleSubscribe} className="newsletter-form">
                            <div className="newsletter-input-wrapper">
                                <HiEnvelope className="input-icon" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="newsletter-btn">
                                {isSubscribed ? 'Subscribed!' : <HiArrowRight />}
                            </button>
                        </form>
                    </div>

                    {/* Social Links */}
                    <div className="footer-socials">
                        {contact.map((item) => (
                            <a
                                key={item.name}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label={item.name}
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links Columns */}
                <div className="footer-links">
                    {/* Platforms Column */}
                    <div className="footer-column">
                        <h3 className="column-title">
                            <HiGlobeAlt className="title-icon" />
                            Platforms
                        </h3>
                        <ul className="column-list">
                            {platforms.map((item) => (
                                <li key={item.name}>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bots Column */}
                    <div className="footer-column">
                        <h3 className="column-title">
                            <HiCpuChip className="title-icon" />
                            Telegram Bots
                        </h3>
                        <ul className="column-list">
                            {bots.map((item) => (
                                <li key={item.name}>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div className="footer-column">
                        <h3 className="column-title">
                            <HiShieldCheck className="title-icon" />
                            Legal
                        </h3>
                        <ul className="column-list">
                            {legal.map((item) => (
                                <li key={item.name}>
                                    <a href={item.url}>
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p className="copyright">
                        © {currentYear} <span className="brand">Univora</span> • All rights reserved
                    </p>
                    <p className="made-with">
                        Made with <HiHeart className="heart-icon" /> by
                        <a href="https://t.me/rolexsir" target="_blank" rel="noopener noreferrer"> Rolex sir</a>
                    </p>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="footer-decoration">
                <div className="deco-circle deco-1"></div>
                <div className="deco-circle deco-2"></div>
                <div className="deco-line"></div>
            </div>
        </footer>
    );
};

export default Footer;
