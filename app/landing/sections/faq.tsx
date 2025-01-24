'use client';
import { useState } from 'react';

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqItems = [
        {
            question: "How accurate are the generated diagrams?",
            answer:
                "Our AI-powered system has been trained on thousands of academic materials to ensure high accuracy. The diagrams maintain the core concepts while presenting them in an easy-to-understand visual format. We regularly update our algorithms based on student feedback and academic standards.",
        },
        {
            question: "What file formats are supported for note uploads?",
            answer:
                "We support a all kinds of images. You can also directly paste text from your notes into our platform.",
        },
        {
            question: "Can i save Diagrams ?",
            answer:"Yes! You can download all Diagrams."
        },
        {
            question: "Is really diagrams are more effective?",
            answer:"Absolutely! Scientific researches had proven that visual learning are more effecting that those of cramming."
        },
        {
            question: "Can I share diagrams with my study group?",
            answer:"Yes! Team plan users can easily share diagrams with their study groups."
        },
    ];

    const handleToggle = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <>
            <section id="faq" className="py-20 ">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate__animated animate__fadeIn">
                        <h2 className="text-4xl font-bold mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl ">
                            Got questions? We&apos;ve got answers.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-purple-100 to-purple-50  border border-purple-500/30 rounded-lg animate__animated animate__fadeInUp"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <button
                                    onClick={() => handleToggle(index)}
                                    className="faq-button w-full px-6 py-4 text-left focus:outline-none"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-semibold ">
                                            {item.question}
                                        </span>
                                        <svg
                                            className={`w-6 h-6 text-purple-500 transform transition-transform ${activeIndex === index ? "rotate-180" : ""
                                                }`}
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
                                <div
                                    className={`faq-answer px-6 pb-4 transition-all duration-300 ${activeIndex === index ? "block" : "hidden"
                                        }`}
                                >
                                    {item.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
