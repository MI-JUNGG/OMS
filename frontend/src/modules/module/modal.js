import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        cardmodal: false,
    },
    reducers: {
        cardmodal: (state) => {
            return { ...state, cardmodal: !state.cardmodal };
        },
    },
});

export const { cardmodal } = modalSlice.actions;
export default modalSlice.reducer;
