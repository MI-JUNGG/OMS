import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
    name: "counter",
    initialState: { year: null, month: null, day: null },
    reducers: {
        addDate: (state, action) => {
            return {
                ...state,
                year: action.payload,
            };
        },
        addMonth: (state, action) => {
            return {
                ...state,
                month: action.payload,
            };
        },
        addDay: (state, action) => {
            return {
                ...state,
                day: action.payload,
            };
        },
    },
});

export const { addDate, addDay, addMonth } = dateSlice.actions;

export default dateSlice.reducer;
