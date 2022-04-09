/* eslint-disable no-fallthrough */
import iphone13_1 from "../../images/Single Product/mobile/iphone/Apple-iPhone-13-1.png";
import iphone13_2 from "../../images/Single Product/mobile/iphone/Apple-iPhone-13-2.png";
import iphone13_3 from "../../images/Single Product/mobile/iphone/Apple-iPhone-13-3.png";
import iphone13_pro_1 from "../../images/Single Product/mobile/iphone/Apple-iPhone-13-pro-1.png";
import iphone13_pro_2 from "../../images/Single Product/mobile/iphone/Apple-iPhone-13-pro-2.png";
import iphone13_pro_3 from "../../images/Single Product/mobile/iphone/Apple-iPhone-13-pro-3.png";
import iphone13_pro_max_1 from "../../images/Single Product/mobile/iphone/Apple-iPhone-13-pro-max-1.png";
import iphone13_pro_max_2 from "../../images/Single Product/mobile/iphone/Apple-iPhone-13-pro-max-2.png";
import xiaomi_mi11_1 from "../../images/Single Product/mobile/xiaomi/xiaomi-mi11-1.png";
import xiaomi_mi11_2 from "../../images/Single Product/mobile/xiaomi/xiaomi-mi11-2.png";
import xiaomi_mi11_3 from "../../images/Single Product/mobile/xiaomi/xiaomi-mi11-3.png";
import xiaomi_mi11_ultra_1 from "../../images/Single Product/mobile/xiaomi/xiaomi-mi11-ultra-1.png";
import xiaomi_mi11_ultra_2 from "../../images/Single Product/mobile/xiaomi/xiaomi-mi11-ultra-2.png";
import xiaomi_mi11_ultra_3 from "../../images/Single Product/mobile/xiaomi/xiaomi-mi11-ultra-3.png";
import xiaomi_poco_f3_1 from "../../images/Single Product/mobile/xiaomi/xiaomi-poco-f3-1.png";
import xiaomi_poco_f3_2 from "../../images/Single Product/mobile/xiaomi/xiaomi-poco-f3-2.png";
import xiaomi_poco_f3_3 from "../../images/Single Product/mobile/xiaomi/xiaomi-poco-f3-3.png";
import huawei_p30_pro_1 from "../../images/Single Product/mobile/huawei/huawei-p30-pro-1.png";
import huawei_p30_pro_2 from "../../images/Single Product/mobile/huawei/huawei-p30-pro-2.png";
import huawei_p30_pro_3 from "../../images/Single Product/mobile/huawei/huawei-p30-pro-3.png";
import huawei_p40_pro_1 from "../../images/Single Product/mobile/huawei/huawei-p40-pro-1.png";
import huawei_p40_pro_2 from "../../images/Single Product/mobile/huawei/huawei-p40-pro-2.png";
import huawei_p40_pro_3 from "../../images/Single Product/mobile/huawei/huawei-p40-pro-3.png";
import samsung_note_20_ultra_1 from "../../images/Single Product/mobile/samsung/samsung-note-20-ultra-1.png";
import samsung_note_20_ultra_2 from "../../images/Single Product/mobile/samsung/samsung-note-20-ultra-2.png";
import samsung_note_20_ultra_3 from "../../images/Single Product/mobile/samsung/samsung-note-20-ultra-3.png";
import samsung_s21_ultra_1 from "../../images/Single Product/mobile/samsung/samsung-s21-ultra-1.png";
import samsung_s21_ultra_2 from "../../images/Single Product/mobile/samsung/samsung-s21-ultra-2.png";
import samsung_s21_ultra_3 from "../../images/Single Product/mobile/samsung/samsung-s21-ultra-3.png";
import samsung_s22_ultra_1 from "../../images/Single Product/mobile/samsung/samsung-s22-ultra-1.png";
import samsung_s22_ultra_2 from "../../images/Single Product/mobile/samsung/samsung-s22-ultra-2.png";
import samsung_s22_ultra_3 from "../../images/Single Product/mobile/samsung/samsung-s22-ultra-3.png";

