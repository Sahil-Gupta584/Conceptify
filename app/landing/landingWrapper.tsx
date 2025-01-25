'use client';
import dynamic from "next/dynamic";
const LandingPage = dynamic(() => import('./sections/index'), { ssr: false })

export default function LandingWrapper() {
    return <LandingPage />
}
