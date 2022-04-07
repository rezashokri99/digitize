import ShopContainer from "../components/ShopContainer";
import NavbarSection from "../components/NavbarSection";
import SidebarSection from "../components/SidebarSection";
import FooterMenu from "../components/FooterMenu";
import { Profiler, useContext, useState } from "react";
import { productsProvider } from "../contexts/ProductsContext";
import { useSelector } from "react-redux";




const ShopSection = () => {



    // const brandsSelectedHandler = () => {
    //     let allBoolBrands = [];
    //     let allTrueBrands = [];
    //     let allBrandsList = [];
    //     let allproductsFilteredByBrand = [];
    //     let allBrandsListSelected = [];
        
    //     const brandsClickedHandler = () => {
    //         for (const brand in brandslist) {

    //             allBoolBrands.push(brandslist[brand]);
                
    //             allTrueBrands = allBoolBrands.filter((booleann) => booleann === true);
                
    //             if (brandslist[brand]) {
    //                 if (allTrueBrands.length) {
    //                     allBrandsList.push(brand);
    //                     allproductsFilteredByBrand = productsForRender.filter((product) => product.brand === brand);
                        
    //                     allproductsFilteredByBrand.map((product) => allBrandsListSelected.push(product))
    //                     console.log(brand);
    //                 }
    //             }
    //         }
            
    //         if (allTrueBrands.length >= 1) {
    //             productsForRender = allBrandsListSelected;
    //         }else {
    //             console.log("object");
    //         }

    //     }
    //     brandsClickedHandler();
    // }

    // const typeHandler = () => {
    //     if (activeTypeBtn === 2) {
    //         productsForRender = productsForRender.filter((product) => product.type === "mobile" );
    //     } else if (activeTypeBtn === 3) {
    //         productsForRender = productsForRender.filter((product) => product.type === "laptop" )
    //     } else if (activeTypeBtn === 4) {
    //         productsForRender = productsForRender.filter((product) => product.type === "smartWatch" )
    //     }else {
    //         // productsForRender = [...products];
    //     }
    // }


    // const sortHandler = () => {
    //     if (activeSortBtn === 1) {
    //         productsForRender = products;
    //         typeHandler();
    //         brandsSelectedHandler();
    //     }else if (activeSortBtn === 2) {
    //         typeHandler();
    //         productsForRender = productsForRender.sort((a, b) => {
    //             return (a.price).split(",").join("") - (b.price).split(",").join("");
    //         });
    //         brandsSelectedHandler();
    //     } else if (activeSortBtn === 3) {
    //         typeHandler();
    //         productsForRender = productsForRender.sort((a, b) => {
    //             return (b.price).split(",").join("") - (a.price).split(",").join("");
    //         });
    //         brandsSelectedHandler();
    //     }else if (activeSortBtn === 4) {
    //         productsForRender = products;
    //         typeHandler();
    //         brandsSelectedHandler();
    //     }
    // }

    // sortHandler();

    

    

    return (
        <>
            <NavbarSection />
            <div className="container relative max-w-screen-2xl mx-auto px-3 grid grid-cols-12 grid-rows-[55px_minmax(300px,_1fr)] gap-4 md:mt-10">
                <SidebarSection />
                {/* <SidebarSection activeTypeBtn={activeTypeBtn} brandsListHandler={brandsListHandler} setActiveTypeBtn={setActiveTypeBtn} /> */}
                <ShopContainer />
                {/* <ShopContainer brandsListHandler={brandsListHandler} activeSortBtn={activeSortBtn} setActiveSortBtn={setActiveSortBtn} productsForRender={productsForRender} /> */}
            </div>
            <div className="w-full md:hidden bg-white p-1 fixed bottom-0 left-0 z-20 rounded-tr-md rounded-tl-md border border-t-2 shadow-[0_-4px_8px_0px_rgba(0,0,0,0.1)]">
                <FooterMenu />
            </div>
        </>
    );
}
 
export default ShopSection;