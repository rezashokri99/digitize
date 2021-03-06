/* eslint-disable default-case */
/* eslint-disable no-fallthrough */
import produce from "immer";

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
let activeTypeBtnGloal = 1;
let activeSortBtnGloal = 1;

const filtersSortTypesReducer = produce((state, action) => {
    switch (action.type) {
        case "CHANGE_BRANDS":{
            if (action.payload === "remove") {
                state = filtersSortTypes;
                brandsListGlobal = filtersSortTypes.brandsListGlobal;
            }

            state.brandslist[action.payload] = !state.brandslist[action.payload];

            break;
        }
        case "CHANGE_ACTIVE_TYPE_BTN":{
            state.activeTypeBtn = action.payload;
            activeTypeBtnGloal = state.activeTypeBtn;
            
            break;
        }

        case "CHANGE_ACTIVE_SORT_BTN":{
            state.activeSortBtn = action.payload;
            activeSortBtnGloal = state.activeSortBtn;
            
            break;
        }

    }
}, filtersSortTypes)


// const filtersSortTypesReducer = (state= filtersSortTypes, action) => {
//     switch (action.type) {
//         case "CHANGE_BRANDS":{
//             if (action.payload === "remove") {
//                 state = filtersSortTypes;
//                 brandsListGlobal = filtersSortTypes.brandsListGlobal;
//             }
//             const value = (Object.keys(state.brandslist)).find((brand) => brand === action.payload);
//             let brandslist = {...state.brandslist};
//             brandslist[action.payload] = !brandslist[value];

//             state = {
//                 ...state,
//                 brandslist
//             }
//             brandsListGlobal = brandslist;
//             return state;
//         }
//         case "CHANGE_ACTIVE_TYPE_BTN":{
//             let activeTypeBtn = state.activeTypeBtn;
//             activeTypeBtn = action.payload;
            
//             state = {
//                 ...state,
//                 activeTypeBtn
//             }
//             activeTypeBtnGloal = activeTypeBtn;
//             return state;
//         }

//         case "CHANGE_ACTIVE_SORT_BTN":{
//             let activeSortBtn = state.activeSortBtn;
//             activeSortBtn = action.payload;
            
//             state = {
//                 ...state,
//                 activeSortBtn
//             }
//             activeSortBtnGloal = activeSortBtn;
//             return state;
//         }

//         default:
//             return state;
//     }
// }




