'use client';
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import Loader from "./Loader";
import BotMsg from "./botMsg";
import InputSection from "./inputSection";
import { getMessages } from "../utils/actions";
import Avatar from './avatar'
import { useSession } from "next-auth/react";
import logo from "@/public/logo.svg";
export type TFormFields = {
    textInput: string;
    imageInput: FileList | null;
};

export type TMessage = {
    __v?: number,
    _id: string,
    from: 'bot' | 'user',
    content: {
        fallbackText: string,
        image?: string | null,
        svgDiagram?: TrustedHTML | string,
        summary: string
        mermaidCode: string
        inputText: string
    }
}

export default function ChatSection() {
    const [messages, setMessages] = useState<TMessage[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const session = useSession();
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const [typedText, setTypedText] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const typewriter = (text: string, callback: () => void) => {
        setTypedText("");
        setIsTyping(true);

        let textPosition = 0;

        const type = () => {
            if (textPosition < text.length) {
                setTypedText((prev) => prev + text[textPosition]);
                textPosition++;
                setTimeout(type, 15);
            } else {
                console.log("Typing complete!");
                setTimeout(() => {
                    setIsTyping(false);
                    callback();
                }, 500);
            }
        };

        type();
    };


    useEffect(() => {
        (async () => {
            const res = await getMessages()
            setMessages(JSON.parse(res))
        })()
    }, [])

    useEffect(() => {
        // scrollToBottom
        (() => {
            if (messagesEndRef.current) {
                messagesEndRef.current.scrollIntoView({ behavior: "auto" });
            }
        })()
    }, [messages]);

    // console.log('messages', messages);

    return (
        <div className="bg-[#f0f4f8] h-screen flex items-center justify-center">
            <div className="flex flex-col md:w-fit md:h-[89%] h-full w-full shadow-[0px_11px_155px_-72px_gray] md:rounded-2xl">
                {/* Chat Header */} 
                <div className="h-16  border-b border-gray-200 bg-white/80 backdrop-blur-sm  md:rounded-t-2xl flex items-center justify-between px-6">
                    <div className="flex items-center gap-2">
                        <img src={logo.src} alt="Logo" className="w-12 h-12 text-indigo-600" />
                        <span className="font-medium text-gray-700">Current Study Session</span>
                    </div>
                    {session.data && <Avatar user={session.data?.user} />}
                </div>

                {/* Messages Area */}
                {/* <div className="flex-1 overflow-y-auto  p-6 space-y-4 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-blue-300"> */}

                <div className="flex-1 flex flex-col overflow-y-auto sm:p-6 p-3 max-w-3xl mx-auto space-y-6 bg-gray-50 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-blue-300">
                    {/* AI Message */}
                    <div className="flex sm:gap-7 gap-3 bg-transparent">
                        <div className=" rounded-lg flex items-center justify-center flex-shrink-0">
                            <img src={logo.src} alt="Logo" className="w-12 h-12 text-indigo-600" />
                        </div>
                        <p className=" text-gray-800">
                            Hi there! 👋 I'm your study companion. Upload your notes or send me a message, and I'll help you create visual concept maps and summaries. What would you like to study today?
                        </p>
                    </div>

                    {messages.map((msg, i) =>
                        msg.from === 'bot' ?

                            <BotMsg key={i} msg={msg} setMessages={setMessages} isTyping={isTyping} typedText={typedText} messages={messages} />
                            :
                            // <div className="flex items-start space-x-4 bg-white p-4 rounded-2xl shadow-sm">

                            <div key={i} className=" w-fit self-end ">

                                {msg.content.image &&
                                    <img
                                        src={msg.content.image}
                                        alt="Your Image"
                                        className="rounded-2xl h-[266px] w-[284px] self-end" />
                                }
                                {msg.content.inputText.length > 0 &&
                                    <div className=" bg-[#e5e5e5] rounded-2xl p-4">
                                        <p className="text-gray-800">
                                            {msg.content.inputText}
                                        </p>
                                    </div>}
                            </div>
                    )}
                    {isLoading && <Loader />}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <InputSection setIsLoading={setIsLoading} setMessages={setMessages} typewriter={typewriter} />
            </div>
        </div>
    );

}