import asus_rog_1 from "../../images/Single Product/laptop/asus/asus-rog-strix-g-1.png";
import asus_rog_2 from "../../images/Single Product/laptop/asus/asus-rog-strix-g-2.png";
import asus_rog_3 from "../../images/Single Product/laptop/asus/asus-rog-strix-g-3.png";
import asus_tuf_1 from "../../images/Single Product/laptop/asus/TUF-Dash-F15-1.png";
import asus_tuf_2 from "../../images/Single Product/laptop/asus/TUF-Dash-F15-2.png";
import asus_tuf_3 from "../../images/Single Product/laptop/asus/TUF-Dash-F15-3.png";
import asus_zenBook_1 from "../../images/Single Product/laptop/asus/ZenBook-Pro-Duo-1.png";
import asus_zenBook_2 from "../../images/Single Product/laptop/asus/ZenBook-Pro-Duo-2.png";
import asus_zenBook_3 from "../../images/Single Product/laptop/asus/ZenBook-Pro-Duo-3.png";
import lenovo_legion_1 from "../../images/Single Product/laptop/lenovo/lenovo-5-pro-1.png";
import lenovo_legion_2 from "../../images/Single Product/laptop/lenovo/lenovo-5-pro-2.png";
import lenovo_legion_3 from "../../images/Single Product/laptop/lenovo/lenovo-5-pro-3.png";
import macBook_pro_1 from "../../images/Single Product/laptop/apple/macbook-pro-1.png";
import macBook_pro_2 from "../../images/Single Product/laptop/apple/macbook-pro-2.png";
import macBook_pro_3 from "../../images/Single Product/laptop/apple/macbook-pro-3.png";

import apple_watch_7_1 from "../../images/Single Product/smartWatch/apple/1.png";
import apple_watch_7_2 from "../../images/Single Product/smartWatch/apple/2.png";



import store from "../store";





const filtersSortTypes = {
    activeSortBtn: 1,
    activeTypeBtn: 1,
    brandslist : {
        apple: false,
        samsung: false,
        xiaomi: false,
        huawei: false,
        asus: false,
        lenovo: false,
        msi: false,
    }
}

let brandsListGlobal;
let activeTypeBtnGloal;
let activeSortBtnGloal;

const filtersSortTypesReducer = (state= filtersSortTypes, action) => {
    switch (action.type) {
        case "CHANGE_BRANDS":{
            if (action.payload === "remove") {
                state = filtersSortTypes;
                brandsListGlobal = filtersSortTypes.brandsListGlobal;
            }
            const value = (Object.keys(state.brandslist)).find((brand) => brand === action.payload);
            let brandslist = {...state.brandslist};
            brandslist[action.payload] = !brandslist[value];

            state = {
                ...state,
                brandslist
            }
            brandsListGlobal = brandslist;
            return state;
        }
        case "CHANGE_ACTIVE_TYPE_BTN":{
            let activeTypeBtn = state.activeTypeBtn;
            activeTypeBtn = action.payload;
            
            state = {
                ...state,
                activeTypeBtn
            }
            activeTypeBtnGloal = activeTypeBtn;
            return state;
        }

        case "CHANGE_ACTIVE_SORT_BTN":{
            let activeSortBtn = state.activeSortBtn;
            activeSortBtn = action.payload;
            
            state = {
                ...state,
                activeSortBtn
            }
            activeSortBtnGloal = activeSortBtn;
            return state;
        }

        default:
            return state;
    }
}