const products = {
    0: {
        id: 0,
        type: "mobile",
        brand: "apple",
        images: [iphone13_1, iphone13_2, iphone13_3],
        englishName: "Iphone 13 128GB",
        persianName: "???????? ?????????? 13",
        price: "21,450,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "one"
    },
    1: {
        id: 1,
        type: "mobile",
        brand: "huawei",
        images: [huawei_p30_pro_2, huawei_p30_pro_1, huawei_p30_pro_3],
        englishName: "huawei p30 pro 128GB",
        persianName: "???????? ?????????? ???? 30 ??????",
        price: "26,000,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "seven"
    },
    2: {
        id: 2,
        type: "laptop",
        brand: "asus",
        images: [asus_rog_2, asus_rog_1, asus_rog_3],
        englishName: "ROG Strix G15 G513IE",
        persianName: "???? ?????? ?????????? G15",
        price: "12,500,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "twelve"
    },
    3: {
        id: 3,
        type: "mobile",
        brand: "xiaomi",
        images: [xiaomi_mi11_2, xiaomi_mi11_1, xiaomi_mi11_3],
        englishName: "Mi 11 128GB",
        persianName: "???????? ?????????????? ???? 11",
        price: "22,450,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "four"
    },
    4: {
        id: 4,
        type: "mobile",
        brand: "samsung",
        images: [samsung_note_20_ultra_2, samsung_note_20_ultra_1, samsung_note_20_ultra_3],
        englishName: "Note 20 Ultra 512GB",
        persianName: "???????? ?????? 20 ????????????",
        price: "31,480,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "nine"
    },
    5: {
        id: 5,
        type: "laptop",
        brand: "lenovo",
        images: [lenovo_legion_2, lenovo_legion_1, lenovo_legion_3],
        englishName: "Legion 5 Pro",
        persianName: "???? ?????? ???????? Legion 5 pro",
        price: "26,490,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "fourteen"
    },
    6: {
        id: 6,
        type: "mobile",
        brand: "apple",
        images: [iphone13_pro_2, iphone13_pro_1, iphone13_pro_3],
        englishName: "Iphone 13 pro 256GB",
        persianName: "???????? ?????????? 13 pro",
        price: "32,450,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "two"
    },
    7: {
        id: 7,
        type: "mobile",
        brand: "huawei",
        images: [huawei_p40_pro_2, huawei_p40_pro_1, huawei_p40_pro_3],
        englishName: "huawei p40 pro 256GB",
        persianName: "???????? ?????????? ???? 40 ??????",
        price: "25,700,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "eight"
    },
    8: {
        id: 8,
        type: "laptop",
        brand: "asus",
        images: [asus_zenBook_2, asus_zenBook_1, asus_zenBook_3],
        englishName: "ZenBook 14 UX482EG",
        persianName: "???? ?????? ?????????? ZenBook",
        price: "31,200,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "thirteen"
    },
    9: {
        id: 9,
        type: "mobile",
        brand: "samsung",
        images: [samsung_s21_ultra_2, samsung_s21_ultra_1, samsung_s21_ultra_3],
        englishName: "S21 Ultra 256GB",
        persianName: "???????? ???? 21 ????????????",
        price: "23,280,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "ten"
    },
    10: {
        id: 10,
        type: "mobile",
        brand: "samsung",
        images: [samsung_s22_ultra_2, samsung_s22_ultra_1, samsung_s22_ultra_3],
        englishName: "S22 Ultra 512GB",
        persianName: "???????? ???? 22 ????????????",
        price: "29,000,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "eleven"
    },
    11: {
        id: 11,
        type: "mobile",
        brand: "apple",
        images: [iphone13_pro_max_2, iphone13_pro_max_1],
        englishName: "Iphone 13 pro max 512GB",
        persianName: "???????? ?????????? 13 pro max",
        price: "38,820,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "there"
    },
    12: {
        id: 12,
        type: "mobile",
        brand: "xiaomi",
        images: [xiaomi_mi11_ultra_2, xiaomi_mi11_ultra_1, xiaomi_mi11_ultra_3],
        englishName: "Mi 11 Ultra 512GB",
        persianName: "???????? ?????????????? ???? 11 ????????????",
        price: "12,100,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "five"
    },
    13: {
        id: 13,
        type: "laptop",
        brand: "asus",
        images: [asus_tuf_2, asus_tuf_1, asus_tuf_3],
        englishName: "TUF Dash F15 FX516PR",
        persianName: "???? ?????? ?????????? TUF F15",
        price: "31,490,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "fourteen"
    },
    14: {
        id: 14,
        type: "mobile",
        brand: "xiaomi",
        images: [xiaomi_poco_f3_2, xiaomi_poco_f3_1, xiaomi_poco_f3_3],
        englishName: "Poco F3 256GB",
        persianName: "???????? ?????????????? ???????? ???? 3",
        price: "8,400,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "six"
    },
    15: {
        id: 15,
        type: "laptop",
        brand: "apple",
        images: [macBook_pro_2, macBook_pro_1, macBook_pro_3],
        englishName: "MacBook Pro Z11C",
        persianName: "???? ?????? ?????? MacBook Pro",
        price: "23,500,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "sixteen"
    },
    16: {
        id: 16,
        type: "smartWatch",
        brand: "apple",
        images: [apple_watch_7_2, apple_watch_7_1],
        englishName: "Apple Watch Series 7",
        persianName: "???????? ???????????? ?????? ?????? 7",
        price: "14,500,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "seventeen"
    },
    17: {
        id: 17,
        type: "mobile",
        brand: "apple",
        images: [iphone13_1, iphone13_2, iphone13_3],
        englishName: "Iphone 13 128GB",
        persianName: "???????? ?????????? 13",
        price: "18,450,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "one"
    },
    18: {
        id: 18,
        type: "mobile",
        brand: "huawei",
        images: [huawei_p30_pro_1, huawei_p30_pro_2, huawei_p30_pro_3],
        englishName: "huawei p30 pro 128GB",
        persianName: "???????? ?????????? ???? 30 ??????",
        price: "26,000,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "seven"
    },
    19: {
        id: 19,
        type: "laptop",
        brand: "asus",
        images: [asus_rog_1, asus_rog_2, asus_rog_3],
        englishName: "ROG Strix G15 G513IE",
        persianName: "???? ?????? ?????????? G15",
        price: "32,500,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "twelve"
    },
    20: {
        id: 20,
        type: "mobile",
        brand: "xiaomi",
        images: [xiaomi_mi11_1, xiaomi_mi11_2, xiaomi_mi11_3],
        englishName: "Mi 11 128GB",
        persianName: "???????? ?????????????? ???? 11",
        price: "12,450,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "four"
    },
    21: {
        id: 21,
        type: "mobile",
        brand: "samsung",
        images: [samsung_note_20_ultra_1, samsung_note_20_ultra_2, samsung_note_20_ultra_3],
        englishName: "Note 20 Ultra 512GB",
        persianName: "???????? ?????? 20 ????????????",
        price: "17,280,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "nine"
    },
    22: {
        id: 22,
        type: "laptop",
        brand: "lenovo",
        images: [lenovo_legion_1, lenovo_legion_2, lenovo_legion_3],
        englishName: "Legion 5 Pro",
        persianName: "???? ?????? ???????? Legion 5 pro",
        price: "22,490,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "fourteen"
    },
    23: {
        id: 23,
        type: "mobile",
        brand: "apple",
        images: [iphone13_pro_1, iphone13_pro_2, iphone13_pro_3],
        englishName: "Iphone 13 pro 256GB",
        persianName: "???????? ?????????? 13 pro",
        price: "13,450,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "two"
    },
    24: {
        id: 24,
        type: "mobile",
        brand: "huawei",
        images: [huawei_p40_pro_1, huawei_p40_pro_2, huawei_p40_pro_3],
        englishName: "huawei p40 pro 256GB",
        persianName: "???????? ?????????? ???? 40 ??????",
        price: "21,700,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "eight"
    },
    25: {
        id: 25,
        type: "laptop",
        brand: "asus",
        images: [asus_zenBook_1, asus_zenBook_2, asus_zenBook_3],
        englishName: "ZenBook 14 UX482EG",
        persianName: "???? ?????? ?????????? ZenBook",
        price: "28,200,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "thirteen"
    },
    26: {
        id: 26,
        type: "mobile",
        brand: "samsung",
        images: [samsung_s21_ultra_1, samsung_s21_ultra_2, samsung_s21_ultra_3],
        englishName: "S21 Ultra 256GB",
        persianName: "???????? ???? 21 ????????????",
        price: "21,280,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "ten"
    },
    27: {
        id: 27,
        type: "mobile",
        brand: "samsung",
        images: [samsung_s22_ultra_1, samsung_s22_ultra_2, samsung_s22_ultra_3],
        englishName: "S22 Ultra 512GB",
        persianName: "???????? ???? 22 ????????????",
        price: "30,000,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "eleven"
    },
    28: {
        id: 28,
        type: "mobile",
        brand: "apple",
        images: [iphone13_pro_max_1, iphone13_pro_max_2],
        englishName: "Iphone 13 pro max 512GB",
        persianName: "???????? ?????????? 13 pro max",
        price: "27,820,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "there"
    },
    29: {
        id: 29,
        type: "mobile",
        brand: "xiaomi",
        images: [xiaomi_mi11_ultra_1, xiaomi_mi11_ultra_2, xiaomi_mi11_ultra_3],
        englishName: "Mi 11 Ultra 512GB",
        persianName: "???????? ?????????????? ???? 11 ????????????",
        price: "14,100,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "five"
    },
    30: {
        id: 30,
        type: "laptop",
        brand: "asus",
        images: [asus_tuf_1, asus_tuf_2, asus_tuf_3],
        englishName: "TUF Dash F15 FX516PR",
        persianName: "???? ?????? ?????????? TUF F15",
        price: "26,490,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "fourteen"
    },
    31: {
        id: 31,
        type: "mobile",
        brand: "xiaomi",
        images: [xiaomi_poco_f3_1, xiaomi_poco_f3_2, xiaomi_poco_f3_3],
        englishName: "Poco F3 256GB",
        persianName: "???????? ?????????????? ???????? ???? 3",
        price: "17,000,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "six"
    },
    32: {
        id: 32,
        type: "laptop",
        brand: "apple",
        images: [macBook_pro_1, macBook_pro_2, macBook_pro_3],
        englishName: "MacBook Pro Z11C",
        persianName: "???? ?????? ?????? MacBook Pro",
        price: "32,500,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "sixteen"
    },
    33: {
        id: 33,
        type: "smartWatch",
        brand: "apple",
        images: [apple_watch_7_1, apple_watch_7_2],
        englishName: "Apple Watch Series 7",
        persianName: "???????? ???????????? ?????? ?????? 7",
        price: "7,500,000",
        colors: ["indigo", "orange", "yellow", 'white'],
        colorType: "seventeen"
    },
}

