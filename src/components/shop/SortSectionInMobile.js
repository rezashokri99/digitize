import { shallowEqual, useDispatch, useSelector } from "react-redux";

const SortSectionInMobile = ({setOpenSortMobile, activeSortBtnHandler}) => {

    // redux active sort btn filters
    const activeSortBtn = useSelector(state => state.allFiltersState.activeSortBtn, shallowEqual);
    
    

    return (
        <>
            <div className="bg-orange-100 dark:bg-slate-300 p-1.5 mb-3 w-fit rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 stroke-orange-500 dark:stroke-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                </svg>
            </div>

            <div onClick={() => setOpenSortMobile(false)} className="flex flex-col">
                <button onClick={() => activeSortBtnHandler(1)} className={`hover:bg-gray-50 text-right py-2 rounded-md px-2 relative ${activeSortBtn === 1 && "text-slate-800 font-bold bg-gray-100 dark:bg-gray-500"}`}>
                <span>محبوب ترین</span>
                {activeSortBtn === 1 && <span className="h-1.5 w-1.5 rounded-full bg-orange-600 absolute top-2.5 left-2"></span>}
                </button>
                <button onClick={() => activeSortBtnHandler(2)} className={`hover:bg-gray-50 text-right py-2 rounded-md px-2 relative ${activeSortBtn === 2 && "text-slate-800 font-bold bg-gray-100 dark:bg-gray-500"}`}>
                    <span>ارزان ترین</span>
                    {activeSortBtn === 2 && <span className="h-1.5 w-1.5 rounded-full bg-orange-600 absolute top-2.5 left-2"></span>}
                </button>
                <button onClick={() => activeSortBtnHandler(3)} className={`hover:bg-gray-50 text-right py-2 rounded-md px-2 relative ${activeSortBtn === 3 && "text-slate-800 font-bold bg-gray-100 dark:bg-gray-500"}`}>
                    <span>گران ترین</span>
                    {activeSortBtn === 3 && <span className="h-1.5 w-1.5 rounded-full bg-orange-600 absolute top-2.5 left-2"></span>}
                </button>
                <button onClick={() => activeSortBtnHandler(4)} className={`hover:bg-gray-50 text-right py-2 rounded-md px-2 relative ${activeSortBtn === 4 && "text-slate-800 font-bold bg-gray-100 dark:bg-gray-500"}`}>
                    <span>پرفروش ترین</span>
                    {activeSortBtn === 4 && <span className="h-1.5 w-1.5 rounded-full bg-orange-600 absolute top-2.5 left-2"></span>}
                </button>
            </div>
        </>
    );
}
 
export default SortSectionInMobile;