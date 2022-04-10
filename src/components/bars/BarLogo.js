import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import ToggleDarkMode from "../ToggleDarkMode";


const Bar = () => {

    // redux all filters
  const allFiltersState = useSelector(state => state.allFiltersState);
  // activeTypeBtn 
  const { activeTypeBtn } = allFiltersState;


  const [titleName, setTitleName] = useState("خانه");

  const location = useLocation();
  useLayoutEffect(() => {
    if (location.pathname === "/") {
      setTitleName("خانه") ;
    }
    if (location.pathname === "/shop") {
        setTitleName("فروشگاه");
    }
    if (location.pathname === "/category") {
      setTitleName("دسته بندی");
    }
    if (location.pathname === "/cart") {
      setTitleName("سبد پرداخت");
    }
    if (location.pathname === "/") {
      setTitleName("خانه");
    }
  },[])



    return (
        <div className="flex items-center justify-between pt-6 mb-6 px-3 md:hidden">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className="text-slate-800 dark:text-stone-100 font-bold text-2xl">{titleName}</div>
            <ToggleDarkMode />
        </div>
    );
}
 
export default Bar;