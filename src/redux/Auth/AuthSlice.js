import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    email: null,
    token: null,
    id: null,
};

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, {payload}) {
            state.email = payload.email;
            state.token = payload.token;
            state.id = payload.id;
        },
        logOutUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        },
    },
});

export const {setUser, logOutUser} = authSlice.actions;

export default authSlice.reducer;