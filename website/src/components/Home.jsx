import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import PartnersSection from './PartnersSection';
import WhyusSection from './WhyusSection';
import Testimonials from './Testimonials';
import Contactus from './Contactus';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-dark text-light">
            {/* Navigation */}
            <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrolled={scrolled} />

            {/* Hero Section */}
            <HeroSection />
            
            {/* Services Section */}
            <ServicesSection />

            {/* why Us Section */}
            <WhyusSection />

            {/* <PartnersSection /> */}
            <PartnersSection />

            {/* Testmonials */}
            <Testimonials />

            {/* Contact Us */}
            <Contactus />

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 btn-gradient p-3 rounded-full shadow-lg"
                >
                    <ArrowUp className="w-6 h-6" />
                </button>
            )}
        </div>
    );
}

export default Home;
