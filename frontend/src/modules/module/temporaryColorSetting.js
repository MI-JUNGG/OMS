import { createSlice } from "@reduxjs/toolkit";

const temporaryColorSetting = createSlice({
    name: "temporaryColorSetting",
    initialState: {
        temporaryMainColor: "",
        temporaryBackgroundColor: "",
        temporaryTextStyle: "",
        temporaryTextColor: "",
        temporaryBlockColor: {
            mainColor: "",
            bgColor: "",
        },
        temporaryBlockColorTheme: "",
        temporaryBlockColorThemeTitle: "",
    },
    reducers: {
        temporaryMainColor: (state, action) => {
            state.temporaryMainColor = action.payload;
        },
        temporaryBackgroundColor: (state, action) => {
            state.temporaryBackgroundColor = action.payload;
        },
        temporaryTextStyle: (state, action) => {
            state.temporaryTextStyle = action.payload;
        },
        temporaryTextColor: (state, action) => {
            state.temporaryTextColor = action.payload;
        },
        temporaryBlockMainColor: (state, action) => {
            state.temporaryBlockColor.mainColor = action.payload;
        },
        temporaryBlockBGColor: (state, action) => {
            state.temporaryBlockColor.bgColor = action.payload;
        },
        temporaryBlockColorTheme: (state, action) => {
            state.temporaryBlockColorTheme = action.payload;
            switch (action.payload) {
                case 1:
                    state.temporaryBlockColorThemeTitle = "vivid";
                    break;
                case 2:
                    state.temporaryBlockColorThemeTitle = "bright";
                    break;
                case 3:
                    state.temporaryBlockColorThemeTitle = "soft";
                    break;
                case 4:
                    state.temporaryBlockColorThemeTitle = "reddish";
                    break;
                case 5:
                    state.temporaryBlockColorThemeTitle = "pale";
                    break;
                case 6:
                    state.temporaryBlockColorThemeTitle = "custom";
                    break;
                default:
                    state.temporaryBlockColorThemeTitle = "";
            }
        },
        temporaryBlockColorThemeTitle: (state, action) => {
            state.temporaryBlockColorThemeTitle = action.payload;
        },
    },
});

export const {
    temporaryMainColor,
    temporaryBackgroundColor,
    temporaryTextStyle,
    temporaryTextColor,
    temporaryBlockMainColor,
    temporaryBlockBGColor,
    temporaryBlockColorTheme,
    temporaryBlockColorThemeTitle,
} = temporaryColorSetting.actions;
export default temporaryColorSetting.reducer;
