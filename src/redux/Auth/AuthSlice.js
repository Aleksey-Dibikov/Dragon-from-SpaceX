import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "./AuthOperation";

const initialState = {
    user: { name: '', email: '' },
    token: '',
    isAuth: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuth = true;
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuth = true;
        },
        [logOut.fulfilled](state, action) {
            state.user = { name: '', email: '' };
            state.token = '';
            state.isAuth = false;
        },
    },
});

export default authSlice.reducer;