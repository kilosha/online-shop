import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        totalSum: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.totalSum += (action.payload.price * action.payload.quantity);
            state.totalSum = +state.totalSum.toFixed(2);
        },
        clearCart: state => {
            state.products = [];
            state.quantity = 0;
            state.totalSum = 0;
        }
    }
});

export const {addProduct, clearCart} = cartSlice.actions;
export default cartSlice.reducer;