import Link from "next/link";

export default function Project() {
    return (
        <div id="works" className="w-full flex flex-col items-center px-4 2xl:-mt-[106px] sm:px-6 md:px-8 lg:px-12 relative">
            {/* Header Section */}
            <div className="flex items-center justify-between gap-2 w-full max-w-[1324px] mb-8 md:mb-12 lg:mb-16">
                <div className="flex items-center gap-2 md:gap-3 w-full">
                    <img className="w-5 h-6 md:w-6 md:h-7 flex-shrink-0" src="/hashtag2.png" alt="" />
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-fira-code text-white whitespace-nowrap">projects</h1>
                    <img className="w-full h-[2px] max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[1324px] ml-4 md:ml-10" src="/Horizontal.png" alt="" />
                </div>
            </div>
            {/* Decorative Images - Hidden on mobile, visible on larger screens */}
            <div className="hidden 2xl:block absolute 2xl:left-[-250px] 2xl:top-[300px]">
                <img src="/Frame.png" alt="" className="2xl:w-[50px]" />
            </div>
            <div className="hidden 2xl:block absolute 2xl:right-[-250px] 2xl:top-[500px]">
                <img className="w-[80px] h-[130px] xl:w-[110px] xl:h-[180px]" src="/Rectangle.png" alt="" />
            </div>

            {/* Projects Grid */}
            <div className="w-full max-w-[1324px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                {/* Project 1 - BlogSpot */}
                <div className="w-full max-w-[410px] mx-auto md:mx-0">
                    <div className="border-[1px] border-[#ABB2BF] w-full">
                        <img className="w-full h-auto object-cover" src="/blogspot.png" alt="BlogSpot Project" />
                    </div>
                    <div className="border-x-[1px] border-b-[1px] border-[#ABB2BF] w-full min-h-[50px] flex flex-wrap items-center px-3 py-2 gap-2 sm:gap-3 md:gap-4 font-fira-code text-sm sm:text-base text-[#ABB2BF]">
                        <p>Next.js</p>
                        <p>Tailwind</p>
                        <p>MongoDB</p>
                        <p>cloudinary</p>
                    </div>
                    <div className="border-[1px] border-[#ABB2BF] w-full min-h-[175px] px-4 py-4 md:py-5 text-white font-fira-code flex flex-col gap-3 md:gap-4">
                        <h1 className="text-2xl sm:text-[28px] md:text-[30px]">BlogSpot</h1>
                        <p className="text-sm sm:text-base text-[#ABB2BF]">your blogging workspace</p>
                        <a href="https://blogspot-wine.vercel.app" target="_blank" rel="noopener noreferrer" className="mt-auto">
                            <button className="hover:opacity-80 transition-opacity">
                                <img src="/LiveButton.png" alt="View Live Project" className="w-auto h-[40px] sm:h-[45px]" />
                            </button>
                        </a>
                    </div>
                </div>

                {/* Project 2 - InkShelf */}
                <div className="w-full max-w-[410px] mx-auto md:mx-0">
                    <div className="border-[1px] border-[#ABB2BF] w-full">
                        <img className="w-full h-auto object-cover" src="/inkshelf.png" alt="InkShelf Project" />
                    </div>
                    <div className="border-x-[1px] border-b-[1px] border-[#ABB2BF] w-full min-h-[50px] flex flex-wrap items-center px-3 py-2 gap-2 sm:gap-3 md:gap-4 font-fira-code text-sm sm:text-base text-[#ABB2BF]">
                        <p>Next.js</p>
                        <p>Tailwind</p>
                        <p>API</p>
                        <p>Open Library</p>
                    </div>
                    <div className="border-[1px] border-[#ABB2BF] w-full min-h-[175px] px-4 py-4 md:py-5 text-white font-fira-code flex flex-col gap-3 md:gap-4">
                        <h1 className="text-2xl sm:text-[28px] md:text-[30px]">InkShelf</h1>
                        <p className="text-sm sm:text-base text-[#ABB2BF]">your online bookshelf</p>
                        <a href="https://ink-shelf.vercel.app" target="_blank" rel="noopener noreferrer" className="mt-auto">
                            <button className="hover:opacity-80 transition-opacity">
                                <img src="/LiveButton.png" alt="View Live Project" className="w-auto h-[40px] sm:h-[45px]" />
                            </button>
                        </a>
                    </div>
                </div>

                {/* Project 3 - Tune-Together */}
                <div className="w-full max-w-[410px] mx-auto md:mx-0 md:col-span-2 xl:col-span-1">
                    <div className="border-[1px] border-[#ABB2BF] w-full">
                        <img className="w-full h-auto object-cover" src="/tunetogether.png" alt="Tune-Together Project" />
                    </div>
                    <div className="border-x-[1px] border-b-[1px] border-[#ABB2BF] w-full min-h-[50px] flex flex-wrap items-center px-3 py-2 gap-2 sm:gap-3 md:gap-4 font-fira-code text-sm sm:text-base text-[#ABB2BF]">
                        <p>Next.js</p>
                        <p>Socket.io</p>
                        <p>Clerk</p>
                        <p>Tailwind</p>
                    </div>
                    <div className="border-[1px] border-[#ABB2BF] w-full min-h-[175px] px-4 py-4 md:py-5 text-white font-fira-code flex flex-col gap-3 md:gap-4">
                        <h1 className="text-2xl sm:text-[28px] md:text-[30px]">Tune-Together</h1>
                        <p className="text-sm sm:text-base text-[#ABB2BF]">chat powered by music</p>
                        <a href="https://tunetogether.vercel.app" target="_blank" rel="noopener noreferrer" className="mt-auto">
                            <button className="hover:opacity-80 transition-opacity">
                                <img src="/LiveButton.png" alt="View Live Project" className="w-auto h-[40px] sm:h-[45px]" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}