import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
        <div className="w-screen flex flex-col items-center justify-center bg-dark py-20">
            <h2 className="text-4xl font-semibold text-center text-white mb-12">
                What Our Customers Say
            </h2>
            <div className="testimonials-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg">
                {[1, 2, 3].map((testimonial, index) => (
                <div key={index} className="testimonial-card p-8 rounded-lg shadow-lg backdrop-blur-lg bg-white bg-opacity-10">
                    <div className="rating mb-4 flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">&#9733;</span>
                    ))}
                    </div>
                    <p className="text-light mb-4">
                    "This service is amazing! It has truly transformed our workflow and exceeded our expectations."
                    </p>
                    <h3 className="text-white font-semibold">John Doe</h3>
                    <p className="text-muted">CEO, Example Corp.</p>
                </div>
                ))}
            </div>
            </div>
    </section>
  );
};

export default Testimonials;
