const getProductsAction = () => {
    return {type: "GET_PRODUCTS"}
}

const selectBrandsAction = (id) => {
    return {type: "SELECT_BRANDS", payload: id}
}

const selectTypeAction = () => {
    return {type: "SELECT_TYPE"}
}

const selectSortAction = () => {
    return {type: "SELECT_SORT"}
}

export {getProductsAction, selectBrandsAction, selectTypeAction, selectSortAction};



const changeBrandsAction = (id) => {
    return {type: "CHANGE_BRANDS", payload: id}
}

const changeTypeAction = (id) => {
    return {type: "CHANGE_ACTIVE_TYPE_BTN", payload: id}
}

const changeSortAction = (id) => {
    return {type: "CHANGE_ACTIVE_SORT_BTN", payload: id}
}


export {changeBrandsAction, changeTypeAction, changeSortAction}