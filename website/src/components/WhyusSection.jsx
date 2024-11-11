import React from 'react';

const WhyusSection = () => {
  return (
    <section id="why-us" className="why-us-section">
      <div className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-light">Why Choose Us?</h2>
            <p className="mt-4 text-xl text-gray-400">
              Discover the reasons why businesses trust us to deliver innovative, results-driven solutions. Our approach combines expertise, experience, and passion to help you achieve your goals.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-light p-8 rounded-lg shadow-xl space-y-4">
              <h3 className="text-2xl font-semibold">Expertise</h3>
              <p className="text-gray-300">
                With years of experience in the industry, our team brings unmatched expertise in web development, digital marketing, data analytics, and more, ensuring high-quality, customized solutions tailored to your needs.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-light p-8 rounded-lg shadow-xl space-y-4">
              <h3 className="text-2xl font-semibold">Innovation</h3>
              <p className="text-gray-300">
                We stay ahead of industry trends by embracing cutting-edge technologies and creative strategies. Our innovative solutions drive business transformation and unlock new opportunities for growth.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-light p-8 rounded-lg shadow-xl space-y-4">
              <h3 className="text-2xl font-semibold">Results-Driven</h3>
              <p className="text-gray-300">
                We are committed to delivering measurable results. From improved efficiency to increased revenue, our solutions are designed to produce tangible outcomes that help you succeed in a competitive digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyusSection;
