import { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Colors from "../Colors";

const ProductColorsContainer = () => {

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

    const [colorSelected, setColorSelected] = useState({[(+paramsId)]: product.colors[0]})
    
    const changeColorHandler = (e, id) => {
        let NO = (e.target.id).split(" ")[0];
        let newColor = (e.target.id).split(" ")[1];
        if (NO) {
          let colorSelectedAllCopyied = {...colorSelected};
          colorSelectedAllCopyied[id] = newColor;
          console.log(colorSelectedAllCopyied);
            setColorSelected(colorSelectedAllCopyied);
        }
    }

    return (
        <>
            <p className="font-medium text-lg text-slate-800 dark:text-stone-300">انتخاب رنگ:</p>
            <div className="flex mr-28 md:mr-48 lg:mr-20 xl:mr-28">
            {product.colors.map((color) => (
                <Colors
                place="singleProduct"
                key={color}
                color={color}
                product={product}
                colorSelected={colorSelected}
                changeColorHandler={changeColorHandler}
                />
            ))}
            </div>
        </>
    );
}
 
export default ProductColorsContainer;