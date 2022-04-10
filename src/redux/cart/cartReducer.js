/* eslint-disable default-case */
import produce from "immer";

const initialState = JSON.parse(localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : {};

const cartReducer = produce((state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            state[action.payload.id] = {...action.payload, quantity: 1};
            localStorage.setItem("products", JSON.stringify(state));
            break;

        case "INCREASE":{
            state[action.payload.id].quantity += 1;
            localStorage.setItem("products", JSON.stringify(state));

            break;
        }

        case "DECREASE":{
            state[action.payload.id].quantity -= 1;
            localStorage.setItem("products", JSON.stringify(state));

            break;
        }

        case "REMOVE_ITEM":{
            delete state[action.payload.id];
            localStorage.setItem("products", JSON.stringify(state));

            break;
        }
        
        case "CART_CLEAR": {
            for (const product in state) {
                delete state[product];
            }
            localStorage.setItem("products", JSON.stringify({}));
        }
    }
},initialState)

export default cartReducer;



// const cartReducer = (state=initialState, action) => {
//     switch (action.type) {
//         case "ADD_TO_CART":
//             const stateCopyied = {...state, [action.payload.id]: action.payload};
            
//             if (!Object.keys(stateCopyied).find((itemID) => itemID === action.payload.id)) {
//                 stateCopyied[action.payload.id] = {...action.payload, quantity: 1};
//                 localStorage.setItem("products", JSON.stringify(stateCopyied));
//             }
              
//             return stateCopyied;
//         case "INCREASE":{
//             const stateCopyied = {...state};
            
//             const index = Object.keys(stateCopyied).findIndex((item) => item.id === action.payload.id) && action.payload.id; 
//             const find = Object.keys(stateCopyied).map((item) => item.id === action.payload.id) && stateCopyied[action.payload.id];

//             find.quantity += 1;
//             stateCopyied[index] = find;

//             localStorage.setItem("products", JSON.stringify(stateCopyied));

//             return stateCopyied;
//         }

//         case "DECREASE":{
//             const stateCopyied = {...state};
            
//             const index = Object.keys(stateCopyied).findIndex((item) => item.id === action.payload.id) && action.payload.id; 
//             const find = Object.keys(stateCopyied).map((item) => item.id === action.payload.id) && stateCopyied[action.payload.id];
            
//             find.quantity -= 1;

//             stateCopyied[index] = find;
//             if (find.quantity === 0) {
//                 delete stateCopyied[index];
//             }
//             localStorage.setItem("products", JSON.stringify(stateCopyied));

//             return stateCopyied;
//         }

//         case "REMOVE_ITEM":{
//             const stateCopyied = {...state};

//             const index = Object.keys(stateCopyied).findIndex((item) => item.id === action.payload.id) && action.payload.id; 
            
//             delete stateCopyied[index];

//             localStorage.setItem("products", JSON.stringify(stateCopyied));


//             return stateCopyied;
//         }

//         default:
//             return state;
//     }
// }