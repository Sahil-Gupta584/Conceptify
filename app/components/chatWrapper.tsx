'use client';
import dynamic from 'next/dynamic'
const ChatSection = dynamic(() => import("./chatSection"), { ssr: false });

export default function ChatWrapper() {
    return (
        <ChatSection />
    );
}
