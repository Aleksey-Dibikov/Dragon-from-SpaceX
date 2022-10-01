import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    email: null,
    token: null,
    id: null,
    isFetchingCurrentUser: false,
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
        fetchCurrentUser(state, action) {
            state.user = action.payload;
            state.isAuth = true;
            state.isFetchingCurrentUser = false;
        },
    },
});

export const {setUser, logOutUser} = authSlice.actions;

export default authSlice.reducer;