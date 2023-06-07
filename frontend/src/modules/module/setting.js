import { createSlice } from "@reduxjs/toolkit";

const SettingSlice = createSlice({
    name: "setting",
    initialState: {
        mainColor: "#547AFF",
        backgroundColor: "#F3F6FF",
        textStyle: "Regular",
        textColor: "Dark",
        blockColor: "#AF71FF",
    },
    reducers: {
        main: (state, action) => {
            state.mainColor = action.payload;
        },
        background: (state, action) => {
            state.backgroundColor = action.payload;
        },
        textColor: (state, action) => {
            state.textColor = action.payload;
        },
        textStyle: (state, action) => {
            state.textStyle = action.payload;
        },
        blockColor: (state, action) => {
            state.blockColor = action.payload;
        },
    },
});

export const { main, background, textColor, textStyle, blockColor } =
    SettingSlice.actions;
export default SettingSlice.reducer;
