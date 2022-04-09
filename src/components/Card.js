/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Colors from "./Colors";

const Card = ({id}) => {
    
    // redux prodocts
    const product = useSelector(state => state.productsState[id]);

    const [colorSelected, setColorSelected] = useState({[id]: product.colors[0]})
    
    const changeColorHandler = (e, id) => {
        console.log(e);
        console.log(id);
        let NO = (e.target.id).split(" ")[0];
        let newColor = (e.target.id).split(" ")[1];
        if (NO) {
            let colorSelectedAllCopyied = [...colorSelected];
            colorSelectedAllCopyied[id] = {[NO]: newColor}
            setColorSelected(colorSelectedAllCopyied);
        }
    }


    const navigate = useNavigate()
    const goToSingleProduct = (id) => {
        navigate(`/singleProduct/${id}`)
    }


    return (
        <div onClick={() => goToSingleProduct(product.id)} className="dark:bg-slate-700 bg-white rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-2">     
            {/* product image */}
            <div  className="bg-gray-200 dark:bg-gray-800 max-h-36 xs:max-h-44 xs:h-44 flex justify-center items-center rounded-xl p-2 shadow-md mb-5 m-[6px]">
                <img className="max-w-[90px] h-32 xs:h-36 xs:w-full" src={product.images[1]} alt="watch" />    
            </div>
            {/* product colors */}
            <div className="flex items-center justify-between mx-[10px] mb-3">
                <p className="text-gray-300 dark:text-gray-400 text-xs md:text-base">{product.brand}</p>
                <div className="flex">
                    {
                        product.colors.map((color) => (
                            <Colors key={color} color={color} product={product} colorSelected={colorSelected} changeColorHandler={changeColorHandler} />
                        ))
                    }
                </div>
            </div>
            {/* product name and price */}
            <div  className="mx-[10px] mb-4">
                <p className="text-sm dark:text-stone-100 dark:font-normal text-slate-900 font-medium mb-2 md:text-base">{product.englishName}</p>
                <p className="text-sm dark:font-normal  text-orange-600 font-medium text-left md:text-base">{product.price} تومان</p>
            </div>
            {/* prodcut buy btn */}
            <div className="flex items-center justify-center mx-[10px] mb-1 py-2 border-t dark:border-gray-500 sm:py-4 lg:py-3">
                <a href="#" className="font-bold text-base dark:text-orange-600 text-orange-500">مشاهده و سفارش</a>
            </div>

        </div>
    )
}
 
export default Card;