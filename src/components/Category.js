import logo from "../images/logo.svg";
import phonelogo from "../images/Category/phone.svg";
import appleLogo from "../images/Category/apple.png";
import xiaomiLogo from "../images/Category/xiaomi.png";
import samsungLogo from "../images/Category/samsung.png";
import huaweiLogo from "../images/Category/huawei.png";
import laptopLogo from "../images/Category/laptop.svg";
import asusLogo from "../images/Category/asus.png";
import lenovoLogo from "../images/Category/lenovo.png";
import msiLogo from "../images/Category/msi.png";
import smartWatchLogo from "../images/Category/smartwatch.svg";




const Category = () => {
    return (
        <div className="col-span-12">
            
            {/* bar */}
            <div className="flex  items-center justify-between pt-11 mb-6 px-6px md:hidden">
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

            <div className="pb-28">
                <div className="relative">
                    <div className="overflow-x-auto pb-3">
                        <div className="w-fit">

                            <p className="text-orange-500 absolute left-0 text-sm">مشاهده همه</p>
                            <div className="flex gap-x-2 overflow-x-scroll items-end justify-between">
                                
                                <div className="relative w-36 h-48 bg-gray-200 pt-4 rounded-lg overflow-hidden">
                                    <p className="text-slate-800 text-center">تلفن همراه</p>
                                    <div className="absolute bottom-0 left-0">
                                        <img src={phonelogo} alt="phone" />
                                    </div>
                                </div>
                                <div className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                    <div>
                                        <img src={appleLogo} alt="appleLogo" />
                                    </div>
                                    <p>اپل</p>
                                </div>
                                <div className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                    <div>
                                        <img src={xiaomiLogo} alt="appleLogo" />
                                    </div>
                                    <p>شیائومی</p>
                                </div>
                                <div className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                    <div>
                                        <img src={huaweiLogo} alt="appleLogo" />
                                    </div>
                                    <p>هواوی</p>
                                </div>
                                <div className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                    <div>
                                        <img src={samsungLogo} alt="appleLogo" />
                                    </div>
                                    <p>سامسونگ</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <hr className="my-3" />

                <div className="relative">
                    <div className="overflow-x-auto pb-3">
                        <div className="w-fit">
                            <p className="text-orange-500 absolute left-0 text-sm">مشاهده همه</p>
                            <div className="flex gap-x-2 overflow-x-scroll items-end justify-between">
                                
                                <div className="relative w-36 h-48 bg-gray-200 pt-4 rounded-lg overflow-hidden">
                                    <p className="text-slate-800 text-center">تلفن همراه</p>
                                    <div className="absolute bottom-0 left-0">
                                        <img src={laptopLogo} alt="phone" />
                                    </div>
                                </div>
                                
                                <div className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                    <div>
                                        <img src={asusLogo} alt="appleLogo" />
                                    </div>
                                    <p>ایسوس</p>
                                </div>
                                <div className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                    <div>
                                        <img src={lenovoLogo} alt="appleLogo" />
                                    </div>
                                    <p>لنوو</p>
                                </div>
                                <div className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                    <div>
                                        <img src={appleLogo} alt="appleLogo" />
                                    </div>
                                    <p>اپل</p>
                                </div>
                                <div className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                    <div>
                                        <img src={msiLogo} alt="appleLogo" />
                                    </div>
                                    <p>ام اس آی</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-3" />

                <div className="relative">
                    <div className="overflow-x-auto pb-3">
                        <div className="w-fit">
                            <p className="text-orange-500 absolute left-0 text-sm">مشاهده همه</p>
                            <div className="flex gap-x-2 overflow-x-scroll items-end justify-between">
                                
                                <div className="relative w-36 h-48 bg-gray-200 pt-4 rounded-lg overflow-hidden">
                                    <p className="text-slate-800 text-center">تلفن همراه</p>
                                    <div className="absolute bottom-0 left-0">
                                        <img src={smartWatchLogo} alt="phone" />
                                    </div>
                                </div>

                                <div className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                    <div>
                                        <img src={xiaomiLogo} alt="appleLogo" />
                                    </div>
                                    <p>شیائومی</p>
                                </div>
                                <div className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                    <div>
                                        <img src={appleLogo} alt="appleLogo" />
                                    </div>
                                    <p>اپل</p>
                                </div>
                                <div className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                    <div>
                                        <img src={huaweiLogo} alt="appleLogo" />
                                    </div>
                                    <p>هواوی</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
                

                

            </div>

            

        </div>
    );
}
 
export default Category;