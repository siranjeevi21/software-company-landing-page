import React, { useState } from 'react';
import Confetti from 'react-confetti';

const Contactus = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfetti(true);

    // Stop confetti after 3 seconds
    setTimeout(() => setShowConfetti(false), 8000);
  };

  return (
    <section id="contact-form" className="contactus-section">
      <div className="w-full flex justify-center py-20 bg-dark relative">
        {/* Confetti Effect */}
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={300}
            gravity={0.05}   
          />
        )}

        <div className="card2 w-full max-w-screen-lg p-10 bg-opacity-60 bg-white/30 backdrop-blur-lg shadow-lg rounded-lg">
          <h2 className="text-4xl font-semibold text-center text-white mb-8">Contact Us</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex space-x-6">
              <div className="w-full">
                <label className="text-white text-lg" htmlFor="name">Name</label>
                <input type="text" id="name" required className="w-full p-3 mt-2 rounded-md bg-white/20 text-white outline-none" />
              </div>
              <div className="w-full">
                <label className="text-white text-lg" htmlFor="email">Email</label>
                <input type="email" id="email" required className="w-full p-3 mt-2 rounded-md bg-white/20 text-white outline-none" />
              </div>
            </div>
            
            <div>
              <label className="text-white text-lg" htmlFor="message">Message</label>
              <textarea id="message" required rows="4" className="w-full p-3 mt-2 rounded-md bg-white/20 text-white outline-none"></textarea>
            </div>
            
            <button type="submit" className="w-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-md hover:scale-105 transition-transform">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
