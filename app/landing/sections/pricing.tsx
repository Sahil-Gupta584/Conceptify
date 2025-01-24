import React from 'react'

export default function Pricing() {
    return <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                    Simple, Student-Friendly Pricing
                </h2>
                <p className="text-xl text-neutral-600">
                    Choose the plan that fits your study needs
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Free Plan */}
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow animate__animated animate__fadeInUp">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-4">Free</h3>
                        <div className="text-4xl font-bold mb-2">$0</div>
                        <p className="text-neutral-600">Perfect to get started</p>
                    </div>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3">
                            <svg
                                className="w-5 h-5 text-green-500"
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
                            <span>10 diagrams per month</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg
                                className="w-5 h-5 text-green-500"
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
                            <span>Basic diagram templates</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg
                                className="w-5 h-5 text-green-500"
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
                            <span>Text to diagram conversion</span>
                        </li>
                    </ul>
                    <button className="w-full py-3 px-4 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                        Get Started
                    </button>
                </div>
                {/* Pro Plan */}
                <div
                    className="bg-purple-600 p-8 rounded-xl shadow-lg relative transform scale-105 animate__animated animate__fadeInUp"
                    style={{ animationDelay: "0.1s" }}
                >
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-yellow-400 text-neutral-900 px-4 py-1 rounded-full text-sm font-bold">
                            MOST POPULAR
                        </span>
                    </div>
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-4 text-white">Pro</h3>
                        <div className="text-4xl font-bold mb-2 text-white">$9.99</div>
                        <p className="text-purple-200">Monthly</p>
                    </div>
                    <ul className="space-y-4 mb-8 text-white">
                        <li className="flex items-center gap-3">
                            <svg
                                className="w-5 h-5"
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
                            <span>Unlimited diagrams</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg
                                className="w-5 h-5"
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
                            <span>Advanced templates</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg
                                className="w-5 h-5"
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
                            <span>Priority processing</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg
                                className="w-5 h-5"
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
                            <span>Study progress tracking</span>
                        </li>
                    </ul>
                    <button className="w-full py-3 px-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                        Start Pro Trial
                    </button>
                </div>
                {/* Team Plan */}
                <div
                    className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow animate__animated animate__fadeInUp"
                    style={{ animationDelay: "0.2s" }}
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-4">Team</h3>
                        <div className="text-4xl font-bold mb-2">$24.99</div>
                        <p className="text-neutral-600">Monthly, up to 5 students</p>
                    </div>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3">
                            <svg
                                className="w-5 h-5 text-green-500"
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
                            <span>All Pro features</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg
                                className="w-5 h-5 text-green-500"
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
                            <span>Team collaboration</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg
                                className="w-5 h-5 text-green-500"
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
                            <span>Shared diagram library</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg
                                className="w-5 h-5 text-green-500"
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
                            <span>Admin controls</span>
                        </li>
                    </ul>
                    <button className="w-full py-3 px-4 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                        Start Team Trial
                    </button>
                </div>
            </div>
            <div className="mt-16 text-center">
                <p className="text-neutral-600 mb-4">
                    All plans include a 14-day free trial. No credit card required.
                </p>
                <div className="flex items-center justify-center gap-2">
                    <svg
                        className="w-5 h-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                    </svg>
                    <span className="text-neutral-600">100% Money-back guarantee</span>
                </div>
            </div>
        </div>
    </section>

}
