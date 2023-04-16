import { createSlice } from "@reduxjs/toolkit";

const cardSlicer = createSlice({
    name: "Card",
    initialState: {
        card: {
            title: "",
            contents: "",
        },
    },
    reducers: {
        Addcard: (state, action) => {
            return {
                ...state,
                title: action.payload,
                contents: action.payload,
            };
        },
    },
});

export const { Addcard } = cardSlicer.actions;
export default cardSlicer.reducer;
