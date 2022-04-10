import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, decrease, increase } from "../../redux/cart/cartAction";

const AddToCartDesktopSize = () => {
    
    // params id of url
    const paramsId = useParams().id;

    // redux state
    const products = useSelector(state => state.productsState, shallowEqual);

    let ID = "";
    for (const product in products) {
      if (products[product].id === (+paramsId)) {
        ID = +product;
      }
    }
    
    const product = useSelector(state => state.productsState[ID], shallowEqual);

    const productQuantity = useSelector(state => state.cartState[[paramsId]] && state.cartState[paramsId].quantity);

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