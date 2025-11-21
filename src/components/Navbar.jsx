"use client"

import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = -120;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='fixed top-0 left-0 right-0 z-[9999] bg-black'>
            <div className="flex justify-center py-4 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-[1324px] h-[61px] flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <img className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px]" src="/profile3.png" alt="" />
                        <h1 className="font-fira-code font-bold text-white text-xl sm:text-2xl">
                            Kartik
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex gap-[32px]">
                        <div className="flex items-center gap-1">
                            <img className="w-[12px] h-[18px]" src="/hashtag.png" alt="" />
                            <button
                                onClick={() => scrollToSection('home')}
                                className="font-fira-code text-[#ABB2BF] text-2xl hover:text-white transition-colors"
                            >
                                home
                            </button>
                        </div>
                        <div className="flex items-center gap-1">
                            <img className="w-[12px] h-[18px]" src="/hashtag.png" alt="" />
                            <button
                                onClick={() => scrollToSection('works')}
                                className="font-fira-code text-[#ABB2BF] text-2xl hover:text-white transition-colors"
                            >
                                works
                            </button>
                        </div>
                        <div className="flex items-center gap-1">
                            <img className="w-[12px] h-[18px]" src="/hashtag.png" alt="" />
                            <button
                                onClick={() => scrollToSection('about-me')}
                                className="font-fira-code text-[#ABB2BF] text-2xl hover:text-white transition-colors"
                            >
                                about-me
                            </button>
                        </div>
                        <div className="flex items-center gap-1">
                            <img className="w-[12px] h-[18px]" src="/hashtag.png" alt="" />
                            <button
                                onClick={() => scrollToSection('contacts')}
                                className="font-fira-code text-[#ABB2BF] text-2xl hover:text-white transition-colors"
                            >
                                contacts
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center relative z-50"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`w-6 h-0.5 bg-[#ABB2BF] transition-all duration-300 ${
                                isMenuOpen ? 'rotate-45 translate-y-2' : ''
                            }`}
                        ></span>
                        <span
                            className={`w-6 h-0.5 bg-[#ABB2BF] transition-all duration-300 ${
                                isMenuOpen ? 'opacity-0' : ''
                            }`}
                        ></span>
                        <span
                            className={`w-6 h-0.5 bg-[#ABB2BF] transition-all duration-300 ${
                                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}
                        ></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-[61px] left-0 right-0 bg-black border-t border-[#ABB2BF] transition-all duration-300 overflow-hidden ${
                    isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="flex flex-col py-4 px-6 gap-6">
                    <div className="flex items-center gap-2">
                        <img className="w-[12px] h-[18px]" src="/hashtag.png" alt="" />
                        <button
                            onClick={() => scrollToSection('home')}
                            className="font-fira-code text-[#ABB2BF] text-xl hover:text-white transition-colors"
                        >
                            home
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-[12px] h-[18px]" src="/hashtag.png" alt="" />
                        <button
                            onClick={() => scrollToSection('works')}
                            className="font-fira-code text-[#ABB2BF] text-xl hover:text-white transition-colors"
                        >
                            works
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-[12px] h-[18px]" src="/hashtag.png" alt="" />
                        <button
                            onClick={() => scrollToSection('about-me')}
                            className="font-fira-code text-[#ABB2BF] text-xl hover:text-white transition-colors"
                        >
                            about-me
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-[12px] h-[18px]" src="/hashtag.png" alt="" />
                        <button
                            onClick={() => scrollToSection('contacts')}
                            className="font-fira-code text-[#ABB2BF] text-xl hover:text-white transition-colors"
                        >
                            contacts
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar