import SingleProductContainer from "../components/SingleProductContainer";
import NavbarSection from "../components/NavbarSection";
import SidebarSection from "../components/SidebarSection";
import { useContext } from "react";
import { productsProvider } from "../contexts/ProductsContext";

const ShopSection = () => {
    const products = useContext(productsProvider);
    console.log(products);
    
    return (
        <>
            <NavbarSection />
            <div className="container relative max-w-screen-2xl mx-auto px-3 grid grid-cols-12 grid-rows-[55px_minmax(300px,_1fr)] gap-4 md:mt-10">
                <SidebarSection />
                <SingleProductContainer />
            </div>
        </>
    );
}
 
export default ShopSection;