const products = {
    1: {
        id: 1,
        type: "mobile",
        brand: "apple",
        images: [iphone13_1, iphone13_2, iphone13_3],
        englishName: "Iphone 13 128GB",
        persianName: "گوشی آیفون 13",
        price: "21,450,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "one"
    },
    2: {
        id: 2,
        type: "mobile",
        brand: "huawei",
        images: [huawei_p30_pro_2, huawei_p30_pro_1, huawei_p30_pro_3],
        englishName: "huawei p30 pro 128GB",
        persianName: "گوشی هواوی پی 30 پرو",
        price: "26,000,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "seven"
    },
    3: {
        id: 3,
        type: "laptop",
        brand: "asus",
        images: [asus_rog_2, asus_rog_1, asus_rog_3],
        englishName: "ROG Strix G15 G513IE",
        persianName: "لپ تاپ ایسوس G15",
        price: "12,500,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "twelve"
    },
    4: {
        id: 4,
        type: "mobile",
        brand: "xiaomi",
        images: [xiaomi_mi11_2, xiaomi_mi11_1, xiaomi_mi11_3],
        englishName: "Mi 11 128GB",
        persianName: "گوشی شیائومی می 11",
        price: "22,450,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "four"
    },
    5: {
        id: 5,
        type: "mobile",
        brand: "samsung",
        images: [samsung_note_20_ultra_2, samsung_note_20_ultra_1, samsung_note_20_ultra_3],
        englishName: "Note 20 Ultra 512GB",
        persianName: "گوشی نوت 20 اولترا",
        price: "31,480,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "nine"
    },
    6: {
        id: 6,
        type: "laptop",
        brand: "lenovo",
        images: [lenovo_legion_2, lenovo_legion_1, lenovo_legion_3],
        englishName: "Legion 5 Pro",
        persianName: "لپ تاپ لنوو Legion 5 pro",
        price: "26,490,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "fourteen"
    },
    7: {
        id: 7,
        type: "mobile",
        brand: "apple",
        images: [iphone13_pro_2, iphone13_pro_1, iphone13_pro_3],
        englishName: "Iphone 13 pro 256GB",
        persianName: "گوشی آیفون 13 pro",
        price: "32,450,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "two"
    },
    8: {
        id: 8,
        type: "mobile",
        brand: "huawei",
        images: [huawei_p40_pro_2, huawei_p40_pro_1, huawei_p40_pro_3],
        englishName: "huawei p40 pro 256GB",
        persianName: "گوشی هواوی پی 40 پرو",
        price: "25,700,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "eight"
    },
    9: {
        id: 9,
        type: "laptop",
        brand: "asus",
        images: [asus_zenBook_2, asus_zenBook_1, asus_zenBook_3],
        englishName: "ZenBook 14 UX482EG",
        persianName: "لپ تاپ ایسوس ZenBook",
        price: "31,200,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "thirteen"
    },
    10: {
        id: 10,
        type: "mobile",
        brand: "samsung",
        images: [samsung_s21_ultra_2, samsung_s21_ultra_1, samsung_s21_ultra_3],
        englishName: "S21 Ultra 256GB",
        persianName: "گوشی اس 21 اولترا",
        price: "23,280,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "ten"
    },
    11: {
        id: 11,
        type: "mobile",
        brand: "samsung",
        images: [samsung_s22_ultra_2, samsung_s22_ultra_1, samsung_s22_ultra_3],
        englishName: "S22 Ultra 512GB",
        persianName: "گوشی اس 22 اولترا",
        price: "29,000,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "eleven"
    },
    12: {
        id: 12,
        type: "mobile",
        brand: "apple",
        images: [iphone13_pro_max_2, iphone13_pro_max_1],
        englishName: "Iphone 13 pro max 512GB",
        persianName: "گوشی آیفون 13 pro max",
        price: "38,820,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "there"
    },
    13: {
        id: 13,
        type: "mobile",
        brand: "xiaomi",
        images: [xiaomi_mi11_ultra_2, xiaomi_mi11_ultra_1, xiaomi_mi11_ultra_3],
        englishName: "Mi 11 Ultra 512GB",
        persianName: "گوشی شیائومی می 11 اولترا",
        price: "12,100,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "five"
    },
    14: {
        id: 14,
        type: "laptop",
        brand: "asus",
        images: [asus_tuf_2, asus_tuf_1, asus_tuf_3],
        englishName: "TUF Dash F15 FX516PR",
        persianName: "لپ تاپ ایسوس TUF F15",
        price: "31,490,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "fourteen"
    },
    15: {
        id: 15,
        type: "mobile",
        brand: "xiaomi",
        images: [xiaomi_poco_f3_2, xiaomi_poco_f3_1, xiaomi_poco_f3_3],
        englishName: "Poco F3 256GB",
        persianName: "گوشی شیائومی پوکو اف 3",
        price: "8,400,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "six"
    },
    16: {
        id: 16,
        type: "laptop",
        brand: "apple",
        images: [macBook_pro_2, macBook_pro_1, macBook_pro_3],
        englishName: "MacBook Pro Z11C",
        persianName: "لپ تاپ اپل MacBook Pro",
        price: "23,500,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "sixteen"
    },
    17: {
        id: 17,
        type: "smartWatch",
        brand: "apple",
        images: [apple_watch_7_2, apple_watch_7_1],
        englishName: "Apple Watch Series 7",
        persianName: "ساعت هوشمند اپل سری 7",
        price: "14,500,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "seventeen"
    },
    18: {
        id: 18,
        type: "mobile",
        brand: "apple",
        images: [iphone13_1, iphone13_2, iphone13_3],
        englishName: "Iphone 13 128GB",
        persianName: "گوشی آیفون 13",
        price: "18,450,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "one"
    },
    19: {
        id: 19,
        type: "mobile",
        brand: "huawei",
        images: [huawei_p30_pro_1, huawei_p30_pro_2, huawei_p30_pro_3],
        englishName: "huawei p30 pro 128GB",
        persianName: "گوشی هواوی پی 30 پرو",
        price: "26,000,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "seven"
    },
    20: {
        id: 20,
        type: "laptop",
        brand: "asus",
        images: [asus_rog_1, asus_rog_2, asus_rog_3],
        englishName: "ROG Strix G15 G513IE",
        persianName: "لپ تاپ ایسوس G15",
        price: "32,500,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "twelve"
    },
    21: {
        id: 21,
        type: "mobile",
        brand: "xiaomi",
        images: [xiaomi_mi11_1, xiaomi_mi11_2, xiaomi_mi11_3],
        englishName: "Mi 11 128GB",
        persianName: "گوشی شیائومی می 11",
        price: "12,450,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "four"
    },
    22: {
        id: 22,
        type: "mobile",
        brand: "samsung",
        images: [samsung_note_20_ultra_1, samsung_note_20_ultra_2, samsung_note_20_ultra_3],
        englishName: "Note 20 Ultra 512GB",
        persianName: "گوشی نوت 20 اولترا",
        price: "17,280,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "nine"
    },
    23: {
        id: 23,
        type: "laptop",
        brand: "lenovo",
        images: [lenovo_legion_1, lenovo_legion_2, lenovo_legion_3],
        englishName: "Legion 5 Pro",
        persianName: "لپ تاپ لنوو Legion 5 pro",
        price: "22,490,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "fourteen"
    },
    24: {
        id: 24,
        type: "mobile",
        brand: "apple",
        images: [iphone13_pro_1, iphone13_pro_2, iphone13_pro_3],
        englishName: "Iphone 13 pro 256GB",
        persianName: "گوشی آیفون 13 pro",
        price: "13,450,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "two"
    },
    25: {
        id: 25,
        type: "mobile",
        brand: "huawei",
        images: [huawei_p40_pro_1, huawei_p40_pro_2, huawei_p40_pro_3],
        englishName: "huawei p40 pro 256GB",
        persianName: "گوشی هواوی پی 40 پرو",
        price: "21,700,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "eight"
    },
    26: {
        id: 26,
        type: "laptop",
        brand: "asus",
        images: [asus_zenBook_1, asus_zenBook_2, asus_zenBook_3],
        englishName: "ZenBook 14 UX482EG",
        persianName: "لپ تاپ ایسوس ZenBook",
        price: "28,200,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "thirteen"
    },
    27: {
        id: 27,
        type: "mobile",
        brand: "samsung",
        images: [samsung_s21_ultra_1, samsung_s21_ultra_2, samsung_s21_ultra_3],
        englishName: "S21 Ultra 256GB",
        persianName: "گوشی اس 21 اولترا",
        price: "21,280,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "ten"
    },
    28: {
        id: 28,
        type: "mobile",
        brand: "samsung",
        images: [samsung_s22_ultra_1, samsung_s22_ultra_2, samsung_s22_ultra_3],
        englishName: "S22 Ultra 512GB",
        persianName: "گوشی اس 22 اولترا",
        price: "30,000,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "eleven"
    },
    29: {
        id: 29,
        type: "mobile",
        brand: "apple",
        images: [iphone13_pro_max_1, iphone13_pro_max_2],
        englishName: "Iphone 13 pro max 512GB",
        persianName: "گوشی آیفون 13 pro max",
        price: "27,820,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "there"
    },
    30: {
        id: 30,
        type: "mobile",
        brand: "xiaomi",
        images: [xiaomi_mi11_ultra_1, xiaomi_mi11_ultra_2, xiaomi_mi11_ultra_3],
        englishName: "Mi 11 Ultra 512GB",
        persianName: "گوشی شیائومی می 11 اولترا",
        price: "14,100,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "five"
    },
    31: {
        id: 31,
        type: "laptop",
        brand: "asus",
        images: [asus_tuf_1, asus_tuf_2, asus_tuf_3],
        englishName: "TUF Dash F15 FX516PR",
        persianName: "لپ تاپ ایسوس TUF F15",
        price: "26,490,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "fourteen"
    },
    32: {
        id: 32,
        type: "mobile",
        brand: "xiaomi",
        images: [xiaomi_poco_f3_1, xiaomi_poco_f3_2, xiaomi_poco_f3_3],
        englishName: "Poco F3 256GB",
        persianName: "گوشی شیائومی پوکو اف 3",
        price: "17,000,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "six"
    },
    33: {
        id: 33,
        type: "laptop",
        brand: "apple",
        images: [macBook_pro_1, macBook_pro_2, macBook_pro_3],
        englishName: "MacBook Pro Z11C",
        persianName: "لپ تاپ اپل MacBook Pro",
        price: "32,500,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "sixteen"
    },
    34: {
        id: 34,
        type: "smartWatch",
        brand: "apple",
        images: [apple_watch_7_1, apple_watch_7_2],
        englishName: "Apple Watch Series 7",
        persianName: "ساعت هوشمند اپل سری 7",
        price: "7,500,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "seventeen"
    },
}

