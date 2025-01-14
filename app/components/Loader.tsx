import { BrainCog } from "lucide-react"

export default function Loader() {
    return <>
        <div className="flex sm:gap-7 gap-3 bg-transparent items-center">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                <BrainCog className="w-5 h-5 text-white" />
            </div>
            
            <div className="relative w-6 h-6">
                <div className="absolute inset-0 border-2 border-purple-600 border-dashed rounded-full animate-spin opacity-2000k0" />
                <div className="absolute inset-1 border-2 border-purple-700 border-dashed rounded-full animate-[spin_2s_linear_infinite_reverse] opacitay-40" />
            </div>

        </div>
    </>


}