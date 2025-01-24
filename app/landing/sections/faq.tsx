import React from 'react'

export default function Faq() {
    return <>
            <section id="faq" className="py-20 bg-neutral-900">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate__animated animate__fadeIn">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-300">
                        Got questions? We&apos;ve got answers.
                    </p>
                </div>
                <div className="space-y-4">
                    {/* FAQ Item 1 */}
                    <div className="bg-neutral-800 rounded-lg animate__animated animate__fadeInUp">
                        <button className="faq-button w-full px-6 py-4 text-left focus:outline-none">
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-semibold text-white">
                                    How accurate are the generated diagrams?
                                </span>
                                <svg
                                    className="w-6 h-6 text-purple-500 transform transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </button>
                        <div className="faq-answer hidden px-6 pb-4 text-gray-300">
                            Our AI-powered system has been trained on thousands of academic
                            materials to ensure high accuracy. The diagrams maintain the core
                            concepts while presenting them in an easy-to-understand visual
                            format. We regularly update our algorithms based on student feedback
                            and academic standards.
                        </div>
                    </div>
                    {/* FAQ Item 2 */}
                    <div
                        className="bg-neutral-800 rounded-lg animate__animated animate__fadeInUp"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <button className="faq-button w-full px-6 py-4 text-left focus:outline-none">
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-semibold text-white">
                                    What file formats are supported for note uploads?
                                </span>
                                <svg
                                    className="w-6 h-6 text-purple-500 transform transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </button>
                        <div className="faq-answer hidden px-6 pb-4 text-gray-300">
                            We support a wide range of formats including JPG, PNG, PDF for
                            images, and plain text or Word documents for text input. You can
                            also directly paste text from your notes into our platform.
                        </div>
                    </div>
                    {/* FAQ Item 3 */}
                    <div
                        className="bg-neutral-800 rounded-lg animate__animated animate__fadeInUp"
                        style={{ animationDelay: "0.2s" }}
                    >
                        <button className="faq-button w-full px-6 py-4 text-left focus:outline-none">
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-semibold text-white">
                                    Can I customize the generated diagrams?
                                </span>
                                <svg
                                    className="w-6 h-6 text-purple-500 transform transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </button>
                        <div className="faq-answer hidden px-6 pb-4 text-gray-300">
                            Yes! All diagrams are fully customizable. You can change colors,
                            layouts, add annotations, and highlight specific parts. Pro users
                            get access to additional customization options and templates.
                        </div>
                    </div>
                    {/* FAQ Item 4 */}
                    <div
                        className="bg-neutral-800 rounded-lg animate__animated animate__fadeInUp"
                        style={{ animationDelay: "0.3s" }}
                    >
                        <button className="faq-button w-full px-6 py-4 text-left focus:outline-none">
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-semibold text-white">
                                    Is my study material secure?
                                </span>
                                <svg
                                    className="w-6 h-6 text-purple-500 transform transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </button>
                        <div className="faq-answer hidden px-6 pb-4 text-gray-300">
                            Absolutely! We take data security seriously. All uploads are
                            encrypted, and we never share your content with third parties. Your
                            study materials remain private and are automatically deleted after
                            processing if you choose.
                        </div>
                    </div>
                    {/* FAQ Item 5 */}
                    <div
                        className="bg-neutral-800 rounded-lg animate__animated animate__fadeInUp"
                        style={{ animationDelay: "0.4s" }}
                    >
                        <button className="faq-button w-full px-6 py-4 text-left focus:outline-none">
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-semibold text-white">
                                    Can I share diagrams with my study group?
                                </span>
                                <svg
                                    className="w-6 h-6 text-purple-500 transform transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </button>
                        <div className="faq-answer hidden px-6 pb-4 text-gray-300">
                            Yes! Team plan users can easily share diagrams with their study
                            groups. You can collaborate in real-time, add comments, and export
                            diagrams in various formats for presentation or study purposes.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>

}
