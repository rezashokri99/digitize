import { memo } from "react";
import Shop from "./Shop";
import SortSection from "./SortSection";

const ShopContainer = () => {
    return (
        <>
            {/* sort section */}
            <div className="bg-white hidden mx-3 md:block md:col-span-9 lg:col-span-10 rounded-md"><SortSection /></div>
            {/* <div className="bg-white hidden md:block md:col-span-9 lg:col-span-10 rounded-md"><SortSection activeSortBtn={activeSortBtn} setActiveSortBtn={setActiveSortBtn} productsForRender={productsForRender} /></div> */}
            
            {/* products section */}
            <div className="col-span-12 md:col-span-9 lg:col-span-10"><Shop /></div>
            {/* <div className="col-span-12 md:col-span-9 lg:col-span-10"><Shop brandsListHandler={brandsListHandler} activeSortBtn={activeSortBtn} setActiveSortBtn={setActiveSortBtn} productsForRender={productsForRender} /></div> */}
        </>
    );
}
 
export default memo(ShopContainer);