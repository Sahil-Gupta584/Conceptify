import { ExternalLink } from "lucide-react";

export default function HeroSection() {
    return (
        <section id="hero" className="min-h-[70vh] bg-neutral-900 text-white pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-20">
                    {/* Left Content */}
                    <div className="flex-1 animate__animated animate__fadeInLeft">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 md:text-start text-center">
                            Diagrams are shortcuts to 
                            <span className="text-purple-500">&nbsp; memorize longer!</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Upload your notes or paste text to instantly generate
                            easy-to-understand diagrams. Learn faster, remember longer.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:items-start items-center">
                            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors w-full sm:w-fit">
                            Chat - It&apos;s Free <ExternalLink className=" h-5 w-5 mb-1 inline-block" /> 
                            </button>
                            <button className="border border-purple-500 hover:bg-purple-900/30 px-8 py-3 rounded-lg text-lg font-semibold transition-colors w-full sm:w-fit">
                                Watch Demo
                            </button>
                        </div>
                        <div className="mt-8 flex gap-4 sm:items-start items-center">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                                    👨‍🎓
                                </div>
                                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                                    👩‍🎓
                                </div>
                                <div className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center">
                                    👨‍🎓
                                </div>
                            </div>
                            <p className="text-gray-300">
                                <span className="font-bold text-white">10,000+</span> students
                                already learning smarter
                            </p>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex-1 mt-12 md:mt-0 animate__animated animate__fadeInRight w-full mx-4 md:mx-0">
                        <div className="bg-neutral-800 p-6 rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-500/10">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="bg-neutral-900 p-4 rounded-lg mb-4">
                                <div className="animate-pulse bg-neutral-800 h-32 rounded-lg" />
                            </div>
                            <div className="flex justify-center">
                                <svg
                                    className="w-6 h-6 text-purple-500 animate-bounce"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                    />
                                </svg>
                            </div>
                            <div className="mt-4 bg-neutral-900 p-4 rounded-lg">
                                <div className="flex flex-col gap-2">
                                    <div className="bg-purple-500/20 h-4 rounded w-3/4" />
                                    <div className="bg-purple-500/20 h-4 rounded w-1/2" />
                                    <div className="bg-purple-500/20 h-4 rounded w-2/3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Wave */}
            <div className="relative h-16">
                <svg
                    className="absolute bottom-0 w-full h-16"
                    preserveAspectRatio="none"
                    viewBox="0 0 1440 54"
                >
                    <path
                        fill="#171717"
                        d="M0 22L48 17.3C96 12.7 192 3.3 288 0.7C384 -2 480 2 576 12C672 22 768 38 864 43.3C960 48.7 1056 43.3 1152 38C1248 32.7 1344 27.3 1392 24.7L1440 22V54H1392C1344 54 1248 54 1152 54C1056 54 960 54 864 54C768 54 672 54 576 54C480 54 384 54 288 54C192 54 96 54 48 54H0V22Z"
                    />
                </svg>
            </div>
        </section>
    )
}
