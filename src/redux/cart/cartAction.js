const addToCart = (product) => {
    return {type: "ADD_TO_CART", payload: product}
}

const increase = (product) => {
    return {type: "INCREASE", payload: product}
}

const decrease = (product) => {
    return {type: "DECREASE", payload: product}
}

const removeItem = (product) => {
    return {type: "REMOVE_ITEM", payload: product}
}

const cartClear = () => {
    return {type: "CART_CLEAR"}
}


export {addToCart, increase, decrease, removeItem, cartClear};