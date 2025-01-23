import logo from "@/public/logo.svg";

export default function Loader() {
    return <>
        <div className="flex sm:gap-7 gap-3 bg-transparent items-center">
             <div className=" ">
                <img src={logo.src} alt="Logo" className="w-12 h-12 text-indigo-600" />
            </div>

            
            <div className="relative w-6 h-6">
                <div className="absolute inset-0 border-2 border-purple-600 border-dashed rounded-full animate-spin opacity-2000k0" />
                <div className="absolute inset-1 border-2 border-purple-700 border-dashed rounded-full animate-[spin_2s_linear_infinite_reverse] opacitay-40" />
            </div>

        </div>
    </>


}