const productsReducer = produce((state, action) => {
    let productsCopyied = {...state};

    switch (action.type) {
        case "GET_PRODUCTS":
            break;

        case "SELECT_BRANDS":{
            state = {...products}

            
            if (action.payload === "remove") {
                brandsListGlobal = filtersSortTypes.brandsListGlobal;
                state = products;
            }

            const selectBrands = () => {
                
                let trueBrands = [] ;
                let outputProducts = [];

                for (const brand in brandsListGlobal) {
                    if (brandsListGlobal[brand] === true ) {
                        trueBrands.push(brand)
                    }
                }

                Object.keys(state).map((productId) =>(
                    trueBrands.map((brand) => (
                        state[productId].brand === brand && outputProducts.push(state[productId])
                    ))
                ))
                if (outputProducts.length >= 1) state = outputProducts;
                return state;
            }

            if (activeTypeBtnGloal === 2) {
                productsCopyied = selectBrands();
                
                let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "mobile");
                let productsForNotDeleted = productsCopyied;
                productsCopyied = {};
                keyProducts.map((key) => {
                    return productsCopyied[key] = {...productsForNotDeleted[key]}
                });

            } else if (activeTypeBtnGloal === 3) {
                productsCopyied = selectBrands();
                    
                let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "laptop");
                let productsForNotDeleted = productsCopyied;
                productsCopyied = {};
                keyProducts.map((key) => {
                    return productsCopyied[key] = {...productsForNotDeleted[key]}
                });

            } else if (activeTypeBtnGloal === 4) {
                productsCopyied = selectBrands();

                let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "smartWatch");
                let productsForNotDeleted = productsCopyied;
                productsCopyied = {};
                keyProducts.map((key) => {
                    return productsCopyied[key] = {...productsForNotDeleted[key]}
                });

            }else {
                productsCopyied = selectBrands()
            }

            if (activeSortBtnGloal === 1) {
                return state =  productsCopyied
            }else if (activeSortBtnGloal === 2) {
                let keyProducts = Object.keys(productsCopyied).sort((a, b) => {
                    return (productsCopyied[a].price).split(",").join("") - (productsCopyied[b].price).split(",").join("");
                });
                
                let productsForNotDeleted = productsCopyied;
                productsCopyied = {};
                
                keyProducts.map((key, index) => {
                    return productsCopyied[index] = {...productsForNotDeleted[+keyProducts[index]]}
                });

                return state =  productsCopyied
                
            } else if (activeSortBtnGloal === 3) {
                let keyProducts = Object.keys(productsCopyied).sort((a, b) => {
                    return (productsCopyied[b].price).split(",").join("") - (productsCopyied[a].price).split(",").join("");
                });
                
                let productsForNotDeleted = productsCopyied;
                productsCopyied = {};
                
                keyProducts.map((key, index) => {
                    return productsCopyied[index] = {...productsForNotDeleted[+keyProducts[index]]}
                });

                return state =  productsCopyied

            }else if (activeSortBtnGloal === 4) {
                return state =  productsCopyied
            }
            
            
    
        }
        
        case "SELECT_TYPE":{
            productsCopyied = {...products}

            // productsCopyied = [...state];
            const selectBrands = () => {

                let trueBrands = [] ;
                let outputProducts = [];

                for (const brand in brandsListGlobal) {
                    if (brandsListGlobal[brand] === true ) {
                        trueBrands.push(brand)
                    }
                }
                Object.keys(productsCopyied).map((productId) =>(
                    trueBrands.map((brand) => (
                        productsCopyied[productId].brand === brand && outputProducts.push(productsCopyied[productId])
                    ))
                ))
                if (outputProducts.length >= 1) productsCopyied = outputProducts;
                return productsCopyied
            }
            
            if (activeTypeBtnGloal === 2) {
                productsCopyied = selectBrands();
                
                let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "mobile");
                let productsForNotDeleted = productsCopyied;
                productsCopyied = {};
                keyProducts.map((key) => {
                    return productsCopyied[key] = {...productsForNotDeleted[key]}
                });

            } else if (activeTypeBtnGloal === 3) {
                productsCopyied = selectBrands();
                    
                let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "laptop");
                let productsForNotDeleted = productsCopyied;
                productsCopyied = {};
                keyProducts.map((key) => {
                    return productsCopyied[key] = {...productsForNotDeleted[key]}
                });

            } else if (activeTypeBtnGloal === 4) {
                productsCopyied = selectBrands();

                let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "smartWatch");
                let productsForNotDeleted = productsCopyied;
                productsCopyied = {};
                keyProducts.map((key) => {
                    return productsCopyied[key] = {...productsForNotDeleted[key]}
                });

            }else {
                productsCopyied = selectBrands()
            }

            if (activeSortBtnGloal === 1) {
                return state = productsCopyied

            }else if (activeSortBtnGloal === 2) {
                let keyProducts = Object.keys(productsCopyied).sort((a, b) => {
                    return (productsCopyied[a].price).split(",").join("") - (productsCopyied[b].price).split(",").join("");
                });
                
                let productsForNotDeleted = productsCopyied;
                productsCopyied = {};
                
                keyProducts.map((key, index) => {
                    return productsCopyied[index] = {...productsForNotDeleted[+keyProducts[index]]}
                });
                
                return state =  productsCopyied

            } else if (activeSortBtnGloal === 3) {
                let keyProducts = Object.keys(productsCopyied).sort((a, b) => {
                    return (productsCopyied[b].price).split(",").join("") - (productsCopyied[a].price).split(",").join("");
                });
                
                let productsForNotDeleted = productsCopyied;
                productsCopyied = {};
                
                keyProducts.map((key, index) => {
                    return productsCopyied[index] = {...productsForNotDeleted[+keyProducts[index]]}
                });

                return state =  productsCopyied

            }else if (activeSortBtnGloal === 4) {
                return state =  productsCopyied
            }
        }
            
            
        
        case "SELECT_SORT":{
            productsCopyied = {...products}

            const selectBrands = () => {
                
                let trueBrands = [] ;
                let outputProducts = [];

                for (const brand in brandsListGlobal) {
                    if (brandsListGlobal[brand] === true ) {
                        trueBrands.push(brand)
                    }
                }
                Object.keys(productsCopyied).map((productId) =>(
                    trueBrands.map((brand) => (
                        productsCopyied[productId].brand === brand && outputProducts.push(productsCopyied[productId])
                    ))
                ))
                if (outputProducts.length >= 1) productsCopyied = outputProducts;
                return productsCopyied
            }

            if (activeTypeBtnGloal === 2) {
                productsCopyied = selectBrands();
                
                let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "mobile");
                let productsForNotDeleted = productsCopyied;
                productsCopyied = {};
                keyProducts.map((key) => {
                    return productsCopyied[key] = {...productsForNotDeleted[key]}
                });

            } else if (activeTypeBtnGloal === 3) {
                productsCopyied = selectBrands();
                    
                let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "laptop");
                let productsForNotDeleted = productsCopyied;
                productsCopyied = {};
                keyProducts.map((key) => {
                    return productsCopyied[key] = {...productsForNotDeleted[key]}
                });

            } else if (activeTypeBtnGloal === 4) {
                productsCopyied = selectBrands();

                let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "smartWatch");
                let productsForNotDeleted = productsCopyied;
                productsCopyied = {};
                keyProducts.map((key) => {
                    return productsCopyied[key] = {...productsForNotDeleted[key]}
                });

            }else {
                productsCopyied = selectBrands()
            }

            if (activeSortBtnGloal === 1) {
                return state = productsCopyied

            }else if (activeSortBtnGloal === 2) {
                let keyProducts = Object.keys(productsCopyied).sort((a, b) => {
                    return (productsCopyied[a].price).split(",").join("") - (productsCopyied[b].price).split(",").join("");
                });

                let productsForNotDeleted = productsCopyied;
                productsCopyied = {};
                
                keyProducts.map((key, index) => {
                    return productsCopyied[index] = {...productsForNotDeleted[+keyProducts[index]]}
                });
                
                return state =  productsCopyied;

            } else if (activeSortBtnGloal === 3) {
                let keyProducts = Object.keys(productsCopyied).sort((a, b) => {
                    return (productsCopyied[b].price).split(",").join("") - (productsCopyied[a].price).split(",").join("");
                });

                let productsForNotDeleted = productsCopyied;
                productsCopyied = {};
                keyProducts.map((key, index) => {
                    return productsCopyied[index] = {...productsForNotDeleted[+keyProducts[index]]}
                });
                return state =  productsCopyied

            }else if (activeSortBtnGloal === 4) {
                return state =  productsCopyied

            }
            
            
        }
        
        case "DARK_MODE":
        case "LIGHT_MODE":
            return state;

        default:{
            productsCopyied = {...products}
            const selectBrands = () => {

                let trueBrands = [] ;
                let outputProducts = [];

                for (const brand in brandsListGlobal) {
                    if (brandsListGlobal[brand] === true ) {
                        trueBrands.push(brand)
                    }
                }
                Object.keys(productsCopyied).map((productId) =>(
                    trueBrands.map((brand) => (
                        productsCopyied[productId].brand === brand && outputProducts.push(productsCopyied[productId])
                    ))
                ))
                if (outputProducts.length >= 1) productsCopyied = outputProducts;
                return productsCopyied
            }
            
            if (activeTypeBtnGloal === 2) {
                productsCopyied = selectBrands();
                
                let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "mobile");
                let productsForNotDeleted = productsCopyied;
                productsCopyied = {};
                keyProducts.map((key) => {
                    return productsCopyied[key] = {...productsForNotDeleted[key]}
                });

            } else if (activeTypeBtnGloal === 3) {
                productsCopyied = selectBrands();
                    
                let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "laptop");
                let productsForNotDeleted = productsCopyied;
                productsCopyied = {};
                keyProducts.map((key) => {
                    return productsCopyied[key] = {...productsForNotDeleted[key]}
                });

            } else if (activeTypeBtnGloal === 4) {
                productsCopyied = selectBrands();

                let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "smartWatch");
                let productsForNotDeleted = productsCopyied;
                productsCopyied = {};
                keyProducts.map((key) => {
                    return productsCopyied[key] = {...productsForNotDeleted[key]}
                });

            }else {
                productsCopyied = selectBrands()
            }

            if (activeSortBtnGloal === 1) {
                return state = productsCopyied

            }else if (activeSortBtnGloal === 2) {
                let keyProducts = Object.keys(productsCopyied).sort((a, b) => {
                    return (productsCopyied[a].price).split(",").join("") - (productsCopyied[b].price).split(",").join("");
                });
                
                let productsForNotDeleted = productsCopyied;
                productsCopyied = {};
                
                keyProducts.map((key, index) => {
                    return productsCopyied[index] = {...productsForNotDeleted[+keyProducts[index]]}
                });
                
                return state =  productsCopyied

            } else if (activeSortBtnGloal === 3) {
                let keyProducts = Object.keys(productsCopyied).sort((a, b) => {
                    return (productsCopyied[b].price).split(",").join("") - (productsCopyied[a].price).split(",").join("");
                });
                
                let productsForNotDeleted = productsCopyied;
                productsCopyied = {};
                
                keyProducts.map((key, index) => {
                    return productsCopyied[index] = {...productsForNotDeleted[+keyProducts[index]]}
                });

                return state =  productsCopyied

            }else if (activeSortBtnGloal === 4) {
                return state =  productsCopyied
            }

            return products;
        }
    }
}, products)


