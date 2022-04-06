import logo from "../images/logo.svg";


const Bar = () => {
    return (
        <div className="flex items-center justify-between pt-11 mb-6 px-3 md:hidden">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className="text-slate-800 font-bold text-2xl">ساعت هوشمند</div>
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center shadow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    );
}
 
export default Bar;