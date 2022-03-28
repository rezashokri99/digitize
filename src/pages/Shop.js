/* eslint-disable jsx-a11y/anchor-is-valid */
import watchOne from "../images/Cart/1.png";

const Shop = () => {
    return (
        <div className="px-4">
            {/* header */}
            <div>
                
                {/* bar */}
                <div className="flex items-center justify-between pt-11 mb-6 px-6px md:hidden">
                    <div>logo</div>
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
                        <span className="text-slate-800 text-base font-medium">محبوب ترین ها</span>
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
                <div className="grid grid-cols-2 gap-x-2 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
                    
                    {/* product one */}
                    <div className="bg-white rounded-lg shadow-md">
                        
                        {/* product image */}
                        <div className="bg-gray-200 h-[144px] flex items-center justify-center rounded-lg mb-5 m-[6px]">
                            <img className="h-28 w-16" src={watchOne} alt="watch" />    
                        </div>
                        {/* product colors */}
                        <div className="flex items-center justify-between mx-[10px] mb-3">
                            <p className="text-gray-300 text-xs">اپل</p>
                            <div className="flex">
                                <div className="w-3 h-3 rounded-full bg-orange-300 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-indigo-600 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-orange-400 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-gray-50 border border-gray-300"></div>
                            </div>
                        </div>
                        {/* product name and price */}
                        <div className="mx-[10px] mb-3">
                            <p className="text-sm text-slate-900 font-medium mb-2">ساعت اپل سری 6</p>
                            <p className="text-sm text-orange-600 font-medium text-left">4,250,200 تومان</p>
                        </div>
                        {/* prodcut buy btn */}
                        <div className="flex items-center justify-center mx-[10px] py-2 border-t">
                            <a href="#" className="font-bold text-base text-orange-500">مشاهده و سفارش</a>
                        </div>

                    </div>


                    {/* product two */}
                    <div className="bg-white rounded-lg shadow-md">
                        
                        {/* product image */}
                        <div className="bg-gray-200 h-[144px] flex items-center justify-center rounded-lg mb-5 m-[6px]">
                            <img className="h-28 w-16" src={watchOne} alt="watch" />    
                        </div>
                        {/* product colors */}
                        <div className="flex items-center justify-between mx-[10px] mb-3">
                            <p className="text-gray-300 text-xs">اپل</p>
                            <div className="flex">
                                <div className="w-3 h-3 rounded-full bg-orange-300 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-indigo-600 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-orange-400 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-gray-50 border border-gray-300"></div>
                            </div>
                        </div>
                        {/* product name and price */}
                        <div className="mx-[10px] mb-3">
                            <p className="text-sm text-slate-900 font-medium mb-2">ساعت اپل سری 6</p>
                            <p className="text-sm text-orange-600 font-medium text-left">4,250,200 تومان</p>
                        </div>
                        {/* prodcut buy btn */}
                        <div className="flex items-center justify-center mx-[10px] py-2 border-t">
                            <a href="#" className="font-bold text-base text-orange-500">مشاهده و سفارش</a>
                        </div>

                    </div>


                    {/* product there */}
                    <div className="bg-white rounded-lg shadow-md">
                        
                        {/* product image */}
                        <div className="bg-gray-200 h-[144px] flex items-center justify-center rounded-lg mb-5 m-[6px]">
                            <img className="h-28 w-16" src={watchOne} alt="watch" />    
                        </div>
                        {/* product colors */}
                        <div className="flex items-center justify-between mx-[10px] mb-3">
                            <p className="text-gray-300 text-xs">اپل</p>
                            <div className="flex">
                                <div className="w-3 h-3 rounded-full bg-orange-300 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-indigo-600 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-orange-400 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-gray-50 border border-gray-300"></div>
                            </div>
                        </div>
                        {/* product name and price */}
                        <div className="mx-[10px] mb-3">
                            <p className="text-sm text-slate-900 font-medium mb-2">ساعت اپل سری 6</p>
                            <p className="text-sm text-orange-600 font-medium text-left">4,250,200 تومان</p>
                        </div>
                        {/* prodcut buy btn */}
                        <div className="flex items-center justify-center mx-[10px] py-2 border-t">
                            <a href="#" className="font-bold text-base text-orange-500">مشاهده و سفارش</a>
                        </div>

                    </div>

                    {/* product four */}
                    <div className="bg-white rounded-lg shadow-md">
                        
                        {/* product image */}
                        <div className="bg-gray-200 h-[144px] flex items-center justify-center rounded-lg mb-5 m-[6px]">
                            <img className="h-28 w-16" src={watchOne} alt="watch" />    
                        </div>
                        {/* product colors */}
                        <div className="flex items-center justify-between mx-[10px] mb-3">
                            <p className="text-gray-300 text-xs">اپل</p>
                            <div className="flex">
                                <div className="w-3 h-3 rounded-full bg-orange-300 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-indigo-600 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-orange-400 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-gray-50 border border-gray-300"></div>
                            </div>
                        </div>
                        {/* product name and price */}
                        <div className="mx-[10px] mb-3">
                            <p className="text-sm text-slate-900 font-medium mb-2">ساعت اپل سری 6</p>
                            <p className="text-sm text-orange-600 font-medium text-left">4,250,200 تومان</p>
                        </div>
                        {/* prodcut buy btn */}
                        <div className="flex items-center justify-center mx-[10px] py-2 border-t">
                            <a href="#" className="font-bold text-base text-orange-500">مشاهده و سفارش</a>
                        </div>

                    </div>

                    {/* product five */}
                    <div className="bg-white rounded-lg shadow-md">
                        
                        {/* product image */}
                        <div className="bg-gray-200 h-[144px] flex items-center justify-center rounded-lg mb-5 m-[6px]">
                            <img className="h-28 w-16" src={watchOne} alt="watch" />    
                        </div>
                        {/* product colors */}
                        <div className="flex items-center justify-between mx-[10px] mb-3">
                            <p className="text-gray-300 text-xs">اپل</p>
                            <div className="flex">
                                <div className="w-3 h-3 rounded-full bg-orange-300 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-indigo-600 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-orange-400 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-gray-50 border border-gray-300"></div>
                            </div>
                        </div>
                        {/* product name and price */}
                        <div className="mx-[10px] mb-3">
                            <p className="text-sm text-slate-900 font-medium mb-2">ساعت اپل سری 6</p>
                            <p className="text-sm text-orange-600 font-medium text-left">4,250,200 تومان</p>
                        </div>
                        {/* prodcut buy btn */}
                        <div className="flex items-center justify-center mx-[10px] py-2 border-t">
                            <a href="#" className="font-bold text-base text-orange-500">مشاهده و سفارش</a>
                        </div>

                    </div>

                    {/* product six */}
                    <div className="bg-white rounded-lg shadow-md">
                        
                        {/* product image */}
                        <div className="bg-gray-200 h-[144px] flex items-center justify-center rounded-lg mb-5 m-[6px]">
                            <img className="h-28 w-16" src={watchOne} alt="watch" />    
                        </div>
                        {/* product colors */}
                        <div className="flex items-center justify-between mx-[10px] mb-3">
                            <p className="text-gray-300 text-xs">اپل</p>
                            <div className="flex">
                                <div className="w-3 h-3 rounded-full bg-orange-300 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-indigo-600 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-orange-400 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-gray-50 border border-gray-300"></div>
                            </div>
                        </div>
                        {/* product name and price */}
                        <div className="mx-[10px] mb-3">
                            <p className="text-sm text-slate-900 font-medium mb-2">ساعت اپل سری 6</p>
                            <p className="text-sm text-orange-600 font-medium text-left">4,250,200 تومان</p>
                        </div>
                        {/* prodcut buy btn */}
                        <div className="flex items-center justify-center mx-[10px] py-2 border-t">
                            <a href="#" className="font-bold text-base text-orange-500">مشاهده و سفارش</a>
                        </div>

                    </div>

                    {/* product seven */}
                    <div className="bg-white rounded-lg shadow-md">
                        
                        {/* product image */}
                        <div className="bg-gray-200 h-[144px] flex items-center justify-center rounded-lg mb-5 m-[6px]">
                            <img className="h-28 w-16" src={watchOne} alt="watch" />    
                        </div>
                        {/* product colors */}
                        <div className="flex items-center justify-between mx-[10px] mb-3">
                            <p className="text-gray-300 text-xs">اپل</p>
                            <div className="flex">
                                <div className="w-3 h-3 rounded-full bg-orange-300 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-indigo-600 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-orange-400 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-gray-50 border border-gray-300"></div>
                            </div>
                        </div>
                        {/* product name and price */}
                        <div className="mx-[10px] mb-3">
                            <p className="text-sm text-slate-900 font-medium mb-2">ساعت اپل سری 6</p>
                            <p className="text-sm text-orange-600 font-medium text-left">4,250,200 تومان</p>
                        </div>
                        {/* prodcut buy btn */}
                        <div className="flex items-center justify-center mx-[10px] py-2 border-t">
                            <a href="#" className="font-bold text-base text-orange-500">مشاهده و سفارش</a>
                        </div>

                    </div>

                    {/* product eight */}
                    <div className="bg-white rounded-lg shadow-md">
                        
                        {/* product image */}
                        <div className="bg-gray-200 h-[144px] flex items-center justify-center rounded-lg mb-5 m-[6px]">
                            <img className="h-28 w-16" src={watchOne} alt="watch" />    
                        </div>
                        {/* product colors */}
                        <div className="flex items-center justify-between mx-[10px] mb-3">
                            <p className="text-gray-300 text-xs">اپل</p>
                            <div className="flex">
                                <div className="w-3 h-3 rounded-full bg-orange-300 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-indigo-600 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-orange-400 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-gray-50 border border-gray-300"></div>
                            </div>
                        </div>
                        {/* product name and price */}
                        <div className="mx-[10px] mb-3">
                            <p className="text-sm text-slate-900 font-medium mb-2">ساعت اپل سری 6</p>
                            <p className="text-sm text-orange-600 font-medium text-left">4,250,200 تومان</p>
                        </div>
                        {/* prodcut buy btn */}
                        <div className="flex items-center justify-center mx-[10px] py-2 border-t">
                            <a href="#" className="font-bold text-base text-orange-500">مشاهده و سفارش</a>
                        </div>

                    </div>

                    {/* product nine */}
                    <div className="bg-white rounded-lg shadow-md">
                        
                        {/* product image */}
                        <div className="bg-gray-200 h-[144px] flex items-center justify-center rounded-lg mb-5 m-[6px]">
                            <img className="h-28 w-16" src={watchOne} alt="watch" />    
                        </div>
                        {/* product colors */}
                        <div className="flex items-center justify-between mx-[10px] mb-3">
                            <p className="text-gray-300 text-xs">اپل</p>
                            <div className="flex">
                                <div className="w-3 h-3 rounded-full bg-orange-300 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-indigo-600 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-orange-400 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-gray-50 border border-gray-300"></div>
                            </div>
                        </div>
                        {/* product name and price */}
                        <div className="mx-[10px] mb-3">
                            <p className="text-sm text-slate-900 font-medium mb-2">ساعت اپل سری 6</p>
                            <p className="text-sm text-orange-600 font-medium text-left">4,250,200 تومان</p>
                        </div>
                        {/* prodcut buy btn */}
                        <div className="flex items-center justify-center mx-[10px] py-2 border-t">
                            <a href="#" className="font-bold text-base text-orange-500">مشاهده و سفارش</a>
                        </div>

                    </div>
                    
                    {/* product ten */}
                    <div className="bg-white rounded-lg shadow-md">
                        
                        {/* product image */}
                        <div className="bg-gray-200 h-[144px] flex items-center justify-center rounded-lg mb-5 m-[6px]">
                            <img className="h-28 w-16" src={watchOne} alt="watch" />    
                        </div>
                        {/* product colors */}
                        <div className="flex items-center justify-between mx-[10px] mb-3">
                            <p className="text-gray-300 text-xs">اپل</p>
                            <div className="flex">
                                <div className="w-3 h-3 rounded-full bg-orange-300 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-indigo-600 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-orange-400 border border-white"></div>
                                <div className="w-3 h-3 rounded-full bg-gray-50 border border-gray-300"></div>
                            </div>
                        </div>
                        {/* product name and price */}
                        <div className="mx-[10px] mb-3">
                            <p className="text-sm text-slate-900 font-medium mb-2">ساعت اپل سری 6</p>
                            <p className="text-sm text-orange-600 font-medium text-left">4,250,200 تومان</p>
                        </div>
                        {/* prodcut buy btn */}
                        <div className="flex items-center justify-center mx-[10px] py-2 border-t">
                            <a href="#" className="font-bold text-base text-orange-500">مشاهده و سفارش</a>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}
 
export default Shop;