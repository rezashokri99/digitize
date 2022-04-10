/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeTypeAction, selectTypeAction } from "../../redux/products/productsAction";

const TypeFilter = () => {
    
     // activeTypeBtn 
     const activeTypeBtn = useSelector(state => state.allFiltersState.activeTypeBtn);

    // redux dispatch
    const dispatch = useDispatch();

    const navigate = useNavigate();

    // active type btn selected
    const activeTypeBtnHandler = (e, id) => {
        e.preventDefault();
        dispatch(changeTypeAction(id));
        dispatch(selectTypeAction(id));
        navigate("/shop");
    }

    return (
        <div>
            <p className="text-xl font-bold text-orange-500 dark:text-orange-600 mb-5">دسته بندی</p>
            <ul>
                <li>
                    <a href="#" onClick={(e) => activeTypeBtnHandler(e, 1)} className={`cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-stone-300 rounded select-none flex flex-row items-center gap-x-2 py-2 ${activeTypeBtn === 1 ? "text-slate-800" : "text-gray-400"}`}>
                        <div>
                            <svg className="w-6 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10.5" cy="9.5" r="9.5" fill="#AFAFAF" fillOpacity=".29"/>
                                <path d="M12.438 13v8c0 1.603-.218 2.378-.645 2.8-.43.423-1.225.637-2.855.637H4.061c-1.63 0-2.424-.214-2.855-.638C.78 23.38.562 22.603.562 21v-8c0-1.603.218-2.378.645-2.8.43-.423 1.225-.637 2.856-.637h4.875c1.63 0 2.424.214 2.855.638.427.42.645 1.196.645 2.799ZM8.125 11.8h-3.25" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.5 22.68a1.25 1.25 0 0 0 1.26-1.24A1.25 1.25 0 0 0 6.5 20.2a1.25 1.25 0 0 0-1.26 1.24c0 .685.564 1.24 1.26 1.24Z" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    <span className="dark:text-stone-100">همه</span>
                    </a>
                </li>
                <li>
                    <a href="#" onClick={(e) => activeTypeBtnHandler(e, 2)} className={`cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-stone-300 rounded select-none flex flex-row items-center gap-x-2 py-2 ${activeTypeBtn === 2 ? "text-slate-800" : "text-gray-400"}`}>
                        <div>
                            <svg className="w-6 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10.5" cy="9.5" r="9.5" fill="currentColor" fillOpacity=".29"/>
                                <path d="M12.438 13v8c0 1.603-.218 2.378-.645 2.8-.43.423-1.225.637-2.855.637H4.061c-1.63 0-2.424-.214-2.855-.638C.78 23.38.562 22.603.562 21v-8c0-1.603.218-2.378.645-2.8.43-.423 1.225-.637 2.856-.637h4.875c1.63 0 2.424.214 2.855.638.427.42.645 1.196.645 2.799ZM8.125 11.8h-3.25" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.5 22.68a1.25 1.25 0 0 0 1.26-1.24A1.25 1.25 0 0 0 6.5 20.2a1.25 1.25 0 0 0-1.26 1.24c0 .685.564 1.24 1.26 1.24Z" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    <span className="dark:text-stone-100">تلفن همراه</span>
                    </a>
                </li>
                <li >
                    <a href="#" onClick={(e) => activeTypeBtnHandler(e, 3)} className={`cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-stone-300 rounded select-none flex flex-row items-center gap-x-2 py-2 my-1 ${activeTypeBtn === 3 ? "text-slate-800" : "text-gray-400"}`}>
                        <div>
                            <svg className="w-6 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.5" cy="9.5" r="9.5" fill="currentColor" fillOpacity=".29"/>
                                <path stroke="currentColor" d="M4.293 8.334H11.7c2.373 0 2.967.593 2.967 2.96v4.22c0 2.373-.594 2.96-2.96 2.96H4.293c-2.366.006-2.96-.587-2.96-2.954v-4.226c0-2.367.594-2.96 2.96-2.96ZM8 18.48v3.187M1.333 15.666h13.334M5 21.666h6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    <span className="dark:text-stone-100">لپ تاپ</span>    
                    </a>
                </li>
                <li>
                    <a href="#" onClick={(e) => activeTypeBtnHandler(e, 4)} className={`cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-stone-300 rounded select-none flex flex-row items-center gap-x-2 py-2 ${activeTypeBtn === 4 ? "text-slate-800" : "text-gray-400"}`}>
                        <div>
                            <svg className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.5" cy="9.5" r="9.5" fill="currentColor" fillOpacity=".29"/>
                                <path stroke="currentColor" d="M5.666 18.667h4.667c1.553 0 2.333-.78 2.333-2.334v-4.666c0-1.553-.78-2.333-2.333-2.333H5.666c-1.553 0-2.333.78-2.333 2.333v4.667c0 1.553.78 2.333 2.333 2.333ZM10.666 7.333H5.333M10.666 20.666H5.333" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path stroke="currentColor" d="M7.667 12.334v2h2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    <span className="dark:text-stone-100">ساعت هوشمند</span>    
                    </a>
                </li>
            </ul>
        </div>
    );
}
 
export default TypeFilter;