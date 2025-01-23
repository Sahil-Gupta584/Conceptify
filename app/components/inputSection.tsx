'use client';
import { TMessage } from "./chatSection";
import { Camera, ImagePlus, Send, X } from "lucide-react";
import mermaid, { RenderResult } from "mermaid";
import ocrImage from "../utils/ocrImage";
import React, { useState } from "react";
import { uploadMessage } from "../utils/actions";


type TInputSection = {
    setIsLoading: (state: boolean) => void;
    setMessages: React.Dispatch<React.SetStateAction<TMessage[]>>;
    typewriter: (text: string, callback: () => void) => void
};

type TInputImage = {
    file: File;
    url: string;
}

export default function InputSection({ setIsLoading, setMessages, typewriter }: TInputSection) {
    const [inputImage, setInputImage] = useState<null | TInputImage>(null)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [textInput, setTextInput] = useState("");

    const onSubmit = async (textInput: string) => {
        try {

            if (isSubmitted) return

            setIsSubmitted(true)
            setTextInput("");
            setInputImage(null)

            const userNewMsg: Omit<TMessage, '_id'> = {
                from: 'user',
                content: { inputText: textInput, image: inputImage?.url, fallbackText: '', mermaidCode: '', summary: '' }
            }

            const userNewMsgForm = new FormData();
            userNewMsgForm.append('message', JSON.stringify(userNewMsg))

            if (userNewMsg.content.image?.startsWith('blob:')) {
                const blob = await fetch(userNewMsg.content.image).then((res) => res.blob());
                userNewMsgForm.append("blob", blob, "Conceptify.png");
            }
            uploadMessage(userNewMsgForm)


            setMessages(prev => [...prev, userNewMsg] as TMessage[])
            setIsLoading(true)

            const formdata = new FormData();
            formdata.append("textInput", textInput);


            if (inputImage) {
                const ocrText = await ocrImage(inputImage.url as string);
                formdata.append("ocrText", ocrText)
            }

            const timestamp = Date.now();
            formdata.append("timestamp", timestamp.toString());
            formdata.append("itsHashedBro", (timestamp * timestamp + 9 + timestamp).toString());

            const res = await fetch("/api/getDiagram", {
                method: "POST",
                body: formdata,
            });
            const result = await res.json();
            // console.log('result', result);
            if (!result.ok) throw new Error(result.error)

            let isValidCode = await mermaid.parse(result.mermaidCode, { suppressErrors: true });

            if (isValidCode) {
                result.mermaidCode = result.mermaidCode.replaceAll(`[`, `["`)
                result.mermaidCode = result.mermaidCode.replaceAll(`]`, `"]`)
                isValidCode = await mermaid.parse(result.mermaidCode, { suppressErrors: true });
                console.log();

            }
            const svgDiagram: RenderResult | null = isValidCode
                ? await mermaid.render(`mermaid-diagram-${Date.now()}-${Math.floor(Math.random() * 999999)}`, result.mermaidCode)
                : null;

            const botNewMsg: Omit<TMessage, '_id'> = {
                from: "bot",
                content: { inputText: textInput, fallbackText: result.fallbackText, svgDiagram: svgDiagram?.svg, mermaidCode: result.mermaidCode, summary: '' }
            }

            setMessages((prev) => [...prev, botNewMsg] as TMessage[]);
            setIsLoading(false);
            setIsSubmitted(false);
            setInputImage(null)

            const botNewMsgForm = new FormData();
            botNewMsgForm.append('message', JSON.stringify(botNewMsg))
            await uploadMessage(botNewMsgForm)

            typewriter(result.fallbackText, () => {
                setMessages(prev => {
                    return prev.map((msg, i) =>
                        i === prev.length - 1
                            ? { ...msg, content: { ...msg.content, fallbackText: result.fallbackText } }
                            : msg
                    );
                });
            });



        } catch (error) {
            console.error("Error submitting form:", error);
            setIsLoading(false)
            setIsSubmitted(false);
            setInputImage(null)
            setTextInput("");
        }
    };

    // @ts-expect-error e needed sometimes
    const handleKeyDown = (e) => {
        const currentValue = e.target.value.trim();

        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (currentValue) onSubmit(currentValue);
        }
    }

    // @ts-expect-error e needed sometimes
    async function handleImageUpload(e) {
        console.log('handleImageUpload');

        const selectedImage: File = e.target.files[0];
        setInputImage(() => {
            if (selectedImage) {
                return { file: selectedImage, url: URL.createObjectURL(selectedImage) }
            }
            return null
        })
    }

    return <>
        <div className=" p-6 rounded-b-2xl border-b border-gray-200 bg-white/80 backdrop-blur-sm">
            <form
                className="max-w-3xl gap-2 flex items-center border-[1px] rounded-2xl border-purple-500 p-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    // @ts-expect-error e needed sometimes
                    const textInputValue = e.target.textInput.value.trim();
                    console.log(!inputImage, !textInputValue);

                    if (!inputImage && !textInputValue) return;
                    onSubmit(textInputValue);
                }}
            >
                {/* Image Upload */}
                <div className="flex items-center self-end">
                    <label
                        htmlFor="image-upload"
                        className="p-2 text-gray-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer"
                    >
                        <ImagePlus className="w-5 h-5" />
                    </label>
                    <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                        name="imageInput"
                    />
                    <button className="p-2 md:hidden text-gray-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
                        <Camera className="w-5 h-5" />
                    </button>
                </div>

                {/* Text Input */}
                <label htmlFor="textInput" className="w-full">
                    {!isSubmitted && inputImage &&
                        <div className="relative w-fit">
                            <img className="h-[79px] w-[84px] rounded-2xl border-gray-500 border-2" src={inputImage.url} alt="Your Image" />
                            <X onClick={() => setInputImage(null)} className="absolute right-0 -top-[3px] bg-gray-300 cursor-pointer rounded-full w-[16px]  h-[20px] py-px " />
                        </div>
                    }
                    <textarea
                        name="textInput"
                        id="textInput"
                        placeholder="What is electron ?"
                        className="w-full px-px outline-none resize-none overflow-y-auto max-h-[168px]" // 168px = 7 rows
                        rows={1}
                        onKeyDown={handleKeyDown}
                        onInput={(e) => {
                            const textarea = e.target as HTMLTextAreaElement;
                            textarea.style.height = "auto"; // Reset height
                            textarea.style.height = `${textarea.scrollHeight}px`; // Adjust height
                        }}
                        value={textInput} // Controlled value
                        onChange={(e) => setTextInput(e.target.value)}
                    ></textarea>

                </label>
                {/* Submit Button */}
                <button
                    type="submit"
                    className="self-end p-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-colors"
                >
                    <Send className="w-5 h-5" />
                </button>
            </form>
            <p className="mt-2 text-xs text-gray-500 text-center">
                Tip: You can upload images of handwritten notes or paste text directly
            </p>
        </div>
    </>
}