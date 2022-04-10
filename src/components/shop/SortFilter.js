import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";

const SortFilter = ({setOpenSortMobile}) => {

    // activeSortBtn 
    const activeSortBtn = useSelector(state => state.allFiltersState.allFiltersState);

    // filter name for show in mobile size
    const [filterSortName, setFilterSortName] = useState("محبوب ترین");

    useLayoutEffect(() => {
        if (activeSortBtn === 1) {
            setFilterSortName("محبوب ترین");
        }else if (activeSortBtn === 2) {
            setFilterSortName("ارزان ترین");
        }else if (activeSortBtn === 3) {
            setFilterSortName("گران ترین");
        }else if (activeSortBtn === 4) {
            setFilterSortName("پرفروش ترین");
        }

    },[activeSortBtn])

    return (
        <div onClick={() => setOpenSortMobile(true)} className="w-1/2 bg-white dark:bg-slate-700 rounded-md h-11 flex items-center justify-center">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 dark:text-orange-600 ml-1 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                </svg>
            </div>
            <span className="text-slate-800 dark:text-stone-100 text-base font-medium">{filterSortName}</span>
        </div>
    );
}
 
export default SortFilter;