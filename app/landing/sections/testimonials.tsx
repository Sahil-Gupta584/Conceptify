import React from 'react'

export default function Testimonials() {
    return <section id="testimonials" className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
                <h2 className="text-4xl font-bold mb-4">What Students Say</h2>
                <p className="text-xl text-gray-300">
                    Join thousands of successful students who transformed their study habits
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-neutral-800 p-6 rounded-xl border border-purple-500/30 animate__animated animate__fadeInUp">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold">
                            S
                        </div>
                        <div className="ml-4">
                            <h4 className="font-bold">Sarah Chen</h4>
                            <p className="text-sm text-gray-400">Medical Student</p>
                        </div>
                    </div>
                    <div className="mb-4">⭐⭐⭐⭐⭐</div>
                    <p className="text-gray-300">
                        &quot;Studying anatomy became so much easier with StudyGraphix. The visual
                        diagrams helped me memorize complex systems in half the time. My test
                        scores improved significantly!&quot;
                    </p>
                </div>
                {/* Testimonial 2 */}
                <div
                    className="bg-neutral-800 p-6 rounded-xl border border-purple-500/30 animate__animated animate__fadeInUp"
                    style={{ animationDelay: "0.1s" }}
                >
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold">
                            M
                        </div>
                        <div className="ml-4">
                            <h4 className="font-bold">Mike Thompson</h4>
                            <p className="text-sm text-gray-400">Engineering Student</p>
                        </div>
                    </div>
                    <div className="mb-4">⭐⭐⭐⭐⭐</div>
                    <p className="text-gray-300">
                        &quot;This tool is a game-changer! Converting my physics notes into visual
                        diagrams made complex concepts crystal clear. I wish I had found this
                        earlier!&quot;
                    </p>
                </div>
                {/* Testimonial 3 */}
                <div
                    className="bg-neutral-800 p-6 rounded-xl border border-purple-500/30 animate__animated animate__fadeInUp"
                    style={{ animationDelay: "0.2s" }}
                >
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold">
                            R
                        </div>
                        <div className="ml-4">
                            <h4 className="font-bold">Rachel Smith</h4>
                            <p className="text-sm text-gray-400">Law Student</p>
                        </div>
                    </div>
                    <div className="mb-4">⭐⭐⭐⭐⭐</div>
                    <p className="text-gray-300">
                        &quot;Organizing case studies was always challenging until I found
                        StudyGraphix. Now I can visualize complex legal concepts and remember
                        them easily during exams.&quot;
                    </p>
                </div>
            </div>
            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div
                    className="text-center animate__animated animate__fadeInUp"
                    style={{ animationDelay: "0.3s" }}
                >
                    <div className="text-4xl font-bold text-purple-500 mb-2">50K+</div>
                    <p className="text-gray-300">Active Students</p>
                </div>
                <div
                    className="text-center animate__animated animate__fadeInUp"
                    style={{ animationDelay: "0.4s" }}
                >
                    <div className="text-4xl font-bold text-purple-500 mb-2">1M+</div>
                    <p className="text-gray-300">Diagrams Created</p>
                </div>
                <div
                    className="text-center animate__animated animate__fadeInUp"
                    style={{ animationDelay: "0.5s" }}
                >
                    <div className="text-4xl font-bold text-purple-500 mb-2">95%</div>
                    <p className="text-gray-300">Success Rate</p>
                </div>
                <div
                    className="text-center animate__animated animate__fadeInUp"
                    style={{ animationDelay: "0.6s" }}
                >
                    <div className="text-4xl font-bold text-purple-500 mb-2">4.9/5</div>
                    <p className="text-gray-300">Student Rating</p>
                </div>
            </div>
        </div>
    </section>

}
