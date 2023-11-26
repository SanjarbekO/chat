import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [
        { id: 1, name: 'Санжар', message: 'привет' },
        { id: 2, name: 'User', message: 'привет' },
    ],
};

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        addMessage: (state, action) => {
            const newMessage = {
                id: state.messages.length + 1,
                name: 'User',
                message: action.payload,
            };
            state.messages.push(newMessage);
        },
    },
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;