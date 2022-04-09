import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, decrease, increase } from "../../redux/cart/cartAction";

const AddToCartMobileSize = () => {

    // params id of url
    const paramsId = useParams().id;
    
    // redux state
    const product = useSelector(state => state.productsState[paramsId], shallowEqual);

    const productQuantity = useSelector(state => state.cartState[paramsId] && state.cartState[paramsId].quantity);

    const cartState = useSelector(state => state.cartState);

    // redux dispatch
    const dispatch = useDispatch();

    let prodcutsOfLs = JSON.parse(localStorage.getItem("products"));

    const [isInCard, setIsInCard] = useState(prodcutsOfLs ? prodcutsOfLs[paramsId] : {});

    

    const addToCartHandler = () => {
        dispatch(addToCart(product))
        let hasProduct = Object.keys(cartState).find((itemID) => itemID === product.id) ? cartState[product.id] : {...product, quantity:1};
        setIsInCard(hasProduct);
    }

    const increaseHanlder = () => {
        dispatch(increase(product));
        setIsInCard({...isInCard, quantity: isInCard.quantity + 1});
    }

    const decreaseHanlder = () => {
        dispatch(decrease(product));
        setIsInCard({...isInCard, quantity: isInCard.quantity - 1}); 
    }

    useEffect(() => {
        setIsInCard({...cartState[product.id]})
    },[productQuantity])
    
    return (
        // {btn add to cart }
        <div className="md:hidden bg-white dark:bg-slate-800 w-full fixed bottom-0 left-0 rounded-tr-md rounded-tl-md z-20">
            <div className="w-11/12 xs:w-96 flex items-center justify-center px-2px py-2 mx-auto">
                <div className="flex-auto flex gap-x-3">
                {
                    isInCard && isInCard.quantity ?
                    <>
                    <button onClick={increaseHanlder} className="bg-orange-500 flex  justify-center py-2 px-4 items-center text-stone-50 text-2xl rounded-md">+</button>
                    <span className="bg-white border-2 border-orange-500 flex justify-center py-2 px-3 items-center text-orange-500 text-2xl rounded-md">{isInCard.quantity}</span>
                    <button onClick={decreaseHanlder} className="bg-orange-500 flex  justify-center py-2 px-4 items-center text-stone-50 text-2xl rounded-md">-</button>
                    </>
                    :
                    <button onClick={addToCartHandler} className="bg-orange-500 flex lg:px-10  justify-center py-3 px-5 w-fit items-center text-stone-50 font-medium text-lg rounded-md">
        اضافه به سبد خرید                           
                    </button>
                }
                </div>
                <div className="flex-1 flex flex-col text-slate-800 dark:text-stone-300 ">
                <span>{product.price}</span>
                <span>تومان</span>
                </div>
            </div>
        </div>
    );
}
 
export default AddToCartMobileSize;