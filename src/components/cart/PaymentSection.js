/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartClear } from "../../redux/cart/cartAction";

const PaymentSection = ({clearHandler, openDiscount, setOpenDiscount}) => {

    const cartStateIDS = useSelector(state => Object.keys(state.cartState));
    const cartState = useSelector(state => state.cartState);

    

    // keys all price
    const allPrice = cartStateIDS.reduce((sum, productID) => {
        return sum += (+(cartState[productID].price).split(",").join("") * cartState[productID].quantity)
    },0)

    
    
    


    return (
        <>
            <div className={`${openDiscount ? "h-64 md:h-[410px]" : "h-32 md:h-64" }  md:sticky relative flex flex-col items-stretch justify-between bg-white dark:bg-slate-700 rounded-lg py-6 md:py-4 md:px-4 px-7 shadow-lg`}>
                <div className={`${openDiscount && "mb-6"} flex justify-between items-center`}>
                    <span className="text-slate-900 dark:text-stone-100 font-medium">
                            مجموع قیمت:                             
                    </span>
                    <span className="text-orange-700 dark:text-orange-600 text-[17px] font-medium">
                        {allPrice.toLocaleString('en-US')} تومان                             
                    </span>
                </div>
                <div>
                    <span onClick={() => setOpenDiscount(true)} className={`${openDiscount && "hidden"} text-slate-800 dark:text-gray-300 text-xs font-medium`}>
                        کد تخفیف دارید؟                             
                    </span>
                    <div className={`${!openDiscount && "hidden"}`}>
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-slate-800 dark:text-gray-300 text-sm font-medium">
                                کد تخفیف:                                   
                            </span>
                            <div className="flex items-center w-36 h-9 rounded-md overflow-hidden border  border-gray-400">
                                <input dir="ltr" className="block w-full h-full p-1 text-center focus:outline-hidden border-none" type="text" placeholder="123ABC" />
                                <a className="bg-orange-400 dark:bg-orange-500 p-2.5 flex items-center justify-center h-full text-stone-100" href="#">
                                    تایید                                       
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-between mb-12">
                            <span className="text-slate-900 dark:text-stone-100 font-medium">
                            تخفیف:                                      
                            </span>
                            <span className="text-slate-900 dark:text-gray-300 text-[17px] font-medium">
                                {allPrice ? 2250000 : 0 } تومان
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-900 dark:text-stone-50 font-medium">
                                قیمت نهایی:                                     
                            </span>
                            <span className="text-orange-700 dark:text-orange-600 text-[17px] font-medium">
                            {allPrice ? (allPrice - 2250000).toLocaleString('en-US') : 0} تومان                                   
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full  fixed md:static md:mt-5 bottom-[74px] left-0 right-0 rounded-tr-md rounded-tl-md z-20">
                    <div className="w-11/12 md:w-full xs:w-96 flex gap-y-2 flex-col px-2px py-2 mx-auto">
                        <div className="flex-auto">
                            <button className="bg-orange-500 w-full flex justify-center py-4 px-7 items-center text-stone-50 font-medium text-xl rounded-md">
ادامه فرآیند خرید                                   
                            </button>
                        </div>
                        <div className="flex-auto hidden md:block">
                            <button onClick={clearHandler} className="bg-transparent border-2 border-orange-500 w-full flex justify-center py-4 px-7 items-center text-orange-500 font-medium text-xl rounded-md">
انصراف از خرید                                      
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}
 
export default PaymentSection;