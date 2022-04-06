/* eslint-disable jsx-a11y/anchor-is-valid */
import CategoryPage from "./pages/CategoryPage";
import SingleProductPage from "./pages/SingleProductPage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductsContext from "./contexts/ProductsContext";

function App() {


  return (
    <ProductsContext>
      <div className="bg-gray-100 h-full">
        <Routes>
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/singleProduct/:id" element={<SingleProductPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/" element={<Navigate to="/shop" />} />
        </Routes>
  

      </div>  
    </ProductsContext>
  );
}

export default App;
