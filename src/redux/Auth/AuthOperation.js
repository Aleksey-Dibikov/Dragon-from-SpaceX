import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return rejectWithValue();
        };

        token.set(persistedToken);
        try {
        const { data } = await axios.get('/users/current');
        return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export { fetchCurrentUser };