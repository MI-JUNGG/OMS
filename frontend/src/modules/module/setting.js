import { createSlice } from "@reduxjs/toolkit";

const SettingSlice = createSlice({
    name: "setting",
    initialState: {
        mainColor: "#547AFF",
        backgroundColor: "#F3F6FF",
        textStyle: "Regular",
        textColor: "Dark",
        blockColor: "#AF71FF",
        blockColorTheme: 1,
        blockColorThemeTitle: "bright",
        isModal: false,
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
        handleBlockColor: (state, action) => {
            state.blockColor = action.payload;
        },
        handleBlockColorTheme: (state, action) => {
            state.blockColorTheme = action.payload;
        },
        handleBlockColorThemeTitle: (state, action) => {
            state.blockColorThemeTitle = action.payload;
        },
        isModal: (state) => {
            return { ...state, isModal: !state.isModal };
        },
    },
});

export const {
    main,
    background,
    textColor,
    textStyle,
    handleBlockColor,
    handleBlockColorTheme,
    handleBlockColorThemeTitle,
    isModal,
} = SettingSlice.actions;
export default SettingSlice.reducer;
