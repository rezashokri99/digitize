import phonelogo from "../../images/Category/phone.svg";
import appleLogo from "../../images/Category/apple.png";
import xiaomiLogo from "../../images/Category/xiaomi.png";
import samsungLogo from "../../images/Category/samsung.png";
import huaweiLogo from "../../images/Category/huawei.png";
import laptopLogo from "../../images/Category/laptop.svg";
import asusLogo from "../../images/Category/asus.png";
import lenovoLogo from "../../images/Category/lenovo.png";
import msiLogo from "../../images/Category/msi.png";
import smartWatchLogo from "../../images/Category/smartwatch.svg";
import BarLogo from "../bars/BarLogo";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeBrandsAction, changeTypeAction, selectBrandsAction, selectTypeAction } from "../../redux/products/productsAction";
import useWindowDimensions from "../useWindowDimensions";




const Category = () => {
    
    // redux dispatch
    const dispatch = useDispatch();
    //navigate
    const navigate = useNavigate();

    const activeTypeBtnHandler = (id) => {
        // reset brands reducer
        dispatch(changeBrandsAction("remove"));
        dispatch(selectBrandsAction("remove"));
        
        dispatch(changeTypeAction(id));
        dispatch(selectTypeAction(id));
        

        navigate("/shop")
    }

    // brands selected handler 
    const brandsSelectedHandler = (e,id) => {

        // reset brands reducer
        dispatch(changeBrandsAction("remove"));
        dispatch(selectBrandsAction("remove"));

        dispatch(changeTypeAction(id));
        dispatch(selectTypeAction(id));
        
        dispatch(changeBrandsAction(e.target.id));
        dispatch(selectBrandsAction(e.target.id));
        navigate("/shop");
    }


    // get width screen fn
  const { height, width } = useWindowDimensions();
    if (width >= 767) {
        navigate("/")
    }




    return (
        <div className="col-span-12 md:hidden">
            
            {/* bar */}
            <BarLogo />

            <div className="pb-28 mr-2 dark:text-stone-100">
                <div className="relative">
                    <div className="overflow-x-auto pb-3">
                        <div className="w-fit">

                            <p onClick={() => activeTypeBtnHandler(2)} className="text-orange-500 dark:text-orange-600 absolute left-3 text-sm">مشاهده همه</p>
                            <div className="flex gap-x-2 overflow-x-scroll items-end justify-between">
                                
                                <div onClick={() => activeTypeBtnHandler(2)} className="relative w-36 h-48 bg-gray-200 dark:bg-slate-600 pt-4 rounded-lg overflow-hidden">
                                    <p className="text-slate-800 dark:text-stone-100 text-center">تلفن همراه</p>
                                    <div className="absolute bottom-0 left-0">
                                        <img src={phonelogo} alt="phone" />
                                    </div>
                                </div>
                                <div onClick={(e) => brandsSelectedHandler(e, 2)} id="apple" className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white dark:bg-slate-700 flex flex-col justify-around items-center">
                                    <div id="apple">
                                        <img id="apple" src={appleLogo} alt="appleLogo" />
                                    </div>
                                    <p id="apple">اپل</p>
                                </div>
                                <div onClick={(e) => brandsSelectedHandler(e, 2)} id="xiaomi" className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white dark:bg-slate-700 flex flex-col justify-around items-center">
                                    <div id="xiaomi">
                                        <img id="xiaomi" src={xiaomiLogo} alt="appleLogo" />
                                    </div>
                                    <p id="xiaomi">شیائومی</p>
                                </div>
                                <div onClick={(e) => brandsSelectedHandler(e, 2)} id="huawei" className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white dark:bg-slate-700 flex flex-col justify-around items-center">
                                    <div id="huawei">
                                        <img id="huawei" src={huaweiLogo} alt="appleLogo" />
                                    </div>
                                    <p id="huawei">هواوی</p>
                                </div>
                                <div onClick={(e) => brandsSelectedHandler(e, 2)} id="samsung" className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white dark:bg-slate-700 flex flex-col justify-around items-center">
                                    <div id="samsung">
                                        <img id="samsung" src={samsungLogo} alt="appleLogo" />
                                    </div>
                                    <p id="samsung">سامسونگ</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <hr className="my-3 dark:border-gray-500" />

                <div className="relative">
                    <div className="overflow-x-auto pb-3">
                        <div className="w-fit">
                            <p onClick={() => activeTypeBtnHandler(3)} className="text-orange-500 dark:text-orange-600 absolute left-3 text-sm">مشاهده همه</p>
                            <div className="flex gap-x-2 overflow-x-scroll items-end justify-between">
                                
                                <div onClick={() => activeTypeBtnHandler(3)} className="relative w-36 h-48 bg-gray-200 dark:bg-slate-600 pt-4 rounded-lg overflow-hidden">
                                    <p className="text-slate-800 dark:text-stone-100 text-center">لپ تاپ</p>
                                    <div className="absolute bottom-0 left-0">
                                        <img src={laptopLogo} alt="phone" />
                                    </div>
                                </div>
                                
                                <div onClick={(e) => brandsSelectedHandler(e, 3)} id="asus" className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white dark:bg-slate-700 flex flex-col justify-around items-center">
                                    <div id="asus">
                                        <img id="asus" src={asusLogo} alt="appleLogo" />
                                    </div>
                                    <p id="asus">ایسوس</p>
                                </div>
                                <div onClick={(e) => brandsSelectedHandler(e, 3)} id="lenovo" className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white dark:bg-slate-700 flex flex-col justify-around items-center">
                                    <div id="lenovo">
                                        <img id="lenovo" src={lenovoLogo} alt="appleLogo" />
                                    </div>
                                    <p id="lenovo">لنوو</p>
                                </div>
                                <div onClick={(e) => brandsSelectedHandler(e, 3)} id="apple" className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white dark:bg-slate-700 flex flex-col justify-around items-center">
                                    <div id="apple">
                                        <img id="apple" src={appleLogo} alt="appleLogo" />
                                    </div>
                                    <p id="apple">اپل</p>
                                </div>
                                <div onClick={(e) => brandsSelectedHandler(e, 3)} id="msi" className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white dark:bg-slate-700 flex flex-col justify-around items-center">
                                    <div id="msi">
                                        <img id="msi" src={msiLogo} alt="appleLogo" />
                                    </div>
                                    <p id="msi">ام اس آی</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-3 dark:border-gray-500" />

                <div className="relative">
                    <div className="overflow-x-auto pb-3">
                        <div className="w-fit">
                            <p onClick={() => activeTypeBtnHandler(4)} className="text-orange-500 dark:text-orange-600 absolute left-3 text-sm">مشاهده همه</p>
                            <div className="flex gap-x-2 overflow-x-scroll items-end justify-between">
                                
                                <div onClick={() => activeTypeBtnHandler(4)} className="relative w-36 h-48 bg-gray-200 dark:bg-slate-600 pt-4 rounded-lg overflow-hidden">
                                    <p className="text-slate-800 dark:text-stone-100 text-center">ساعت هوشمند</p>
                                    <div className="absolute bottom-0 left-0">
                                        <img src={smartWatchLogo} alt="phone" />
                                    </div>
                                </div>

                                <div onClick={(e) => brandsSelectedHandler(e, 4)} id="xiaomi" className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white dark:bg-slate-700 flex flex-col justify-around items-center">
                                    <div id="xiaomi">
                                        <img id="xiaomi" src={xiaomiLogo} alt="appleLogo" />
                                    </div>
                                    <p id="xiaomi">شیائومی</p>
                                </div>
                                <div onClick={(e) => brandsSelectedHandler(e, 4)} id="apple" className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white dark:bg-slate-700 flex flex-col justify-around items-center">
                                    <div id="apple">
                                        <img id="apple" src={appleLogo} alt="appleLogo" />
                                    </div>
                                    <p id="apple">اپل</p>
                                </div>
                                <div onClick={(e) => brandsSelectedHandler(e, 4)} id="huawei" className="w-28 h-36 pt-2 rounded-lg overflow-hidden bg-white dark:bg-slate-700 flex flex-col justify-around items-center">
                                    <div id="huawei">
                                        <img id="huawei" src={huaweiLogo} alt="appleLogo" />
                                    </div>
                                    <p id="huawei">هواوی</p>
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