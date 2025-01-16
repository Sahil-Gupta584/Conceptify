'use client';
import { useRef } from "react";
import { TMessage } from "./chatSection"
import html2canvas from "html2canvas";
import { BrainCog, Download, Sparkles } from "lucide-react";
import Markdown from "react-markdown";

type TBotMsgProps = {
    msg:TMessage,
    generateSummary: (mermaidCode: string, inputText: string, id: number) => void
}
export default function BotMsg({msg,generateSummary}:TBotMsgProps) {
    const diagramRef = useRef(null);
    const handleDownload = () => {
        if (diagramRef.current) {
          // Use html2canvas to capture the diagram and convert it to a PNG buffer
          html2canvas(diagramRef.current,{scale:20}).then((canvas) => {
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
    <div  className="flex sm:gap-7 gap-3 bg-transparent">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                                    <BrainCog className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1">
                                    {msg.content.svgDiagram && <div ref={diagramRef} className="flex-1 overflow-y-auto sm:p-6 p-3 max-w-3xl mx-auto space-y-6 bg-[#f0f3ff]">
                                        <div id="diagram-container"
                                            dangerouslySetInnerHTML={{
                                                //@ts-expect-error, working well
                                                __html: msg.content.svgDiagram as string,
                                            }} />
                                    </div>}

                                    <p id={msg.content.fallbackText ? "" : "typing-text"} className=" text-gray-800 break-all">
                                        {msg.content.fallbackText}
                                    </p>
                                    {msg.content.svgDiagram && <div className="mt-2 flex gap-2">
                                        <Download
                                            onClick={async () => handleDownload()}
                                            className="w-5 text-gray-500 hover:text-black transition" />
                                        <button onClick={() => generateSummary(msg.content.mermaidCode, msg.content.inputText, msg.id)} className="text-sm text-gray-500 hover:text-indigo-600 flex items-center gap-1">
                                            <Sparkles className="w-4 h-4" /> Generate Summary
                                        </button>
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