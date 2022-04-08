import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import ToggleDarkMode from "./ToggleDarkMode";

const BarBackBtn = () => {

  // redux all filters
  const allFiltersState = useSelector(state => state.allFiltersState);

  // redux darkModeState
  const darkModeState = useSelector(state => state.darkModeState);

  // activeTypeBtn 
  const { activeTypeBtn } = allFiltersState;


  const [titleName, setTitleName] = useState("خانه");

  const navigate = useNavigate();
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.pathname === "/") {
      setTitleName("خانه") ;
    }
    if (location.pathname === "/shop") {
      if (activeTypeBtn === 1) {
        setTitleName("فروشگاه");
      }else if (activeTypeBtn === 2) {
        setTitleName("موبایل");
      }else if (activeTypeBtn === 3) {
        setTitleName("لپ تاپ");
      }else if (activeTypeBtn === 4) {
        setTitleName("ساعت هوشمند");
      }
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
  },[location.pathname, activeTypeBtn])


    return (
        <div className="flex items-center justify-between pt-6 mb-7 md:hidden">
          <div onClick={() => navigate(-1)} className="w-8 h-8 bg-white dark:bg-slate-700 dark:text-stone-100 rounded-md flex items-center justify-center shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <div className="text-slate-800 dark:text-stone-100 font-medium text-2xl">
            {titleName}
          </div>
          <ToggleDarkMode />
        </div>
    );
}
 
export default BarBackBtn;