export {filtersSortTypesReducer, productsReducer}



// const productsReducer = (state= products, action) => {
//     let productsCopyied = {...state};
    
//     switch (action.type) {
//         case "GET_PRODUCTS":
//             return state;

//         case "SELECT_BRANDS":{
//             productsCopyied = {...products}

            
//             if (action.payload === "remove") {
//                 brandsListGlobal = filtersSortTypes.brandsListGlobal;
//                 productsCopyied = products;
//             }
//             const selectBrands = () => {
                
//                 let trueBrands = [] ;
//                 let outputProducts = [];

//                 for (const brand in brandsListGlobal) {
//                     if (brandsListGlobal[brand] === true ) {
//                         trueBrands.push(brand)
//                     }
//                 }
//                 Object.keys(productsCopyied).map((productId) =>(
//                     trueBrands.map((brand) => (
//                         productsCopyied[productId].brand === brand && outputProducts.push(productsCopyied[productId])
//                     ))
//                 ))
//                 if (outputProducts.length >= 1) productsCopyied = outputProducts;
//                 return productsCopyied
//             }

//             if (activeTypeBtnGloal === 2) {
//                 productsCopyied = selectBrands();
                
//                 let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "mobile");
//                 let productsForNotDeleted = productsCopyied;
//                 productsCopyied = {};
//                 keyProducts.map((key) => {
//                     return productsCopyied[key] = {...productsForNotDeleted[key]}
//                 });

