import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    HiArrowLeft,
    HiSparkles,
    HiCpuChip,
    HiArrowTopRightOnSquare,
    HiMagnifyingGlass,
    HiFilm,
    HiMusicalNote,
    HiBookOpen,
    HiPhoto,
    HiCloudArrowDown,
    HiCommandLine,
    HiCog6Tooth,
    HiBolt,
    HiUserGroup
} from 'react-icons/hi2';
import { FaTelegram } from 'react-icons/fa';
import './BotsPage.css';

interface Bot {
    id: string;
    name: string;
    username: string;
    description: string;
    longDescription: string;
    icon: React.ReactNode;
    color: string;
    category: string;
    features: string[];
    users: string;
    status: 'online' | 'maintenance' | 'beta';
    link: string;
}

const bots: Bot[] = [
    {
        id: 'cinemahub',
        name: 'CinemaHub Bot',
        username: '@CinemaHub_univora_bot',
        description: 'Search and stream movies & series directly in Telegram',
        longDescription: 'Your personal movie assistant. Search from thousands of movies and series, get streaming links, download options, and detailed information about any film.',
        icon: <HiFilm />,
        color: '#E50914',
        category: 'Entertainment',
        features: ['Movie Search', 'Series Search', 'Streaming Links', 'Download Links', 'IMDB Info'],
        users: '10K+',
        status: 'online',
        link: 'https://t.me/CinemaHub_univora_bot'
    },
    {
        id: 'groovia',
        name: 'Groovia Bot',
        username: '@Groovia_univora_bot',
        description: 'Stream and download music from various platforms',
        longDescription: 'The ultimate music bot. Search, stream, and download songs from Spotify, JioSaavn, YouTube Music and more. Get lyrics, playlists, and high-quality audio.',
        icon: <HiMusicalNote />,
        color: '#1DB954',
        category: 'Music',
        features: ['Music Search', 'Spotify Integration', 'Lyrics', 'Playlist Support', 'High Quality Audio'],
        users: '5K+',
        status: 'online',
        link: 'https://t.me/Groovia_univora_bot'
    },
    {
        id: 'bookora',
        name: 'Bookora Bot',
        username: '@Bookora_univora_bot',
        description: 'Find and download eBooks, PDFs, and documents',
        longDescription: 'Your digital library assistant. Search millions of books, get PDF downloads, eBook formats, and audiobook links all in one place.',
        icon: <HiBookOpen />,
        color: '#FF6B35',
        category: 'Education',
        features: ['Book Search', 'PDF Downloads', 'Multiple Formats', 'Audiobooks', 'Summaries'],
        users: '3K+',
        status: 'online',
        link: 'https://t.me/Bookora_univora_bot'
    },
    {
        id: 'imagegen',
        name: 'ImageGen Bot',
        username: '@ImageGen_univora_bot',
        description: 'AI-powered image generation and editing',
        longDescription: 'Create stunning AI-generated images from text prompts. Edit photos, remove backgrounds, upscale images, and more with advanced AI technology.',
        icon: <HiPhoto />,
        color: '#EC4899',
        category: 'AI Tools',
        features: ['Text to Image', 'Image Editing', 'Background Removal', 'Upscaling', 'Style Transfer'],
        users: '2K+',
        status: 'beta',
        link: 'https://t.me/ImageGen_univora_bot'
    },
    {
        id: 'downloader',
        name: 'Universal Downloader',
        username: '@UniDownload_bot',
        description: 'Download from YouTube, Instagram, Twitter & more',
        longDescription: 'The ultimate download bot. Get videos, reels, stories, and posts from YouTube, Instagram, Twitter, TikTok, and 50+ platforms in highest quality.',
        icon: <HiCloudArrowDown />,
        color: '#6366F1',
        category: 'Utility',
        features: ['YouTube Downloads', 'Instagram Reels', 'Twitter Videos', 'TikTok', '50+ Platforms'],
        users: '15K+',
        status: 'online',
        link: 'https://t.me/UniDownload_bot'
    },
    {
        id: 'admin',
        name: 'Group Admin Bot',
        username: '@UniAdmin_bot',
        description: 'Powerful group management and moderation',
        longDescription: 'Complete group management solution. Anti-spam, welcome messages, custom commands, warnings, bans, and advanced moderation features.',
        icon: <HiUserGroup />,
        color: '#10B981',
        category: 'Management',
        features: ['Anti-Spam', 'Custom Commands', 'Welcome Messages', 'Moderation', 'Analytics'],
        users: '8K+',
        status: 'online',
        link: 'https://t.me/UniAdmin_bot'
    },
    {
        id: 'automate',
        name: 'AutoMate Bot',
        username: '@AutoMate_univora_bot',
        description: 'Automation and scheduled tasks for channels',
        longDescription: 'Automate your Telegram workflow. Schedule posts, auto-forward messages, create RSS feeds, and set up triggers for your channels and groups.',
        icon: <HiCog6Tooth />,
        color: '#F59E0B',
        category: 'Automation',
        features: ['Scheduled Posts', 'Auto Forward', 'RSS Feeds', 'Triggers', 'Multi-Channel'],
        users: '1K+',
        status: 'online',
        link: 'https://t.me/AutoMate_univora_bot'
    },
    {
        id: 'codebot',
        name: 'CodeBot',
        username: '@CodeBot_univora_bot',
        description: 'Code execution, snippets, and developer tools',
        longDescription: 'Developer-focused bot. Execute code in 30+ languages, share beautiful code snippets, get GitHub stats, and access developer tools.',
        icon: <HiCommandLine />,
        color: '#8B5CF6',
        category: 'Developer',
        features: ['Code Execution', '30+ Languages', 'Code Snippets', 'GitHub Integration', 'Pastebin'],
        users: '500+',
        status: 'beta',
        link: 'https://t.me/CodeBot_univora_bot'
    }
];

const categories = ['All', 'Entertainment', 'Music', 'Education', 'AI Tools', 'Utility', 'Management', 'Automation', 'Developer'];

const BotsPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedBot, setSelectedBot] = useState<Bot | null>(null);

    const filteredBots = bots.filter(bot => {
        const matchesSearch = bot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            bot.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || bot.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="bots-page">
            {/* Background */}
            <div className="bots-bg">
                <div className="bots-bg-gradient"></div>
                <div className="bots-bg-grid"></div>
            </div>

            {/* Header */}
            <header className="bots-header">
                <Link to="/" className="back-button">
                    <HiArrowLeft />
                    <span>Back to Home</span>
                </Link>
                <div className="header-brand">
                    <HiSparkles className="brand-icon" />
                    <span>UNIVORA</span>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bots-hero">
                <div className="hero-badge">
                    <FaTelegram />
                    <span>Telegram Bot Ecosystem</span>
                </div>
                <h1 className="hero-title">
                    <span className="title-gradient">Powerful Bots</span>
                    <span className="title-sub">for Every Need</span>
                </h1>
                <p className="hero-description">
                    Explore our collection of Telegram bots designed to enhance your experience.
                    From entertainment to productivity, we've got you covered.
                </p>

                {/* Search Bar */}
                <div className="search-container">
                    <HiMagnifyingGlass className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search bots..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </div>

                {/* Categories */}
                <div className="categories">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Bots Grid */}
            <section className="bots-grid-section">
                <div className="bots-grid">
                    {filteredBots.map(bot => (
                        <div
                            key={bot.id}
                            className="bot-card"
                            onClick={() => setSelectedBot(bot)}
                        >
                            <div className="bot-card-header">
                                <div
                                    className="bot-icon"
                                    style={{ backgroundColor: `${bot.color}20`, color: bot.color }}
                                >
                                    {bot.icon}
                                </div>
                                <div className={`bot-status ${bot.status}`}>
                                    <span className="status-dot"></span>
                                    {bot.status === 'online' && 'Online'}
                                    {bot.status === 'beta' && 'Beta'}
                                    {bot.status === 'maintenance' && 'Maintenance'}
                                </div>
                            </div>

                            <h3 className="bot-name">{bot.name}</h3>
                            <p className="bot-username">{bot.username}</p>
                            <p className="bot-description">{bot.description}</p>

                            <div className="bot-meta">
                                <span className="bot-category">{bot.category}</span>
                                <span className="bot-users">
                                    <HiUserGroup />
                                    {bot.users}
                                </span>
                            </div>

                            <a
                                href={bot.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bot-cta"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <FaTelegram />
                                <span>Open Bot</span>
                                <HiArrowTopRightOnSquare />
                            </a>
                        </div>
                    ))}
                </div>

                {filteredBots.length === 0 && (
                    <div className="no-results">
                        <HiCpuChip className="no-results-icon" />
                        <p>No bots found matching your search.</p>
                    </div>
                )}
            </section>

            {/* Bot Detail Modal */}
            {selectedBot && (
                <div className="bot-modal-overlay" onClick={() => setSelectedBot(null)}>
                    <div className="bot-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedBot(null)}>×</button>

                        <div className="modal-header">
                            <div
                                className="modal-icon"
                                style={{ backgroundColor: `${selectedBot.color}20`, color: selectedBot.color }}
                            >
                                {selectedBot.icon}
                            </div>
                            <div className="modal-title-group">
                                <h2>{selectedBot.name}</h2>
                                <p className="modal-username">{selectedBot.username}</p>
                            </div>
                        </div>

                        <p className="modal-description">{selectedBot.longDescription}</p>

                        <div className="modal-features">
                            <h4>Features</h4>
                            <div className="features-list">
                                {selectedBot.features.map((feature, index) => (
                                    <span key={index} className="feature-tag">
                                        <HiBolt />
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="modal-stats">
                            <div className="stat">
                                <span className="stat-value">{selectedBot.users}</span>
                                <span className="stat-label">Users</span>
                            </div>
                            <div className="stat">
                                <span className="stat-value">{selectedBot.category}</span>
                                <span className="stat-label">Category</span>
                            </div>
                            <div className="stat">
                                <span className={`stat-value status-${selectedBot.status}`}>
                                    {selectedBot.status.charAt(0).toUpperCase() + selectedBot.status.slice(1)}
                                </span>
                                <span className="stat-label">Status</span>
                            </div>
                        </div>

                        <a
                            href={selectedBot.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="modal-cta"
                        >
                            <FaTelegram />
                            <span>Start Chatting</span>
                            <HiArrowTopRightOnSquare />
                        </a>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="bots-footer">
                <p>© {new Date().getFullYear()} Univora • All bots are maintained by the Univora team</p>
            </footer>
        </div>
    );
};

export default BotsPage;
