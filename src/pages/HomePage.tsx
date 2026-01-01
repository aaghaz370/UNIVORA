import React from 'react';
import Navigation from '../components/Navigation';
import HeroBanner from '../components/HeroBanner';
import EcosystemSection from '../components/EcosystemSection';
import LogoLoopSection from '../components/LogoLoopSection';
// import FeatureHighlights from '../components/FeatureHighlights';
import JourneySection from '../components/JourneySection';
import FutureVisionSection from '../components/FutureVisionSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
    return (
        <>
            <Navigation />
            <div id="hero">
                <HeroBanner />
            </div>
            <div id="ecosystem">
                <EcosystemSection />
            </div>
            <LogoLoopSection />
            {/* <FeatureHighlights /> */}
            <div id="journey">
                <JourneySection />
            </div>
            <FutureVisionSection />
            <div id="about">
                <AboutSection />
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
