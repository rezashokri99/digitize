import ShopContainer from "../components/ShopContainer";
import NavbarSection from "../components/NavbarSection";
import SidebarSection from "../components/SidebarSection";
import FooterMenu from "../components/FooterMenu";

const ShopSection = () => {
    return (
        <>
            <NavbarSection />
            <div className="container relative max-w-screen-2xl mx-auto px-3 grid grid-cols-12 grid-rows-[55px_minmax(300px,_1fr)] gap-4 md:mt-10">
                <SidebarSection />
                <ShopContainer />
            </div>
            <div className="w-full md:hidden bg-white p-1 fixed bottom-0 left-0 z-20 rounded-tr-md rounded-tl-md border border-t-2 shadow-[0_-4px_8px_0px_rgba(0,0,0,0.1)]">
                <FooterMenu />
            </div>
        </>
    );
}
 
export default ShopSection;