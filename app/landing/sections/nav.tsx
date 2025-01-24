'use client';
import { ExternalLink, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react"

export default function Nav() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    return <nav id="navbar" className="fixed w-full z-50 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                    <a href="#" className="text-xl font-bold">
                        StudyGraphix
                    </a>
                </div>
                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <div className="ml-10 flex items-center space-x-8">
                        <a href="#hero" className="hover:text-purple-400 transition-colors">
                            Home
                        </a>
                        <a
                            href="#features"
                            className="hover:text-purple-400 transition-colors"
                        >
                            Features
                        </a>
                        <a
                            href="#howItWorks"
                            className="hover:text-purple-400 transition-colors"
                        >
                            How It Works
                        </a>
                        <a
                            href="#benefits"
                            className="hover:text-purple-400 transition-colors"
                        >
                            Benefits
                        </a>
                        <a
                            href="#testimonials"
                            className="hover:text-purple-400 transition-colors"
                        >
                            Testimonials
                        </a>
                        <a
                            href="#pricing"
                            className="hover:text-purple-400 transition-colors"
                        >
                            Pricing
                        </a>
                        <Link
                            target="_blank"
                            href="/"
                            className="bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
                        >
                         Chat &nbsp;   <ExternalLink className="h-4 w-4 mb-3" /> 
                        </Link>
                    </div>
                </div>
                {/* Mobile menu button */}
                <div className="md:hidden">
                    {showMobileMenu && <button
                        id="mobile-menu-button"
                        className="inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-800 focus:outline-none"
                        onClick={() => setShowMobileMenu(false)}
                    ><XIcon className="h-6 w-6" />
                    </button>
                    }
                    {!showMobileMenu && <button
                        id="mobile-menu-button"
                        className="inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-800 focus:outline-none"
                        onClick={() => setShowMobileMenu(true)}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>}
                </div>
            </div>
            {/* Mobile Menu */}
            <div id="mobile-menu" className={`md:hidden ${!showMobileMenu && 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a
                        href="#hero"
                        className="block px-3 py-2 rounded-md hover:bg-neutral-800"
                    >
                        Home
                    </a>
                    <a
                        href="#features"
                        className="block px-3 py-2 rounded-md hover:bg-neutral-800"
                    >
                        Features
                    </a>
                    <a
                        href="#howItWorks"
                        className="block px-3 py-2 rounded-md hover:bg-neutral-800"
                    >
                        How It Works
                    </a>
                    <a
                        href="#benefits"
                        className="block px-3 py-2 rounded-md hover:bg-neutral-800"
                    >
                        Benefits
                    </a>
                    <a
                        href="#testimonials"
                        className="block px-3 py-2 rounded-md hover:bg-neutral-800"
                    >
                        Testimonials
                    </a>
                    <a
                        href="#pricing"
                        className="block px-3 py-2 rounded-md hover:bg-neutral-800"
                    >
                        Pricing
                    </a>
                    <a
                        href="#tryItNow"
                        className="block px-3 py-2 rounded-md bg-purple-600 text-center hover:bg-purple-700"
                    >
                        Try It Now
                    </a>
                </div>
            </div>
        </div>
    </nav>

}
