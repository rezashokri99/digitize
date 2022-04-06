/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import image from "../images/Cart/2.png";
import BarBackBtn from "./BarBackBtn";



const Cart = () => {

    const [openDiscount, setOpenDiscount] = useState(false)

  return (
    <div className="mx-auto col-span-12 w-full xs:w-[450px] sm:w-[570px] md:w-full ">
        <div className={`${openDiscount ? "pb-60" : "pb-52"} grid gap-y-9 grid-cols-12 md:gap-x-2`}>
            <div className="col-span-12 md:col-span-7 lg:col-span-8">
                
                {/* bar */}
                <BarBackBtn />

                {/* items container */}
                <div className="flex flex-col gap-y-2">
                    <div className="flex h-28 items-stretch justify-between bg-white rounded-lg py-3 px-2 sm:h-[120px] shadow-lg">
                        <div className="">
                            <img className="w-14 h-full" src={image} alt="image1" />
                        </div>
                        <div className="flex flex-col justify-between pb-2 pt-1 text-sm sm:text-base flex-1 mr-1 sm:mr-2 font-medium">
                            <span className="text-slate-800">
                                ساعت هوشمنده اپل سری 7                  
                            </span>
                            <span className="text-orange-600">
                            2,250,000 تومان                 
                            </span>
                        </div>
                        <div className="flex flex-col justify-between items-end">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 stroke-orange-500 -mt-1" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </span>
                            <div className="flex items-center gap-x-[6px] sm:gap-x-2">
                                <span className="w-[18px] h-[18px] sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 stroke-slate-800" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>
                                </span>
                                <span className="w-5 h-7 sm:h-9 sm:w-6 flex justify-center items-center border border-orange-500 rounded">1</span>
                                <span className="w-[18px] h-[18px] sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-orange-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 stroke-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-28 items-stretch justify-between bg-white rounded-lg py-3 px-2 sm:h-[120px] shadow-lg">
                    <div className="">
                        <img className="w-14 h-full" src={image} alt="image1" />
                    </div>
                    <div className="flex flex-col justify-between pb-2 pt-1 text-sm sm:text-base flex-1 mr-1 sm:mr-2 font-medium">
                        <span className="text-slate-800">
                            ساعت هوشمنده اپل سری 7                  
                        </span>
                        <span className="text-orange-600">
                        2,250,000 تومان                 
                        </span>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 stroke-orange-500 -mt-1" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                        <div className="flex items-center gap-x-[6px] sm:gap-x-2">
                            <span className="w-[18px] h-[18px] sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 stroke-slate-800" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </span>
                            <span className="w-5 h-7 sm:h-9 sm:w-6 flex justify-center items-center border border-orange-500 rounded">1</span>
                            <span className="w-[18px] h-[18px] sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-orange-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 stroke-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex h-28 items-stretch justify-between bg-white rounded-lg py-3 px-2 sm:h-[120px] shadow-lg">
                    <div className="">
                        <img className="w-14 h-full" src={image} alt="image1" />
                    </div>
                    <div className="flex flex-col justify-between pb-2 pt-1 text-sm sm:text-base flex-1 mr-1 sm:mr-2 font-medium">
                        <span className="text-slate-800">
                            ساعت هوشمنده اپل سری 7                  
                        </span>
                        <span className="text-orange-600">
                        2,250,000 تومان                 
                        </span>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 stroke-orange-500 -mt-1" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                        <div className="flex items-center gap-x-[6px] sm:gap-x-2">
                            <span className="w-[18px] h-[18px] sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 stroke-slate-800" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </span>
                            <span className="w-5 h-7 sm:h-9 sm:w-6 flex justify-center items-center border border-orange-500 rounded">1</span>
                            <span className="w-[18px] h-[18px] sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-orange-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 stroke-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex h-28 items-stretch justify-between bg-white rounded-lg py-3 px-2 sm:h-[120px] shadow-lg">
                    <div className="">
                        <img className="w-14 h-full" src={image} alt="image1" />
                    </div>
                    <div className="flex flex-col justify-between pb-2 pt-1 text-sm sm:text-base flex-1 mr-1 sm:mr-2 font-medium">
                        <span className="text-slate-800">
                            ساعت هوشمنده اپل سری 7                  
                        </span>
                        <span className="text-orange-600">
                        2,250,000 تومان                 
                        </span>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 stroke-orange-500 -mt-1" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                        <div className="flex items-center gap-x-[6px] sm:gap-x-2">
                            <span className="w-[18px] h-[18px] sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 stroke-slate-800" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </span>
                            <span className="w-5 h-7 sm:h-9 sm:w-6 flex justify-center items-center border border-orange-500 rounded">1</span>
                            <span className="w-[18px] h-[18px] sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-orange-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 stroke-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex h-28 items-stretch justify-between bg-white rounded-lg py-3 px-2 sm:h-[120px] shadow-lg">
                    <div className="">
                        <img className="w-14 h-full" src={image} alt="image1" />
                    </div>
                    <div className="flex flex-col justify-between pb-2 pt-1 text-sm sm:text-base flex-1 mr-1 sm:mr-2 font-medium">
                        <span className="text-slate-800">
                            ساعت هوشمنده اپل سری 7                  
                        </span>
                        <span className="text-orange-600">
                        2,250,000 تومان                 
                        </span>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 stroke-orange-500 -mt-1" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                        <div className="flex items-center gap-x-[6px] sm:gap-x-2">
                            <span className="w-[18px] h-[18px] sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 stroke-slate-800" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </span>
                            <span className="w-5 h-7 sm:h-9 sm:w-6 flex justify-center items-center border border-orange-500 rounded">1</span>
                            <span className="w-[18px] h-[18px] sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-orange-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 stroke-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex h-28 items-stretch justify-between bg-white rounded-lg py-3 px-2 sm:h-[120px] shadow-lg">
                    <div className="">
                        <img className="w-14 h-full" src={image} alt="image1" />
                    </div>
                    <div className="flex flex-col justify-between pb-2 pt-1 text-sm sm:text-base flex-1 mr-1 sm:mr-2 font-medium">
                        <span className="text-slate-800">
                            ساعت هوشمنده اپل سری 7                  
                        </span>
                        <span className="text-orange-600">
                        2,250,000 تومان                 
                        </span>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 stroke-orange-500 -mt-1" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                        <div className="flex items-center gap-x-[6px] sm:gap-x-2">
                            <span className="w-[18px] h-[18px] sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 stroke-slate-800" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </span>
                            <span className="w-5 h-7 sm:h-9 sm:w-6 flex justify-center items-center border border-orange-500 rounded">1</span>
                            <span className="w-[18px] h-[18px] sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-orange-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 stroke-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div><div className="flex h-28 items-stretch justify-between bg-white rounded-lg py-3 px-2 sm:h-[120px] shadow-lg">
                    <div className="">
                        <img className="w-14 h-full" src={image} alt="image1" />
                    </div>
                    <div className="flex flex-col justify-between pb-2 pt-1 text-sm sm:text-base flex-1 mr-1 sm:mr-2 font-medium">
                        <span className="text-slate-800">
                            ساعت هوشمنده اپل سری 7                  
                        </span>
                        <span className="text-orange-600">
                        2,250,000 تومان                 
                        </span>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 stroke-orange-500 -mt-1" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </span>
                        <div className="flex items-center gap-x-[6px] sm:gap-x-2">
                            <span className="w-[18px] h-[18px] sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 stroke-slate-800" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </span>
                            <span className="w-5 h-7 sm:h-9 sm:w-6 flex justify-center items-center border border-orange-500 rounded">1</span>
                            <span className="w-[18px] h-[18px] sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-orange-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 stroke-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                    
                </div>
                
            </div>

            <div className="col-span-12 md:col-span-5 lg:col-span-4">
                <div className={`${openDiscount ? "h-64 md:h-[410px]" : "h-32 md:h-64" } md:sticky relative flex flex-col items-stretch justify-between bg-white rounded-lg py-6 md:py-4 md:px-4 px-7 shadow-lg`}>
                    <div className={`${openDiscount && "mb-6"} flex justify-between items-center`}>
                        <span className="text-slate-900 font-medium">
                                مجموع قیمت:                             
                        </span>
                        <span className="text-orange-700 text-[17px] font-medium">
                            6,650,000 تومان                             
                        </span>
                    </div>
                    <div>
                        <span onClick={() => setOpenDiscount(true)} className={`${openDiscount && "hidden"} text-slate-800 text-xs font-medium`}>
                            کد تخفیف دارید؟                             
                        </span>
                        <div className={`${!openDiscount && "hidden"}`}>
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-slate-800 text-sm font-medium">
                                    کد تخفیف:                                   
                                </span>
                                <div className="flex items-center w-36 h-9 rounded-md overflow-hidden border border-gray-400">
                                    <input dir="ltr" className="block w-full h-full p-1 text-center focus:outline-hidden border-none" type="text" placeholder="123ABC" />
                                    <a className="bg-orange-400 p-2.5 flex items-center justify-center h-full text-stone-100" href="#">
                                        تایید                                       
                                    </a>
                                </div>
                            </div>
                            <div className="flex justify-between mb-12">
                                <span className="text-slate-900 font-medium">
                                تخفیف:                                      
                                </span>
                                <span className="text-slate-900 text-[17px] font-medium">
250,000 تومان                                   
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-900 font-medium">
                                    قیمت نهایی:                                     
                                </span>
                                <span className="text-orange-700 text-[17px] font-medium">
                                6,440,000 تومان                                   
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full fixed md:static md:mt-5 bottom-[74px] left-0 right-0 rounded-tr-md rounded-tl-md z-20">
                        <div className="w-11/12 md:w-full xs:w-96 flex gap-y-2 flex-col px-2px py-2 mx-auto">
                            <div className="flex-auto">
                                <button className="bg-orange-500 w-full flex justify-center py-4 px-7 items-center text-stone-50 font-medium text-xl rounded-md">
ادامه فرآیند خرید                                   
                                </button>
                            </div>
                            <div className="flex-auto hidden md:block">
                                <button className="bg-transparent border-2 border-orange-500 w-full flex justify-center py-4 px-7 items-center text-orange-500 font-medium text-xl rounded-md">
انصراف از خرید                                      
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        
    </div>
  );
};

export default Cart;
