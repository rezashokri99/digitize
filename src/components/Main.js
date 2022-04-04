import Shop from "../pages/Shop";
import SortSection from "./SortSection";

const Main = () => {
    return (
        <>
            {/* sort section */}
            <div className="bg-white hidden md:block md:col-span-9 lg:col-span-10 rounded-md"><SortSection /></div>
            
            {/* products section */}
            <div className="bg-white col-span-12 md:col-span-9 lg:col-span-10"><Shop /></div>
        </>
    );
}
 
export default Main;