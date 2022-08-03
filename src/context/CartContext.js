import { createContext, useReducer } from "react";
import cartReducer, { initialState } from "../reducer/cartReducer";

export const CartContext = createContext(initialState);

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(initialState, cartReducer)

    return (
        <CartContext.Provider value={{...state, dispatch}}>
            { children }
        </CartContext.Provider>

    )

}