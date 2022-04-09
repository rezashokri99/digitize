import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeTypeAction, selectTypeAction } from "../../redux/products/productsAction";

const NavbarMenu = () => {

    // redux activeTypeBtn  filters
    const activeTypeBtn = useSelector(state => state.allFiltersState.activeTypeBtn);
    // redux dispatch
    const dispatch = useDispatch();

    

    //navigate
    const navigate = useNavigate();


    // active type btn selected
    const activeTypeBtnHandler = (id) => {
      navigate("/shop")
      dispatch(changeTypeAction(id));
      dispatch(selectTypeAction(id));
    }

    return (
        <>
                        <li><a onClick={() => activeTypeBtnHandler(1)} className={`hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg md:text-base lg:text-xl py-4 md:px-1.5 lg:px-2 ${activeTypeBtn === 1 ? "font-extrabold": "font-medium"}`} href="#">خانه</a></li>
            <li><a onClick={() => activeTypeBtnHandler(2)} className={`hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg md:text-base lg:text-xl py-4 md:px-1.5 lg:px-2 ${activeTypeBtn === 2 ? "font-extrabold": "font-medium"}`} href="#">تلفن همراه</a></li>
            <li><a onClick={() => activeTypeBtnHandler(3)} className={`hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg md:text-base lg:text-xl py-4 md:px-1.5 lg:px-2 ${activeTypeBtn === 3 ? "font-extrabold": "font-medium"}`} href="#">لپ تاپ</a></li>
            <li><a onClick={() => activeTypeBtnHandler(4)} className={`hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg md:text-base lg:text-xl py-4 md:px-1.5 lg:px-2 md:hidden lg:block ${activeTypeBtn === 4 ? "font-extrabold": "font-medium"}`} href="#">ساعت هوشمند</a></li>
            <li><a onClick={() => navigate("/cart")} className={`hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg md:text-base lg:text-xl  py-4 md:px-1.5 lg:px-2`} href="#">سبد خرید</a></li>
        </>
    );
}
 
export default NavbarMenu;