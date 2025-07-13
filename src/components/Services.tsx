'use client';

import React from 'react';

const services = [
    {
        title: 'Infrastructure Refresh',
        description: 'Modernize your IT infrastructure with cutting-edge equipment and systems for optimal performance.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <rect x="2" y="4" width="20" height="5" rx="1" />
                <rect x="2" y="9" width="20" height="5" rx="1" />
                <rect x="2" y="14" width="20" height="5" rx="1" />
            </svg>
        ),
    },
    {
        title: 'Custom Workstation Builds',
        description: 'Tailored workstation solutions designed to meet your specific business needs and performance requirements.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
    },
    {
        title: 'Microsoft 365 Licensing',
        description: 'Complete Microsoft 365 licensing solutions with expert setup and ongoing support for your organization.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-full h-full">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                <path d="M3 12h18M12 3v18" stroke="currentColor" strokeWidth="2" />
                <rect x="4" y="4" width="7" height="7" fill="currentColor" fillOpacity="0.3" />
                <rect x="13" y="4" width="7" height="7" fill="currentColor" fillOpacity="0.5" />
                <rect x="4" y="13" width="7" height="7" fill="currentColor" fillOpacity="0.7" />
                <rect x="13" y="13" width="7" height="7" fill="currentColor" fillOpacity="0.9" />
            </svg>
        ),
    },
    {
        title: 'Backup & Storage Solutions',
        description: 'Secure and reliable data storage solutions with automated backup systems for complete data protection.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                <path d="M4 14a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
                <circle cx="8" cy="7" r="1" fill="currentColor" />
                <circle cx="8" cy="15" r="1" fill="currentColor" />
                <polyline points="16 10 13 13 16 16" />
            </svg>
        ),
    },
    {
        title: 'Network & Security',
        description: 'Design, configuration and maintenance of networks with enterprise-grade security and performance monitoring.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="12" y1="10" x2="12" y2="14" />
                <line x1="10" y1="12" x2="14" y2="12" />
                <line x1="6" y1="9" x2="6" y2="9.01" />
                <line x1="6" y1="12" x2="6" y2="12.01" />
                <line x1="6" y1="15" x2="6" y2="15.01" />
                <line x1="18" y1="9" x2="18" y2="9.01" />
                <line x1="18" y1="12" x2="18" y2="12.01" />
                <line x1="18" y1="15" x2="18" y2="15.01" />
            </svg>
        ),
    },
    {
        title: 'Custom IT Solutions',
        description: 'Tailored IT solutions designed specifically for your unique business challenges and requirements.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
                <path d="M12 12l8-4.5" />
                <path d="M12 12v9" />
                <path d="M12 12L4 7.5" />
            </svg>
        ),
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-gradient-to-b from-gray-50 via-gray-100 to-blue-50/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our Services
                    </h2>
                    <p className="text-xl text-gray-600">
                        Comprehensive IT services tailored to elevate your business performance and drive growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl p-8 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-transparent hover:-translate-y-1 hover:bg-gradient-to-br hover:from-blue-600 hover:to-teal-500"
                        >
                            <div className="w-14 h-14 mb-6 text-blue-600 group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;