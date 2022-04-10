/* eslint-disable jsx-a11y/anchor-is-valid */
import CategoryPage from "./pages/CategoryPage";
import SingleProductPage from "./pages/SingleProductPage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductsContext from "./contexts/ProductsContext";
import { useSelector } from "react-redux";




function App() {

  // redux darkModeState
  const darkModeState = useSelector(state => state.darkModeState.darkMode);

  return (
      <div className={`${darkModeState === true && "dark"} `}>
        <div className="bg-gray-100 h-full min-h-screen dark:bg-slate-800">
          <Routes>
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/singleProduct/:id" element={<SingleProductPage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/" element={<ShopPage />} />
          </Routes>
        </div>
      </div>  
  );
}

export default App;
