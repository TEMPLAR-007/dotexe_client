'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-700/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <div className="relative flex items-center">
                            <div className="w-16 h-16 rounded-full shadow-lg ring-1 ring-gray-700/50 overflow-hidden flex items-center justify-center bg-gray-800/50">
                                <Image
                                    src="/images/logo.png"
                                    alt="DOTEXE Logo"
                                    width={60}
                                    height={60}
                                    objectFit="contain"
                                />
                            </div>
                            <a href="#" className="ml-3 text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                                DOTEXE
                            </a>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-10">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-gray-300 hover:text-blue-400 transition-colors text-[15px]"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('services')}
                            className="text-gray-300 hover:text-blue-400 transition-colors text-[15px]"
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-gray-300 hover:text-blue-400 transition-colors text-[15px]"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-gray-300 hover:text-blue-400 transition-colors text-[15px]"
                        >
                            Contact
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-gray-300 hover:text-blue-400"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-gray-700/50">
                        <div className="flex flex-col space-y-4">
                            <button
                                onClick={() => scrollToSection('home')}
                                className="text-gray-300 hover:text-blue-400 transition-colors"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('services')}
                                className="text-gray-300 hover:text-blue-400 transition-colors"
                            >
                                Services
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="text-gray-300 hover:text-blue-400 transition-colors"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-gray-300 hover:text-blue-400 transition-colors"
                            >
                                Contact
                            </button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;