//             } else if (activeTypeBtnGloal === 3) {
//                 productsCopyied = selectBrands();
                    
//                 let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "laptop");
//                 let productsForNotDeleted = productsCopyied;
//                 productsCopyied = {};
//                 keyProducts.map((key) => {
//                     return productsCopyied[key] = {...productsForNotDeleted[key]}
//                 });

//             } else if (activeTypeBtnGloal === 4) {
//                 productsCopyied = selectBrands();

//                 let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "smartWatch");
//                 let productsForNotDeleted = productsCopyied;
//                 productsCopyied = {};
//                 keyProducts.map((key) => {
//                     return productsCopyied[key] = {...productsForNotDeleted[key]}
//                 });

//             }else {
//                 productsCopyied = selectBrands()
//             }

//             if (activeSortBtnGloal === 1) {
//                 return state =  productsCopyied
//             }else if (activeSortBtnGloal === 2) {
//                 let keyProducts = Object.keys(productsCopyied).sort((a, b) => {
//                     return (productsCopyied[a].price).split(",").join("") - (productsCopyied[b].price).split(",").join("");
//                 });
                
//                 let productsForNotDeleted = productsCopyied;
//                 productsCopyied = {};
                
//                 keyProducts.map((key, index) => {
//                     return productsCopyied[index] = {...productsForNotDeleted[+keyProducts[index]]}
//                 });

