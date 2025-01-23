'use client';
import { useRef, useState } from "react";
import { TMessage } from "./chatSection"
import html2canvas from "html2canvas";
import { Download, Sparkles } from "lucide-react";
import Markdown from "react-markdown";
import { updateSummary } from "../utils/actions";
import logo from "@/public/logo.svg";
type TBotMsgProps = {
    msg: TMessage,
    setMessages: React.Dispatch<React.SetStateAction<TMessage[]>>;
    messages: TMessage[],
    typedText: string,
    isTyping: boolean
}
export default function BotMsg({ msg, setMessages, typedText, isTyping, messages }: TBotMsgProps) {
    const diagramRef = useRef(null);
    const [isGeneratingSummary, setIsGeneratingSummary] = useState(false)
    const [partialSummary, setPartialSummary] = useState("");

    const typewriter = (
        text: string,
        callback: () => void
    ) => {
        let textPosition = 0;


        const type = () => {
            if (textPosition < text.length) {
                setPartialSummary(text.substring(0, textPosition + 1));
                textPosition++;
                setTimeout(type, 15);
            } else {
                callback();
            }
        };

        type();
    };



    async function generateSummary(mermaidCode: string, textInput: string, messageId: string) {

        try {
            setIsGeneratingSummary(true)
            const formdata = new FormData();
            formdata.append("mermaidCode", mermaidCode);
            formdata.append("textInput", textInput);
            const res = await fetch('/api/getSummary', {
                method: "POST",
                body: formdata
            })

            const result = await res.json()
            // console.log('res', result);
            if (!result.ok) throw new Error(result.error)


            setMessages((prev) => prev.map((msg) =>
                msg._id === messageId
                    ? { ...msg, content: { ...msg.content, summary: "" } }
                    : msg
            ));

            setPartialSummary("");
            typewriter(result.summary, () => {
                setMessages((prev) =>
                    prev.map((msg) =>
                        msg._id === messageId
                            ? { ...msg, content: { ...msg.content, summary: result.summary } }
                            : msg
                    )
                );
            });


            setIsGeneratingSummary(false)
            await updateSummary(messageId, result.summary)
        } catch (error) {
            console.error("Error generating summary:", error);
            setIsGeneratingSummary(false)
        }
    }

    const handleDownload = () => {
        if (diagramRef.current) {
            // Use html2canvas to capture the diagram and convert it to a PNG buffer
            html2canvas(diagramRef.current, { scale: 20 }).then((canvas) => {
                // Convert canvas to PNG
                const pngUrl = canvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.href = pngUrl;
                link.download = 'mermaid-diagram.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        }
    };

    return <>
        <div className="flex sm:gap-7 gap-3 bg-transparent">
            <div className=" ">
                <img src={logo.src} alt="Logo" className="w-12 h-12 text-indigo-600" />
            </div>
            <div className="flex-1">
                {msg.content.svgDiagram && <div ref={diagramRef} className="flex-1 overflow-y-auto sm:p-6 p-3 max-w-3xl mx-auto space-y-6 ">
                    <div id=""
                        key={msg._id}
                        dangerouslySetInnerHTML={{
                            __html: msg.content.svgDiagram,
                        }}
                    >
                    </div>
                </div>
                }

                {isTyping && msg === messages[messages.length - 1] ? (
                    <div id="typing-text">
                        <span>{typedText}</span>
                        <span
                            id="blinker"
                            style={{
                                display: "inline-block",
                                verticalAlign: "middle",
                            }}
                            className="animate-bounce ml-1"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-pen pen"
                            >
                                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                            </svg>                        </span>
                    </div>
                ) : (
                    msg.content.fallbackText && (
                        <div>
                            <Markdown>{msg.content.fallbackText}</Markdown>
                        </div>
                    )
                )}

                {msg.content.svgDiagram && <div className="mt-2 flex items-center gap-2">
                    <Download
                        onClick={async () => handleDownload()}
                        className="w-5 text-gray-500 hover:text-black transition cursor-pointer" />
                    {msg.content.summary ? (
                        <div></div>
                    ) : isGeneratingSummary ? (
                        <div className="w-[17px] h-[17px] border-2 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
                    ) : (
                        <button
                            onClick={() =>
                                generateSummary(
                                    msg.content.mermaidCode,
                                    msg.content.inputText,
                                    msg._id
                                )
                            }
                            className="text-sm text-gray-500 hover:text-indigo-600 flex items-center gap-1"
                        >
                            <Sparkles className="w-4 h-4" /> Generate Summary
                        </button>
                    )}

                </div>}
                <div className=""></div>
                {msg.content.summary || partialSummary ? <div className="mt-4">
                    <p className="font-semibold underline text-xl ">Summary</p>
                    <Markdown className={`text-gray-800 mt-2 pl-4 summary-${msg._id}`}>
                        {partialSummary || msg.content.summary}
                    </Markdown>
                </div> : ''}
            </div>
        </div>
    </>
}


