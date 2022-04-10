import { useLayoutEffect, useState } from "react";
import BarBackBtn from "../bars/BarBackBtn";
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import AddToCartDesktopSize from "./AddToCartDesktopSize";
import AddToCartMobileSize from "./AddToCartMobileSize";
import BreadcrumbMobile from "./BreadcrumbMobile";
import BreadcrumbDesktop from "./BreadcrumbDesktop";
import ProductImageContainer from "./ProductImageContainer";
import ProductTitleContainer from "./ProductTitleContainer";
import ProductColorsContainer from "./ProductColorsContainer";
import ProductAttributesDesktop from "./ProductAttributesDesktop";
import SellerInfoDesktop from "./SellerInfoDesktop";
import SellerInfoMobile from "./SellerInfoMobile";
import ProductAttributesTablet from "./ProductAttributesTablet";
import ProductReview from "./ProductReview";
import ProductAllAtributes from "./ProductAllAtributes";
import { ToastContainer } from "react-toastify";



const SingleProductContainer = () => {
  

  useLayoutEffect(() => {
    window.scrollTo("0px", "0px");
  }, [])

  return (
    <>
      {/* breadcrumb desktop */}
      <div className="bg-white dark:bg-slate-700 hidden md:flex items-center md:col-span-9 lg:col-span-10 rounded-md">
        <div className="flex items-end gap-x-1.5 text-base pr-6px">
        <BreadcrumbDesktop />
          
        </div>
      </div>



      {/* product container */}
      <div className="md:bg-white  dark:bg-slate-700 col-span-12 md:col-span-9 lg:col-span-10">
        
        {/* breadcrumb desktop */}
        <div className="dark:bg-slate-800">
          {/* bar */}
          <BarBackBtn />
        </div>

        {/* breadcrumb mobile */}
        <div className="flex md:hidden  items-end gap-x-1.5 text-xs mb-10 pr-6px">
          <BreadcrumbMobile />
        </div>




        {/* product info */}
        <div className="w-full dark:bg-slate-700 rounded-lg">
          <div className="flex flex-col lg:flex-row w-full">
            {/* product image */}
            <div className="lg:w-1/3 mb-8 md:pt-5 lg:max-w-[300px]">
              <ProductImageContainer />
            </div>

            {/* product desc */}
            <div className="lg:pt-10 lg:w-1/3 xl:mr-5">
              {/* product title */}
                <div className="w-full lg:text-right text-center mb-11">
                  <ProductTitleContainer />
                </div>

                {/* product colors */}
                <div className="flex items-center lg:justify-start justify-center mx-auto mb-7">
                  <ProductColorsContainer />
                </div>

                {/* product attributes */}
                <div className="hidden dark:bg-slate-700 lg:flex justify-start bg-white xs:w-[430px] sm:w-[500px] md:w-full mx-auto flex-col rounded-xl text-slate-800 dark:text-stone-200 mb-3">
                  <ProductAttributesDesktop />
                </div>

            </div>




            {/* seller info desktop */}
            <div className="lg:pt-10 lg:w-1/3 w-full hidden md:block mx-auto px-10 lg:px-0">
                <SellerInfoDesktop />
              </div>

            {/* seller info mobile */}
            <div className="md:hidden  flex items-center flex-wrap gap-y-2 w-80 mx-auto mb-7">
              <SellerInfoMobile />
            </div>
          </div>



            




          {/* product attributes */}
          <div className="bg-white dark:bg-slate-800 xs:w-[430px] sm:w-[500px] md:w-full lg:hidden md:mb-10 md:px-6 mx-auto flex flex-col p-5 rounded-xl text-slate-800 mb-3">
            <ProductAttributesTablet />
          </div>

          {/* product Review */}
          <div className="bg-white dark:bg-slate-800 dark:text-stone-200 w-full xs:w-[430px] sm:w-[500px] md:w-full md:mb-10 md:px-6 flex flex-col p-5 rounded-xl mx-auto text-slate-800 mb-3">
             <ProductReview />
          </div>

            {/* product attributes 2 */}
            <div className="bg-white dark:bg-slate-800 dark:text-stone-200 xs:w-[430px] sm:w-[500px] md:w-full md:px-6 md:mb-10 mx-auto flex flex-col py-3 px-5 rounded-xl text-slate-800">
                <ProductAllAtributes />
            </div>

            <div className="h-24">

            </div>



        </div>



      </div>
      
      <AddToCartMobileSize />


    </>
    
  );
};

export default SingleProductContainer;
