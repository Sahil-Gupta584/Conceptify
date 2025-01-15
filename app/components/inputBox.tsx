// import { FormEvent, FormEventHandler } from "react";
// import { FieldValues, UseFormRegister } from "react-hook-form";

// type InputBoxProps = {
//     handleImageUpload: () => void;
//     handleKeyDown: () => void;
//     handleSubmit: FormEventHandler<HTMLFormElement> ;
//     onSubmit: FormEvent<HTMLFormElement>;
//     register: UseFormRegister<FieldValues>;
// }
// export default function InputBox({ handleImageUpload, handleKeyDown, handleSubmit, onSubmit, register }: InputBoxProps) {
//     return <>
//         <div className="bg-[#f0f3ff] p-6 rounded-b-2xl">
//             <form
//                 className="max-w-3xl gap-2 flex items-center border-[1px] rounded-2xl border-purple-500 p-2"
//                 onSubmit={handleSubmit(onSubmit)}
//             >
//                 {/* Image Upload */}
//                 <div className="flex items-center self-end">
//                     <label
//                         htmlFor="image-upload"
//                         className="p-2 text-gray-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer"
//                     >
//                         <ImagePlus className="w-5 h-5" />
//                     </label>
//                     <input
//                         id="image-upload"
//                         type="file"
//                         accept="image/*"
//                         multiple
//                         className="hidden"
//                         onChange={handleImageUpload}
//                     />
//                     <button className="p-2 md:hidden text-gray-400 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
//                         <Camera className="w-5 h-5" />
//                     </button>
//                 </div>

//                 {/* Text Input */}
//                 <textarea
//                     {...register("textInput", { required: true })}
//                     placeholder="Ask Concept Here..."
//                     className="w-full px-px outline-none bg-[#f0f3ff] resize-none overflow-y-auto max-h-[168px]" // 168px = 7 rows
//                     rows={1}
//                     onKeyDown={handleKeyDown}
//                     onInput={(e) => {
//                         const textarea = e.target as HTMLTextAreaElement;
//                         textarea.style.height = "auto"; // Reset height
//                         textarea.style.height = `${textarea.scrollHeight} px`; // Adjust height
//                     }}
//                 ></textarea>

//                 {/* Submit Button */}
//                 <button
//                     type="submit"
//                     className="self-end p-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-colors"
//                 >
//                     <Send className="w-5 h-5" />
//                 </button>
//             </form>
//             <p className="mt-2 text-xs text-gray-500 text-center">
//                 Tip: You can upload images of handwritten notes or paste text directly
//             </p>
//         </div>
//     </>
// }