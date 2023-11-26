import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getAllMessages = createAsyncThunk(
    "",
    async (thunkAPI) => {
        try {
            const res = await axios('/');
            return res.data
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }

);

const ordersSlice = createSlice({
    name: "messages",
    initialState: {
        data: [],
        isLoading: false,
        error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllMessages.pending, state => {
                state.isLoading = true
            })
            .addCase(getAllMessages.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.data = payload
            })
            .addCase(getAllMessages.rejected, (state, {payload}) => {
                state.error = payload;
                state.isLoading = false
            })
    }
});

export const {} = ordersSlice.actions;

