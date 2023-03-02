import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        errorMsg: ""
    },
    reducers: {
        loginStart: state => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.error = false;
            state.errorMsg = "";
            state.currentUser = action.payload;
        },
        loginFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.errorMsg = action.payload;
        },
        logout: state => {
            state.currentUser = null;
        },
        clearError: state => {
            state.error = false;
            state.errorMsg = "";
        }
    }
});

export const {loginStart, loginSuccess, loginFailure, logout, clearError } = userSlice.actions;
export default userSlice.reducer;