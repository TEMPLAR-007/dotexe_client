'use client';

import React from 'react';
import Image from 'next/image';

const About = () => {
    // Define fallback image URLs
    const aboutImages = [
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
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
                                <div className="space-y-4 pt-8">
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

                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            About <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">DOTEXE</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            At DOTEXE, we are passionate about empowering businesses through innovative IT solutions. With years of experience in the industry, we understand that every business has unique technological needs and challenges.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-3 rounded-full mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Expert Team</h3>
                                    <p className="text-gray-600">Our certified professionals bring extensive experience in IT infrastructure, cloud solutions, and cybersecurity to deliver exceptional results.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-3 rounded-full mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Customer-Centric Approach</h3>
                                    <p className="text-gray-600">We prioritize understanding your business goals and challenges to provide tailored solutions that drive growth and efficiency.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-3 rounded-full mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Innovative Solutions</h3>
                                    <p className="text-gray-600">We stay at the forefront of technology to provide cutting-edge solutions that keep your business competitive in the digital age.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;