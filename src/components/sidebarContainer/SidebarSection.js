import "../../../node_modules/react-input-range/lib/css/index.css";
import BrandsFilter from "./BrandsFilter";
import TypeFilter from "./TypeFilter";

const SidebarSection = ()=> {

    return (
        <div className="hidden md:block  md:col-span-3 lg:col-span-2 row-span-2 rounded-md max-h-[calc(100vh_-_140px)] overflow-auto sticky top-28 scrollbar scrollbar-thumb-red-300 scrollbar-track-gray-200">

            <div className="bg-white dark:bg-slate-700 px-4 py-8">
                {/* types */}
                <TypeFilter />

                <hr className="w-11/12 mx-auto my-7" />
                
                {/* brands */}
                <BrandsFilter />

            </div>
        </div>
    );
}
 
export default SidebarSection;