import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddToCartDesktopSize from "./AddToCartDesktopSize";

const SellerInfoDesktop = () => {

    // params id of url
    const paramsId = useParams().id;

    // redux state
    const product = useSelector(state => state.productsState[paramsId], shallowEqual);

    return (
        <>
            <div className="lg:flex-col xl:ml-0 xl:mr-auto lg:w-64 lg:mx-auto lg:gap-y-16 w-full bg-slate-100 dark:bg-slate-700 p-4 py-6 flex items-center rounded-lg">
                  <div className="flex w-full items-center md:flex-col md:items-start flex-wrap gap-y-3 mx-auto">
                    <div className="flex gap-x-2 items-center ml-2">
                      <div className="flex gap-x-1">
                        <span className="text-slate-800 dark:text-stone-300">
                          <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle fillOpacity=".29" cx="12" cy="8" r="8" fill="#E2E2E2" />
                            <path
                              d="M1.75586 11.5449V14.1641C1.75586 16.7833 2.80586 17.8333 5.42503 17.8333H8.56919C11.1884 17.8333 12.2384 16.7833 12.2384 14.1641V11.5449"
                              stroke="currentColor"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.00012 11.9993C8.06762 11.9993 8.85512 11.1302 8.75012 10.0627L8.36512 6.16602H5.64095L5.25012 10.0627C5.14512 11.1302 5.93262 11.9993 7.00012 11.9993Z"
                              stroke="currentColor"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.681 11.9993C11.8593 11.9993 12.7226 11.0427 12.606 9.87018L12.4426 8.26602C12.2326 6.74935 11.6493 6.16602 10.121 6.16602H8.3418L8.75013 10.2552C8.8493 11.2177 9.71846 11.9993 10.681 11.9993Z"
                              stroke="currentColor"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3.29005 11.9993C4.25255 11.9993 5.12172 11.2177 5.21505 10.2552L5.34339 8.96602L5.62339 6.16602H3.84422C2.31589 6.16602 1.73255 6.74935 1.52255 8.26602L1.36505 9.87018C1.24839 11.0427 2.11172 11.9993 3.29005 11.9993Z"
                              stroke="currentColor"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.00033 14.916C6.02616 14.916 5.54199 15.4002 5.54199 16.3743V17.8327H8.45866V16.3743C8.45866 15.4002 7.97449 14.916 7.00033 14.916Z"
                              stroke="currentColor"
                              strokeWidth="0.875"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="font-bold text-sm text-slate-800 dark:text-stone-100">
                          فروشنده:
                        </span>
                      </div>
                      <span className="text-xs text-slate-800 dark:text-stone-400">دیجی تایز</span>
                    </div>

                    <div className="flex gap-x-2 items-center">
                      <div className="flex gap-x-1">
                        <span className="text-slate-800 dark:text-stone-300">
                          <svg
                            width="21"
                            height="19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle fillOpacity=".29" cx="13" cy="8" r="8" fill="#E2E2E2" />
                            <path
                              d="M7.43 3.58 3.897 4.91c-.815.305-1.48 1.268-1.48 2.132v5.263c0 .836.552 1.934 1.225 2.437l3.046 2.274c.999.75 2.642.75 3.64 0l3.046-2.274c.673-.503 1.226-1.6 1.226-2.437V7.043c0-.87-.666-1.834-1.48-2.139L9.583 3.58c-.602-.22-1.566-.22-2.153 0Z"
                              stroke="currentColor"
                              strokeWidth="1.063"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="font-bold text-sm text-slate-800 dark:text-stone-100">
                          گارانتی:
                        </span>
                      </div>
                      <span className="text-xs text-slate-800 dark:text-stone-400">18 ماه زرین خدمت</span>
                    </div>

                    <div className="flex gap-x-2 ">
                      <div className="flex gap-x-1">
                        <span className="text-slate-800 dark:text-stone-300">
                          <svg
                            width="20"
                            height="21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle fillOpacity=".29" cx="12" cy="8" r="8" fill="#E2E2E2" />
                            <path d="M10 6.333V13c0 .733-.6 1.333-1.333 1.333H1.334V10.08a2.6 2.6 0 0 0 2.06.92 2.563 2.563 0 0 0 1.733-.707c.207-.173.38-.393.513-.633.24-.407.373-.887.36-1.387a2.655 2.655 0 0 0-.906-1.94H10Z" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.667 14.333v2c0 1.107-.893 2-2 2H12C12 17.6 11.4 17 10.667 17s-1.333.6-1.333 1.333H6.667c0-.733-.6-1.333-1.333-1.333C4.6 17 4 17.6 4 18.333h-.667c-1.106 0-2-.893-2-2v-2h7.334C9.4 14.333 10 13.733 10 13V8.333h1.227c.48 0 .92.26 1.16.673L13.527 11h-.86c-.367 0-.667.3-.667.666v2c0 .367.3.667.667.667h2Z" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.333 19.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM10.667 19.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM14.667 13v1.333h-2a.669.669 0 0 1-.667-.666v-2c0-.367.3-.667.667-.667h.86l1.14 2Z" stroke="currentColor" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 8.333c0 .8-.353 1.513-.906 2a2.666 2.666 0 1 1-1.76-4.667A2.666 2.666 0 0 1 6 8.333Z" stroke="currentColor" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.5 7.499v1l-.833.5" stroke="currentColor" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="font-bold text-sm text-slate-800 dark:text-stone-100">
                          ارسال توسط:
                        </span>
                      </div>
                      <span className="text-xs text-slate-800 dark:text-stone-400">انبار تهرن</span>
                    </div>
                  </div>
                  <div className="w-full flex flex-col items-end gap-y-3">
                    <div className="text-orange-500 dark:text-orange-600 font-medium ml-1">
                      <span>{product.price}</span>
                      <span className="mr-1">تومان</span>
                    </div>
                    <AddToCartDesktopSize />
                  </div>
                </div>
        </>
    );
}
 
export default SellerInfoDesktop;