
export default function Features() {
    return <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                    Transform Your Learning Experience
                </h2>
                <p className="text-xl text-neutral-600">
                    Powerful features designed to make your study sessions more effective
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="bg-neutral-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate__animated animate__fadeInUp">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
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
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                        Image to Diagram Conversion
                    </h3>
                    <p className="text-neutral-600">
                        Upload your handwritten or typed notes and get instant visual diagrams
                        that make concepts crystal clear.
                    </p>
                </div>
                {/* Feature 2 */}
                <div
                    className="bg-neutral-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate__animated animate__fadeInUp"
                    style={{ animationDelay: "0.1s" }}
                >
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
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
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                        Text to Visual Summary
                    </h3>
                    <p className="text-neutral-600">
                        Copy and paste your study material to automatically generate
                        organized, visual concept maps.
                    </p>
                </div>
                {/* Feature 3 */}
                <div
                    className="bg-neutral-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate__animated animate__fadeInUp"
                    style={{ animationDelay: "0.2s" }}
                >
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
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
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                        Smart Study Scheduler
                    </h3>
                    <p className="text-neutral-600">
                        Organize your diagrams into study sessions with spaced repetition for
                        optimal learning.
                    </p>
                </div>
                {/* Feature 4 */}
                <div
                    className="bg-neutral-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate__animated animate__fadeInUp"
                    style={{ animationDelay: "0.3s" }}
                >
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
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
                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                        Collaborative Learning
                    </h3>
                    <p className="text-neutral-600">
                        Share your visual diagrams with classmates and collaborate in
                        real-time study sessions.
                    </p>
                </div>
                {/* Feature 5 */}
                <div
                    className="bg-neutral-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate__animated animate__fadeInUp"
                    style={{ animationDelay: "0.4s" }}
                >
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
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
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                        AI-Powered Insights
                    </h3>
                    <p className="text-neutral-600">
                        Get intelligent suggestions for improving your understanding and
                        retention of concepts.
                    </p>
                </div>
                {/* Feature 6 */}
                <div
                    className="bg-neutral-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow animate__animated animate__fadeInUp"
                    style={{ animationDelay: "0.5s" }}
                >
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
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
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                        Easy Export &amp; Share
                    </h3>
                    <p className="text-neutral-600">
                        Download your diagrams in multiple formats or share them directly with
                        your study group.
                    </p>
                </div>
            </div>
        </div>
    </section>

}
