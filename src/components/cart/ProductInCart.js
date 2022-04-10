import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, removeItem } from "../../redux/cart/cartAction";
import Notify from "../toastify/Notify";

const ProductInCart = ({id}) => {

    // redux state
    const product = useSelector(state => state.cartState[id]);
    const productQuantity = useSelector(state => state.cartState[id].quantity);

    // redux dispatch
    const dispatch = useDispatch();

    const removeHandler = () => {
        dispatch(removeItem(product))
        // let hasProduct = cartState.find((item) => item.id === product.id) ? cartState.find((item) => item.id === product.id) : {...product, quantity:1};
        // setIsInCard(hasProduct);
        Notify(`${product.englishName} از سبد خرید حذف شد.`, "error");
    }

    const increaseHanlder = () => {
        dispatch(increase(product));
        // let hasProduct = cartState.find((item) => item.id === product.id);
        // setIsInCard({...isInCard, quantity: hasProduct.quantity});    
    }

    const decreaseHanlder = () => {
        dispatch(decrease(product));
        // let hasProduct = cartState.find((item) => item.id === product.id);
        // setIsInCard({...isInCard, quantity: hasProduct.quantity});   
    }

    return (
        <div className="flex h-28 items-stretch justify-between bg-white dark:bg-slate-700 rounded-lg py-3 px-2 sm:h-[120px] shadow-lg">

            <div className="">
                <img className="w-14 h-full" src={product.images[1]} alt="image1" />
            </div>
            <div className="flex flex-col justify-between pb-2 pt-1 text-sm sm:text-base flex-1 mr-1 sm:mr-2 font-medium dark:font-normal">
                <span className="text-slate-800 dark:text-stone-100">
                    {product.persianName}
                </span>
                <span className="text-orange-600 ">
                    {product.price}
                </span>
            </div>
            <div className="flex flex-col justify-between items-end">
                <span onClick={removeHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-5 w-5 sm:h-6 sm:w-6 stroke-orange-500 dark:stroke-orange-600 -mt-1" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
                <div className="flex items-center gap-x-[6px] sm:gap-x-2">
                    <span onClick={increaseHanlder} className="cursor-pointer h-7 w-7 flex items-center justify-center rounded-full bg-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-slate-800" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </span>
                    <span className="select-none h-9 w-6 flex justify-center items-center border border-orange-500 dark:border-orange-600 dark:text-stone-100 rounded">{product.quantity}</span>
                    <span onClick={decreaseHanlder} className="cursor-pointer h-7 w-7 flex items-center justify-center rounded-full bg-orange-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-orange-500 dark:stroke-orange-600" fill="none" viewBox="0 0 24 24" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                        </svg>
                    </span>
                </div>
            </div>

        </div>
    );
}
 
export default ProductInCart;