/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../images/logo_two.svg";


const NavbarSection = () => {
    return (
        <div className="container max-w-screen-2xl mx-auto md:px-3 md:py-4 lg:py-5 flex justify-between items-center">
          <ul className="flex items-center md:gap-x-0 lg:gap-x-2">
            <li className="md:ml-2 lg:ml-5">
                <img src={logo} alt="logo"/>
            </li>
            <li><a className=" hover:bg-gray-50 md:text-base lg:text-xl font-extrabold text-slate-800 py-4 md:px-1.5 lg:px-2" href="#">خانه</a></li>
            <li><a className=" hover:bg-gray-50 md:text-base lg:text-xl font-medium text-slate-800 py-4 md:px-1.5 lg:px-2" href="#">تلفن همراه</a></li>
            <li><a className=" hover:bg-gray-50 md:text-base lg:text-xl font-medium text-slate-800 py-4 md:px-1.5 lg:px-2" href="#">لپ تاپ</a></li>
            <li><a className=" hover:bg-gray-50 md:text-base lg:text-xl font-medium text-slate-800 py-4 md:px-1.5 lg:px-2" href="#">ساعت هوشمند</a></li>
          </ul>
          <div className="flex items-center bg-gray-100 md:w-2/5 lg:w-2/6 max-w-xxl rounded overflow-hidden">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input className="w-full border-none focus:outline-none focus:ring-0 bg-transparent block py-3 text-slate-800" type="text" placeholder="جستجوی نام محصول,نام برند,نام مدل و..." />
          </div>
        </div>
    );
}
 
export default NavbarSection;