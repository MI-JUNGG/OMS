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
        repeatControl: (state, actions) => {
            return { ...state, repeatControl: actions.payload };
        },
        repeatEndControl: (state) => {
            return { ...state, repeatEndControl: !state.endDateControl };
        },
    },
});

export const {
    cardmodal,
    dateControl,
    endDateControl,
    dateType,
    repeatEndControl,
    repeatControl,
} = modalSlice.actions;
export default modalSlice.reducer;
