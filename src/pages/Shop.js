/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useState } from "react";
import InputRange from "react-input-range";
import BarLogo from "../components/BarLogo";
import Card from "../components/Card";
import { productsProvider } from "../contexts/ProductsContext";
import watchOne from "../images/Cart/1.png";

const Shop = ({brandsListHandler, productsForRender, activeSortBtn, setActiveSortBtn}) => {

    

    const [openFilterMobile, setOpenFilterMobile] = useState(false);
    const [openSortMobile, setOpenSortMobile] = useState(false);

    // const [activeSortBtn, setActiveSortBtn] = useState(1);
    const [isOpenBrand, setIsOpenBrand] = useState(false);
    const [isOpenColor, setIsOpenColor] = useState(false);
    const [priceRanges, setPriceRanges] = useState({min: 0, max: 33000000})
    const [isOpenPriceRange, setIsOpenPriceRange] = useState(false)


    // const [products, setProducts] = useState([
    //     {id: 0, title: "ساعت اپل سری 6", price: "4,250,200 تومان",image: watchOne, colorType:0 ,colors: ["indigo", "yellow", 'white']},
    //     {id: 1, title: "ساعت اپل سری 6", price: "4,250,200 تومان",image: watchOne, colorType:1 ,colors: ["indigo", "orange", "yellow", 'white']},
    //     {id: 2, title: "ساعت اپل سری 7", price: "4,250,200 تومان",image: watchOne, colorType:3 ,colors: ["indigo", "orange"]},
    //     {id: 3, title: "ساعت اپل سری 5", price: "4,250,200 تومان",image: watchOne, colorType:"There" ,colors: ["indigo", "orange", "yellow"]},
    //     {id: 4, title: "ساعت اپل سری 7", price: "4,250,200 تومان",image: watchOne, colorType:"Four" ,colors: ["indigo", "orange", "yellow"]},
    //     {id: 5, title: "ساعت اپل سری 4", price: "4,250,200 تومان",image: watchOne, colorType:"Five" ,colors: ["indigo", "orange", "yellow"]},
    //     {id: 6, title: "ساعت اپل سری 5", price: "4,250,200 تومان",image: watchOne, colorType:"Six" ,colors: ["indigo", "orange", "yellow"]},
    //     {id: 7, title: "ساعت اپل سری 7", price: "4,250,200 تومان",image: watchOne, colorType:"Eight" ,colors: ["indigo", "orange", "yellow"]},
    //     {id: 8, title: "ساعت اپل سری 6", price: "4,250,200 تومان",image: watchOne, colorType:"Nine" ,colors: ["indigo", "orange", "yellow"]},
    //     {id: 9, title: "ساعت اپل سری 6", price: "4,250,200 تومان",image: watchOne, colorType:"Ten" ,colors: ["indigo", "orange", "yellow"]},
    //     {id: 10, title: "ساعت اپل سری 6", price: "4,250,200 تومان",image: watchOne, colorType:"Eleven" ,colors: ["indigo", "orange", "yellow"]},
    //     {id: 11, title: "ساعت اپل سری 6", price: "4,250,200 تومان",image: watchOne, colorType:"Tue" ,colors: ["indigo", "orange", "yellow"]},
    //     {id: 12, title: "ساعت اپل سری 6", price: "4,250,200 تومان",image: watchOne, colorType:"Ten" ,colors: ["indigo", "orange", "yellow"]},
    //     {id: 13, title: "ساعت اپل سری 6", price: "4,250,200 تومان",image: watchOne, colorType:"Ten" ,colors: ["indigo", "orange", "yellow"]},
    //     {id: 14, title: "ساعت اپل سری 6", price: "4,250,200 تومان",image: watchOne, colorType:"Ten" ,colors: ["indigo", "orange", "yellow"]},
    //     {id: 15, title: "ساعت اپل سری 6", price: "4,250,200 تومان",image: watchOne, colorType:"Ten" ,colors: ["indigo", "orange", "yellow"]},
    // ])

    const [colorSelectedAll, setColorSelectedAll] = useState(
        productsForRender.map((prodcut) => {
            return {[prodcut.id]: prodcut.colors[0]}
        })
    )
    
    
    const changeColorHandler = (e, id) => {
        let NO = (e.target.id).split(" ")[0];
        let newColor = (e.target.id).split(" ")[1];
        if (NO) {
            let colorSelectedAllCopyied = [...colorSelectedAll];
            colorSelectedAllCopyied[id] = {[NO]: newColor}
            setColorSelectedAll(colorSelectedAllCopyied);
        }
    }

    const backdropHandler = () => {
        setOpenSortMobile(false);
        setOpenFilterMobile(false);
    }

    


    return (
        <div className="pb-28 bg-gray-100">
            {/* header */}
            <div>
                
                {/* bar */}
                <BarLogo />

                {/* filter and sort btn in mobile */}
                <div className="flex justify-between items-center gap-x-2 text-center mb-9 px-6px md:hidden">

                    <div onClick={() => setOpenSortMobile(true)} className="w-1/2 bg-white rounded-md h-11 flex items-center justify-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 ml-1 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                            </svg>
                        </div>
                        <span className="text-slate-800 text-base font-medium">محبوب ترین</span>
                    </div>

                    <div onClick={() => setOpenFilterMobile(true)}  className="w-1/2 bg-white rounded-md h-11 flex items-center justify-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                        </div>
                        <span className="text-slate-800 text-base font-medium ml-3">فیلتر: برند اپل</span>
                    </div>
                    
                </div>

                {/* main */}
                <div className="grid grid-cols-2 gap-x-2 gap-y-8 md:gap-x-6 md:gap-y-12 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {
                        productsForRender.map((product) => (
                            <Card key={product.id} product={product} colorSelectedAll={colorSelectedAll} changeColorHandler={changeColorHandler} />
                        ))
                    }

                </div>
                
                {/* backdrop */}
                <div onClick={backdropHandler} className={`${(!openFilterMobile && !openSortMobile ) && "hidden"} transition-all duration-300 z-10 h-screen w-screen bg-stone-100 fixed bottom-0 opacity-60`}></div>

                {/* filter section in mobile */}
                <div className={`${openFilterMobile ? "translate-y-0" : "translate-y-[550px]" } transition-all duration-300 overflow-scroll z-30 w-screen h-[500px] bg-white rounded-tr-3xl rounded-tl-3xl fixed bottom-0 left-0 right-0 py-8 px-5 shadow-[0_-3px_20px_0_rgba(0,0,0,0.3)]`}>
                    <p className="text-xl font-bold text-orange-500 mb-5">فیلتر</p>
                    {/* acc 1 */}
                    <div className="mb-6 text-slate-800">
                        {/* header */}
                        <div onClick={() => setIsOpenBrand((prevOpenBrand) => !prevOpenBrand)} className="cursor-pointer text-slate-800 flex items-center justify-between px-1.5 mb-4">
                            <div className="flex items-center">
                                <svg className="w-5 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10.5" cy="9.5" r="9.5" fill="#AFAFAF" fill-opacity=".29"/>
                                    <path d="M12.833 21.271H1.167a.44.44 0 0 1-.438-.438.44.44 0 0 1 .438-.437h11.666a.44.44 0 0 1 .438.438.44.44 0 0 1-.438.437Z" fill="#222F5D"/>
                                    <path d="M2.158 20.833h-.875l.03-7.017c0-.496.227-.957.618-1.26l4.083-3.18a1.61 1.61 0 0 1 1.972 0l4.083 3.174c.385.303.619.776.619 1.266v7.017h-.875v-7.012a.747.747 0 0 0-.28-.577L7.449 10.07a.735.735 0 0 0-.898 0L2.468 13.25a.727.727 0 0 0-.28.571l-.03 7.012Z" fill="#222F5D"/>
                                    <path d="M9.917 21.27H4.083a.44.44 0 0 1-.437-.437v-5.541c0-.724.589-1.313 1.312-1.313h4.084c.723 0 1.312.59 1.312 1.313v5.541a.44.44 0 0 1-.437.438Zm-5.396-.874h4.958V15.29a.44.44 0 0 0-.437-.437H4.958a.44.44 0 0 0-.437.438v5.104Z" fill="#222F5D"/>
                                    <path d="M5.833 18.791a.44.44 0 0 1-.437-.437v-.875a.44.44 0 0 1 .437-.438.44.44 0 0 1 .438.438v.875a.44.44 0 0 1-.438.438ZM7.875 12.813h-1.75a.44.44 0 0 1-.438-.438.44.44 0 0 1 .438-.438h1.75a.44.44 0 0 1 .438.438.44.44 0 0 1-.438.438Z" fill="#222F5D"/>
                                </svg>
                                <span className="mr-2 font-bold">برند</span>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className={`${isOpenBrand && "rotate-180"} h-5 w-5 transition-all duration-200`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* content */}
                        {
                            isOpenBrand && <div onClick={() => setOpenFilterMobile(false)} className="px-3">
                            
                            <label onClick={brandsListHandler} id="apple" className="flex items-center cursor-pointer mb-2">
                                    <input type="checkbox" id="apple" className="text-orange-400 focus:ring-orange-400 cursor-pointer form-checkbox rounded w-3.5 h-3.5" />
                                    <span className="mr-1.5">اپل</span>
                                </label>
                                <label onClick={brandsListHandler} id="samsung" className="flex items-center cursor-pointer mb-2">
                                    <input type="checkbox" id="samsung" className="text-orange-400 focus:ring-orange-400 cursor-pointer form-checkbox rounded w-3.5 h-3.5" />
                                    <span className="mr-1.5">سامسونگ</span>
                                </label>
                                <label onClick={brandsListHandler} id="xiaomi" className="flex items-center cursor-pointer mb-2">
                                    <input type="checkbox" id="xiaomi" className="text-orange-400 focus:ring-orange-400 cursor-pointer form-checkbox rounded w-3.5 h-3.5" />
                                    <span className="mr-1.5">شیائومی</span>
                                </label>
                                <label onClick={brandsListHandler} id="huawei" className="flex items-center cursor-pointer mb-2">
                                    <input type="checkbox" id="huawei" className="text-orange-400 focus:ring-orange-400 cursor-pointer form-checkbox rounded w-3.5 h-3.5" />
                                    <span className="mr-1.5">هواوی</span>
                                </label>
                                <label onClick={brandsListHandler} id="asus" className="flex items-center cursor-pointer mb-2">
                                    <input type="checkbox" id="asus" className="text-orange-400 focus:ring-orange-400 cursor-pointer form-checkbox rounded w-3.5 h-3.5" />
                                    <span className="mr-1.5">ایسوس</span>
                                </label>
                                <label onClick={brandsListHandler} id="lenovo" className="flex items-center cursor-pointer mb-2">
                                    <input type="checkbox" id="lenovo" className="text-orange-400 focus:ring-orange-400 cursor-pointer form-checkbox rounded w-3.5 h-3.5" />
                                    <span className="mr-1.5">لنوو</span>
                                </label>
                                <label onClick={brandsListHandler} id="msi" className="flex items-center cursor-pointer mb-2">
                                    <input type="checkbox" id="msi" className="text-orange-400 focus:ring-orange-400 cursor-pointer form-checkbox rounded w-3.5 h-3.5" />
                                    <span className="mr-1.5">ام اس آی</span>
                                </label>

                            </div>
                        }
                    </div>
                    {/* acc 2 */}
                    <div className="mb-6 text-slate-800">
                        {/* header */}
                        <div onClick={() => setIsOpenColor((prevOpenBrand) => !prevOpenBrand)} className="cursor-pointer text-slate-800 flex items-center justify-between px-1.5 mb-4">
                            <div className="flex items-center">
                                
                                <svg width="19" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.833 9.625V17.5c0 .63-.256 1.207-.665 1.627l-.023.024a1.83 1.83 0 0 1-.163.146 2.041 2.041 0 0 1-.578.35c-.064.029-.128.052-.192.075-.228.076-.473.111-.712.111a2.48 2.48 0 0 1-.467-.046c-.075-.018-.151-.035-.227-.059a2.117 2.117 0 0 1-.268-.099c0-.006 0-.006-.006 0a2.946 2.946 0 0 1-.467-.286l-.006-.006a1.598 1.598 0 0 1-.21-.186c-.064-.07-.128-.14-.192-.216a2.94 2.94 0 0 1-.286-.467c.006-.006.006-.006 0-.006 0 0 0-.006-.006-.011a3.334 3.334 0 0 1-.093-.257c-.024-.076-.041-.152-.059-.227a2.483 2.483 0 0 1-.046-.467V9.625c0-.875.583-1.459 1.458-1.459h1.75c.875 0 1.458.584 1.458 1.459Z" stroke="#222F5D" stroke-width=".875" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12.833 16.625v1.75c0 .875-.583 1.458-1.458 1.458H3.5c.24 0 .484-.035.712-.11.064-.024.128-.047.192-.076.204-.082.403-.199.578-.35.052-.041.11-.094.163-.146l.023-.024 3.967-3.96h2.24c.875 0 1.458.583 1.458 1.458ZM2.806 19.729a2.237 2.237 0 0 1-.957-.578 2.237 2.237 0 0 1-.577-.957c.227.73.805 1.307 1.534 1.535Z" stroke="#222F5D" stroke-width=".875" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="m10.716 13.586-1.581 1.58-3.967 3.961c.409-.42.665-.997.665-1.627v-5.635l1.581-1.58c.618-.62 1.447-.62 2.065 0l1.237 1.236c.618.618.618 1.446 0 2.065ZM3.5 18.083a.583.583 0 1 0 0-1.167.583.583 0 0 0 0 1.167Z" stroke="#222F5D" stroke-width=".875" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="9.5" cy="9.5" r="9.5" fill="#AFAFAF" fill-opacity=".29"/>
                                </svg>

                                <span className="mr-2 font-bold">رنگ</span>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className={`${isOpenColor && "rotate-180"} h-5 w-5 transition-all duration-200`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* content */}
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
                    <div className="mb-6 text-slate-800 ">
                        {/* header */}
                        <div onClick={() => setIsOpenPriceRange((prevOpenBrand) => !prevOpenBrand)} className="cursor-pointer text-slate-800 flex items-center justify-between px-1.5 mb-6">
                            <div className="flex items-center">
                                
                                <svg width="19" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.833 9.625V17.5c0 .63-.256 1.207-.665 1.627l-.023.024a1.83 1.83 0 0 1-.163.146 2.041 2.041 0 0 1-.578.35c-.064.029-.128.052-.192.075-.228.076-.473.111-.712.111a2.48 2.48 0 0 1-.467-.046c-.075-.018-.151-.035-.227-.059a2.117 2.117 0 0 1-.268-.099c0-.006 0-.006-.006 0a2.946 2.946 0 0 1-.467-.286l-.006-.006a1.598 1.598 0 0 1-.21-.186c-.064-.07-.128-.14-.192-.216a2.94 2.94 0 0 1-.286-.467c.006-.006.006-.006 0-.006 0 0 0-.006-.006-.011a3.334 3.334 0 0 1-.093-.257c-.024-.076-.041-.152-.059-.227a2.483 2.483 0 0 1-.046-.467V9.625c0-.875.583-1.459 1.458-1.459h1.75c.875 0 1.458.584 1.458 1.459Z" stroke="#222F5D" stroke-width=".875" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12.833 16.625v1.75c0 .875-.583 1.458-1.458 1.458H3.5c.24 0 .484-.035.712-.11.064-.024.128-.047.192-.076.204-.082.403-.199.578-.35.052-.041.11-.094.163-.146l.023-.024 3.967-3.96h2.24c.875 0 1.458.583 1.458 1.458ZM2.806 19.729a2.237 2.237 0 0 1-.957-.578 2.237 2.237 0 0 1-.577-.957c.227.73.805 1.307 1.534 1.535Z" stroke="#222F5D" stroke-width=".875" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="m10.716 13.586-1.581 1.58-3.967 3.961c.409-.42.665-.997.665-1.627v-5.635l1.581-1.58c.618-.62 1.447-.62 2.065 0l1.237 1.236c.618.618.618 1.446 0 2.065ZM3.5 18.083a.583.583 0 1 0 0-1.167.583.583 0 0 0 0 1.167Z" stroke="#222F5D" stroke-width=".875" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="9.5" cy="9.5" r="9.5" fill="#AFAFAF" fill-opacity=".29"/>
                                </svg>

                                <span className="mr-2 font-bold">محدوده قیمت</span>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className={`${isOpenPriceRange && "rotate-180"} h-5 w-5 transition-all duration-200`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* content */}
                        {
                            isOpenPriceRange && <div onClick={() => setOpenFilterMobile(false)} dir="ltr" className="w-full px-4">
                                <InputRange maxValue={33000000} minValue={0} step={1000000} value={priceRanges} onChange={value => setPriceRanges(value)} />
                            </div>
                        }
                    </div>
                </div>

                
                {/* sort section in mobile */}
                <div className={`${openSortMobile ? "translate-y-0" : "translate-y-[350px]" } transition-all duration-300 overflow-scroll z-30 w-screen h-[300px] bg-white rounded-tr-3xl rounded-tl-3xl fixed bottom-0 left-0 right-0 py-8 px-5 shadow-[0_-3px_20px_0_rgba(0,0,0,0.3)]`}>
                    <div className="bg-orange-100 p-1.5 mb-3 w-fit rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 stroke-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                        </svg>
                    </div>

                    <div onClick={() => setOpenSortMobile(false)} className="flex flex-col">
                        <button onClick={() => setActiveSortBtn(1)} className={`hover:bg-gray-50 text-right py-2 rounded-md px-2 relative ${activeSortBtn === 1 && "text-slate-800 font-bold bg-gray-100"}`}>
                        <span>محبوب ترین</span>
                        {activeSortBtn === 1 && <span className="h-1.5 w-1.5 rounded-full bg-orange-600 absolute top-2.5 left-2"></span>}
                        </button>
                        <button onClick={() => setActiveSortBtn(2)} className={`hover:bg-gray-50 text-right py-2 rounded-md px-2 relative ${activeSortBtn === 2 && "text-slate-800 font-bold bg-gray-100"}`}>
                            <span>ارزان ترین</span>
                            {activeSortBtn === 2 && <span className="h-1.5 w-1.5 rounded-full bg-orange-600 absolute top-2.5 left-2"></span>}
                        </button>
                        <button onClick={() => setActiveSortBtn(3)} className={`hover:bg-gray-50 text-right py-2 rounded-md px-2 relative ${activeSortBtn === 3 && "text-slate-800 font-bold bg-gray-100"}`}>
                            <span>گران ترین</span>
                            {activeSortBtn === 3 && <span className="h-1.5 w-1.5 rounded-full bg-orange-600 absolute top-2.5 left-2"></span>}
                        </button>
                        <button onClick={() => setActiveSortBtn(4)} className={`hover:bg-gray-50 text-right py-2 rounded-md px-2 relative ${activeSortBtn === 4 && "text-slate-800 font-bold bg-gray-100"}`}>
                            <span>پرفروش ترین</span>
                            {activeSortBtn === 4 && <span className="h-1.5 w-1.5 rounded-full bg-orange-600 absolute top-2.5 left-2"></span>}
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
}
 
export default Shop;