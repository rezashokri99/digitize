import SidebarSection from "./components/SidebarSection";
import SortSection from "./components/SortSection";
import Shop from "./pages/Shop";

function App() {


  return (
    <div className="bg-gray-100 w-screen h-full">
      
      <div className="grid grid-cols-12 grid-rows-[55px_minmax(300px,_1fr)] gap-4">
        {/* sidebar */}
        <div className=" hidden md:block md:col-span-3 lg:col-span-2 row-span-2"><SidebarSection /></div>
        {/* sort section */}
        <div className="bg-white hidden md:block md:col-span-9 lg:col-span-10"><SortSection /></div>
        {/* products section */}
        <div className="bg-white col-span-12 md:col-span-9 lg:col-span-10"><Shop /></div>
      </div>

    </div>
  );
}

export default App;
