import React from 'react'

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = -120; // adjust this number (navbar height)
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className='fixed z-[9999]'>
            <div className=" flex justify-center">
                <div className="w-[1324px] h-[61px] flex items-center justify-between mt-7">
                    <div className="flex items-center gap-3">
                        <img className="w-[26px] h-[26px]" src="/profile3.png" alt="" />
                        <h1 className="font-fira-code font-bold text-white text-2xl">
                            Kartik
                        </h1>
                    </div>
                    <div className="flex gap-[32px]">
                        <div className="flex items-center gap-1">
                            <img className="w-[12px] h-[18px]" src="/hashtag.png" alt="" />
                            <button
                                onClick={() => scrollToSection('home')}
                                className="font-fira-code text-[#ABB2BF] text-2xl hover:text-white"
                            >
                                home
                            </button>
                        </div>
                        <div className="flex items-center gap-1">
                            <img className="w-[12px] h-[18px]" src="/hashtag.png" alt="" />
                            <button
                                onClick={() => scrollToSection('works')}
                                className="font-fira-code text-[#ABB2BF] text-2xl hover:text-white"
                            >
                                works
                            </button>
                        </div>
                        <div className="flex items-center gap-1">
                            <img className="w-[12px] h-[18px]" src="/hashtag.png" alt="" />
                            <button
                                onClick={() => scrollToSection('about-me')}
                                className="font-fira-code text-[#ABB2BF] text-2xl hover:text-white"
                            >
                                about-me
                            </button>
                        </div>
                        <div className="flex items-center gap-1">
                            <img className="w-[12px] h-[18px]" src="/hashtag.png" alt="" />
                            <button
                                onClick={() => scrollToSection('contacts')}
                                className="font-fira-code text-[#ABB2BF] text-2xl hover:text-white"
                            >
                                contacts
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar