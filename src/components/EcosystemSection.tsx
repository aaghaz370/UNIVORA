import React from 'react';
import ChromaGrid, { type ChromaItem } from './ChromaGrid';
import './EcosystemSection.css';

// Import Platform Logos
import cinemahubImg from '../assets/logos/CINEMAHUB.jpg';
import grooviaImg from '../assets/logos/GROOVIA.png';
import notoraImg from '../assets/logos/NOTORA.jpg';
import skilloraImg from '../assets/logos/SKILLORA.jpg';
import anipacaImg from '../assets/logos/FENIME.jpg';
import tgBotsImg from '../assets/logos/TELEGRAM_BOTS.jpg';

const platforms: ChromaItem[] = [
    {
        image: cinemahubImg,
        title: 'CinemaHub',
        subtitle: 'Stream unlimited movies and TV shows',
        handle: 'Movies / TV',
        borderColor: '#FF6B6B',
        gradient: 'linear-gradient(145deg, #FF6B6B, #000)',
        url: 'https://cinemahub8.vercel.app'
    },
    {
        image: grooviaImg,
        title: 'Groovia',
        subtitle: 'Discover and stream music worldwide',
        handle: 'Music',
        borderColor: '#4ECDC4',
        gradient: 'linear-gradient(210deg, #4ECDC4, #000)',
        url: 'https://grooviavercelwebsite.vercel.app'
    },
    {
        image: notoraImg,
        title: 'Notora',
        subtitle: 'Read and explore digital books',
        handle: 'Books',
        borderColor: '#FFE66D',
        gradient: 'linear-gradient(165deg, #FFE66D, #000)',
        url: 'https://notora8.netlify.app'
    },
    {
        image: skilloraImg,
        title: 'Skillora',
        subtitle: 'Learn with premium online courses',
        handle: 'Courses',
        borderColor: '#A8E6CF',
        gradient: 'linear-gradient(195deg, #A8E6CF, #000)',
        url: 'https://skillora.example.com'
    },
    {
        image: anipacaImg,
        title: 'Fenime',
        subtitle: 'Watch anime series and movies',
        handle: 'Anime',
        borderColor: '#FF8B94',
        gradient: 'linear-gradient(225deg, #FF8B94, #000)',
        url: '/coming'
    },
    {
        image: tgBotsImg,
        title: 'TG Bots',
        subtitle: 'Automate tasks with Telegram bots',
        handle: 'Automation',
        borderColor: '#B4A7D6',
        gradient: 'linear-gradient(135deg, #B4A7D6, #000)',
        url: '/bots'
    }
];

const EcosystemSection: React.FC = () => {
    return (
        <section className="ecosystem-section">
            <div className="ecosystem-container">
                {/* Section Header */}
                <div className="ecosystem-header">
                    <h2 className="ecosystem-title">The Univora Ecosystem</h2>
                    <p className="ecosystem-subtitle">
                        Explore our unified platform of digital services
                    </p>
                </div>

                {/* ChromaGrid Wrapper */}
                <div className="chromagrid-wrapper">
                    <ChromaGrid
                        items={platforms}
                        radius={300}
                        damping={0.45}
                        fadeOut={0.6}
                        ease="power3.out"
                    />
                </div>
            </div>
        </section>
    );
};

export default EcosystemSection;
