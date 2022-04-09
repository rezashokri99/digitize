const ProductAttributesTablet = () => {
    return (
        <>
            <h3 className="mb-5 text-xl font-bold dark:text-stone-50">ویژگی های کالا:</h3>
            <ul className="flex flex-col text-lg list-disc gap-y-2 marker:bg-orange-500 list-inside">
              <li className="flex flex-col md:flex-row md:items-center">
                <span className="font-light dark:text-stone-100">حافظه داخلی:</span>
                <span className="font-medium dark:text-stone-100 md:mr-3">128 گیگابایت</span>
              </li>

              <li className="flex flex-col md:flex-row md:items-center">
                <span className="font-light dark:text-stone-100">بازه ی اندازه صفحه نمایش:</span>
                <span className="font-medium dark:text-stone-100 md:mr-3">6 اینچ و بزرگتر</span>
              </li>

              <li className="flex flex-col md:flex-row md:items-center">
                <span className="font-light dark:text-stone-100">شبکه های ارتباطی:</span>
                <span className="font-medium dark:text-stone-100 md:mr-3">
                  2G &bull; 3G &bull; 4G &bull; 5G
                </span>
              </li>
            </ul>
        </>
    );
}
 
export default ProductAttributesTablet;