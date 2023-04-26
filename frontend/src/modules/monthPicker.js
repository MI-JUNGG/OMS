import { createSlice } from "@reduxjs/toolkit";

const MonthSlice = createSlice({
    name: "month",
    initialState: {
        month: null,
    },
    reducers: {
        month: (state, action) => {
            state.month = action.payload;
        },
    },
});

export const { month } = MonthSlice.actions;
export default MonthSlice.reducer;
