import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { changeBrandsAction, changeTypeAction, selectBrandsAction, selectTypeAction } from "../../redux/products/productsAction";

const BreadcrumbMobile = () => {

    
    // params id of url
    const paramsId = useParams().id;

     //navigate for send user
     let navigate = useNavigate();

     //dispatch
     let dispatch = useDispatch();
     
    // redux state
    const products = useSelector(state => state.productsState, shallowEqual);

    let ID = "";
    for (const product in products) {
      if (products[product].id === (+paramsId)) {
        ID = +product;
      }
    }
    const productType = useSelector(state => products ? state.productsState[ID].type : "", shallowEqual);
    const productBrand = useSelector(state => products ? state.productsState[ID].brand : "", shallowEqual);
    const productPersianName = useSelector(state => products ? state.productsState[ID].persianName : "", shallowEqual);


    const brandsSelectedHandler = () => {
        dispatch(changeBrandsAction(productBrand));
        dispatch(selectBrandsAction(productBrand));
        navigate("/shop");
      }

      const activeTypeBtnHandler = () => {
        if (productType === "mobile") {
          dispatch(changeTypeAction(2));
          dispatch(selectTypeAction(2));
        }else if (productType === "laptop") {
          dispatch(changeTypeAction(3));
          dispatch(selectTypeAction(3));
        }
        else if (productType === "smartWatch") {
          dispatch(changeTypeAction(4));
          dispatch(selectTypeAction(4));
        }
        navigate("/shop");
      }


    return (
        <>
            <span onClick={activeTypeBtnHandler} className="cursor-pointer text-orange-500">{productType}</span>
            <span className="text-slate-800 dark:text-stone-100">
                <svg
                className="w-2 h-3 font-bold"
                stroke="currentColor"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="m.945 4.2.006-.006.006-.007c.369-.406 1.067-.973 1.831-1.502.763-.53 1.537-.984 2.042-1.187l.01-.004c.067-.029.2-.079.341-.123a1.72 1.72 0 0 1 .3-.071c.13.002.253.031.375.092a.812.812 0 0 1 .33.377c.02.056.057.198.093.363a11.189 11.189 0 0 1 .054.253l.006.034c.1.558.161 1.502.161 2.575 0 1-.057 1.899-.14 2.48a1.35 1.35 0 0 0-.007.034l-.018.087v.002c-.013.07-.031.159-.052.254a4.92 4.92 0 0 1-.099.382.671.671 0 0 1-.012.033l-.004.01-.002.003a.75.75 0 0 1-.658.42H5.48a.983.983 0 0 1-.155-.03 3.398 3.398 0 0 1-.36-.12l-.226-.095c-.482-.206-1.233-.646-1.978-1.16-.746-.516-1.436-1.07-1.814-1.491L.94 5.794l-.008-.008-.001-.001-.007-.007L.9 5.752a5.482 5.482 0 0 1-.084-.09 2.219 2.219 0 0 1-.164-.195l-.006-.008L.64 5.45a.749.749 0 0 1-.14-.446c0-.185.053-.348.144-.478a9.829 9.829 0 0 0 .113-.125c.058-.065.125-.138.188-.202Z" />
                </svg>
            </span>
            <span onClick={brandsSelectedHandler} className="cursor-pointer text-orange-500">{productBrand}</span>
            <span className="text-slate-800 dark:text-stone-100">
                <svg
                className="w-2 h-3 font-bold"
                stroke="currentColor"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="m.945 4.2.006-.006.006-.007c.369-.406 1.067-.973 1.831-1.502.763-.53 1.537-.984 2.042-1.187l.01-.004c.067-.029.2-.079.341-.123a1.72 1.72 0 0 1 .3-.071c.13.002.253.031.375.092a.812.812 0 0 1 .33.377c.02.056.057.198.093.363a11.189 11.189 0 0 1 .054.253l.006.034c.1.558.161 1.502.161 2.575 0 1-.057 1.899-.14 2.48a1.35 1.35 0 0 0-.007.034l-.018.087v.002c-.013.07-.031.159-.052.254a4.92 4.92 0 0 1-.099.382.671.671 0 0 1-.012.033l-.004.01-.002.003a.75.75 0 0 1-.658.42H5.48a.983.983 0 0 1-.155-.03 3.398 3.398 0 0 1-.36-.12l-.226-.095c-.482-.206-1.233-.646-1.978-1.16-.746-.516-1.436-1.07-1.814-1.491L.94 5.794l-.008-.008-.001-.001-.007-.007L.9 5.752a5.482 5.482 0 0 1-.084-.09 2.219 2.219 0 0 1-.164-.195l-.006-.008L.64 5.45a.749.749 0 0 1-.14-.446c0-.185.053-.348.144-.478a9.829 9.829 0 0 0 .113-.125c.058-.065.125-.138.188-.202Z" />
                </svg>
            </span>
            <span className="text-gray-600 dark:text-stone-100">{productPersianName}</span>
        </>
    );
}
 
export default BreadcrumbMobile;