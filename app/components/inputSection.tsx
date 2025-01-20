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
};
type TInputImage = {
    file: File;
    url: string;
}
export default function InputSection({ setIsLoading, setMessages }: TInputSection) {
    const [inputImage, setInputImage] = useState<null | TInputImage>(null)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [textInput, setTextInput] = useState(""); // Bind textarea value to state

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

    const onSubmit = async (textInput: string) => {

        if (isSubmitted) return
        setIsSubmitted(true)
        setTextInput("");

        console.log('data', textInput);
        const userNewMsg: TMessage = {
            id: Math.floor(Math.random() * 999999),
            from: 'user',
            content: { inputText: textInput, image: inputImage ? inputImage.url : null, fallbackText: '', mermaidCode: '', summary: '' }
        }
        setMessages(prev => [...prev, userNewMsg] as TMessage[])
        uploadMessage(userNewMsg).then(() => console.log('msg uploaded successfully')).catch(err => console.log(err))

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
                ? await mermaid.render(`mermaid-diagram-${Date.now()}-${Math.floor(Math.random() * 999999)}`, result.mermaidCode)
                : null;
            console.log(svgDiagram);

            setMessages((prev: TMessage[]) => [
                ...prev,
                { id: Math.floor(Math.random() * 99999999), from: "bot", content: { inputText: textInput, fallbackText: "", svgDiagram: svgDiagram?.svg, mermaidCode: result.mermaidCode } }
            ] as TMessage[]);

            typewriter(result.fallbackText, () => {
                setMessages(prev =>
                    prev.map((msg, i) =>
                        i === prev.length - 1
                            ? { ...msg, content: { ...msg.content, fallbackText: result.fallbackText } }
                            : msg
                    )
                );
            });

            setIsLoading(false);
            setIsSubmitted(false);
            setInputImage(null)
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
        console.log('handleKeyDown');

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
        console.log('selectedImage', selectedImage);
        setInputImage(() => {
            if (selectedImage) {
                console.log(URL.createObjectURL(selectedImage));

                return { file: selectedImage, url: URL.createObjectURL(selectedImage) }
            }
            return null
        })
    }
    // console.log('inputImage', inputImage);

    return <>
        <div className="bg-[#f0f3ff] p-6 rounded-b-2xl">
            <form
                className="max-w-3xl gap-2 flex items-center border-[1px] rounded-2xl border-purple-500 p-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    // @ts-expect-error e needed sometimes
                    const textInputValue = e.target.textInput.value.trim();
                    if (!textInputValue) return;
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
                        className="w-full px-px outline-none bg-[#f0f3ff] resize-none overflow-y-auto max-h-[168px]" // 168px = 7 rows
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