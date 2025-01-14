'use client';
/* eslint-disable react/no-unescaped-entities */
import { BookOpen, BrainCog, Camera, ImagePlus, Send, Sparkles } from "lucide-react";
import mermaid, { RenderResult } from "mermaid";
import {  useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "./Loader";

type TFormField = {
    textInput: string;
    imageInput: FileList | null;
};
type TMessage = {
    from: 'bot' | 'user',
    content: {
        text: string,
        images?: File[],
        svgDiagram?: Element | null,
        summary: string
    }
}
export default function ChatSection() {
    const { register, handleSubmit, setValue, getValues } = useForm<TFormField>();
    const [messages, setMessages] = useState<TMessage[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (data: TFormField) => {
        setMessages(prev => [...prev, { from: 'user', content: { text: data.textInput } }] as TMessage[])
        setIsLoading(true)
        setValue("textInput", ""); 
        setValue("imageInput", null); 

        const formdata = new FormData();
        formdata.append("textInput", data.textInput);

        if (data.imageInput) {
            Array.from(data.imageInput).forEach((file, i) =>
                formdata.append(`imageInput${i + 1}`, file)
            );
        }

        const timestamp = Date.now();
        formdata.append("timestamp", timestamp.toString());
        formdata.append("itsHashedBro", (timestamp * timestamp + 9 + timestamp).toString());

        try {
            const res = await fetch("/getDiagram", {
                method: "POST",
                body: formdata,
            });
            const result = await res.json();
            if (!result.ok) throw new Error(result.error)
            console.log('result', result);

            const isValidCode = await mermaid.parse(result.mermaidCode, { suppressErrors: true });
            const svgDiagram: RenderResult | null = isValidCode
                ? await mermaid.render("diagram", result.mermaidCode)
                : null;
            setMessages(prev => [...prev, { from: 'bot', content: { text: result.fallbackText, svgDiagram: svgDiagram?.svg, } }] as TMessage[])
            setIsLoading(false)
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

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 2) {
            alert("You can only upload up to 2 images.");
            e.target.value = ""; // Clear invalid selection
        } else {
            setValue("imageInput", files);
        }
    };

// console.log('messages',messages);

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
                        <div className="flex-1">
                            <p className="text-gray-800">
                                Hi there! 👋 I'm your study companion. Upload your notes or send me a message, and I'll help you create visual concept maps and summaries. What would you like to study today?
                            </p>
                        </div>
                    </div>
                    {messages.map((msg, i) =>
                        msg.from === 'bot' ?
                            <div key={i} className="flex sm:gap-7 gap-3 bg-transparent">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                                    <BrainCog className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1">
                                    {msg.content.svgDiagram && <div className="flex-1 overflow-y-auto sm:p-6 p-3 max-w-3xl mx-auto space-y-6 bg-[#f0f3ff]">
                                        <div id="diagram-container"
                                            dangerouslySetInnerHTML={{
                                                //@ts-expect-error, working well
                                                __html: msg.content.svgDiagram as string , 
                                            }} />
                                    </div>}
                                    <p className="text-gray-800">
                                        {msg.content.text}
                                    </p>
                                   {msg.content.svgDiagram && <div className="mt-2 flex gap-2">
                                        <button className="text-sm text-gray-500 hover:text-indigo-600 flex items-center gap-1">
                                            <Sparkles className="w-4 h-4" /> Generate Summary
                                        </button>
                                    </div>}
                                </div>
                            </div>
                            :
                            <div key={i} className="flex sm:gap-7 gap-3 bg-white rounded-[107px] rounded-tr-[23px] p-3 w-fit self-end">
                                <p className="text-gray-800">
                                    {msg.content.text}
                                </p>

                            </div>
                    )}
                    {isLoading && <Loader />}
                </div>

                {/* Input Area */}
                <div className="bg-[#f0f3ff] p-6 rounded-b-2xl">
                    <form
                        className="max-w-3xl gap-2 flex items-center border-[1px] rounded-2xl border-purple-500 p-2"
                        onSubmit={handleSubmit(onSubmit)}
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
                                multiple
                                className="hidden"
                                onChange={handleImageUpload}
                            />
                            <button className="p-2 md:hidden text-gray-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
                                <Camera className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Text Input */}
                        <textarea
                            {...register("textInput", { required: true })}
                            placeholder="Ask Concept Here..."
                            className="w-full px-px outline-none bg-[#f0f3ff] resize-none overflow-y-auto max-h-[168px]" // 168px = 7 rows
                            rows={1}
                            onKeyDown={handleKeyDown}
                            onInput={(e) => {
                                const textarea = e.target as HTMLTextAreaElement;
                                textarea.style.height = "auto"; // Reset height
                                textarea.style.height = `${textarea.scrollHeight}px`; // Adjust height
                            }}
                        ></textarea>

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
            </div>
        </div>
    );
}
