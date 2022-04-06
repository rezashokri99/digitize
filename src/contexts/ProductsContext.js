import React, { useState } from 'react';

import iphone13_1 from "../images/Single Product/mobile/iphone/Apple-iPhone-13-1.png";
import iphone13_2 from "../images/Single Product/mobile/iphone/Apple-iPhone-13-2.png";
import iphone13_3 from "../images/Single Product/mobile/iphone/Apple-iPhone-13-3.png";
import iphone13_pro_1 from "../images/Single Product/mobile/iphone/Apple-iPhone-13-pro-1.png";
import iphone13_pro_2 from "../images/Single Product/mobile/iphone/Apple-iPhone-13-pro-2.png";
import iphone13_pro_3 from "../images/Single Product/mobile/iphone/Apple-iPhone-13-pro-3.png";
import iphone13_pro_max_1 from "../images/Single Product/mobile/iphone/Apple-iPhone-13-pro-max-1.png";
import iphone13_pro_max_2 from "../images/Single Product/mobile/iphone/Apple-iPhone-13-pro-max-2.png";
import xiaomi_mi11_1 from "../images/Single Product/mobile/xiaomi/xiaomi-mi11-1.png";
import xiaomi_mi11_2 from "../images/Single Product/mobile/xiaomi/xiaomi-mi11-2.png";
import xiaomi_mi11_3 from "../images/Single Product/mobile/xiaomi/xiaomi-mi11-3.png";
import xiaomi_mi11_ultra_1 from "../images/Single Product/mobile/xiaomi/xiaomi-mi11-ultra-1.png";
import xiaomi_mi11_ultra_2 from "../images/Single Product/mobile/xiaomi/xiaomi-mi11-ultra-2.png";
import xiaomi_mi11_ultra_3 from "../images/Single Product/mobile/xiaomi/xiaomi-mi11-ultra-3.png";
import xiaomi_poco_f3_1 from "../images/Single Product/mobile/xiaomi/xiaomi-poco-f3-1.png";
import xiaomi_poco_f3_2 from "../images/Single Product/mobile/xiaomi/xiaomi-poco-f3-2.png";
import xiaomi_poco_f3_3 from "../images/Single Product/mobile/xiaomi/xiaomi-poco-f3-3.png";
import huawei_p30_pro_1 from "../images/Single Product/mobile/huawei/huawei-p30-pro-1.png";
import huawei_p30_pro_2 from "../images/Single Product/mobile/huawei/huawei-p30-pro-2.png";
import huawei_p30_pro_3 from "../images/Single Product/mobile/huawei/huawei-p30-pro-3.png";
import huawei_p40_pro_1 from "../images/Single Product/mobile/huawei/huawei-p40-pro-1.png";
import huawei_p40_pro_2 from "../images/Single Product/mobile/huawei/huawei-p40-pro-2.png";
import huawei_p40_pro_3 from "../images/Single Product/mobile/huawei/huawei-p40-pro-3.png";
import samsung_note_20_ultra_1 from "../images/Single Product/mobile/samsung/samsung-note-20-ultra-1.png";
import samsung_note_20_ultra_2 from "../images/Single Product/mobile/samsung/samsung-note-20-ultra-2.png";
import samsung_note_20_ultra_3 from "../images/Single Product/mobile/samsung/samsung-note-20-ultra-3.png";
import samsung_s21_ultra_1 from "../images/Single Product/mobile/samsung/samsung-s21-ultra-1.png";
import samsung_s21_ultra_2 from "../images/Single Product/mobile/samsung/samsung-s21-ultra-2.png";
import samsung_s21_ultra_3 from "../images/Single Product/mobile/samsung/samsung-s21-ultra-3.png";
import samsung_s22_ultra_1 from "../images/Single Product/mobile/samsung/samsung-s22-ultra-1.png";
import samsung_s22_ultra_2 from "../images/Single Product/mobile/samsung/samsung-s22-ultra-2.png";
import samsung_s22_ultra_3 from "../images/Single Product/mobile/samsung/samsung-s22-ultra-3.png";

