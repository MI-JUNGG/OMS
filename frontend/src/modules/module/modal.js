// modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        cardmodal: false,
        dateControl: false,
        endDateControl: false,
        dateType: false,
        repeatControl: false,
        repeatEndControl: false,
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
        repeatControl: (state) => {
            return { ...state, repeatControl: !state.repeatControl };
        },
        repeatEndControl: (state) => {
            return { ...state, repeatEndControl: !state.repeatEndControl };
        },
    },
});

export const {
    cardmodal,
    dateControl,
    endDateControl,
    dateType,
    repeatControl,
    repeatEndControl,
} = modalSlice.actions;
export default modalSlice.reducer;
