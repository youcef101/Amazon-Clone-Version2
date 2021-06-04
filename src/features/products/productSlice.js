import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    cartItem: []
}
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setCartItem: (state, action) => {
            state.cartItem = action.payload;
        }
    }
})
export const { setProducts, setCartItem } = productSlice.actions
export const selectProducts = (state) => state.product.products
export const selectCartItem = (state) => state.product.cartItem
export default productSlice.reducer