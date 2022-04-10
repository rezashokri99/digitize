const Colors = ({color, product, place, colorSelected ,changeColorHandler}) => {
    
    
    
    if (colorSelected[product.id] !== undefined) return (
        <div onClick={(e) => changeColorHandler(e, product.id)} id={`${product.colorType} ${color}`} className={`${colorSelected[product.id] === color && `${color === "white" ? ` ring-2 ring-white` : color === "indigo" ? `  ring-2 ring-indigo-600` : color === "yellow" ? `  ring-2 ring-yellow-400` : color === "orange" ? `  ring-2 ring-orange-500` : ""}` } flex justify-center items-center ${place === "singleProduct" ? "w-6 h-6 sm:w-7 sm:h-7" : "w-4 h-4 sm:w-5 sm:h-5"} rounded-full ${color === "white" ? "bg-gray-50" : color === "indigo" ? `bg-indigo-600` : color === "yellow" ? ` bg-yellow-400` : color === "orange" ? ` bg-orange-500` : ""}  border ${color === "white" ? "border-gray-400" : `border-white dark:border-gray-400`} cursor-pointer -ml-1`}>
            <svg  xmlns="http://www.w3.org/2000/svg" className={`${colorSelected[product.id] === color ? "" : "hidden "} ${place === "singleProduct" ? "h-5 w-5 sm:h-6 sm:w-6" : "h-3 w-3 sm:h-4 sm:w-4"} ${color === "white" ? `text-gray-800` : `text-white`}`}  viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
        </div>
    )
    else if(product.id) return ( 
        <div onClick={(e) => changeColorHandler(e, product.id)} id={`${product.colorType} ${color}`} className={`${colorSelected[product.id] === color && `${color === "white" ? ` ring-2 ring-white` : color === "indigo" ? `  ring-2 ring-indigo-600` : color === "yellow" ? `  ring-2 ring-yellow-400` : color === "orange" ? `  ring-2 ring-orange-500` : ""}` } flex justify-center items-center ${place === "singleProduct" ? "w-6 h-6 sm:w-7 sm:h-7" : "w-4 h-4 sm:w-5 sm:h-5"} rounded-full ${color === "white" ? "bg-gray-50" : color === "indigo" ? `bg-indigo-600` : color === "yellow" ? ` bg-yellow-400` : color === "orange" ? ` bg-orange-500` : ""}  border ${color === "white" ? "border-gray-400" : `border-white`} cursor-pointer -ml-1`}>
            {/* {console.log(colorSelected[product.id] === color)} */}
            {/* {console.log(colorSelected[product.id])} */}
            <svg  xmlns="http://www.w3.org/2000/svg" className={`${colorSelected[product.id] === color ? "" : "hidden "} ${place === "singleProduct" ? "h-5 w-5 sm:h-6 sm:w-6" : "h-3 w-3 sm:h-4 sm:w-4"} ${color === "white" ? `text-gray-800` : `text-white`}`}  viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
        </div>
    )
    else return <></>
}
 
export default Colors;