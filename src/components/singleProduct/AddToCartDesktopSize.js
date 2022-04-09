import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, decrease, increase } from "../../redux/cart/cartAction";

const AddToCartDesktopSize = () => {
    
    // params id of url
    const paramsId = useParams().id;

    // redux state
    const product = useSelector(state => state.productsState[paramsId], shallowEqual);
    const cartState = useSelector(state => state.cartState);

    // redux dispatch
    const dispatch = useDispatch();

    let prodcutsOfLs = JSON.parse(localStorage.getItem("products"));
    let carts =[];
    if (prodcutsOfLs) {
        carts = prodcutsOfLs
    }

    const [isInCard, setIsInCard] = useState(carts.find((item) => item.id === product.id));
  

    

    const addToCartHandler = () => {
        dispatch(addToCart(product))
        let hasProduct = cartState.find((item) => item.id === product.id) ? cartState.find((item) => item.id === product.id) : {...product, quantity:1};
        setIsInCard(hasProduct);
    }

    const increaseHanlder = () => {
        dispatch(increase(product));
        let hasProduct = cartState.find((item) => item.id === product.id);
        setIsInCard({...isInCard, quantity: hasProduct.quantity});    
    }

    const decreaseHanlder = () => {
        dispatch(decrease(product));
        let hasProduct = cartState.find((item) => item.id === product.id);
        setIsInCard({...isInCard, quantity: hasProduct.quantity});   
    }
    
    return (
        <div className={`${isInCard && isInCard.quantity && "flex md:w-56 md:justify-end md:gap-x-1 lg:justify-center lg:gap-x-3 items-center lg:w-full"}`}>
            {
                isInCard && isInCard.quantity ?
                <>
                <button onClick={increaseHanlder} className="bg-orange-500 dark:bg-orange-600 flex md:px-5  justify-center py-2 px-5 items-center text-stone-50 text-2xl rounded-md">+</button>
                <span className="bg-white border-2 border-orange-500 flex md:px-3 justify-center py-2 px-5 items-center text-orange-500 dark:text-orange-600 text-2xl rounded-md">{isInCard.quantity}</span>
                <button onClick={decreaseHanlder} className="bg-orange-500 dark:bg-orange-600 flex md:px-5  justify-center py-2 px-5 items-center text-stone-50 text-2xl rounded-md">-</button>
                </>
                :
                <button onClick={addToCartHandler} className="bg-orange-500 dark:bg-orange-600 flex lg:px-10  justify-center py-3 px-5 w-fit items-center text-stone-50 font-medium text-lg rounded-md">
اضافه به سبد خرید                           
                </button>
            }
        </div>
    );
}
 
export default AddToCartDesktopSize;