import asus_rog_1 from "../images/Single Product/laptop/asus/asus-rog-strix-g-1.png";
import asus_rog_2 from "../images/Single Product/laptop/asus/asus-rog-strix-g-2.png";
import asus_rog_3 from "../images/Single Product/laptop/asus/asus-rog-strix-g-3.png";
import asus_tuf_1 from "../images/Single Product/laptop/asus/TUF-Dash-F15-1.png";
import asus_tuf_2 from "../images/Single Product/laptop/asus/TUF-Dash-F15-2.png";
import asus_tuf_3 from "../images/Single Product/laptop/asus/TUF-Dash-F15-3.png";
import asus_zenBook_1 from "../images/Single Product/laptop/asus/ZenBook-Pro-Duo-1.png";
import asus_zenBook_2 from "../images/Single Product/laptop/asus/ZenBook-Pro-Duo-2.png";
import asus_zenBook_3 from "../images/Single Product/laptop/asus/ZenBook-Pro-Duo-3.png";
import lenovo_legion_1 from "../images/Single Product/laptop/lenovo/lenovo-5-pro-1.png";
import lenovo_legion_2 from "../images/Single Product/laptop/lenovo/lenovo-5-pro-2.png";
import lenovo_legion_3 from "../images/Single Product/laptop/lenovo/lenovo-5-pro-3.png";
import macBook_pro_1 from "../images/Single Product/laptop/apple/macbook-pro-1.png";
import macBook_pro_2 from "../images/Single Product/laptop/apple/macbook-pro-2.png";
import macBook_pro_3 from "../images/Single Product/laptop/apple/macbook-pro-3.png";

import apple_watch_7_1 from "../images/Single Product/smartWatch/apple/1.png";
import apple_watch_7_2 from "../images/Single Product/smartWatch/apple/2.png";






