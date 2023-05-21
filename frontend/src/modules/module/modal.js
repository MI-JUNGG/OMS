import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        cardmodal: false,
        dateControl: false,
    },
    reducers: {
        cardmodal: (state) => {
            return { ...state, cardmodal: !state.cardmodal };
        },
        dateControl: (state) => {
            return { ...state, dateControl: !state.dateControl };
        },
    },
});

export const { cardmodal, dateControl } = modalSlice.actions;
export default modalSlice.reducer;
