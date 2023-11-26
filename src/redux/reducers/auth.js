import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null
    },
    reducers: {
        authUser: (state, action) => {
            state.user = action.payload.user;
        },
        logOutUser: (state, action) => {
            state.user = null;
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        setImage: (state, action) => {
            state.user = action.payload
        }
    }
});



export const {} = authSlice.actions;
export default authSlice.reducer
