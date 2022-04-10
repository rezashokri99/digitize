/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { cartClear } from "../../redux/cart/cartAction";
import BarBackBtn from "../bars/BarBackBtn";
import PaymentSection from "./PaymentSection";
import ProductInCart from "./ProductInCart";



const Cart = () => {
    
    // redux state ids
    let cartStateIDS = useSelector(state => Object.keys(state.cartState), shallowEqual);

    // redux dispatch
    const dispatch = useDispatch();
    
    // openDiscount
    const [openDiscount, setOpenDiscount] = useState(false);
    


    if (cartStateIDS) {
        document.getElementById("root").classList.add("bg-slate-800")
    }else{
        document.getElementById("root").classList.remove("bg-slate-800")
    }

    const clearHandler = () => {
        dispatch(cartClear())
    }

    useEffect(() => {
        cartStateIDS = [];
    }, [cartStateIDS])


console.log("object");
  return (
    <div className="mx-auto col-span-12 w-full xs:w-[450px] sm:w-[570px] md:w-full dark:bg-slate-800">
        <div className={`${openDiscount ? "pb-60" : "pb-52"} px-3 dark:bg-slate-800 grid gap-y-9 grid-cols-12 md:gap-x-2`}>
            <div className="col-span-12 md:col-span-7 lg:col-span-8">
                
                {/* bar */}
                <BarBackBtn />

                {/* items container */}
                <div className="flex flex-col gap-y-2 ">
                    
                    {
                        cartStateIDS && cartStateIDS.map((productID) => (
                            <ProductInCart key={productID} id={productID} />
                        ))
                    }
                    
                </div>
                
            </div>

            <div className="col-span-12  md:col-span-5 lg:col-span-4 ">
                <PaymentSection openDiscount={openDiscount} setOpenDiscount={setOpenDiscount} clearHandler={clearHandler} />
            </div>
        </div>
        
    </div>
  );
};

export default Cart;
