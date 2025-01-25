'use client';
import dynamic from "next/dynamic";
import Nav from "./nav";
import HeroSection from "./hero";

const Features = dynamic(() => import("./features"));
const Working = dynamic(() => import("./working"));
const Benefits = dynamic(() => import("./benefits"));
const Testimonials = dynamic(() => import("./testimonials"));
const Faq = dynamic(() => import("./faq"));
const Footer = dynamic(() => import("./footer"));
// const Pricing = dynamic(() => import("./pricing")); // Uncomment when needed
// const TryNow = dynamic(() => import("./try-now")); // Uncomment when needed

export default function LandingPage() {
    return (
        <>
            <Nav />
            <HeroSection />
            <Features />
            <Working />
            <Benefits />
            <Testimonials />
            {/* <Pricing /> */}
            <Faq />
            {/* <TryNow /> */}
            <Footer />
        </>
    );
}
