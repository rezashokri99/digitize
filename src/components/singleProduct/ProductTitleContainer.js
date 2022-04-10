import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductTitleContainer = () => {

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

    return (
        <>
            <h2 className="text-slate-800 dark:text-stone-100 text-xl font-medium mb-1">
                {product.persianName}
            </h2>
            <h3 className="text-gray-500 dark:text-stone-200">{product.englishName}</h3>
        </>
    );
}
 
export default ProductTitleContainer;