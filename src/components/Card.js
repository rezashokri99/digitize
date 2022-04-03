const Card = ({product, colorSelectedAll ,changeColorHandler}) => {
    return (
        <div className="bg-white rounded-lg shadow-md" key={product.id}>     
            {/* product image */}
            <div className="bg-gray-200 rounded-xl p-2 shadow-md mb-5 m-[6px]">
                <img className="h-full" src={product.image} alt="watch" />    
            </div>
            {/* product colors */}
            <div className="flex items-center justify-between mx-[10px] mb-3">
                <p className="text-gray-300 text-xs md:text-base">اپل</p>
                <div className="flex">
                    {
                        product.colors.map((color) => (
                            <div key={color} onClick={(e) => changeColorHandler(e, product.id)} id={`${product.colorType} ${color}`} className={`${colorSelectedAll[product.id][product.colorType] === color && `${color === "white" ? `z-10 ring-2 ring-white` : color === "indigo" ? ` z-10 ring-2 ring-indigo-600` : color === "yellow" ? ` z-10 ring-2 ring-yellow-400` : color === "orange" ? ` z-10 ring-2 ring-orange-500` : ""}` } flex justify-center items-center w-4 h-4 sm:w-5 sm:h-5 rounded-full ${color === "white" ? "bg-gray-50" : color === "indigo" ? `bg-indigo-600` : color === "yellow" ? ` bg-yellow-400` : color === "orange" ? ` bg-orange-500` : ""}  border ${color === "white" ? "border-gray-300" : `border-white`} cursor-pointer -ml-1`}>
                                                            
                                <svg  xmlns="http://www.w3.org/2000/svg" className={`${colorSelectedAll[product.id][product.colorType] === color ? "z-20" : "hidden z-10"} h-3 w-3 sm:h-4 sm:w-4 ${color === "white" ? `text-gray-800` : `text-white`}`}  viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
            {/* product name and price */}
            <div className="mx-[10px] mb-3">
                <p className="text-sm text-slate-900 font-medium mb-2 md:text-base">{product.title}</p>
                <p className="text-sm text-orange-600 font-medium text-left md:text-base">{product.price}</p>
            </div>
            {/* prodcut buy btn */}
            <div className="flex items-center justify-center mx-[10px] py-2 border-t sm:py-4 lg:py-3">
                <a href="#" className="font-bold text-base text-orange-500">مشاهده و سفارش</a>
            </div>

        </div>
    )
}
 
export default Card;