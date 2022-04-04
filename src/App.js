/* eslint-disable jsx-a11y/anchor-is-valid */
import SidebarSection from "./components/SidebarSection";
import SortSection from "./components/SortSection";
import Shop from "./pages/Shop";
import NavbarSection from "./components/NavbarSection";
import FooterMenu from "./components/FooterMenu";

function App() {


  return (
    <div className="bg-gray-100 h-full">
      
      {/* navbar */}
      <div className="hidden md:block w-full bg-white shadow-md sticky top-0 z-20">
        <NavbarSection />
      </div>

      {/* content */}
      <div className="container max-w-screen-2xl mx-auto px-3 grid grid-cols-12 grid-rows-[55px_minmax(300px,_1fr)] gap-4 md:mt-10">
        {/* sidebar */}
        <div className="hidden md:block md:col-span-3 lg:col-span-2 row-span-2 rounded-md max-h-[calc(100vh_-_140px)] overflow-auto sticky top-28 scrollbar scrollbar-thumb-red-300 scrollbar-track-gray-200"><SidebarSection /></div>
        {/* sort section */}
        <div className="bg-white hidden md:block md:col-span-9 lg:col-span-10 rounded-md"><SortSection /></div>
        {/* products section */}
        <div className="bg-white col-span-12 md:col-span-9 lg:col-span-10"><Shop /></div>
      </div>

      {/* footer menu */}
      <div className="w-full md:hidden bg-white p-1 fixed bottom-0 left-0 z-20 rounded-tr-md rounded-tl-md border-t-2 shadow-[0_1px_20px_1px_rgba(0,0,0,0.3)]">
        <FooterMenu />
      </div>

    </div>
  );
}

export default App;
