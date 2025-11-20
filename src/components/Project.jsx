import Link from "next/link";

export default function Project() {
    return (
        <div id="works">
            <div className="flex items-center justify-between gap-2 w-[1324px]">
                <div className="flex items-center gap-2">
                    <img className="w-6 h-7" src="/hashtag2.png" alt="" />
                    <h1 className="text-4xl font-fira-code text-white mr-10">projects</h1>
                    <img className="w-[600px]" src="/Horizontal.png" alt="" />
                </div>
            </div>
            <div className="absolute left-0 top-[1200px]">
                <img src="/Frame.png" alt="" />
            </div>
            <div className="absolute right-0 top-[1400px]">
                <img className="w-[110px] h-[180px]" src="/Rectangle.png" alt="" />
            </div>
            <div className="mt-16 flex gap-12">
                <div>
                    <div className="border-[1px] border-[#ABB2BF] w-[410px]">
                        <img className="w-[410px] h-full" src="/blogspot.png" alt="" />
                    </div>
                    <div className="border-x-[1px] border-b-[1px] border-[#ABB2BF] w-[410px] h-[50px] flex items-center px-3 py-2 gap-4 font-fira-code text-[#ABB2BF]">
                        <p>Next.js</p>
                        <p>Tailwind</p>
                        <p>MongoDB</p>
                        <p>cloudinary</p>
                    </div>
                    <div className="border-[1px] border-[#ABB2BF] w-[410px] h-[175px] px-4 py-3 text-white font-fira-code flex flex-col gap-4">
                        <h1 className="text-[30px]">BlogSpot</h1>
                        <p className="text-[#ABB2BF]">your blogging workspace</p>
                        <a href="https://blogspot-wine.vercel.app" target="_blank" rel="noopener noreferrer">
                            <button className="mb-5">
                                <img src="/LiveButton.png" alt="" />
                            </button>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="border-[1px] border-[#ABB2BF] w-[410px]">
                        <img className="w-[410px]" src="/inkshelf.png" alt="" />
                    </div>
                    <div className="border-x-[1px] border-b-[1px] border-[#ABB2BF] w-[410px] h-[50px] flex items-center px-3 py-2 gap-4 font-fira-code text-[#ABB2BF]">
                        <p>Next.js</p>
                        <p>Tailwind</p>
                        <p>API</p>
                        <p>Open Library</p>
                    </div>
                    <div className="border-[1px] border-[#ABB2BF] w-[410px] h-[175px] px-4 py-3 text-white font-fira-code flex flex-col gap-4">
                        <h1 className="text-[30px]">InkShelf</h1>
                        <p className="text-[#ABB2BF]">your online bookshelf</p>
                        <a href="https://ink-shelf.vercel.app" target="_blanck" rel="noopener noreferrer">
                            <button>
                                <img src="/LiveButton.png" alt="" />
                            </button>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="border-[1px] border-[#ABB2BF] w-[410px]">
                        <img className="w-[410px]" src="/tunetogether.png" alt="" />
                    </div>
                    <div className="border-x-[1px] border-b-[1px] border-[#ABB2BF] w-[410px] h-[50px] flex items-center px-3 py-2 gap-4 font-fira-code text-[#ABB2BF]">
                        <p>Next.js</p>
                        <p>Socket.io</p>
                        <p>Clerk</p>
                        <p>Tailwind</p>
                    </div>
                    <div className="border-[1px] border-[#ABB2BF] w-[410px] h-[175px] px-4 py-3 text-white font-fira-code flex flex-col gap-4">
                        <h1 className="text-[30px]">Tune-Together</h1>
                        <p className="text-[#ABB2BF]">chat powered by music</p>
                        <a href="https://tunetogether.vercel.app" target="_blanck" rel="noopener noreferrer">
                            <button>
                                <img src="/LiveButton.png" alt="" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
}