//                 return state =  productsCopyied
                
//             } else if (activeSortBtnGloal === 3) {
//                 let keyProducts = Object.keys(productsCopyied).sort((a, b) => {
//                     return (productsCopyied[b].price).split(",").join("") - (productsCopyied[a].price).split(",").join("");
//                 });
                
//                 let productsForNotDeleted = productsCopyied;
//                 productsCopyied = {};
                
//                 keyProducts.map((key, index) => {
//                     return productsCopyied[index] = {...productsForNotDeleted[+keyProducts[index]]}
//                 });

//                 return state =  productsCopyied

//             }else if (activeSortBtnGloal === 4) {
//                 return state =  productsCopyied
//             }
            
            
    
//         }
        
//         case "SELECT_TYPE":{
//             productsCopyied = {...products}

//             // productsCopyied = [...state];
//             const selectBrands = () => {

//                 let trueBrands = [] ;
//                 let outputProducts = [];

//                 for (const brand in brandsListGlobal) {
//                     if (brandsListGlobal[brand] === true ) {
//                         trueBrands.push(brand)
//                     }
//                 }
//                 Object.keys(productsCopyied).map((productId) =>(
//                     trueBrands.map((brand) => (
//                         productsCopyied[productId].brand === brand && outputProducts.push(productsCopyied[productId])
//                     ))
//                 ))
//                 if (outputProducts.length >= 1) productsCopyied = outputProducts;
//                 return productsCopyied
//             }
            
