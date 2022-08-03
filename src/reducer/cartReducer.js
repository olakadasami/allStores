export const initialState = {
    total: 0,
    products: []
}

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_ITEM":
            return {
                ...state, 
                products: [payload, ...state.products]
            }
    
        case "REMOVE_ITEM":
            return {
                ...state, 
                products: state.products.filter(p => p.id !== payload)
            }
    
        case "UPDATE_PRICE":
            return {
                ...state,
                total: payload
            }
    
        default:
            return state
    }
}

export default cartReducer;