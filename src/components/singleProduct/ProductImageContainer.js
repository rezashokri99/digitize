import { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductImage = () => {

    // params id of url
    const paramsId = useParams().id;

    // redux state
    const product = useSelector(state => state.productsState[paramsId], shallowEqual);

    const [imageSelected, setImageSelected] = useState(product.images[1]);


    return (
        <>
            <img className="lg:w-[350px] mx-auto" src={imageSelected} alt="iphone13" />
            <div className="w-56 flex justify-center mx-auto gap-x-2">
            {
                product.images.map((image, index) => (
                <div key={index} onClick={() => setImageSelected(image)} className="w-1/3 mt-2 cursor-pointer border border-gray-400 p-1.5 rounded-lg"><img src={image} alt="iphone13" /></div>
                ))
            }
            </div>
        </>
    );
}
 
export default ProductImage;