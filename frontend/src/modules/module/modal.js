import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        cardmodal: false,
        dateControl: false,
        endDateControl: false,
        dateType: false,
    },
    reducers: {
        cardmodal: (state) => {
            return { ...state, cardmodal: !state.cardmodal };
        },
        dateControl: (state) => {
            return { ...state, dateControl: !state.dateControl };
        },
        endDateControl: (state) => {
            return { ...state, endDateControl: !state.endDateControl };
        },
        dateType: (state, actions) => {
            return { ...state, dateType: actions.payload };
        },
    },
});

export const { cardmodal, dateControl, endDateControl, dateType } =
    modalSlice.actions;
export default modalSlice.reducer;
