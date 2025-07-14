'use client';

import React from 'react';
import Image from 'next/image';

const About = () => {
    const aboutImages = [
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ];

    return (
        <section id="about" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2 flex-shrink-0">
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-3">
                                    <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-2">
                                        <Image
                                            src={aboutImages[0]}
                                            alt="Team collaboration"
                                            width={800}
                                            height={600}
                                            unoptimized={true}
                                            className="rounded-lg w-full h-auto shadow-md"
                                        />
                                    </div>
                                    <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-2">
                                        <Image
                                            src={aboutImages[1]}
                                            alt="IT infrastructure"
                                            width={800}
                                            height={600}
                                            unoptimized={true}
                                            className="rounded-lg w-full h-auto shadow-md"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3 pt-6">
                                    <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-2">
                                        <Image
                                            src={aboutImages[2]}
                                            alt="Server room"
                                            width={800}
                                            height={600}
                                            unoptimized={true}
                                            className="rounded-lg w-full h-auto shadow-md"
                                        />
                                    </div>
                                    <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-2">
                                        <Image
                                            src={aboutImages[3]}
                                            alt="Office setup"
                                            width={800}
                                            height={600}
                                            unoptimized={true}
                                            className="rounded-lg w-full h-auto shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full -z-10"></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-teal-50 to-blue-50 rounded-full -z-10"></div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex-shrink-0">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            About <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">DOTEXE</span>
                        </h2>
                        <p className="text-base text-gray-600 mb-6 leading-relaxed">
                            At DOTEXE, we deliver tailored IT solutions that help small and medium-sized businesses thrive. Whether you're refreshing your hardware, building high-performance custom workstations, or upgrading your infrastructure, our goal is to make technology work seamlessly for you.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-900 mb-3">We specialize in:</h3>
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start">
                                <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-2 rounded-full mr-3 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-base font-medium text-gray-900">IT Support & Solutions</h4>
                                    <p className="text-sm text-gray-600">End-to-end technical services to keep your business running smoothly.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-2 rounded-full mr-3 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-base font-medium text-gray-900">Hardware Refresh & Custom Workstations</h4>
                                    <p className="text-sm text-gray-600">Performance-built systems tailored to your needs.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-2 rounded-full mr-3 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-base font-medium text-gray-900">Network Setup & Configuration</h4>
                                    <p className="text-sm text-gray-600">Secure, scalable networking solutions for growing businesses.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-2 rounded-full mr-3 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-base font-medium text-gray-900">Storage & Backup Solutions</h4>
                                    <p className="text-sm text-gray-600">Reliable on-prem and cloud-based data protection strategies.</p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 mb-3">As a Microsoft and Veeam reseller, we provide:</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-2 rounded-full mr-3 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-base font-medium text-gray-900">Microsoft 365 Licensing & Deployment</h4>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-2 rounded-full mr-3 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-base font-medium text-gray-900">Veeam Backup & Replication Solutions</h4>
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 mt-6 italic">
                            Let DOTEXE be your trusted partner for dependable, efficient, and future-ready IT services.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;