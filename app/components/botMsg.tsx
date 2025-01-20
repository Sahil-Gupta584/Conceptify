'use client';
import { useRef, useState } from "react";
import { TMessage } from "./chatSection"
import html2canvas from "html2canvas";
import { BrainCog, Download, Sparkles } from "lucide-react";
import Markdown from "react-markdown";

type TBotMsgProps = {
    msg: TMessage,
    setMessages: React.Dispatch<React.SetStateAction<TMessage[]>>;

}
export default function BotMsg({ msg, setMessages }: TBotMsgProps) {
    const diagramRef = useRef(null);
    const [isGeneratingSummary, setIsGeneratingSummary] = useState(false)




    async function generateSummary(mermaidCode: string, textInput: string, messageId: number) {
        console.log('generating summary', mermaidCode, textInput, messageId);

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
            if (!result.ok) throw new Error(result.error)

            setMessages(prev => prev.map((msg) => msg.id === messageId ? { ...msg, content: { ...msg.content, summary: result.summary } } : msg))
            setIsGeneratingSummary(false)
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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                <BrainCog className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
                {msg.content.svgDiagram && <div ref={diagramRef} className="flex-1 overflow-y-auto sm:p-6 p-3 max-w-3xl mx-auto space-y-6 bg-[#f0f3ff]">
                    <div id=""
                    key={msg.id} 
                    dangerouslySetInnerHTML={{
                        __html: msg.content.svgDiagram ,
                    }} 
                    >
                        {/* <InlineSvgRenderer svgContent={msg.content.svgDiagram as string} /> */}

                        {/* <ReactSVG src={msg.content.svgDiagram as string} /> */}
                        {/* <div key={msg.id}>{parse(msg.content.svgDiagram as string)}</div> */}
                        {/* <img src={msg.content.image} alt="Your Image" className="rounded-2xl h-[266px] w-[284px] self-end" /> */}
                    </div>
                </div>
                }

                <p id={msg.content.fallbackText ? "" : "typing-text"} className=" text-gray-800 break-all">
                    {msg.content.fallbackText}
                </p>
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
                            onClick={() => generateSummary(msg.content.mermaidCode, msg.content.inputText, msg.id)}
                            className="text-sm text-gray-500 hover:text-indigo-600 flex items-center gap-1"
                        >
                            <Sparkles className="w-4 h-4" /> Generate Summary
                        </button>
                    )}

                </div>}
                <div className=""></div>
                {msg.content.summary && <div className="mt-4">
                    <p className="font-semibold underline text-xl ">Summary</p>
                    <Markdown className="text-gray-800 mt-2 pl-4">
                        {msg.content.summary}
                    </Markdown>
                </div>}
            </div>
        </div>
    </>
}