//             if (activeTypeBtnGloal === 2) {
//                 productsCopyied = selectBrands();
                
//                 let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "mobile");
//                 let productsForNotDeleted = productsCopyied;
//                 productsCopyied = {};
//                 keyProducts.map((key) => {
//                     return productsCopyied[key] = {...productsForNotDeleted[key]}
//                 });

//             } else if (activeTypeBtnGloal === 3) {
//                 productsCopyied = selectBrands();
                    
//                 let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "laptop");
//                 let productsForNotDeleted = productsCopyied;
//                 productsCopyied = {};
//                 keyProducts.map((key) => {
//                     return productsCopyied[key] = {...productsForNotDeleted[key]}
//                 });

//             } else if (activeTypeBtnGloal === 4) {
//                 productsCopyied = selectBrands();

//                 let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "smartWatch");
//                 let productsForNotDeleted = productsCopyied;
//                 productsCopyied = {};
//                 keyProducts.map((key) => {
//                     return productsCopyied[key] = {...productsForNotDeleted[key]}
//                 });

//             }else {
//                 productsCopyied = selectBrands()
//             }

//             if (activeSortBtnGloal === 1) {
//                 return state = productsCopyied

//             }else if (activeSortBtnGloal === 2) {
//                 let keyProducts = Object.keys(productsCopyied).sort((a, b) => {
//                     return (productsCopyied[a].price).split(",").join("") - (productsCopyied[b].price).split(",").join("");
//                 });
                
//                 let productsForNotDeleted = productsCopyied;
//                 productsCopyied = {};
                
//                 keyProducts.map((key, index) => {
//                     return productsCopyied[index] = {...productsForNotDeleted[+keyProducts[index]]}
//                 });
                
//                 return state =  productsCopyied

//             } else if (activeSortBtnGloal === 3) {
//                 let keyProducts = Object.keys(productsCopyied).sort((a, b) => {
//                     return (productsCopyied[b].price).split(",").join("") - (productsCopyied[a].price).split(",").join("");
//                 });
                
//                 let productsForNotDeleted = productsCopyied;
//                 productsCopyied = {};
                
//                 keyProducts.map((key, index) => {
//                     return productsCopyied[index] = {...productsForNotDeleted[+keyProducts[index]]}
//                 });

//                 return state =  productsCopyied

//             }else if (activeSortBtnGloal === 4) {
//                 return state =  productsCopyied
//             }
//         }
            
            
        
//         case "SELECT_SORT":{
//             productsCopyied = {...products}

//             const selectBrands = () => {
                
//                 let trueBrands = [] ;
//                 let outputProducts = [];

//                 for (const brand in brandsListGlobal) {
//                     if (brandsListGlobal[brand] === true ) {
//                         trueBrands.push(brand)
//                     }
//                 }
//                 Object.keys(productsCopyied).map((productId) =>(
//                     trueBrands.map((brand) => (
//                         productsCopyied[productId].brand === brand && outputProducts.push(productsCopyied[productId])
//                     ))
//                 ))
//                 if (outputProducts.length >= 1) productsCopyied = outputProducts;
//                 return productsCopyied
//             }

//             if (activeTypeBtnGloal === 2) {
//                 productsCopyied = selectBrands();
                
//                 let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "mobile");
//                 let productsForNotDeleted = productsCopyied;
//                 productsCopyied = {};
//                 keyProducts.map((key) => {
//                     return productsCopyied[key] = {...productsForNotDeleted[key]}
//                 });

//             } else if (activeTypeBtnGloal === 3) {
//                 productsCopyied = selectBrands();
                    
//                 let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "laptop");
//                 let productsForNotDeleted = productsCopyied;
//                 productsCopyied = {};
//                 keyProducts.map((key) => {
//                     return productsCopyied[key] = {...productsForNotDeleted[key]}
//                 });

//             } else if (activeTypeBtnGloal === 4) {
//                 productsCopyied = selectBrands();

//                 let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "smartWatch");
//                 let productsForNotDeleted = productsCopyied;
//                 productsCopyied = {};
//                 keyProducts.map((key) => {
//                     return productsCopyied[key] = {...productsForNotDeleted[key]}
//                 });

