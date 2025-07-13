'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section id="home" className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-gradient-to-l from-blue-100 to-transparent rounded-bl-full opacity-70" />
            <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-gradient-to-tr from-teal-50 to-transparent rounded-tr-full opacity-60" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            IT Solutions for <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Modern</span> Businesses
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            We provide comprehensive IT services and solutions to help your business thrive in the digital landscape.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all font-medium"
                            >
                                Explore Services
                            </button>
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full z-0"></div>
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-teal-50 rounded-full z-0"></div>
                            <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="IT Solutions"
                                    width={800}
                                    height={600}
                                    unoptimized={true}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;