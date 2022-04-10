import { useState } from "react";
import InputRange from "react-input-range";
import { useDispatch, useSelector } from "react-redux";
import { changeBrandsAction, selectBrandsAction } from "../../redux/products/productsAction";

const FilterSectionInMobile = ({setOpenFilterMobile}) => {

    //brandslist
    const brandslist = useSelector(state => state.allFiltersState.brandslist);

    // redux dispatch
    const dispatch = useDispatch();

    // const [activeSortBtn, activeSortBtn] = useState(1);
    const [isOpenBrand, setIsOpenBrand] = useState(false);
    const [isOpenColor, setIsOpenColor] = useState(false);
    const [priceRanges, setPriceRanges] = useState({min: 0, max: 33000000})
    const [isOpenPriceRange, setIsOpenPriceRange] = useState(false)

    // brands Selected Handler
    const brandsSelectedHandler = (e) => {
        dispatch(changeBrandsAction(e.target.id));
        dispatch(selectBrandsAction(e.target.id));
    }


    return (
        <>
            <p className="text-xl font-bold text-orange-500 dark:text-orange-600 mb-5">فیلتر</p>
            {/* acc 1 */}
            <div className="mb-6 text-slate-800 dark:text-stone-400">
                    {/* header  */}
                <div onClick={() => setIsOpenBrand((prevOpenBrand) => !prevOpenBrand)} className="cursor-pointer text-slate-800 dark:text-stone-200 flex items-center justify-between px-1.5 mb-4">
                    <div className="flex items-center">
                        <svg className="w-5 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10.5" cy="9.5" r="9.5" fill="currentColor" fillOpacity=".29"/>
                            <path className="fill-[#222F5D] dark:fill-stone-200" d="M12.833 21.271H1.167a.44.44 0 0 1-.438-.438.44.44 0 0 1 .438-.437h11.666a.44.44 0 0 1 .438.438.44.44 0 0 1-.438.437Z" />
                            <path className="fill-[#222F5D] dark:fill-stone-200" d="M2.158 20.833h-.875l.03-7.017c0-.496.227-.957.618-1.26l4.083-3.18a1.61 1.61 0 0 1 1.972 0l4.083 3.174c.385.303.619.776.619 1.266v7.017h-.875v-7.012a.747.747 0 0 0-.28-.577L7.449 10.07a.735.735 0 0 0-.898 0L2.468 13.25a.727.727 0 0 0-.28.571l-.03 7.012Z" />
                            <path className="fill-[#222F5D] dark:fill-stone-200" d="M9.917 21.27H4.083a.44.44 0 0 1-.437-.437v-5.541c0-.724.589-1.313 1.312-1.313h4.084c.723 0 1.312.59 1.312 1.313v5.541a.44.44 0 0 1-.437.438Zm-5.396-.874h4.958V15.29a.44.44 0 0 0-.437-.437H4.958a.44.44 0 0 0-.437.438v5.104Z" />
                            <path className="fill-[#222F5D] dark:fill-stone-200" d="M5.833 18.791a.44.44 0 0 1-.437-.437v-.875a.44.44 0 0 1 .437-.438.44.44 0 0 1 .438.438v.875a.44.44 0 0 1-.438.438ZM7.875 12.813h-1.75a.44.44 0 0 1-.438-.438.44.44 0 0 1 .438-.438h1.75a.44.44 0 0 1 .438.438.44.44 0 0 1-.438.438Z" />
                        </svg>
                        <span className="mr-2 font-bold">برند</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`${isOpenBrand && "rotate-180"} h-5 w-5 transition-all duration-200`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                    {/* content  */}
                {
                    isOpenBrand && <div onClick={() => setOpenFilterMobile(false)} className="px-3">
                    
                    <label onClick={(e) => brandsSelectedHandler(e)} id="apple" className="flex items-center cursor-pointer mb-2">
                            <input type="checkbox" onChange={() => ""} checked={brandslist.apple === true ? true : false} id="apple" className="text-orange-400 focus:ring-orange-400 cursor-pointer form-checkbox rounded w-3.5 h-3.5" />
                            <span className="mr-1.5">اپل</span>
                        </label>
                        <label onClick={(e) => brandsSelectedHandler(e)} id="samsung" className="flex items-center cursor-pointer mb-2">
                            <input type="checkbox" onChange={() => ""} checked={brandslist.samsung === true ? true : false} id="samsung" className="text-orange-400 focus:ring-orange-400 cursor-pointer form-checkbox rounded w-3.5 h-3.5" />
                            <span className="mr-1.5">سامسونگ</span>
                        </label>
                        <label onClick={(e) => brandsSelectedHandler(e)} id="xiaomi" className="flex items-center cursor-pointer mb-2">
                            <input type="checkbox" onChange={() => ""} checked={brandslist.xiaomi === true ? true : false} id="xiaomi" className="text-orange-400 focus:ring-orange-400 cursor-pointer form-checkbox rounded w-3.5 h-3.5" />
                            <span className="mr-1.5">شیائومی</span>
                        </label>
                        <label onClick={(e) => brandsSelectedHandler(e)} id="huawei" className="flex items-center cursor-pointer mb-2">
                            <input type="checkbox" onChange={() => ""} checked={brandslist.huawei === true ? true : false} id="huawei" className="text-orange-400 focus:ring-orange-400 cursor-pointer form-checkbox rounded w-3.5 h-3.5" />
                            <span className="mr-1.5">هواوی</span>
                        </label>
                        <label onClick={(e) => brandsSelectedHandler(e)} id="asus" className="flex items-center cursor-pointer mb-2">
                            <input type="checkbox" onChange={() => ""} checked={brandslist.asus === true ? true : false} id="asus" className="text-orange-400 focus:ring-orange-400 cursor-pointer form-checkbox rounded w-3.5 h-3.5" />
                            <span className="mr-1.5">ایسوس</span>
                        </label>
                        <label onClick={(e) => brandsSelectedHandler(e)} id="lenovo" className="flex items-center cursor-pointer mb-2">
                            <input type="checkbox" onChange={() => ""} checked={brandslist.lenovo === true ? true : false} id="lenovo" className="text-orange-400 focus:ring-orange-400 cursor-pointer form-checkbox rounded w-3.5 h-3.5" />
                            <span className="mr-1.5">لنوو</span>
                        </label>
                        <label onClick={(e) => brandsSelectedHandler(e)} id="msi" className="flex items-center cursor-pointer mb-2">
                            <input type="checkbox" onChange={() => ""} checked={brandslist.msi === true ? true : false} id="msi" className="text-orange-400 focus:ring-orange-400 cursor-pointer form-checkbox rounded w-3.5 h-3.5" />
                            <span className="mr-1.5">ام اس آی</span>
                        </label>

                    </div>
                }
            </div>
              {/* acc 2 */}
            <div className="mb-6 text-slate-800 dark:text-stone-400">
                    {/* header  */}
                <div onClick={() => setIsOpenColor((prevOpenBrand) => !prevOpenBrand)} className="cursor-pointer text-slate-800 dark:text-stone-200 flex items-center justify-between px-1.5 mb-4">
                    <div className="flex items-center">
                        
                        <svg width="19" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="stroke-[#222F5D] dark:stroke-stone-200" d="M5.833 9.625V17.5c0 .63-.256 1.207-.665 1.627l-.023.024a1.83 1.83 0 0 1-.163.146 2.041 2.041 0 0 1-.578.35c-.064.029-.128.052-.192.075-.228.076-.473.111-.712.111a2.48 2.48 0 0 1-.467-.046c-.075-.018-.151-.035-.227-.059a2.117 2.117 0 0 1-.268-.099c0-.006 0-.006-.006 0a2.946 2.946 0 0 1-.467-.286l-.006-.006a1.598 1.598 0 0 1-.21-.186c-.064-.07-.128-.14-.192-.216a2.94 2.94 0 0 1-.286-.467c.006-.006.006-.006 0-.006 0 0 0-.006-.006-.011a3.334 3.334 0 0 1-.093-.257c-.024-.076-.041-.152-.059-.227a2.483 2.483 0 0 1-.046-.467V9.625c0-.875.583-1.459 1.458-1.459h1.75c.875 0 1.458.584 1.458 1.459Z" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round"/>
                            <path className="stroke-[#222F5D] dark:stroke-stone-200" d="M12.833 16.625v1.75c0 .875-.583 1.458-1.458 1.458H3.5c.24 0 .484-.035.712-.11.064-.024.128-.047.192-.076.204-.082.403-.199.578-.35.052-.041.11-.094.163-.146l.023-.024 3.967-3.96h2.24c.875 0 1.458.583 1.458 1.458ZM2.806 19.729a2.237 2.237 0 0 1-.957-.578 2.237 2.237 0 0 1-.577-.957c.227.73.805 1.307 1.534 1.535Z" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round"/>
                            <path className="stroke-[#222F5D] dark:stroke-stone-200" d="m10.716 13.586-1.581 1.58-3.967 3.961c.409-.42.665-.997.665-1.627v-5.635l1.581-1.58c.618-.62 1.447-.62 2.065 0l1.237 1.236c.618.618.618 1.446 0 2.065ZM3.5 18.083a.583.583 0 1 0 0-1.167.583.583 0 0 0 0 1.167Z" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="9.5" cy="9.5" r="9.5" fill="currentColor" fillOpacity=".29"/>
                        </svg>

                        <span className="mr-2 font-bold">رنگ</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`${isOpenColor && "rotate-180"} h-5 w-5 transition-all duration-200`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                    {/* content  */}
                {
                    isOpenColor && <div onClick={() => setOpenFilterMobile(false)} className="px-3">
                    
                        <label id="black" className="flex items-center cursor-pointer mb-2">
                            <input type="checkbox" id="black" className="text-orange-400 focus:ring-orange-400 cursor-pointer form-checkbox rounded w-3.5 h-3.5" />
                            <span className="mr-1.5">مشکی</span>
                        </label>
                        <label id="blue" className="flex items-center cursor-pointer mb-2">
                            <input type="checkbox" id="blue" className="text-orange-400 focus:ring-orange-400 cursor-pointer form-checkbox rounded w-3.5 h-3.5" />
                            <span className="mr-1.5">آبی</span>
                        </label>
                        <label id="orange" className="flex items-center cursor-pointer mb-2">
                            <input type="checkbox" id="orange" className="text-orange-400 focus:ring-orange-400 cursor-pointer form-checkbox rounded w-3.5 h-3.5" />
                            <span className="mr-1.5">نارنجی</span>
                        </label>
                        <label id="gray" className="flex items-center cursor-pointer">
                            <input type="checkbox" id="gray" className="text-orange-400 focus:ring-orange-400 cursor-pointer form-checkbox rounded w-3.5 h-3.5" />
                            <span className="mr-1.5">طوسی</span>
                        </label>

                    </div>
                }
            </div>
              {/* acc 3 */}
            <div className="mb-6 text-slate-800 dark:text-stone-400">
                    {/* header  */}
                <div onClick={() => setIsOpenPriceRange((prevOpenBrand) => !prevOpenBrand)} className="cursor-pointer text-slate-800 dark:text-stone-200 flex items-center justify-between px-1.5 mb-6">
                    <div className="flex items-center">
                            
                        <svg width="19" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="stroke-[#222F5D] dark:stroke-stone-200" d="M5.833 9.625V17.5c0 .63-.256 1.207-.665 1.627l-.023.024a1.83 1.83 0 0 1-.163.146 2.041 2.041 0 0 1-.578.35c-.064.029-.128.052-.192.075-.228.076-.473.111-.712.111a2.48 2.48 0 0 1-.467-.046c-.075-.018-.151-.035-.227-.059a2.117 2.117 0 0 1-.268-.099c0-.006 0-.006-.006 0a2.946 2.946 0 0 1-.467-.286l-.006-.006a1.598 1.598 0 0 1-.21-.186c-.064-.07-.128-.14-.192-.216a2.94 2.94 0 0 1-.286-.467c.006-.006.006-.006 0-.006 0 0 0-.006-.006-.011a3.334 3.334 0 0 1-.093-.257c-.024-.076-.041-.152-.059-.227a2.483 2.483 0 0 1-.046-.467V9.625c0-.875.583-1.459 1.458-1.459h1.75c.875 0 1.458.584 1.458 1.459Z" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round"/>
                            <path className="stroke-[#222F5D] dark:stroke-stone-200" d="M12.833 16.625v1.75c0 .875-.583 1.458-1.458 1.458H3.5c.24 0 .484-.035.712-.11.064-.024.128-.047.192-.076.204-.082.403-.199.578-.35.052-.041.11-.094.163-.146l.023-.024 3.967-3.96h2.24c.875 0 1.458.583 1.458 1.458ZM2.806 19.729a2.237 2.237 0 0 1-.957-.578 2.237 2.237 0 0 1-.577-.957c.227.73.805 1.307 1.534 1.535Z" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round"/>
                            <path className="stroke-[#222F5D] dark:stroke-stone-200" d="m10.716 13.586-1.581 1.58-3.967 3.961c.409-.42.665-.997.665-1.627v-5.635l1.581-1.58c.618-.62 1.447-.62 2.065 0l1.237 1.236c.618.618.618 1.446 0 2.065ZM3.5 18.083a.583.583 0 1 0 0-1.167.583.583 0 0 0 0 1.167Z" strokeWidth=".875" strokeLinecap="round" strokeLinejoin="round"/>
                            <circle cx="9.5" cy="9.5" r="9.5" fill="currentColor" fillOpacity=".29"/>
                        </svg>

                        <span className="mr-2 font-bold">محدوده قیمت</span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`${isOpenPriceRange && "rotate-180"} h-5 w-5 transition-all duration-200`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                    {/* content  */}
                {
                    isOpenPriceRange && <div onClick={() => setOpenFilterMobile(false)} dir="ltr" className="w-full px-4">
                        <InputRange maxValue={33000000} minValue={0} step={1000000} value={priceRanges} onChange={value => setPriceRanges(value)} />
                    </div>
                }
            </div>
        </>
    );
}
 
export default FilterSectionInMobile;