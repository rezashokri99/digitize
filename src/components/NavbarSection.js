/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo_two.svg";
import { changeTypeAction, selectTypeAction } from "../redux/products/productsAction";
import ToggleDarkMode from "./ToggleDarkMode"; 

const NavbarSection = () => {
  
    // redux all filters
    const allFiltersState = useSelector(state => state.allFiltersState);
    // redux dispatch
    const dispatch = useDispatch();

    // activeTypeBtn 
    const {activeTypeBtn} = allFiltersState;

    //navigate
    const navigate = useNavigate();


    // active type btn selected
    const activeTypeBtnHandler = (id) => {
      navigate("/shop")
      dispatch(changeTypeAction(id));
      dispatch(selectTypeAction(id));
    }
    
    return (
      <div className="hidden md:block w-full bg-white shadow-md sticky top-0 z-20 text-slate-800 dark:bg-slate-800 dark:text-stone-100">
        <div className="container max-w-screen-2xl mx-auto md:px-3 md:py-4 lg:py-5 flex justify-between items-center">
          <ul className="flex items-center md:gap-x-0 lg:gap-x-2">
            <li className="md:ml-2 lg:ml-5">
                <img src={logo} alt="logo"/>
            </li>
            <li><a onClick={() => activeTypeBtnHandler(1)} className={`hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg md:text-base lg:text-xl py-4 md:px-1.5 lg:px-2 ${activeTypeBtn === 1 ? "font-extrabold": "font-medium"}`} href="#">خانه</a></li>
            <li><a onClick={() => activeTypeBtnHandler(2)} className={`hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg md:text-base lg:text-xl py-4 md:px-1.5 lg:px-2 ${activeTypeBtn === 2 ? "font-extrabold": "font-medium"}`} href="#">تلفن همراه</a></li>
            <li><a onClick={() => activeTypeBtnHandler(3)} className={`hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg md:text-base lg:text-xl py-4 md:px-1.5 lg:px-2 ${activeTypeBtn === 3 ? "font-extrabold": "font-medium"}`} href="#">لپ تاپ</a></li>
            <li><a onClick={() => activeTypeBtnHandler(4)} className={`hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg md:text-base lg:text-xl py-4 md:px-1.5 lg:px-2 md:hidden lg:block ${activeTypeBtn === 4 ? "font-extrabold": "font-medium"}`} href="#">ساعت هوشمند</a></li>
            <li><a onClick={() => navigate("/cart")} className={`hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg md:text-base lg:text-xl  py-4 md:px-1.5 lg:px-2`} href="#">سبد خرید</a></li>
            <li className="mr-2"><ToggleDarkMode /></li>
          </ul>
          <div className="flex items-center bg-gray-100 dark:bg-slate-700 md:w-2/6 lg:w-2/6 max-w-xxl rounded overflow-hidden">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2  " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input className="w-full border-none focus:outline-none focus:ring-0 bg-transparent dark:bg-slate-700 block py-3 text-slate-800" type="text" placeholder="جستجوی نام محصول,نام برند,نام مدل و..." />
          </div>
        </div>
      </div>
    );
}
 
export default NavbarSection;