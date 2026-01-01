import React from 'react';
import ChromaGrid, { type ChromaItem } from './ChromaGrid';
import './EcosystemSection.css';

const platforms: ChromaItem[] = [
    {
        image: 'https://cdn.leonardo.ai/users/a0d5b0f6-64a8-42cb-99e3-59b98829a68d/generations/1f0e3d49-601f-6d10-94dd-7e2e02679d6c/gemini-image-2_Design_a_premium_modern_cinematic_logo_for_a_professional_movie_TV_streaming_pla-0.jpg',
        title: 'CinemaHub',
        subtitle: 'Stream unlimited movies and TV shows',
        handle: 'Movies / TV',
        borderColor: '#FF6B6B',
        gradient: 'linear-gradient(145deg, #FF6B6B, #000)',
        url: 'https://cinemahub8.vercel.app'
    },
    {
        image: 'https://i.pravatar.cc/300?img=2',
        title: 'Groovia',
        subtitle: 'Discover and stream music worldwide',
        handle: 'Music',
        borderColor: '#4ECDC4',
        gradient: 'linear-gradient(210deg, #4ECDC4, #000)',
        url: 'https://groovia.example.com'
    },
    {
        image: 'https://i.pravatar.cc/300?img=3',
        title: 'Notora',
        subtitle: 'Read and explore digital books',
        handle: 'Books',
        borderColor: '#FFE66D',
        gradient: 'linear-gradient(165deg, #FFE66D, #000)',
        url: 'https://notora.example.com'
    },
    {
        image: 'https://i.pravatar.cc/300?img=4',
        title: 'Skillora',
        subtitle: 'Learn with premium online courses',
        handle: 'Courses',
        borderColor: '#A8E6CF',
        gradient: 'linear-gradient(195deg, #A8E6CF, #000)',
        url: 'https://skillora.example.com'
    },
    {
        image: 'https://i.pravatar.cc/300?img=5',
        title: 'Anipaca',
        subtitle: 'Watch anime series and movies',
        handle: 'Anime',
        borderColor: '#FF8B94',
        gradient: 'linear-gradient(225deg, #FF8B94, #000)',
        url: 'https://anipaca.example.com'
    },
    {
        image: 'https://i.pravatar.cc/300?img=6',
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
