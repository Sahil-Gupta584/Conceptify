import React from 'react'

export default function Footer() {
  return <footer id="footer" className="bg-neutral-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4">Conceptify</h3>
          <p className="text-gray-400">
            Transforming student notes into memorable visual concepts.
          </p>
          <div className="flex space-x-4">
            <a href="https://x.com/guptas3067" className="text-gray-400 hover:text-purple-400">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sahil-gupta-1b7742286/"
              className="text-gray-400 hover:text-purple-400"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 19h-3v-10h3v10zm-1.5-11.29c-1.03 0-1.5-.69-1.5-1.5 0-.83.5-1.5 1.53-1.5 1.03 0 1.5.67 1.5 1.5 0 .81-.48 1.5-1.53 1.5zm13.5 11.29h-3v-5.5c0-1.32-.48-2.22-1.68-2.22-.91 0-1.45.61-1.69 1.2-.09.22-.11.52-.11.83v5.69h-3s.04-9.24 0-10h3v1.42c.39-.6 1.09-1.46 2.66-1.46 1.94 0 3.4 1.26 3.4 3.97v6.07z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#features" className="text-gray-400 hover:text-purple-400">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-gray-400 hover:text-purple-400">
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-gray-400 hover:text-purple-400"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#faq" className="text-gray-400 hover:text-purple-400">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            <li>
              <a href="https://x.com/guptas3067" className="text-gray-400 hover:text-purple-400">
                Help Center
              </a>
            </li>
            <li>
              <a href="https://x.com/guptas3067" className="text-gray-400 hover:text-purple-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="https://x.com/guptas3067" className="text-gray-400 hover:text-purple-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://x.com/guptas3067" className="text-gray-400 hover:text-purple-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/feedbacks" className="text-gray-400 hover:text-purple-400">
                Feedbacks
              </a>
            </li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
          <p className="text-gray-400 mb-4">
            Get the latest study tips and features.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-neutral-800 pt-8 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Conceptify. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>

}
