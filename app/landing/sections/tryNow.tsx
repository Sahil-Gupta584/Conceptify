import React from 'react'

export default function TryNow() {
    return <section id="tryItNow" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl overflow-hidden">
                <div className="p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-white animate__animated animate__fadeInLeft">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Try StudyGraphix Right Now
                            </h2>
                            <p className="text-purple-100 text-lg mb-8">
                                Transform your notes into easy-to-understand diagrams. No sign-up
                                required for your first conversion!
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <svg
                                        className="w-6 h-6 text-purple-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-purple-100">
                                        Instant visual conversion
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg
                                        className="w-6 h-6 text-purple-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-purple-100">No credit card needed</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg
                                        className="w-6 h-6 text-purple-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-purple-100">
                                        Download your diagram instantly
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Right Content - Try It Form */}
                        <div className="bg-white p-6 rounded-xl shadow-xl animate__animated animate__fadeInRight">
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Convert your notes
                                    </label>
                                    <div className="flex gap-4 mb-4">
                                        <button
                                            type="button"
                                            className="flex-1 py-2 px-4 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors text-sm"
                                        >
                                            Upload Image
                                        </button>
                                        <button
                                            type="button"
                                            className="flex-1 py-2 px-4 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors text-sm"
                                        >
                                            Paste Text
                                        </button>
                                    </div>
                                    <textarea
                                        placeholder="Or type/paste your text here..."
                                        className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        defaultValue={""}
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                                    >
                                        Generate Diagram
                                    </button>
                                </div>
                                <p className="text-center text-sm text-gray-500">
                                    By using this service, you agree to our
                                    <a href="#" className="text-purple-600 hover:text-purple-700">
                                        Terms of Service
                                    </a>
                                    and
                                    <a href="#" className="text-purple-600 hover:text-purple-700">
                                        Privacy Policy
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

}
