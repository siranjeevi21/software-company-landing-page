import React from 'react';
import { FaAccusoft, FaGoogle, FaMicrosoft, FaTrello, FaApple, FaAmazon } from 'react-icons/fa';

const PartnersSection = () => {
  return (
    <section id="clients" className="clients-section">
        <div className='w-screen flex items-center justify-center bg-dark py-20'>
            <div className="card2 max-w-screen-lg">
                <div>
                <h2 className="text-4xl font-semibold text-center text-white mb-12">
                    Our Customers
                </h2>
                <div className="logo-grid overflow-hidden">
                    <div className="logo-marquee">
                    {/* Icon and name container */}
                    <div className="logo-item">
                        <FaAccusoft />
                        <span className="company-name">Accenture</span>
                    </div>
                    <div className="logo-item">
                        <FaGoogle />
                        <span className="company-name">Google</span>
                    </div>
                    <div className="logo-item">
                        <FaMicrosoft />
                        <span className="company-name">Microsoft</span>
                    </div>
                    <div className="logo-item">
                        <FaTrello />
                        <span className="company-name">Trello</span>
                    </div>
                    <div className="logo-item">
                        <FaApple />
                        <span className="company-name">Apple</span>
                    </div>
                    <div className="logo-item">
                        <FaAmazon />
                        <span className="company-name">Amazon</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    </section>
  );
};

export default PartnersSection;