const productsReducer = (state= products, action) => {
    let productsCopyied = {...state};
    
    switch (action.type) {
        case "GET_PRODUCTS":
            return state;

        case "SELECT_BRANDS":{
            if (action.payload === "remove") {
                brandsListGlobal = filtersSortTypes.brandsListGlobal;
                productsCopyied = products;
            }
            const selectBrands = () => {
                
                let trueBrands = [] ;
                let outputProducts = [];

                for (const brand in brandsListGlobal) {
                    if (brandsListGlobal[brand] === true ) {
                        trueBrands.push(brand)
                    }
                }
                productsCopyied.map((product) =>(
                    trueBrands.map((brand) => (
                        product.brand === brand && outputProducts.push(product)
                    ))
                ))
                if (outputProducts.length >= 1) productsCopyied = outputProducts;
                return productsCopyied
            }

            if (activeSortBtnGloal === 1) {
                productsCopyied = state;
            }else if (activeSortBtnGloal === 2) {
                productsCopyied = productsCopyied.sort((a, b) => {
                    return (a.price).split(",").join("") - (b.price).split(",").join("");
                });
            } else if (activeSortBtnGloal === 3) {
                productsCopyied = productsCopyied.sort((a, b) => {
                    return (b.price).split(",").join("") - (a.price).split(",").join("");
                });
            }else if (activeSortBtnGloal === 4) {
                productsCopyied = state;
            }
            
            if (activeTypeBtnGloal === 2) {
                productsCopyied = selectBrands()
                
                return productsCopyied.filter((product) => product.type === "mobile" );
            } else if (activeTypeBtnGloal === 3) {
                productsCopyied = selectBrands()
                return productsCopyied.filter((product) => product.type === "laptop" )
            } else if (activeTypeBtnGloal === 4) {
                productsCopyied = selectBrands()
                return productsCopyied.filter((product) => product.type === "smartWatch" )
            }else {
                productsCopyied = selectBrands()
                return productsCopyied
            }
            
    
        }
        
        case "SELECT_TYPE":
            // productsCopyied = [...state];
            const selectBrands = () => {

                let trueBrands = [] ;
                let outputProducts = [];

                for (const brand in brandsListGlobal) {
                    if (brandsListGlobal[brand] === true ) {
                        trueBrands.push(brand)
                    }
                }
                productsCopyied.map((product) =>(
                    trueBrands.map((brand) => (
                        product.brand === brand && outputProducts.push(product)
                    ))
                ))
                if (outputProducts.length >= 1) productsCopyied = outputProducts;
                return productsCopyied
            }
            
            if (activeSortBtnGloal === 1) {
                productsCopyied = state;
            }else if (activeSortBtnGloal === 2) {
                productsCopyied = productsCopyied.sort((a, b) => {
                    return (a.price).split(",").join("") - (b.price).split(",").join("");
                });
            } else if (activeSortBtnGloal === 3) {
                productsCopyied = productsCopyied.sort((a, b) => {
                    return (b.price).split(",").join("") - (a.price).split(",").join("");
                });
            }else if (activeSortBtnGloal === 4) {
                productsCopyied = state;
            }

            if (activeTypeBtnGloal === 2) {
                productsCopyied = selectBrands()
                return productsCopyied.filter((product) => product.type === "mobile" );
            } else if (activeTypeBtnGloal === 3) {
                productsCopyied = selectBrands()
                return productsCopyied.filter((product) => product.type === "laptop" )
            } else if (activeTypeBtnGloal === 4) {
                productsCopyied = selectBrands()
                return productsCopyied.filter((product) => product.type === "smartWatch" )
            }else {
                productsCopyied = selectBrands()
                return productsCopyied
            }
            
        
        case "SELECT_SORT":{
            const selectBrands = () => {
                
                let trueBrands = [] ;
                let outputProducts = [];

                for (const brand in brandsListGlobal) {
                    if (brandsListGlobal[brand] === true ) {
                        trueBrands.push(brand)
                    }
                }
                productsCopyied.map((product) =>(
                    trueBrands.map((brand) => (
                        product.brand === brand && outputProducts.push(product)
                    ))
                ))
                if (outputProducts.length >= 1) productsCopyied = outputProducts;
                return productsCopyied
            }

            if (activeSortBtnGloal === 1) {
                productsCopyied = state;
            }else if (activeSortBtnGloal === 2) {
                productsCopyied = productsCopyied.sort((a, b) => {
                    return (a.price).split(",").join("") - (b.price).split(",").join("");
                });
            } else if (activeSortBtnGloal === 3) {
                productsCopyied = productsCopyied.sort((a, b) => {
                    return (b.price).split(",").join("") - (a.price).split(",").join("");
                });
            }else if (activeSortBtnGloal === 4) {
                productsCopyied = state;
            }
            
            if (activeTypeBtnGloal === 2) {
                productsCopyied = selectBrands()
                
                return productsCopyied.filter((product) => product.type === "mobile" );
            } else if (activeTypeBtnGloal === 3) {
                productsCopyied = selectBrands()
                return productsCopyied.filter((product) => product.type === "laptop" )
            } else if (activeTypeBtnGloal === 4) {
                productsCopyied = selectBrands()
                return productsCopyied.filter((product) => product.type === "smartWatch" )
            }else {
                productsCopyied = selectBrands()
                return productsCopyied
            }
        }
        
            
        default:
            return products;
    }
}



export {filtersSortTypesReducer, productsReducer}

