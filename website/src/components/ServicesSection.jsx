import React from 'react';
import { Laptop, Smartphone, ChartBarIncreasing, Search, Brain, CheckCircle } from 'lucide-react';


const ServicesSection = () => {
    const services = [
        {
            title: 'Website Development',
            icon: <Laptop className="w-12 h-12" />,
            description: 'Build powerful and scalable websites tailored to your business needs with modern technologies and best practices.',
            features: [
                'Custom Website Design',
                'Responsive Web Development',
                'E-commerce Development',
                'Content Management Systems (CMS)',
                'SEO Optimization'
            ]
        },
        {
            title: 'Mobile/Web Application Development',
            icon: <Smartphone className="w-12 h-12" />, 
            description: 'Create user-friendly and feature-rich mobile and web applications that provide seamless experiences across platforms.',
            features: [
                'Native & Hybrid Mobile Apps',
                'Web Application Development',
                'UI/UX Design',
                'Cross-Platform Compatibility',
                'App Store & Play Store Optimization'
            ]
        },
        {
            title: 'Data Analytics Service',
            icon: <ChartBarIncreasing className="w-12 h-12" />,
            description: 'Unlock the power of data to gain valuable insights, enhance decision-making, and improve business performance.',
            features: [
                'Data Visualization & Reporting',
                'Predictive Analytics',
                'Business Intelligence (BI) Solutions',
                'Big Data Processing',
                'Custom Dashboards & Analytics'
            ]
        },
        {
            title: 'Digital Marketing',
            icon: <Search className="w-12 h-12" />,
            description: 'Maximize your online presence and drive growth through strategic digital marketing campaigns and analytics-driven insights.',
            features: [
                'Search Engine Optimization (SEO)',
                'Social Media Marketing',
                'Pay-Per-Click (PPC) Advertising',
                'Email Marketing Campaigns',
                'Content Marketing Strategy'
            ]
        },
        {
            title: 'AI and Machine Learning',
            icon: <Brain className="w-12 h-12" />,
            description: 'Utilize AI and machine learning technologies to automate processes, predict trends, and optimize business strategies.',
            features: [
                'Artificial Intelligence Solutions',
                'Machine Learning Algorithms',
                'Predictive Modeling',
                'Natural Language Processing (NLP)',
                'Custom AI Solutions for Automation'
            ]
        }
    ];

    return (
        <section id="services" className="services-section">
            <div className="py-12 bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl font-semibold text-white">Our Services</h2>
                        <p className="mt-4 text-xl text-gray-500">
                            Empower your business with our innovative solutions, designed to drive growth and success in today's digital-first world.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {services.map((service, index) => (
                            <div 
                                key={index}
                                className="card p-8 rounded-lg shadow-lg relative w-full max-w-1200 mx-auto bg-gradient-radial"
                            >
                                <div className="text-primary-color mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                                <p className="text-gray-500 mb-4">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-500 text-sm">
                                            <CheckCircle className="w-5 h-5 text-primary-color mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
