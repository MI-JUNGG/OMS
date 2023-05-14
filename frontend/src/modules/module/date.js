import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
    name: "counter",
    initialState: {
        year: null,
        month: null,
        day: null,
    },
    reducers: {
        addDate: (state, action) => {
            return {
                ...state,
                year: action.payload,
                month: action.payload,
                day: action.payload,
            };
        },
    },
});

export const { addDate } = dateSlice.actions;

export default dateSlice.reducer;
