import { createSlice } from "@reduxjs/toolkit";

const ColorPicker = createSlice({
    name: "view",
    initialState: {
        color: [],
    },
    reducers: {
        color: (state, action) => {
            state.color = action.payload;
        },
    },
});

export const { color } = ColorPicker.actions;
export default ColorPicker.reducer;
