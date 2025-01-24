import React from 'react'

export default function Working() {
    return <section id="howItWorks" className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-4xl font-bold mb-4">How StudyGraphix Works</h2>
                <p className="text-xl text-gray-300">
                    Transform your notes into visual concepts in three simple steps
                </p>
            </div>
            <div className="relative">
                {/* Connection Line */}
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-purple-600 transform -translate-y-1/2 z-0" />
                <div className="grid lg:grid-cols-3 gap-8 relative z-10">
                    {/* Step 1 */}
                    <div className="bg-neutral-800 rounded-xl p-8 border border-purple-500/30 animate__animated animate__fadeInLeft">
                        <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6 mx-auto">
                            <span className="text-2xl font-bold">1</span>
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-4">
                            Upload Your Content
                        </h3>
                        <p className="text-gray-300 text-center">
                            Simply upload a photo of your notes or copy-paste your study text
                            into our platform.
                        </p>
                        <div className="mt-6 p-4 bg-neutral-700 rounded-lg flex items-center justify-center">
                            <svg
                                className="w-12 h-12 text-purple-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3 3m0 0l-3-3m3 3V8"
                                />
                            </svg>
                        </div>
                    </div>
                    {/* Step 2 */}
                    <div
                        className="bg-neutral-800 rounded-xl p-8 border border-purple-500/30 animate__animated animate__fadeInUp"
                        style={{ animationDelay: "0.2s" }}
                    >
                        <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6 mx-auto">
                            <span className="text-2xl font-bold">2</span>
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-4">AI Processing</h3>
                        <p className="text-gray-300 text-center">
                            Our AI analyzes your content and creates organized, visually
                            appealing diagrams.
                        </p>
                        <div className="mt-6 p-4 bg-neutral-700 rounded-lg flex items-center justify-center">
                            <svg
                                className="w-12 h-12 text-purple-400 animate-spin-slow"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                />
                            </svg>
                        </div>
                    </div>
                    {/* Step 3 */}
                    <div
                        className="bg-neutral-800 rounded-xl p-8 border border-purple-500/30 animate__animated animate__fadeInRight"
                        style={{ animationDelay: "0.4s" }}
                    >
                        <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6 mx-auto">
                            <span className="text-2xl font-bold">3</span>
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-4">
                            Learn &amp; Memorize
                        </h3>
                        <p className="text-gray-300 text-center">
                            Study your personalized diagrams and retain information more
                            effectively.
                        </p>
                        <div className="mt-6 p-4 bg-neutral-700 rounded-lg flex items-center justify-center">
                            <svg
                                className="w-12 h-12 text-purple-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="mt-16 text-center">
                    <button
                        className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors animate__animated animate__fadeInUp"
                        style={{ animationDelay: "0.6s" }}
                    >
                        Get Started Now
                    </button>
                </div>
            </div>
        </div>
    </section>

}
