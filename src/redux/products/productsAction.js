const getProducts = () => {
    return {type: "GET_PRODUCTS"}
}

const selectBrands = () => {
    return {type: "SELECT_BRANDS"}
}

const selectType = () => {
    return {type: "SELECT_TYPE"}
}

const selectSort = () => {
    return {type: "SELECT_SORT"}
}


export {getProducts, selectBrands, selectType, selectSort};