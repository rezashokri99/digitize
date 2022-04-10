/* eslint-disable jsx-a11y/anchor-is-valid */
import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react";
import InputRange from "react-input-range";
import { useDispatch, useSelector } from "react-redux";
import BarBackBtn from "../bars/BarBackBtn";
import BarLogo from "../bars/BarLogo";
import Card from "./Card";
import { getProductsAction, changeBrandsAction, changeSortAction, selectBrandsAction, selectSortAction } from "../../redux/products/productsAction";
import SortFilter from "./SortFilter";
import BrandsFilter from "./BrandsFilter";
import Backdrop from "../backdrop/Backdrop";
import FilterSectionInMobile from "./FilterSectionInMobile";
import SortSectionInMobile from "./SortSectionInMobile";

const Shop = ({brandsListHandler, productsForRender}) => {

    // redux prodoctsIds
    const productsIDS = useSelector(state => Object.keys(state.productsState));

    // const products = useSelector(state => state.productsState);
    // let productsIDS = Object.keys(products);

    // redux all filters
    // const allFiltersState = useSelector(state => state.allFiltersState);
    // redux dispatch
    const dispatch = useDispatch();

    


    // activeSortBtn 
    // const {activeSortBtn} = allFiltersState;
    // //brandslist
    // const {brandslist} = allFiltersState;
    
    // // brands Selected Handler
    // const brandsSelectedHandler = (e) => {
    //     dispatch(changeBrandsAction(e.target.id));
    //     dispatch(selectBrandsAction(e.target.id));
    // }

    // active Sort Btn Handler
    const activeSortBtnHandler = (id) => {
        dispatch(changeSortAction(id));
        dispatch(selectSortAction(id));
    }



    

    // open and close filters in mobile size
    const [openFilterMobile, setOpenFilterMobile] = useState(false);
    const [openSortMobile, setOpenSortMobile] = useState(false);

    const backdropHandler = () => {
        setOpenSortMobile(false);
        setOpenFilterMobile(false);
    }

    // useLayoutEffect(() => {
    //     if (activeSortBtn === 1) {
    //         setFilterSortName("محبوب ترین");
    //     }else if (activeSortBtn === 2) {
    //         setFilterSortName("ارزان ترین");
    //     }else if (activeSortBtn === 3) {
    //         setFilterSortName("گران ترین");
    //     }else if (activeSortBtn === 4) {
    //         setFilterSortName("پرفروش ترین");
    //     }

    //     let trueBrands = [] ;
    //     for (const brand in brandslist) {
    //         if (brand !== "remove" ) {
    //             brandslist[brand] === true && trueBrands.push(brand)
    //         }
    //     }
        
    //     setFilterBrandsName([...trueBrands])

    // },[activeSortBtn, brandslist])
    


    return (
        <div className="pb-28 px-3 bg-gray-100 dark:bg-slate-800">
            {/* header */}
            <div>
                
                
                {/* bar */}
                <div className="mx-3">
                    <BarBackBtn />
                </div>

                {/* filter and sort btn in mobile */}
                <div className="flex justify-between items-center gap-x-2 text-center mb-9 px-6px md:hidden">

                    {/* sort filter */}
                    <SortFilter setOpenSortMobile={setOpenSortMobile} />

                    {/* brands filter */}
                    <BrandsFilter setOpenFilterMobile={setOpenFilterMobile} />
                    
                </div>

                {/* main */}
                <div className="grid grid-cols-2 gap-x-2 gap-y-8 md:gap-x-6 md:gap-y-12 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {
                        productsIDS.map((productID) => (
                            <Card key={productID} id={[productID]} />
                        ))
                    }

                </div>
                
                {/* backdrop */}
                <Backdrop openFilterMobile={openFilterMobile} openSortMobile={openSortMobile} backdropHandler={backdropHandler} />

                {/* filter section in mobile */}
                <div className={`${openFilterMobile ? "translate-y-0" : "translate-y-[550px]" } md:hidden transition-all duration-300 overflow-scroll z-30 w-screen h-[500px] bg-white dark:bg-slate-700 rounded-tr-3xl rounded-tl-3xl fixed bottom-0 left-0 right-0 py-8 px-5 shadow-[0_-3px_20px_0_rgba(0,0,0,0.3)]`}>
                    <FilterSectionInMobile setOpenFilterMobile={setOpenFilterMobile} />
                </div>

                
                {/* sort section in mobile */}
                <div className={`${openSortMobile ? "translate-y-0" : "translate-y-[350px]" } md:hidden dark:bg-slate-700 transition-all duration-300 overflow-scroll z-30 w-screen h-[300px] bg-white rounded-tr-3xl rounded-tl-3xl fixed bottom-0 left-0 right-0 py-8 px-5 shadow-[0_-3px_20px_0_rgba(0,0,0,0.3)]`}>
                    <SortSectionInMobile setOpenSortMobile={setOpenSortMobile} activeSortBtnHandler={activeSortBtnHandler} />
                </div>


            </div>
        </div>
    );
}
 
export default memo(Shop);