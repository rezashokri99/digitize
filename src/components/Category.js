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
import BarLogo from "./BarLogo";




const Category = () => {
    return (
        <div className="col-span-12 md:hidden">
            
            {/* bar */}
            <BarLogo />

            <div className="pb-28 mr-2">
                <div className="relative">
                    <div className="overflow-x-auto pb-3">
                        <div className="w-fit">

                            <p className="text-orange-500 absolute left-3 text-sm">مشاهده همه</p>
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
                            <p className="text-orange-500 absolute left-3 text-sm">مشاهده همه</p>
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
                            <p className="text-orange-500 absolute left-3 text-sm">مشاهده همه</p>
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