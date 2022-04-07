const initialState = JSON.parse(localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : [];

const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const stateCopyied = [...state];
            if (!stateCopyied.find((item) => item.id === action.payload.id)) {
                stateCopyied.push({...action.payload, quantity: 1})
                localStorage.setItem("products", JSON.stringify(stateCopyied));
              }
              
            return stateCopyied;
        case "INCREASE":{
            const stateCopyied = [...state];

            const index = stateCopyied.findIndex((item) => item.id === action.payload.id); 
            const find = stateCopyied.find((item) => item.id === action.payload.id);
            find.quantity++;
            stateCopyied[index] = find;

            localStorage.setItem("products", JSON.stringify(stateCopyied));

            return stateCopyied;
        }

        case "DECREASE":{
            const stateCopyied = [...state];

            const index = stateCopyied.findIndex((item) => item.id === action.payload.id); 
            const find = stateCopyied.find((item) => item.id === action.payload.id);
            find.quantity--;
            stateCopyied[index] = find;
            if (find.quantity === 0) {
                stateCopyied.splice(index,1);
            }
            localStorage.setItem("products", JSON.stringify(stateCopyied));

            return stateCopyied;
        }

        case "REMOVE_ITEM":{
            const stateCopyied = [...state];

            const index = stateCopyied.findIndex((item) => item.id === action.payload.id); 
            stateCopyied.splice(index,1);

            localStorage.setItem("products", JSON.stringify(stateCopyied));


            return stateCopyied;
        }

        default:
            return state;
    }
}


export default cartReducer;