//             }else {
//                 productsCopyied = selectBrands()
//             }

//             if (activeSortBtnGloal === 1) {
//                 return state = productsCopyied

//             }else if (activeSortBtnGloal === 2) {
//                 let keyProducts = Object.keys(productsCopyied).sort((a, b) => {
//                     return (productsCopyied[a].price).split(",").join("") - (productsCopyied[b].price).split(",").join("");
//                 });

//                 let productsForNotDeleted = productsCopyied;
//                 productsCopyied = {};
                
//                 keyProducts.map((key, index) => {
//                     return productsCopyied[index] = {...productsForNotDeleted[+keyProducts[index]]}
//                 });
                
//                 return state =  productsCopyied;

//             } else if (activeSortBtnGloal === 3) {
//                 let keyProducts = Object.keys(productsCopyied).sort((a, b) => {
//                     return (productsCopyied[b].price).split(",").join("") - (productsCopyied[a].price).split(",").join("");
//                 });

//                 let productsForNotDeleted = productsCopyied;
//                 productsCopyied = {};
//                 keyProducts.map((key, index) => {
//                     return productsCopyied[index] = {...productsForNotDeleted[+keyProducts[index]]}
//                 });
//                 return state =  productsCopyied

//             }else if (activeSortBtnGloal === 4) {
//                 return state =  productsCopyied

//             }
            
            
//         }
        
//         case "DARK_MODE":
//         case "LIGHT_MODE":
//             return state;

//         default:{
//             productsCopyied = {...products}
//             const selectBrands = () => {

//                 let trueBrands = [] ;
//                 let outputProducts = [];

//                 for (const brand in brandsListGlobal) {
//                     if (brandsListGlobal[brand] === true ) {
//                         trueBrands.push(brand)
//                     }
//                 }
//                 Object.keys(productsCopyied).map((productId) =>(
//                     trueBrands.map((brand) => (
//                         productsCopyied[productId].brand === brand && outputProducts.push(productsCopyied[productId])
//                     ))
//                 ))
//                 if (outputProducts.length >= 1) productsCopyied = outputProducts;
//                 return productsCopyied
//             }
            
//             if (activeTypeBtnGloal === 2) {
//                 productsCopyied = selectBrands();
                
//                 let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "mobile");
//                 let productsForNotDeleted = productsCopyied;
//                 productsCopyied = {};
//                 keyProducts.map((key) => {
//                     return productsCopyied[key] = {...productsForNotDeleted[key]}
//                 });

//             } else if (activeTypeBtnGloal === 3) {
//                 productsCopyied = selectBrands();
                    
//                 let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "laptop");
//                 let productsForNotDeleted = productsCopyied;
//                 productsCopyied = {};
//                 keyProducts.map((key) => {
//                     return productsCopyied[key] = {...productsForNotDeleted[key]}
//                 });

//             } else if (activeTypeBtnGloal === 4) {
//                 productsCopyied = selectBrands();

//                 let keyProducts = Object.keys(productsCopyied).filter((productID) => productsCopyied[productID].type === "smartWatch");
//                 let productsForNotDeleted = productsCopyied;
//                 productsCopyied = {};
//                 keyProducts.map((key) => {
//                     return productsCopyied[key] = {...productsForNotDeleted[key]}
//                 });

//             }else {
//                 productsCopyied = selectBrands()
//             }

//             if (activeSortBtnGloal === 1) {
//                 return state = productsCopyied

//             }else if (activeSortBtnGloal === 2) {
//                 let keyProducts = Object.keys(productsCopyied).sort((a, b) => {
//                     return (productsCopyied[a].price).split(",").join("") - (productsCopyied[b].price).split(",").join("");
//                 });
                
//                 let productsForNotDeleted = productsCopyied;
//                 productsCopyied = {};
                
//                 keyProducts.map((key, index) => {
//                     return productsCopyied[index] = {...productsForNotDeleted[+keyProducts[index]]}
//                 });
                
//                 return state =  productsCopyied

//             } else if (activeSortBtnGloal === 3) {
//                 let keyProducts = Object.keys(productsCopyied).sort((a, b) => {
//                     return (productsCopyied[b].price).split(",").join("") - (productsCopyied[a].price).split(",").join("");
//                 });
                
//                 let productsForNotDeleted = productsCopyied;
//                 productsCopyied = {};
                
//                 keyProducts.map((key, index) => {
//                     return productsCopyied[index] = {...productsForNotDeleted[+keyProducts[index]]}
//                 });

//                 return state =  productsCopyied

//             }else if (activeSortBtnGloal === 4) {
//                 return state =  productsCopyied
//             }

//             return products;
//         }
//     }
// }