import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "counter",
    initialState: {
        title: "",
        content: "",
    },
    reducers: {
        title: (state, action) => {
            state.title = action.payload;
        },
        content: (state, action) => {
            state.content = action.payload;
        },
    },
});

export const { title, content } = cardSlice.actions;

export default cardSlice.reducer;
