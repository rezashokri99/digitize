import Category from "../components/Category";
import FooterMenu from "../components/FooterMenu";

const ShopSection = () => {
    return (
        <>
            <Category />
            <div className="w-full md:hidden bg-white p-1 fixed bottom-0 left-0 z-20 rounded-tr-md rounded-tl-md border border-t-2 shadow-[0_-4px_8px_0px_rgba(0,0,0,0.1)]">
                <FooterMenu />
            </div>
        </>
    );
}
 
export default ShopSection;