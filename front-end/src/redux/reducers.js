//      Initial State set to empty
const initialState = []

//      Persisted State Reducer to store redux state in local storage
export const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {}

//      Cart Reducer
export const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':

            //  If Product already exist in the cart, Just add quantity to that product
            const productExist = state.find((product) => product.id === action.payload.id)
            if (productExist) {
                let newState = state.map((x) => x.id === action.payload.id ? { ...x, qty: x.qty + 1 } : x);
                return newState

            //  if Product does not exist in the cart, Add that product with quantity 1
            } else {
                const product = action.payload;
                let newState = [...state, { ...product, qty: 1, }]
                return newState
            }


        case 'DELETE_PRODUCT':

            //  if Product quantity is less than 1, Remove that product from the cart
            const exist1 = state.find((x) => x.id === action.payload.id);
            if (exist1.qty === 1) {
                let newState = state.filter((x) => x.id !== exist1.id);
                return newState;

            //  If Product quantity is greater than 1, Just Decrement the quantity of that product
            } else {
                let newState = state.map((x) => x.id === action.payload.id ? { ...x, qty: x.qty - 1 } : x);
                return newState;
            }

        //  Default State
        default:
            return state;
    }
}