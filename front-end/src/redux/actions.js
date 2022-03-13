//      All actions

//      Add New Product in the cart 
export const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product,
        
    }
}

//      Delete Product from the cart
export const deleteProduct = (product) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: product
    }
}
