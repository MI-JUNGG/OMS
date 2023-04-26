import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "counter",
    initialState: [],
    reducers: {
        addCard: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addCard } = cardSlice.actions;

export default cardSlice.reducer;
