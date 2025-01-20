'use client';
/* eslint-disable react/no-unescaped-entities */

import { BookOpen, BrainCog } from "lucide-react";
import { useState } from "react";
import Loader from "./Loader";
import BotMsg from "./botMsg";
import InputSection from "./inputSection";


export type TFormFields = {
    textInput: string;
    imageInput: FileList | null;
};

export type TMessage = {
    id: number,
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
   
    console.log('messages', messages);

    return (
        <div className="bg-[#ededed] h-screen flex items-center justify-center">
            <div className="flex flex-col md:w-fit md:h-[89%] h-full w-full shadow-[0px_11px_155px_-72px_gray] md:rounded-2xl">
                {/* Chat Header */}
                <div className="h-16 border-b bg-white/50 md:rounded-t-2xl flex items-center px-6">
                    <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-indigo-600" />
                        <span className="font-medium text-gray-700">Current Study Session</span>
                    </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 flex flex-col overflow-y-auto sm:p-6 p-3 max-w-3xl mx-auto space-y-6 bg-[#f0f3ff]">
                    {/* AI Message */}
                    <div className="flex sm:gap-7 gap-3 bg-transparent">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                            <BrainCog className="w-5 h-5 text-white" />
                        </div>
                        <p className=" text-gray-800">
                            Hi there! 👋 I'm your study companion. Upload your notes or send me a message, and I'll help you create visual concept maps and summaries. What would you like to study today?
                        </p>
                    </div>

                    {messages.map((msg, i) =>
                        msg.from === 'bot' ?

                            <BotMsg key={i} msg={msg} setMessages={setMessages} />
                            :
                            <div key={i} className=" w-fit self-end">

                                {msg.content.image &&
                                    <img
                                        src={msg.content.image}
                                        alt="Your Image"
                                        className="rounded-2xl h-[266px] w-[284px] self-end" />
                                }
                                {msg.content.inputText.length > 0 &&
                                    <div className="flex sm:gap-7 gap-3 bg-[#d1d1d1] rounded-[107px] rounded-tr-[23px] p-3">
                                        <p className="text-gray-800">
                                            {msg.content.inputText}
                                        </p>
                                    </div>}
                            </div>
                    )}
                    {isLoading && <Loader />}
                    {/* {messages.map((msg, i) =>
                     <div key={i} id="diagram-container"
                     dangerouslySetInnerHTML={{
                         __html: msg.content.svgDiagram as TrustedHTML,
                     }} />
                    )} */}
                </div>

                {/* Input Area */}
                <InputSection setIsLoading={setIsLoading} setMessages={setMessages} />
            </div>
        </div>
    );
}