export const productsProvider = React.createContext();
const ProductsContext = ({children}) => {

    const [products, setProducts] = useState([
        {
            id: 1,
            type: "mobile",
            brand: "apple",
            images: [iphone13_1, iphone13_2, iphone13_3],
            englishName: "Iphone 13 128GB",
            persianName: "گوشی آیفون 13 128 گیگابایت",
            price: "26,450,000",
            colors: ["indigo", "orange", "yellow", 'white'],
            colorType: "one"
        },
        {
            id: 2,
            type: "mobile",
            brand: "apple",
            images: [iphone13_pro_1, iphone13_pro_2, iphone13_pro_3],
            englishName: "Iphone 13 pro 256GB",
            persianName: "گوشی آیفون 13 pro 256 گیگابایت",
            price: "32,450,000",
            colors: ["indigo", "orange", "yellow", 'white'],
            colorType: "two"
        },
        {
            id: 3,
            type: "mobile",
            brand: "apple",
            images: [iphone13_pro_max_1, iphone13_pro_max_2],
            englishName: "Iphone 13 pro max 512GB",
            persianName: "گوشی آیفون 13 pro max 512 گیگابایت",
            price: "38,820,000",
            colors: ["indigo", "orange", "yellow", 'white'],
            colorType: "there"
        },
    
        {
            id: 4,
            type: "mobile",
            brand: "xiaomi",
            images: [xiaomi_mi11_1, xiaomi_mi11_2, xiaomi_mi11_3],
            englishName: "Mi 11 128GB",
            persianName: "گوشی شیائومی می 11",
            price: "12,450,000",
            colors: ["indigo", "orange", "yellow", 'white'],
            colorType: "four"
        },
        {
            id: 5,
            type: "mobile",
            brand: "xiaomi",
            images: [xiaomi_mi11_ultra_1, xiaomi_mi11_ultra_2, xiaomi_mi11_ultra_3],
            englishName: "Mi 11 Ultra 512GB",
            persianName: "گوشی شیائومی می 11 اولترا",
            price: "24,100,000",
            colors: ["indigo", "orange", "yellow", 'white'],
            colorType: "five"
        },
        {
            id: 6,
            type: "mobile",
            brand: "xiaomi",
            images: [xiaomi_poco_f3_1, xiaomi_poco_f3_2, xiaomi_poco_f3_3],
            englishName: "Poco F3 256GB",
            persianName: "گوشی شیائومی پوکو اف 3",
            price: "15,000,000",
            colors: ["indigo", "orange", "yellow", 'white'],
            colorType: "six"
        },
    
        {
            id: 7,
            type: "mobile",
            brand: "huawei",
            images: [huawei_p30_pro_1, huawei_p30_pro_2, huawei_p30_pro_3],
            englishName: "huawei p30 pro 128GB",
            persianName: "گوشی هواوی پی 30 پرو",
            price: "16,000,000",
            colors: ["indigo", "orange", "yellow", 'white'],
            colorType: "seven"
        },
        {
            id: 8,
            type: "mobile",
            brand: "huawei",
            images: [huawei_p40_pro_1, huawei_p40_pro_2, huawei_p40_pro_3],
            englishName: "huawei p40 pro 256GB",
            persianName: "گوشی هواوی پی 40 پرو",
            price: "25,700,000",
            colors: ["indigo", "orange", "yellow", 'white'],
            colorType: "eight"
        },
    
        {
            id: 9,
            type: "mobile",
            brand: "samsung",
            images: [samsung_note_20_ultra_1, samsung_note_20_ultra_2, samsung_note_20_ultra_3],
            englishName: "Note 20 Ultra 512GB",
            persianName: "گوشی نوت 20 اولترا",
            price: "31,280,000",
            colors: ["indigo", "orange", "yellow", 'white'],
            colorType: "nine"
        },
        {
            id: 10,
            type: "mobile",
            brand: "samsung",
            images: [samsung_s21_ultra_1, samsung_s21_ultra_2, samsung_s21_ultra_3],
            englishName: "S21 Ultra 256GB",
            persianName: "گوشی اس 21 اولترا",
            price: "23,280,000",
            colors: ["indigo", "orange", "yellow", 'white'],
            colorType: "ten"
        },
        {
            id: 11,
            type: "mobile",
            brand: "samsung",
            images: [samsung_s22_ultra_1, samsung_s22_ultra_2, samsung_s22_ultra_3],
            englishName: "S22 Ultra 512GB",
            persianName: "گوشی اس 22 اولترا",
            price: "29,000,000",
            colors: ["indigo", "orange", "yellow", 'white'],
            colorType: "eleven"
        },


        {
            id: 12,
            type: "laptop",
            brand: "asus",
            images: [asus_rog_1, asus_rog_2, asus_rog_3],
            englishName: "ROG Strix G15 G513IE",
            persianName: "لپ تاپ ایسوس G15",
            price: "22,500,000",
            colors: ["indigo", "orange", "yellow", 'white'],
            colorType: "twelve"
        },
        {
            id: 13,
            type: "laptop",
            brand: "asus",
            images: [asus_zenBook_1, asus_zenBook_2, asus_zenBook_3],
            englishName: "ZenBook 14 UX482EG",
            persianName: "لپ تاپ ایسوس ZenBook 14",
            price: "31,200,000",
            colors: ["indigo", "orange", "yellow", 'white'],
            colorType: "thirteen"
        },
        {
            id: 14,
            type: "laptop",
            brand: "asus",
            images: [asus_tuf_1, asus_tuf_2, asus_tuf_3],
            englishName: "TUF Dash F15 FX516PR",
            persianName: "لپ تاپ ایسوس TUF F15",
            price: "26,490,000",
            colors: ["indigo", "orange", "yellow", 'white'],
            colorType: "fourteen"
        },

        {
            id: 15,
            type: "laptop",
            brand: "lenovo",
            images: [lenovo_legion_1, lenovo_legion_2, lenovo_legion_3],
            englishName: "Legion 5 Pro",
            persianName: "لپ تاپ لنوو Legion 5 pro",
            price: "26,490,000",
            colors: ["indigo", "orange", "yellow", 'white'],
            colorType: "fourteen"
        },

        {
            id: 16,
            type: "laptop",
            brand: "apple",
            images: [macBook_pro_1, macBook_pro_2, macBook_pro_3],
            englishName: "MacBook Pro Z11C",
            persianName: "لپ تاپ اپل MacBook Pro Z11C",
            price: "32,500,000",
            colors: ["indigo", "orange", "yellow", 'white'],
            colorType: "sixteen"
        },


        {
            id: 17,
            type: "smartWatch",
            brand: "apple",
            images: [apple_watch_7_1, apple_watch_7_2],
            englishName: "Apple Watch Series 7",
            persianName: "ساعت هوشمند اپل سری 7",
            price: "7,500,000",
            colors: ["indigo", "orange", "yellow", 'white'],
            colorType: "seventeen"
        },
       


    ])


    return (
        <productsProvider.Provider value={products}>
            {children}
        </productsProvider.Provider>
    );
}
 
export default ProductsContext;