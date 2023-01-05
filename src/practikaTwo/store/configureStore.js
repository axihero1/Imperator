import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cart"
import currentProduct from "./slices/currentProduct"

export const store = configureStore({
    reducer: {
        cart,
        currentProduct,
    },
});