import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";

const BrandsFilter = ({setOpenFilterMobile}) => {

    const brandslist = useSelector(state => state.allFiltersState.brandslist);

    const [filterBrandsName, setFilterBrandsName] = useState([]);

    useLayoutEffect(() => {
        let trueBrands = [] ;
        for (const brand in brandslist) {
            if (brand !== "remove" ) {
                brandslist[brand] === true && trueBrands.push(brand)
            }
        }
        
        setFilterBrandsName([...trueBrands])

    },[brandslist])

    return (
        <div onClick={() => setOpenFilterMobile(true)}  className="cursor-pointer w-1/2 bg-white dark:bg-slate-700 rounded-md h-11 flex items-center justify-center">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 mr-1 text-gray-400 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
            </div>
            <p className={`${filterBrandsName.length >= 1 && `whitespace-nowrap overflow-x-scroll` } dark:text-stone-100 text-slate-800 text-base font-medium ml-3`}>فیلتر: {filterBrandsName.map((brand) => `${brand} `)}</p>
        </div>
    );
}
 
export default BrandsFilter;