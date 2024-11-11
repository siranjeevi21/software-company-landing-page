import React from 'react';
import { Play } from 'lucide-react';

const HeroSection = () => {
    const stats = [
        { number: "250+", label: "Happy Clients" },
        { number: "15+", label: "Years Experience" },
        { number: "95%", label: "Client Retention" },
        { number: "800+", label: "Projects Completed" }
    ];

    return (
        <section id="home" className="hero-section">
            <div className="relative pt-40 pb-60 overflow-hidden"> {/* Increased padding for more height */}
                {/* Background Video */}
                <video 
                    autoPlay 
                    loop 
                    muted 
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ filter: "brightness(0.4)" }}
                >
                    <source src="/hero-section-video.mp4" type="video/mp4" />
                </video>

                {/* Radial Blur Effect */}
                <div className="absolute inset-0 bg-gradient-to-tl from-black to-transparent opacity-50 blur-sm"></div>

                <div className="relative flex flex-col justify-center items-center text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col justify-center items-center text-center lg:text-left">
                        <div className="mt-10 mb-5 flex flex-wrap gap-4 justify-center lg:justify-start">
                            <div className="badge">
                                Welcome To Coursi Technologies
                            </div>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-white">
                            Coursi Solutions for <span className="block mt-2">Business Growth</span> {/* "Growth" on the next line */}
                        </h1>
                        <p className="mt-6 text-xl text-white">
                            Transform your business with our innovative cutting-edge technological solutions.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                            <button className="btn-gradient">
                                Get Started
                            </button>
                            <button className="learn-more-btn flex items-center text-white">
                                <Play className="w-4 h-4 mr-2" />
                                Watch Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
