import { useContext, useState } from "react";
import BarBackBtn from "./BarBackBtn";
import iphone13_128 from "../images/Single Product/mobile/iphone/Apple-iPhone-13-1.png";
import iphone13_128_2 from "../images/Single Product/mobile/iphone/Apple-iPhone-13-2.png";
import iphone13_128_3 from "../images/Single Product/mobile/iphone/Apple-iPhone-13-3.png";
import middle from "../images/Single Product/mobile/Middle.png";
import watchOne from "../images/Cart/1.png";
import Colors from "./Colors";
import { productsProvider } from "../contexts/ProductsContext";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ShopContainer = () => {
  
  // redux state
  const products = useSelector(state => state);
  
  // params id of url
  const paramsId = useParams().id;
  
  const product = products.find((p) => p.id === (+paramsId));
  console.log(product);


  const [imageSelected, setImageSelected] = useState(product.images[1]);
  const [openReviewSection, setOpenReviewSection] = useState(false);
  const [openTabAttributes, setOpenTabAttributes] = useState("طراحی");

  

  const [colorSelectedAll, setColorSelectedAll] = useState([
    { [product.colorType]: product.colors[0] },
  ]);

  const changeColorHandler = (e, id) => {
    let NO = e.target.id.split(" ")[0];
    let newColor = e.target.id.split(" ")[1];
    if (NO) {
      let colorSelectedAllCopyied = [...colorSelectedAll];
      colorSelectedAllCopyied[id] = { [NO]: newColor };
      setColorSelectedAll(colorSelectedAllCopyied);
    }
  };

  return (
    <>
      {/* breadcrumb desktop */}
      <div className="bg-white hidden md:flex items-center md:col-span-9 lg:col-span-10 rounded-md">
        <div className="flex items-end gap-x-1.5 text-base pr-6px">
          <span className="text-orange-500">تلفن همراه</span>
          <span className="text-slate-800">
            <svg
              className="w-2 h-4 font-bold"
              stroke="currentColor"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m.945 4.2.006-.006.006-.007c.369-.406 1.067-.973 1.831-1.502.763-.53 1.537-.984 2.042-1.187l.01-.004c.067-.029.2-.079.341-.123a1.72 1.72 0 0 1 .3-.071c.13.002.253.031.375.092a.812.812 0 0 1 .33.377c.02.056.057.198.093.363a11.189 11.189 0 0 1 .054.253l.006.034c.1.558.161 1.502.161 2.575 0 1-.057 1.899-.14 2.48a1.35 1.35 0 0 0-.007.034l-.018.087v.002c-.013.07-.031.159-.052.254a4.92 4.92 0 0 1-.099.382.671.671 0 0 1-.012.033l-.004.01-.002.003a.75.75 0 0 1-.658.42H5.48a.983.983 0 0 1-.155-.03 3.398 3.398 0 0 1-.36-.12l-.226-.095c-.482-.206-1.233-.646-1.978-1.16-.746-.516-1.436-1.07-1.814-1.491L.94 5.794l-.008-.008-.001-.001-.007-.007L.9 5.752a5.482 5.482 0 0 1-.084-.09 2.219 2.219 0 0 1-.164-.195l-.006-.008L.64 5.45a.749.749 0 0 1-.14-.446c0-.185.053-.348.144-.478a9.829 9.829 0 0 0 .113-.125c.058-.065.125-.138.188-.202Z" />
            </svg>
          </span>
          <span className="text-orange-500">برند آیفون</span>
          <span className="text-slate-800">
            <svg
              className="w-2 h-4 font-bold"
              stroke="currentColor"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m.945 4.2.006-.006.006-.007c.369-.406 1.067-.973 1.831-1.502.763-.53 1.537-.984 2.042-1.187l.01-.004c.067-.029.2-.079.341-.123a1.72 1.72 0 0 1 .3-.071c.13.002.253.031.375.092a.812.812 0 0 1 .33.377c.02.056.057.198.093.363a11.189 11.189 0 0 1 .054.253l.006.034c.1.558.161 1.502.161 2.575 0 1-.057 1.899-.14 2.48a1.35 1.35 0 0 0-.007.034l-.018.087v.002c-.013.07-.031.159-.052.254a4.92 4.92 0 0 1-.099.382.671.671 0 0 1-.012.033l-.004.01-.002.003a.75.75 0 0 1-.658.42H5.48a.983.983 0 0 1-.155-.03 3.398 3.398 0 0 1-.36-.12l-.226-.095c-.482-.206-1.233-.646-1.978-1.16-.746-.516-1.436-1.07-1.814-1.491L.94 5.794l-.008-.008-.001-.001-.007-.007L.9 5.752a5.482 5.482 0 0 1-.084-.09 2.219 2.219 0 0 1-.164-.195l-.006-.008L.64 5.45a.749.749 0 0 1-.14-.446c0-.185.053-.348.144-.478a9.829 9.829 0 0 0 .113-.125c.058-.065.125-.138.188-.202Z" />
            </svg>
          </span>
          <span className="text-gray-600 text-sm h-[21px]">آیفون 13</span>
        </div>
      </div>



      {/* product container */}
      <div className="md:bg-white col-span-12 md:col-span-9 lg:col-span-10">
        
        {/* bar */}
        <BarBackBtn />

        {/* breadcrumb mobile */}
        <div className="flex md:hidden items-end gap-x-1.5 text-xs mb-10 pr-6px">
          <span className="text-orange-500">تلفن همراه</span>
          <span className="text-slate-800">
            <svg
              className="w-2 h-3 font-bold"
              stroke="currentColor"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m.945 4.2.006-.006.006-.007c.369-.406 1.067-.973 1.831-1.502.763-.53 1.537-.984 2.042-1.187l.01-.004c.067-.029.2-.079.341-.123a1.72 1.72 0 0 1 .3-.071c.13.002.253.031.375.092a.812.812 0 0 1 .33.377c.02.056.057.198.093.363a11.189 11.189 0 0 1 .054.253l.006.034c.1.558.161 1.502.161 2.575 0 1-.057 1.899-.14 2.48a1.35 1.35 0 0 0-.007.034l-.018.087v.002c-.013.07-.031.159-.052.254a4.92 4.92 0 0 1-.099.382.671.671 0 0 1-.012.033l-.004.01-.002.003a.75.75 0 0 1-.658.42H5.48a.983.983 0 0 1-.155-.03 3.398 3.398 0 0 1-.36-.12l-.226-.095c-.482-.206-1.233-.646-1.978-1.16-.746-.516-1.436-1.07-1.814-1.491L.94 5.794l-.008-.008-.001-.001-.007-.007L.9 5.752a5.482 5.482 0 0 1-.084-.09 2.219 2.219 0 0 1-.164-.195l-.006-.008L.64 5.45a.749.749 0 0 1-.14-.446c0-.185.053-.348.144-.478a9.829 9.829 0 0 0 .113-.125c.058-.065.125-.138.188-.202Z" />
            </svg>
          </span>
          <span className="text-orange-500">برند آیفون</span>
          <span className="text-slate-800">
            <svg
              className="w-2 h-3 font-bold"
              stroke="currentColor"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m.945 4.2.006-.006.006-.007c.369-.406 1.067-.973 1.831-1.502.763-.53 1.537-.984 2.042-1.187l.01-.004c.067-.029.2-.079.341-.123a1.72 1.72 0 0 1 .3-.071c.13.002.253.031.375.092a.812.812 0 0 1 .33.377c.02.056.057.198.093.363a11.189 11.189 0 0 1 .054.253l.006.034c.1.558.161 1.502.161 2.575 0 1-.057 1.899-.14 2.48a1.35 1.35 0 0 0-.007.034l-.018.087v.002c-.013.07-.031.159-.052.254a4.92 4.92 0 0 1-.099.382.671.671 0 0 1-.012.033l-.004.01-.002.003a.75.75 0 0 1-.658.42H5.48a.983.983 0 0 1-.155-.03 3.398 3.398 0 0 1-.36-.12l-.226-.095c-.482-.206-1.233-.646-1.978-1.16-.746-.516-1.436-1.07-1.814-1.491L.94 5.794l-.008-.008-.001-.001-.007-.007L.9 5.752a5.482 5.482 0 0 1-.084-.09 2.219 2.219 0 0 1-.164-.195l-.006-.008L.64 5.45a.749.749 0 0 1-.14-.446c0-.185.053-.348.144-.478a9.829 9.829 0 0 0 .113-.125c.058-.065.125-.138.188-.202Z" />
            </svg>
          </span>
          <span className="text-gray-600">آیفون 13</span>
        </div>




        {/* product info */}
        <div className="w-full">
          <div className="flex flex-col lg:flex-row w-full">
              {/* product image */}
            <div className="lg:w-1/3 mb-8 md:pt-5 lg:max-w-[300px]">
              <img className="lg:w-[350px] mx-auto" src={imageSelected} alt="iphone13" />
              <div className="w-56 flex justify-center mx-auto gap-x-2">
                {
                  product.images.map((image) => (
                    <div onClick={() => setImageSelected(image)} className="w-1/3 mt-2 cursor-pointer border border-gray-400 p-1.5 rounded-lg"><img src={image} alt="iphone13" /></div>
                  ))
                }
              </div>
            </div>

            <div className="lg:pt-10 lg:w-1/3 xl:mr-5">
              {/* product title */}
                <div className="w-full lg:text-right text-center mb-11">
                  <h2 className="text-slate-800 text-xl font-medium mb-1">
                    {product.persianName}
                  </h2>
                  <h3 className="text-gray-500">{product.englishName}</h3>
                </div>

                {/* product colors */}
                <div className="flex items-center lg:justify-start justify-center mx-auto mb-7">
                  <p className="font-medium text-lg text-slate-800">انتخاب رنگ:</p>
                  <div className="flex mr-28 md:mr-48 lg:mr-20 xl:mr-28">
                    {product.colors.map((color) => (
                      <Colors
                        place="singleProduct"
                        key={color}
                        color={color}
                        product={product}
                        colorSelectedAll={colorSelectedAll}
                        changeColorHandler={changeColorHandler}
                      />
                    ))}
                  </div>
                </div>

                {/* product attributes */}
                <div className="hidden lg:flex justify-start bg-white xs:w-[430px] sm:w-[500px] md:w-full mx-auto flex-col rounded-xl text-slate-800 mb-3">
                  <h3 className="mb-5 text-xl font-bold">ویژگی های کالا:</h3>
                  <ul className="flex flex-col text-lg list-disc gap-y-2 marker:bg-orange-500 list-inside">
                    <li className="lg:flex-col lg:items-start flex flex-col md:flex-row md:items-center">
                      <span className="font-light">حافظه داخلی:</span>
                      <span className="font-medium md:mr-3">128 گیگابایت</span>
                    </li>

                    <li className="lg:flex-col lg:items-start flex flex-col md:flex-row md:items-center">
                      <span className="font-light">بازه ی اندازه صفحه نمایش:</span>
                      <span className="font-medium md:mr-3">6 اینچ و بزرگتر</span>
                    </li>

                    <li className="lg:flex-col lg:items-start flex flex-col md:flex-row md:items-center">
                      <span className="font-light">شبکه های ارتباطی:</span>
                      <span className="font-medium md:mr-3">
                        2G &bull; 3G &bull; 4G &bull; 5G
                      </span>
                    </li>
                  </ul>
                </div>

            </div>




            {/* seller info desktop */}
            <div className="lg:pt-10 lg:w-1/3 w-full hidden md:block mx-auto px-10 lg:px-0">
                <div className="lg:flex-col xl:ml-0 xl:mr-auto lg:w-64 lg:mx-auto lg:gap-y-16 w-full bg-slate-100 p-4 py-6 flex items-center rounded-lg">
                  <div className="flex w-full items-center md:flex-col md:items-start flex-wrap gap-y-3 mx-auto">
                    <div className="flex gap-x-2 items-center ml-2">
                      <div className="flex gap-x-1">
                        <span>
                          <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="12" cy="8" r="8" fill="#E2E2E2" />
                            <path
                              d="M1.75586 11.5449V14.1641C1.75586 16.7833 2.80586 17.8333 5.42503 17.8333H8.56919C11.1884 17.8333 12.2384 16.7833 12.2384 14.1641V11.5449"
                              stroke="#222F5D"
                              stroke-width="0.875"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M7.00012 11.9993C8.06762 11.9993 8.85512 11.1302 8.75012 10.0627L8.36512 6.16602H5.64095L5.25012 10.0627C5.14512 11.1302 5.93262 11.9993 7.00012 11.9993Z"
                              stroke="#222F5D"
                              stroke-width="0.875"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.681 11.9993C11.8593 11.9993 12.7226 11.0427 12.606 9.87018L12.4426 8.26602C12.2326 6.74935 11.6493 6.16602 10.121 6.16602H8.3418L8.75013 10.2552C8.8493 11.2177 9.71846 11.9993 10.681 11.9993Z"
                              stroke="#222F5D"
                              stroke-width="0.875"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M3.29005 11.9993C4.25255 11.9993 5.12172 11.2177 5.21505 10.2552L5.34339 8.96602L5.62339 6.16602H3.84422C2.31589 6.16602 1.73255 6.74935 1.52255 8.26602L1.36505 9.87018C1.24839 11.0427 2.11172 11.9993 3.29005 11.9993Z"
                              stroke="#222F5D"
                              stroke-width="0.875"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M7.00033 14.916C6.02616 14.916 5.54199 15.4002 5.54199 16.3743V17.8327H8.45866V16.3743C8.45866 15.4002 7.97449 14.916 7.00033 14.916Z"
                              stroke="#222F5D"
                              stroke-width="0.875"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="font-bold text-sm text-slate-800">
                          فروشنده:
                        </span>
                      </div>
                      <span className="text-xs text-slate-800">دیجی تایز</span>
                    </div>

                    <div className="flex gap-x-2 items-center">
                      <div className="flex gap-x-1">
                        <span>
                          <svg
                            width="21"
                            height="19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="13" cy="8" r="8" fill="#E2E2E2" />
                            <path
                              d="M7.43 3.58 3.897 4.91c-.815.305-1.48 1.268-1.48 2.132v5.263c0 .836.552 1.934 1.225 2.437l3.046 2.274c.999.75 2.642.75 3.64 0l3.046-2.274c.673-.503 1.226-1.6 1.226-2.437V7.043c0-.87-.666-1.834-1.48-2.139L9.583 3.58c-.602-.22-1.566-.22-2.153 0Z"
                              stroke="#222F5D"
                              stroke-width="1.063"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="font-bold text-sm text-slate-800">
                          گارانتی:
                        </span>
                      </div>
                      <span className="text-xs text-slate-800">18 ماه زرین خدمت</span>
                    </div>

                    <div className="flex gap-x-2 ">
                      <div className="flex gap-x-1">
                        <span>
                          <svg
                            width="20"
                            height="21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="12" cy="8" r="8" fill="#E2E2E2" />
                            <path d="M10 6.333V13c0 .733-.6 1.333-1.333 1.333H1.334V10.08a2.6 2.6 0 0 0 2.06.92 2.563 2.563 0 0 0 1.733-.707c.207-.173.38-.393.513-.633.24-.407.373-.887.36-1.387a2.655 2.655 0 0 0-.906-1.94H10Z" stroke="#222F5D" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.667 14.333v2c0 1.107-.893 2-2 2H12C12 17.6 11.4 17 10.667 17s-1.333.6-1.333 1.333H6.667c0-.733-.6-1.333-1.333-1.333C4.6 17 4 17.6 4 18.333h-.667c-1.106 0-2-.893-2-2v-2h7.334C9.4 14.333 10 13.733 10 13V8.333h1.227c.48 0 .92.26 1.16.673L13.527 11h-.86c-.367 0-.667.3-.667.666v2c0 .367.3.667.667.667h2Z" stroke="#222F5D" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5.333 19.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM10.667 19.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM14.667 13v1.333h-2a.669.669 0 0 1-.667-.666v-2c0-.367.3-.667.667-.667h.86l1.14 2Z" stroke="#222F5D" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6 8.333c0 .8-.353 1.513-.906 2a2.666 2.666 0 1 1-1.76-4.667A2.666 2.666 0 0 1 6 8.333Z" stroke="#222F5D" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.5 7.499v1l-.833.5" stroke="#222F5D" stroke-width="1.125" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </span>
                        <span className="font-bold text-sm text-slate-800">
                          ارسال توسط:
                        </span>
                      </div>
                      <span className="text-xs text-slate-800">انبار تهرن</span>
                    </div>
                  </div>
                  <div className="w-full flex flex-col items-end gap-y-3">
                    <div className="text-orange-500 font-medium ml-1">
                      <span>{product.price}</span>
                      <span className="mr-1">تومان</span>
                    </div>
                    <div className="">
                        <button className="bg-orange-500 flex lg:px-10  justify-center py-3 px-5 w-fit items-center text-stone-50 font-medium text-lg rounded-md">
                          اضافه به سبد خرید
                        </button>
                    </div>
                  </div>
                </div>
              </div>

            {/* seller info mobile */}
            <div className="md:hidden flex items-center flex-wrap gap-y-2 w-80 mx-auto mb-7">
              <div className="flex gap-x-2 items-center ml-2">
                <div className="flex gap-x-1">
                  <span>
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="8" r="8" fill="#E2E2E2" />
                      <path
                        d="M1.75586 11.5449V14.1641C1.75586 16.7833 2.80586 17.8333 5.42503 17.8333H8.56919C11.1884 17.8333 12.2384 16.7833 12.2384 14.1641V11.5449"
                        stroke="#222F5D"
                        stroke-width="0.875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.00012 11.9993C8.06762 11.9993 8.85512 11.1302 8.75012 10.0627L8.36512 6.16602H5.64095L5.25012 10.0627C5.14512 11.1302 5.93262 11.9993 7.00012 11.9993Z"
                        stroke="#222F5D"
                        stroke-width="0.875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.681 11.9993C11.8593 11.9993 12.7226 11.0427 12.606 9.87018L12.4426 8.26602C12.2326 6.74935 11.6493 6.16602 10.121 6.16602H8.3418L8.75013 10.2552C8.8493 11.2177 9.71846 11.9993 10.681 11.9993Z"
                        stroke="#222F5D"
                        stroke-width="0.875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.29005 11.9993C4.25255 11.9993 5.12172 11.2177 5.21505 10.2552L5.34339 8.96602L5.62339 6.16602H3.84422C2.31589 6.16602 1.73255 6.74935 1.52255 8.26602L1.36505 9.87018C1.24839 11.0427 2.11172 11.9993 3.29005 11.9993Z"
                        stroke="#222F5D"
                        stroke-width="0.875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.00033 14.916C6.02616 14.916 5.54199 15.4002 5.54199 16.3743V17.8327H8.45866V16.3743C8.45866 15.4002 7.97449 14.916 7.00033 14.916Z"
                        stroke="#222F5D"
                        stroke-width="0.875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-bold text-sm text-slate-800">
                    فروشنده:
                  </span>
                </div>
                <span className="text-xs text-slate-800">دیجی تایز</span>
              </div>

              <div className="flex gap-x-2 items-center">
                <div className="flex gap-x-1">
                  <span>
                    <svg
                      width="21"
                      height="19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="13" cy="8" r="8" fill="#E2E2E2" />
                      <path
                        d="M7.43 3.58 3.897 4.91c-.815.305-1.48 1.268-1.48 2.132v5.263c0 .836.552 1.934 1.225 2.437l3.046 2.274c.999.75 2.642.75 3.64 0l3.046-2.274c.673-.503 1.226-1.6 1.226-2.437V7.043c0-.87-.666-1.834-1.48-2.139L9.583 3.58c-.602-.22-1.566-.22-2.153 0Z"
                        stroke="#222F5D"
                        stroke-width="1.063"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-bold text-sm text-slate-800">
                    گارانتی:
                  </span>
                </div>
                <span className="text-xs text-slate-800">18 ماه زرین خدمت</span>
              </div>

              <div className="flex gap-x-2 items-center w-full justify-center">
                <div className="flex gap-x-1">
                  <span>
                    <svg
                      width="20"
                      height="21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="8" r="8" fill="#E2E2E2" />
                      <path
                        d="M10 6.333V13c0 .733-.6 1.333-1.333 1.333H1.334V10.08a2.6 2.6 0 0 0 2.06.92 2.563 2.563 0 0 0 1.733-.707c.207-.173.38-.393.513-.633.24-.407.373-.887.36-1.387a2.655 2.655 0 0 0-.906-1.94H10Z"
                        stroke="#222F5D"
                        stroke-width="1.125"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.667 14.333v2c0 1.107-.893 2-2 2H12C12 17.6 11.4 17 10.667 17s-1.333.6-1.333 1.333H6.667c0-.733-.6-1.333-1.333-1.333C4.6 17 4 17.6 4 18.333h-.667c-1.106 0-2-.893-2-2v-2h7.334C9.4 14.333 10 13.733 10 13V8.333h1.227c.48 0 .92.26 1.16.673L13.527 11h-.86c-.367 0-.667.3-.667.666v2c0 .367.3.667.667.667h2Z"
                        stroke="#222F5D"
                        stroke-width="1.125"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.333 19.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM10.667 19.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM14.667 13v1.333h-2a.669.669 0 0 1-.667-.666v-2c0-.367.3-.667.667-.667h.86l1.14 2Z"
                        stroke="#222F5D"
                        stroke-width="1.125"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6 8.333c0 .8-.353 1.513-.906 2a2.666 2.666 0 1 1-1.76-4.667A2.666 2.666 0 0 1 6 8.333Z"
                        stroke="#222F5D"
                        stroke-width="1.125"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.5 7.499v1l-.833.5"
                        stroke="#222F5D"
                        stroke-width="1.125"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-bold text-sm text-slate-800">
                    ارسال توسط:
                  </span>
                </div>
                <span className="text-xs text-slate-800">انبار تهرن</span>
              </div>
            </div>
          </div>



            




          {/* product attributes */}
          <div className="bg-white xs:w-[430px] sm:w-[500px] md:w-full lg:hidden md:mb-10 md:px-6 mx-auto flex flex-col p-5 rounded-xl text-slate-800 mb-3">
            <h3 className="mb-5 text-xl font-bold">ویژگی های کالا:</h3>
            <ul className="flex flex-col text-lg list-disc gap-y-2 marker:bg-orange-500 list-inside">
              <li className="flex flex-col md:flex-row md:items-center">
                <span className="font-light">حافظه داخلی:</span>
                <span className="font-medium md:mr-3">128 گیگابایت</span>
              </li>

              <li className="flex flex-col md:flex-row md:items-center">
                <span className="font-light">بازه ی اندازه صفحه نمایش:</span>
                <span className="font-medium md:mr-3">6 اینچ و بزرگتر</span>
              </li>

              <li className="flex flex-col md:flex-row md:items-center">
                <span className="font-light">شبکه های ارتباطی:</span>
                <span className="font-medium md:mr-3">
                  2G &bull; 3G &bull; 4G &bull; 5G
                </span>
              </li>
            </ul>
          </div>

          {/* product Review */}
          <div className="bg-white w-full xs:w-[430px] sm:w-[500px] md:w-full md:mb-10 md:px-6 flex flex-col p-5 rounded-xl mx-auto text-slate-800 mb-3">
            
            <h3 className="mb-5 text-xl font-bold ">نقد و بررسی این محصول</h3>
            <p className={`mb-4 ${openReviewSection ? "h-full text-clip overflow-visible" : "text-ellipsis overflow-hidden h-72" } md:h-full md:text-clip md:overflow-visible`}>
              گوشی موبایل «iPhone 13» پرچم‌دار جدید شرکت اپل است که با چند ویژگی
              جدید و دوربین دوگانه روانه بازار شده است. اپل برای ویژگی‌ها و
              طراحی کلی این گوشی از همان فرمول چند سال اخیرش استفاده کرده است.
              نمایشگر آیفون 13 به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار
              مطلوبی را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی
              دارد؛ به‌طوری‌که در اندازه­‌ی 6.1 اینچی‌اش، حدود 460 پیکسل را در
              هر اینچ جا داده است. امکان شارژ بی‌‌سیم باتری در این گوشی وجود
              دارد. روکش سرامیکی صفحه‌نمایش این گوشی می‌تواند انقلابی در محافظت
              به‌پا کند. این گوشی ضدآب و ضد گردوخاک است. بدنه­ زیبا iPhone 13 در
              مقابل خط‌‌وخش مقاومت زیادی دارد؛ پس خیالتان از این بابت که آب و
              گردوغبار به‌‌راحتی روی آیفون 13 تأثیر نمی‌‌گذارد، راحت باشد.
              علاوه‌براین لکه و چربی هم روی این صفحه‌نمایش باکیفیت تأثیر چندانی
              ندارند. تشخیص چهره با استفاده از دوربین جلو دیگر ویژگی است که در
              آیفون جدید اپل به کار گرفته شده است. قابلیت اتصال به شبکه­‌های 4G
              و 5G، بلوتوث نسخه‌ 5، نسخه­‌ 15 از iOS دیگر ویژگی‌های این گوشی
              هستند. ازنظر سخت‌‌افزاری هم این گوشی از تراشه­‌ی جدید A15 بهره
              می‌برد که دارای 15 میلیارد ترانزیستور است که دارای کنترل گرمای
              مطلوبی بوده که تا بتواند علاوه بر کارهای معمول، از قابلیت‌های جدید
              واقعیت مجازی که اپل این روزها روی آن تمرکز خاصی دارد، پشتیبانی
              کند. به گفته خود شرکت اپل این گوشی دارای سرعتی 50 برابر نسخه 12
              خود است. پردازنده دارای ماژولار جدیدی است که مصرف باتری را بسیار
              پایین‌تر آورده است و شما دارای حفظ باتری بالاتری هستید. کیفیت
              نمایش شما در iPhone 13 دارای 120 هرتز است و کسفیت بالایی را شاهد
              خواهید بود. اپل در این سری از گوشی‌های iPhone خود پردازنده
              گرافیکی‌ای را قرار داده که از سری 12 گوشی‌های خود 30 درصد سریع‌تر
              است و این نویدبخش آن است که شما می‌توانید بازی‌هایی را با گرافیک و
              MAP سنگین تر و بزرگ‌تر اجرا کنید. یکی از ویژگی‌هایی که در iPhone
              13 شاهد هستیم سیستم فیلمبرداری ProRes سینمایی آن است که می تواند
              انقلابی در فیلمبرداری گوشی‌های موبایل به‌راه انداخته باشد. این
              قابلیت می‌تواند نسبت به صورت روبرو بین افراد و یا بین فرد و اشیا
              فوکوس و بِلار داشته باشد.
            </p>
            <p onClick={() => setOpenReviewSection(prev => !prev)} className="md:hidden cursor-pointer text-orange-500 font-medium text-left">
                {openReviewSection ? "بستن مطلب" : "ادامه مطلب"}
            </p> 

          </div>

            {/* product attributes 2 */}
            <div className="bg-white xs:w-[430px] sm:w-[500px] md:w-full md:px-6 md:mb-10 mx-auto flex flex-col py-3 px-5 rounded-xl text-slate-800">
                
                <div className="md:hidden bg-stone-100  w-72 justify-center py-1 flex rounded-3xl overflow-hidden mb-8 mx-auto">
                    <button onClick={() => setOpenTabAttributes("دوربین")} className={`${openTabAttributes === "دوربین" && "shadow-[0_0_10px__rgba(0,0,0,0.2)] bg-white"} py-2 px-6 rounded-3xl text-center`}>دوربین</button>
                    <button onClick={() => setOpenTabAttributes("طراحی")} className= {`${openTabAttributes === "طراحی" && "shadow-[0_0_10px__rgba(0,0,0,0.2)] bg-white"} py-2 px-6 rounded-3xl text-center`}>طراحی</button>
                    <button onClick={() => setOpenTabAttributes("باتری")} className={`${openTabAttributes === "باتری" && "shadow-[0_0_10px__rgba(0,0,0,0.2)] bg-white"} py-2 px-6 rounded-3xl text-center`}>باتری</button>
                </div>

                {
                    openTabAttributes === "دوربین" && <>
                        <h3 className="mb-5 text-xl font-bold md:hidden">دوربین</h3>
                        <p className="mb-4 text-slate-800 md:hidden">
                            شاید در نگاه اول و بر روی کاغذ، سنسور‌های دوربین در نظر گرفته شده برای آیفون13 چندان تفاوتی با سنسور‌های دوربین آیفون 12 نداشته باشند، اما بدون شک آیفون 13 می‌تواند در این بخش عملکرد بهتری به نسبت مدل آیفون 12 داشته باشد. شاید از خودتان بپرسید که چرا؟ در ادامه به شما خواهیم گفت. در ابتدا نگاهی به مشخصات سنسور‌های دوربین در نظر گرفته شده برای این گوشی‌هوشمند خواهیم داشت. یک سنسور دوربین اصلی با رزولوشن 12 مگاپیکسل، گشودگی دریچه دیافراگم f/1.6، فاصله کانونی 26 میلی متر از نوع عریض به‌همراه سنسور دوربین از نوع فوق عریض (ultra wide) با رزولوشن 12 مگاپیکسل، گشودگی دریچه دیافراگم f/2.4، زاویه دید 120 درجه و فاصله کانونی 13 میلی‌متر، سنسور‌های دوربین دوگانه آیفون 13 را تشکیل می‌دهند. برای دوربین سلفی نیز، سنسور 12 مگاپیکسل از نوع عریض با گشودگی دریچه دیافراگم f/2.2 در نظر گرفته شده که توانایی ضبط ویدیو با کیفیت 4K و نرخ 60 فریم در ثانیه را هم دارد. اما چرا آیفون 13 با بهره بردن از سنسور‌های دوربین مشابه با آیفون 12 می‌تواند خروجی تصاویر با‌کیفیت‌تری را ارائه دهد؟ دلیل اصلی این اتفاق، پردازنده قدرتمند‌تر در نظر گرفته شده برای آیفون 13 است. یکی از اصلی ترین دلایل برای خروجی تصاویر بهتر، پردازنده تصویری یا همان ISP است که یکی از بخش‌های پردازنده است. پس به‌طبع بهره بردن از پردازنده قدرتمند‌تر، خروجی تصاویر با‌کیفیت‌تری را ارائه می‌کند. عملکرد سنسور دوربین اصلی 12 مگاپیکسلی در نور روز جای هیچ حرف و حدیثی را باقی نگذاشته است. داینامیک رنج بسیار جذاب، جزئیات عالی و کنتراست بسیار جذاب در تصاویر خروجی ثبت شده به‌خوبی دیده می‌شود. گشودگی دریچه دیافراگم هم جذب نور بسیار خوبی دارد و این نشان از عملکرد عالی این گوشی هوشمند در ثبت تصاویر شب یا در نور کم دارد. سنسور دوربین فوق عریض نیز با زاویه دید گسترده‌تر به نسبت سنسور دوربین اصلی، این امکان را برای شما فراهم می‌کند که تصاویری با زاویه دید باز و بسیار جذاب (برای مثال عکاسی در طبیعت و عکس‌های گروهی) به ثبت برسانید.
                        </p>
                    </>
                }
                <div className="hidden md:block mb-10">
                  <h3 className="mb-5 text-xl font-bold ">دوربین</h3>
                    <p className="mb-4 text-slate-800">
                        شاید در نگاه اول و بر روی کاغذ، سنسور‌های دوربین در نظر گرفته شده برای آیفون13 چندان تفاوتی با سنسور‌های دوربین آیفون 12 نداشته باشند، اما بدون شک آیفون 13 می‌تواند در این بخش عملکرد بهتری به نسبت مدل آیفون 12 داشته باشد. شاید از خودتان بپرسید که چرا؟ در ادامه به شما خواهیم گفت. در ابتدا نگاهی به مشخصات سنسور‌های دوربین در نظر گرفته شده برای این گوشی‌هوشمند خواهیم داشت. یک سنسور دوربین اصلی با رزولوشن 12 مگاپیکسل، گشودگی دریچه دیافراگم f/1.6، فاصله کانونی 26 میلی متر از نوع عریض به‌همراه سنسور دوربین از نوع فوق عریض (ultra wide) با رزولوشن 12 مگاپیکسل، گشودگی دریچه دیافراگم f/2.4، زاویه دید 120 درجه و فاصله کانونی 13 میلی‌متر، سنسور‌های دوربین دوگانه آیفون 13 را تشکیل می‌دهند. برای دوربین سلفی نیز، سنسور 12 مگاپیکسل از نوع عریض با گشودگی دریچه دیافراگم f/2.2 در نظر گرفته شده که توانایی ضبط ویدیو با کیفیت 4K و نرخ 60 فریم در ثانیه را هم دارد. اما چرا آیفون 13 با بهره بردن از سنسور‌های دوربین مشابه با آیفون 12 می‌تواند خروجی تصاویر با‌کیفیت‌تری را ارائه دهد؟ دلیل اصلی این اتفاق، پردازنده قدرتمند‌تر در نظر گرفته شده برای آیفون 13 است. یکی از اصلی ترین دلایل برای خروجی تصاویر بهتر، پردازنده تصویری یا همان ISP است که یکی از بخش‌های پردازنده است. پس به‌طبع بهره بردن از پردازنده قدرتمند‌تر، خروجی تصاویر با‌کیفیت‌تری را ارائه می‌کند. عملکرد سنسور دوربین اصلی 12 مگاپیکسلی در نور روز جای هیچ حرف و حدیثی را باقی نگذاشته است. داینامیک رنج بسیار جذاب، جزئیات عالی و کنتراست بسیار جذاب در تصاویر خروجی ثبت شده به‌خوبی دیده می‌شود. گشودگی دریچه دیافراگم هم جذب نور بسیار خوبی دارد و این نشان از عملکرد عالی این گوشی هوشمند در ثبت تصاویر شب یا در نور کم دارد. سنسور دوربین فوق عریض نیز با زاویه دید گسترده‌تر به نسبت سنسور دوربین اصلی، این امکان را برای شما فراهم می‌کند که تصاویری با زاویه دید باز و بسیار جذاب (برای مثال عکاسی در طبیعت و عکس‌های گروهی) به ثبت برسانید.
                    </p>
                </div>



                {
                    openTabAttributes === "طراحی" && <>
                        <h3 className="mb-5 text-xl font-bold md:hidden">طراحی</h3>
                        <p className="mb-4 md:hidden">
                            اپل چندان تمایلی به تغییر طراحی‌های موفق خود ندارد و ترجیح می‌دهد تا زبان طراحی موفق و جذاب خود را حفظ کند. آیفون 13 نیز از طراحی مشابهی با نسل قبلی خود بهره برده است. در نمای رو‌به‌رویی همان ناچ و بریدگی آشنای سری‌های قبلی را می‌بینیم که این بار عرض کمتری به نسبت ناچ صفحه‌نمایش آیفون 12 دارد. در نمای پشتی هم شاهد قرار گیری دو سنسور دوربین می‌باشیم که بر‌خلاف مدل آیفون 12، این بار دو سنسور دوربین با چیدمانی ضربدری با فلش LED در بریدگی مربعی شکل قرار گرفته‌اند. این در حالی است که دو سنسور دوربین قسمت پشتی آیفون 12 با چیدمانی ستونی شکل در کنار یکدیگر قرار گرفته‌اند.
                        </p>
                    </>
                }
                <div className="hidden md:block">
                  <h3 className="mb-5 text-xl font-bold">طراحی</h3>
                    <p className="mb-4">
                        اپل چندان تمایلی به تغییر طراحی‌های موفق خود ندارد و ترجیح می‌دهد تا زبان طراحی موفق و جذاب خود را حفظ کند. آیفون 13 نیز از طراحی مشابهی با نسل قبلی خود بهره برده است. در نمای رو‌به‌رویی همان ناچ و بریدگی آشنای سری‌های قبلی را می‌بینیم که این بار عرض کمتری به نسبت ناچ صفحه‌نمایش آیفون 12 دارد. در نمای پشتی هم شاهد قرار گیری دو سنسور دوربین می‌باشیم که بر‌خلاف مدل آیفون 12، این بار دو سنسور دوربین با چیدمانی ضربدری با فلش LED در بریدگی مربعی شکل قرار گرفته‌اند. این در حالی است که دو سنسور دوربین قسمت پشتی آیفون 12 با چیدمانی ستونی شکل در کنار یکدیگر قرار گرفته‌اند.
                    </p>
                    <img className="block mx-auto" src={middle} alt="middle" />
                </div>


                {
                    openTabAttributes === "باتری" && <>
                        <h3 className="mb-5 text-xl font-bold md:hidden">باتری</h3>
                        <p className="mb-4 md:hidden">
                        باید قبول کنیم که تا به امروز، پردازنده‌های قدرتمند گوشی‌های هوشمند اپل در کنار سیستم عامل بی‌نظیر iOS توانسته اند عملکرد بسیار شگفت‌انگیزی را به نمایش بگذارند. این بار هم آیفون 13 همانند برادران بزرگترش، یعنی آیفون 13 پرو وآیفون 13 پرو مکس، به قدرتمند‌ترین پردازنده این شرکت یعنیُ A15 بایونیک مجهز شده است. پردازنده ای با معماری 5 نانومتری و متشکل از 6 هسته (2 هسته قدرتمند‌تر به‌همراه 4 هسته با کارایی معمولی و صرفه انرژی کمتر). برای GPU یا همان پردازنده گرافیکی نیست، پردازنده اختصاصی 4 هسته‌ای در نظر گرفته شده است. با توجه به نتایج بنچمارک و تست های انجام شده باید بگوییم که هیچ بازی در دنیا وجود ندارد که آیفون 13 با بهره بردن از چنین پردازنده قدرتمندی، توانایی اجرا آن را نداشته باشد. البته لازم به ذکر است که این گوشی توانایی اجرای بازی های سنگینی همچون کال‌آ‌ف‌دیوتی موبایل و آسفالت 9 را در بالاتری تنظیمات گرافیکی خواهد داشت. از طرفی معماری 5 نانومتری این پردازنده نیز سبب شده تا به‌نسبت پردازنده‌هایی با معماری 7 و 10 نانومتری مصرف انرژی کمتری داشته باشد و در نهایت طول عمر مفید طولانی‌تری به ازای هر بار شارژ 100 درصدی ارائه کند.
                        </p>
                    </>
                }
                <div className="hidden md:block mb-10">
                  <h3 className="mb-5 text-xl font-bold">باتری</h3>
                  <p className="mb-4">
                  باید قبول کنیم که تا به امروز، پردازنده‌های قدرتمند گوشی‌های هوشمند اپل در کنار سیستم عامل بی‌نظیر iOS توانسته اند عملکرد بسیار شگفت‌انگیزی را به نمایش بگذارند. این بار هم آیفون 13 همانند برادران بزرگترش، یعنی آیفون 13 پرو وآیفون 13 پرو مکس، به قدرتمند‌ترین پردازنده این شرکت یعنیُ A15 بایونیک مجهز شده است. پردازنده ای با معماری 5 نانومتری و متشکل از 6 هسته (2 هسته قدرتمند‌تر به‌همراه 4 هسته با کارایی معمولی و صرفه انرژی کمتر). برای GPU یا همان پردازنده گرافیکی نیست، پردازنده اختصاصی 4 هسته‌ای در نظر گرفته شده است. با توجه به نتایج بنچمارک و تست های انجام شده باید بگوییم که هیچ بازی در دنیا وجود ندارد که آیفون 13 با بهره بردن از چنین پردازنده قدرتمندی، توانایی اجرا آن را نداشته باشد. البته لازم به ذکر است که این گوشی توانایی اجرای بازی های سنگینی همچون کال‌آ‌ف‌دیوتی موبایل و آسفالت 9 را در بالاتری تنظیمات گرافیکی خواهد داشت. از طرفی معماری 5 نانومتری این پردازنده نیز سبب شده تا به‌نسبت پردازنده‌هایی با معماری 7 و 10 نانومتری مصرف انرژی کمتری داشته باشد و در نهایت طول عمر مفید طولانی‌تری به ازای هر بار شارژ 100 درصدی ارائه کند.
                  </p>
                </div>

                
            </div>

            <div className="h-24">

            </div>



        </div>



      </div>
      {/* btn add to cart */}
      <div className="md:hidden bg-white w-full fixed bottom-0 left-0 rounded-tr-md rounded-tl-md z-20">
        <div className="w-11/12 xs:w-96 flex items-center justify-center px-2px py-2 mx-auto">
          <div className="flex-auto">
            <button className="bg-orange-500 flex justify-center py-4 px-7 items-center text-stone-50 font-medium text-xl rounded-md">
              اضافه به سبد خرید
            </button>
          </div>
          <div className="flex-1 flex flex-col">
            <span>{product.price}</span>
            <span>تومان</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopContainer;
