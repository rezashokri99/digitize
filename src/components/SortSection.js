import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSortAction } from "../redux/products/productsAction";

const SortSection = ({}) => {
    
    // redux all filters
    const allFiltersState = useSelector(state => state.allFiltersState);
    // redux dispatch
    const dispatch = useDispatch();

    // activeSortBtn 
    const {activeSortBtn} = allFiltersState;


    return (
        <div className="flex items-center px-4  text-gray-400 rounded-lg">
            <div className="bg-orange-100 p-1.5 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 stroke-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                </svg>
            </div>
            <button onClick={() => dispatch(changeSortAction((1)))} className={`hover:bg-gray-50 py-4 px-2 relative ${activeSortBtn === 1 && "text-slate-800 font-bold"}`}>
                <span>محبوب ترین</span>
                {activeSortBtn === 1 && <span className="h-1.5 w-1.5 rounded-full bg-orange-600 absolute top-2.5 left-2"></span>}
            </button>
            <button onClick={() => dispatch(changeSortAction((2)))} className={`hover:bg-gray-50 py-4 px-2 relative ${activeSortBtn === 2 && "text-slate-800 font-bold"}`}>
                <span>ارزان ترین</span>
                {activeSortBtn === 2 && <span className="h-1.5 w-1.5 rounded-full bg-orange-600 absolute top-2.5 left-2"></span>}
            </button>
            <button onClick={() => dispatch(changeSortAction((3)))} className={`hover:bg-gray-50 py-4 px-2 relative ${activeSortBtn === 3 && "text-slate-800 font-bold"}`}>
                <span>گران ترین</span>
                {activeSortBtn === 3 && <span className="h-1.5 w-1.5 rounded-full bg-orange-600 absolute top-2.5 left-2"></span>}
            </button>
            <button onClick={() => dispatch(changeSortAction((4)))} className={`hover:bg-gray-50 py-4 px-2 relative ${activeSortBtn === 4 && "text-slate-800 font-bold"}`}>
                <span>پرفروش ترین</span>
                {activeSortBtn === 4 && <span className="h-1.5 w-1.5 rounded-full bg-orange-600 absolute top-2.5 left-2"></span>}
            </button>
        </div>
    );
}
 
export default SortSection;