/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Card from "../components/Card";
import watchOne from "../images/Cart/1.png";
import logo from "../images/logo.svg";

const Shop = () => {

    const [products, setProducts] = useState([
        {id: 0, title: "ساعت اپل سری 6", price: "4,250,200 تومان",image: watchOne, colorType:"Zero" ,colors: ["indigo", "yellow", 'white']},
        {id: 1, title: "ساعت اپل سری 6", price: "4,250,200 تومان",image: watchOne, colorType:"One" ,colors: ["indigo", "orange", "yellow", 'white']},
        {id: 2, title: "ساعت اپل سری 7", price: "4,250,200 تومان",image: watchOne, colorType:"Two" ,colors: ["indigo", "orange"]},
        {id: 3, title: "ساعت اپل سری 5", price: "4,250,200 تومان",image: watchOne, colorType:"There" ,colors: ["indigo", "orange", "yellow"]},
        {id: 4, title: "ساعت اپل سری 7", price: "4,250,200 تومان",image: watchOne, colorType:"Four" ,colors: ["indigo", "orange", "yellow"]},
        {id: 5, title: "ساعت اپل سری 4", price: "4,250,200 تومان",image: watchOne, colorType:"Five" ,colors: ["indigo", "orange", "yellow"]},
        {id: 6, title: "ساعت اپل سری 5", price: "4,250,200 تومان",image: watchOne, colorType:"Six" ,colors: ["indigo", "orange", "yellow"]},
        {id: 7, title: "ساعت اپل سری 7", price: "4,250,200 تومان",image: watchOne, colorType:"Eight" ,colors: ["indigo", "orange", "yellow"]},
        {id: 8, title: "ساعت اپل سری 6", price: "4,250,200 تومان",image: watchOne, colorType:"Nine" ,colors: ["indigo", "orange", "yellow"]},
        {id: 9, title: "ساعت اپل سری 6", price: "4,250,200 تومان",image: watchOne, colorType:"Ten" ,colors: ["indigo", "orange", "yellow"]},
        {id: 10, title: "ساعت اپل سری 6", price: "4,250,200 تومان",image: watchOne, colorType:"Ten" ,colors: ["indigo", "orange", "yellow"]},
        {id: 11, title: "ساعت اپل سری 6", price: "4,250,200 تومان",image: watchOne, colorType:"Ten" ,colors: ["indigo", "orange", "yellow"]},
        {id: 12, title: "ساعت اپل سری 6", price: "4,250,200 تومان",image: watchOne, colorType:"Ten" ,colors: ["indigo", "orange", "yellow"]},
        {id: 13, title: "ساعت اپل سری 6", price: "4,250,200 تومان",image: watchOne, colorType:"Ten" ,colors: ["indigo", "orange", "yellow"]},
        {id: 14, title: "ساعت اپل سری 6", price: "4,250,200 تومان",image: watchOne, colorType:"Ten" ,colors: ["indigo", "orange", "yellow"]},
        {id: 15, title: "ساعت اپل سری 6", price: "4,250,200 تومان",image: watchOne, colorType:"Ten" ,colors: ["indigo", "orange", "yellow"]},
    ])

    const [colorSelectedAll, setColorSelectedAll] = useState(
        products.map((prodcut) => {
            return {[prodcut.colorType]: prodcut.colors[0]}
        })
    )
    
    
    const changeColorHandler = (e, id) => {
        let NO = (e.target.id).split(" ")[0];
        let newColor = (e.target.id).split(" ")[1];
        if (NO) {
            let colorSelectedAllCopyied = [...colorSelectedAll];
            colorSelectedAllCopyied[id] = {[NO]: newColor}
            setColorSelectedAll(colorSelectedAllCopyied);
        }
    }


    return (
        <div className="px-4 md:p-0 bg-gray-100">
            {/* header */}
            <div>
                
                {/* bar */}
                <div className="flex items-center justify-between pt-11 mb-6 px-6px md:hidden">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="text-slate-800 font-bold text-2xl">ساعت هوشمند</div>
                    <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                {/* filter */}
                <div className="flex justify-between items-center gap-x-2 text-center mb-9 px-6px md:hidden">

                    <div className="w-1/2 bg-white rounded-md h-11 flex items-center justify-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 ml-1 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                            </svg>
                        </div>
                        <span className="text-slate-800 text-base font-medium">محبوب ترین</span>
                    </div>

                    <div className="w-1/2 bg-white rounded-md h-11 flex items-center justify-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                        </div>
                        <span className="text-slate-800 text-base font-medium ml-3">فیلتر: برند اپل</span>
                    </div>
                    
                </div>

                {/* main */}
                <div className="grid grid-cols-2 gap-x-2 gap-y-8 md:gap-x-6 md:gap-y-12 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {
                        products.map((product, index) => (
                            <Card key={index} product={product} colorSelectedAll={colorSelectedAll} changeColorHandler={changeColorHandler} />
                        ))
                    }




                    
                </div>

            </div>
        </div>
    );
}
 
export default Shop;