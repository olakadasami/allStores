import { createContext, useReducer } from "react";
import cartReducer from "../reducer/cartReducer";


export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const initialState = {
        total: 0,
        products: []
    }

    const [state, dispatch] = useReducer(cartReducer, initialState)

    return (
        <CartContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CartContext.Provider>

    )

}