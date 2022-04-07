/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";
import Colors from "./Colors";

const Card = ({product, colorSelectedAll ,changeColorHandler}) => {
    
    const navigate = useNavigate()
    const goToSingleProduct = (id) => {
        navigate(`/singleProduct/${id}`)
    }

    const addToCart = () => {
        let prodcutsOfLs = JSON.parse(localStorage.getItem("products"));
        let carts =[];
        if (prodcutsOfLs) {
            carts = prodcutsOfLs
        }
        
        if (!carts.find((item) => item.id === product.id)) {
            carts.push({...product, quantity: 1})
            localStorage.setItem("products", JSON.stringify(carts));
        }else {
            const index = carts.findIndex((item) => item.id === product.id); 
            const find = carts.find((item) => item.id === product.id);
            find.quantity++;
            carts[index] = find;
            localStorage.setItem("products", JSON.stringify(carts));
        }

    }


    return (
        <div className="bg-white rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-2">     
            {/* product image */}
            <div  onClick={() => goToSingleProduct(product.id)} className="bg-gray-200 max-h-36 xs:max-h-44 xs:h-44 flex justify-center items-center rounded-xl p-2 shadow-md mb-5 m-[6px]">
                <img className="max-w-[90px] h-32 xs:h-36 xs:w-full" src={product.images[1]} alt="watch" />    
            </div>
            {/* product colors */}
            <div className="flex items-center justify-between mx-[10px] mb-3">
                <p onClick={() => goToSingleProduct(product.id)} className="text-gray-300 text-xs md:text-base">{product.brand}</p>
                <div className="flex">
                    {
                        product.colors.map((color) => (
                            <Colors key={color} color={color} product={product} colorSelectedAll={colorSelectedAll} changeColorHandler={changeColorHandler} />
                        ))
                    }
                </div>
            </div>
            {/* product name and price */}
            <div  onClick={() => goToSingleProduct(product.id)} className="mx-[10px] mb-3">
                <p className="text-sm text-slate-900 font-medium mb-2 md:text-base">{product.englishName}</p>
                <p className="text-sm text-orange-600 font-medium text-left md:text-base">{product.price} تومان</p>
            </div>
            {/* prodcut buy btn */}
            <div onClick={addToCart} className="flex items-center justify-center mx-[10px] py-2 border-t sm:py-4 lg:py-3">
                <a href="#" className="font-bold text-base text-orange-500">مشاهده و سفارش</a>
            </div>

        </div>
    )
}
 
export default Card;