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
        }
    }
});

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;