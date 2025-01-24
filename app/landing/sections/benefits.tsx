import React from 'react'

export default function Benefits() {
    return <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                    Why Students Love Conceptify
                </h2>
                <p className="text-xl text-neutral-600">
                    Experience the proven benefits of visual learning
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Benefits List */}
                <div className="space-y-8">
                    {/* Benefit 1 */}
                    <div className="flex gap-4 items-start animate__animated animate__fadeInLeft">
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-purple-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                3x Faster Learning
                            </h3>
                            <p className="text-neutral-600">
                                Visual diagrams help you grasp concepts quickly and remember them
                                longer than traditional text-based notes.
                            </p>
                        </div>
                    </div>
                    {/* Benefit 2 */}
                    <div
                        className="flex gap-4 items-start animate__animated animate__fadeInLeft"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-purple-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                90% Better Retention
                            </h3>
                            <p className="text-neutral-600">
                                Students report significantly improved memory retention when using
                                visual study materials.
                            </p>
                        </div>
                    </div>
                    {/* Benefit 3 */}
                    <div
                        className="flex gap-4 items-start animate__animated animate__fadeInLeft"
                        style={{ animationDelay: "0.2s" }}
                    >
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-purple-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                Save 5+ Hours Weekly
                            </h3>
                            <p className="text-neutral-600">
                                Automated diagram generation saves precious study time that you
                                can use for better understanding.
                            </p>
                        </div>
                    </div>
                    {/* Benefit 4 */}
                    <div
                        className="flex gap-4 items-start animate__animated animate__fadeInLeft"
                        style={{ animationDelay: "0.3s" }}
                    >
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-purple-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                Continuous Improvement
                            </h3>
                            <p className="text-neutral-600">
                                AI-powered system learns from your study patterns to create more
                                effective diagrams over time.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Visual Representation */}
                <div className="relative animate__animated animate__fadeInRight">
                    <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-xl" />
                            <div className="bg-white rounded-xl p-6 shadow-xl">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-purple-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex-1 bg-purple-50 h-2 rounded" />
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-purple-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex-1 bg-purple-50 h-2 rounded" />
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-4 h-4 text-purple-600"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex-1 bg-purple-50 h-2 rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

}
