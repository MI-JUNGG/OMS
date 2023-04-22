import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 0,
    },
    reducers: {
        counter: (state) => {
            state.counter += 1;
        },
    },
});

export const { counter } = counterSlice.actions;
export default counterSlice.reducer;
