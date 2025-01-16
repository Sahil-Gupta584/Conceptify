'use client';
/* eslint-disable react/no-unescaped-entities */

import { BookOpen, BrainCog } from "lucide-react";
import mermaid, { RenderResult } from "mermaid";
import {  useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "./Loader";
import ocrImage from "../utils/ocrImage";
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
        images?: File[],
        svgDiagram?: Element | null,
        summary: string
        mermaidCode: string
        inputText: string
    }
}
export default function ChatSection() {
    const { register, handleSubmit, setValue, getValues } = useForm<TFormFields>();
    const [messages, setMessages] = useState<TMessage[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const typewriter = (text: string, callback: () => void) => {
        let textPosition = 0;
        const speed = 50; // Typing speed in milliseconds

        const type = () => {
            const textHolder = document.getElementById("typing-text");
            if (textHolder) {
                textHolder.innerHTML = `<span>${text.substring(0, textPosition)}</span>` + `
                <span id="blinker" style="display: inline-block; vertical-align: middle;" class="animate-bounce ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="14" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen pen"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>
                    </svg>
                </span>

                `;
            }

            if (textPosition++ < text.length) {
                setTimeout(type, speed);
            } else {
                // Remove the blinking cursor after typing is complete
                setTimeout(() => {
                    const blinker = document.getElementById("blinker");
                    if (blinker) {
                        blinker.remove();
                    }
                    callback(); // Call the callback after typing is complete
                }, 500);
            }
        };

        type();
    };

    const onSubmit = async (data: TFormFields) => {
        setMessages(prev => [...prev, { id: Math.floor(Math.random() * 999999), from: 'user', content: { inputText: data.textInput } }] as TMessage[])
        setIsLoading(true)
        setValue("textInput", "");
        let ocrText = "";
        if (data.imageInput) {

            const url: string = URL.createObjectURL(data.imageInput[0]);
            console.log('url', url);

            ocrText = await ocrImage(url);
            console.log(ocrText);
        }

        const formdata = new FormData();
        formdata.append("textInput", data.textInput);
        console.log('data', data);
        // console.log(data.imageInput[0]);

        if (data.imageInput) formdata.append("ocrText", ocrText)

        const timestamp = Date.now();
        formdata.append("timestamp", timestamp.toString());
        formdata.append("itsHashedBro", (timestamp * timestamp + 9 + timestamp).toString());

        try {
            const res = await fetch("/api/getDiagram", {
                method: "POST",
                body: formdata,
            });
            const result = await res.json();
            if (!result.ok) throw new Error(result.error)
            console.log('result', result);

            let isValidCode = await mermaid.parse(result.mermaidCode, { suppressErrors: true });
            console.log('isValidCode', isValidCode);

            if (!isValidCode) {
                result.mermaidCode = result.mermaidCode.replaceAll(`[`, `["`)
                result.mermaidCode = result.mermaidCode.replaceAll(`]`, `"]`)
                isValidCode = await mermaid.parse(result.mermaidCode, { suppressErrors: true });
                console.log();

            }
            const svgDiagram: RenderResult | null = isValidCode
                ? await mermaid.render("diagram", result.mermaidCode)
                : null;
            console.log(svgDiagram);

            setMessages(prev => [
                ...prev,
                { id: Math.floor(Math.random() * 99999999), from: "bot", content: { inputText: data.textInput, fallbackText: "", svgDiagram: svgDiagram?.svg, mermaidCode: result.mermaidCode } }
            ] as TMessage[]);

            typewriter(result.fallbackText, () => {
                setMessages(prev =>
                    prev.map((msg, i) =>
                        i === prev.length - 1
                            ? { ...msg, content: { ...msg.content, text: result.fallbackText } }
                            : msg
                    )
                );
            });

            setIsLoading(false);
        } catch (error) {
            console.error("Error submitting form:", error);
            setIsLoading(false)
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        console.log('handleKeyDown');

        const currentValue = getValues("textInput").trim();
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); // Prevent default newline behavior
            if (currentValue) {
                console.log("Form submitted:", currentValue);

                handleSubmit(onSubmit)(); // Trigger form submission
            }
        }
    };



    console.log(messages);

    async function generateSummary(mermaidCode: string, textInput: string, messageId: number) {
        try {
            const formdata = new FormData();
            formdata.append("mermaidCode", mermaidCode);
            formdata.append("textInput", textInput);
            const res = await fetch('/api/getSummary', {
                method: "POST",
                body: formdata
            })
            const result = await res.json()
            if (!result.ok) throw new Error(result.error)

            setMessages(prev => prev.map((msg) => msg.id === messageId ? { ...msg, content: { ...msg.content, summary: result.summary } } : msg))
        } catch (error) {
            console.error("Error generating summary:", error);
        }
    }


    
   
    return (
        <div className="bg-gray-400 h-screen flex items-center justify-center">
            <div className="flex flex-col md:w-fit md:h-[89%] h-full w-full">
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
                           
                            <BotMsg key={i} msg={msg} generateSummary={generateSummary} />
                            :
                            <div key={i} className="flex sm:gap-7 gap-3 bg-white rounded-[107px] rounded-tr-[23px] p-3 w-fit self-end">
                                <p className="text-gray-800">
                                    {msg.content.inputText}
                                </p>
                            </div>
                    )}
                    {isLoading && <Loader />}
                </div>

                {/* Input Area */}
                <InputSection handleKeyDown={handleKeyDown} handleSubmit={handleSubmit } onSubmit={onSubmit} register={register}  />
            </div>
        </div>
    );
}
