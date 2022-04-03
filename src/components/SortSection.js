import { useState } from "react";

const SortSection = () => {
    const [activeBtn, setActiveBtn] = useState(1);
    return (
        <div className="flex items-center px-4  text-gray-400 rounded-lg">
            <div className="bg-orange-100 p-1.5 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 stroke-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                </svg>
            </div>
            <button onClick={() => setActiveBtn(1)} className={`hover:bg-gray-50 py-4 px-2 relative ${activeBtn === 1 && "text-slate-800 font-bold"}`}>
                <span>محبوب ترین</span>
                {activeBtn === 1 && <span className="h-1.5 w-1.5 rounded-full bg-orange-600 absolute top-2.5 left-2"></span>}
            </button>
            <button onClick={() => setActiveBtn(2)} className={`hover:bg-gray-50 py-4 px-2 relative ${activeBtn === 2 && "text-slate-800 font-bold"}`}>
                <span>پرفروش ترین</span>
                {activeBtn === 2 && <span className="h-1.5 w-1.5 rounded-full bg-orange-600 absolute top-2.5 left-2"></span>}
            </button>
            <button onClick={() => setActiveBtn(3)} className={`hover:bg-gray-50 py-4 px-2 relative ${activeBtn === 3 && "text-slate-800 font-bold"}`}>
                <span>گران ترین</span>
                {activeBtn === 3 && <span className="h-1.5 w-1.5 rounded-full bg-orange-600 absolute top-2.5 left-2"></span>}
            </button>
            <button onClick={() => setActiveBtn(4)} className={`hover:bg-gray-50 py-4 px-2 relative ${activeBtn === 4 && "text-slate-800 font-bold"}`}>
                <span>ارزان ترین</span>
                {activeBtn === 4 && <span className="h-1.5 w-1.5 rounded-full bg-orange-600 absolute top-2.5 left-2"></span>}
            </button>
        </div>
    );
}
 
export default SortSection;