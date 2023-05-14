import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "counter",
    initialState: [],
    reducers: {
        addCard: (state, action) => {
            state.push(action.payload);
        },
        removeCard: (state, action) => {
            const index = state.findIndex((card) => card.id === action.payload);
            state.splice(index, 1);
        },
    },
});

export const { addCard, removeCard } = cardSlice.actions;

export default cardSlice.reducer;
