const Backdrop = ({openFilterMobile, openSortMobile, backdropHandler}) => {
    return (
        <div onClick={backdropHandler} className={`${(!openFilterMobile && !openSortMobile ) && "hidden"} md:hidden transition-all duration-300 z-10 h-screen w-screen bg-stone-100 fixed bottom-0 opacity-60`}></div>
    );
}
 
export default Backdrop;