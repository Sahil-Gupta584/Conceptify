import { BookOpen, BrainCog,Send } from "lucide-react";

function ChatSection() {
    return <>
        <div className="ml-64 h-screen flex flex-col">
            {/* Chat Header */}
            <div className="h-16 border-b bg-white/50 backdrop-blur-sm flex items-center px-6">
                <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    <span className="font-medium text-gray-700">Current Study Session</span>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 max-w-3xl mx-auto space-y-6">
                {/* AI Message */}
                <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <BrainCog className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                        <div className="bg-white rounded-2xl rounded-tl-none p-6 shadow-sm">
                            <p className="text-gray-800">
                                Hi there! 👋 I'm your study companion. Upload your notes or send me a message, and I'll help you create visual concept maps and summaries. What would you like to study today?
                            </p>
                        </div>
                        <div className="mt-2 flex gap-2">
                            <button className="text-sm text-gray-500 hover:text-indigo-600 flex items-center gap-1">
                                <Sparkles className="w-4 h-4" /> Generate Summary
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <div className="border-t bg-white p-6">
                <div className="max-w-3xl mx-auto">
                    <div className="relative flex items-center">
                        <div className="absolute left-4 flex items-center gap-2">
                            <button className="p-2 text-gray-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
                                <ImagePlus className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
                                <Upload className="w-5 h-5" />
                            </button>
                        </div>

                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message or paste your notes here..."
                            className="w-full pl-24 pr-16 py-4 rounded-2xl border border-gray-200 focus:border-indigo-600 focus:ring focus:ring-indigo-100 transition-all"
                        />
                        <button className="absolute right-4 p-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-colors">
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                    <p className="mt-2 text-xs text-gray-500 text-center">
                        Tip: You can upload images of handwritten notes or paste text directly
                    </p>
                </div>
            </div>
        </>
}