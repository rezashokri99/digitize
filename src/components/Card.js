import Colors from "./Colors";

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
                            <Colors key={color} color={color} product={product} colorSelectedAll={colorSelectedAll} changeColorHandler={changeColorHandler} />
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