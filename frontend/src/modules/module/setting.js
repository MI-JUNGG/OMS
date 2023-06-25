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
        blockColorThemeTitle: "",
        isModal: 0,
        isCustomPicker: false,
        axiosBlockColor: 0,
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
            switch (action.payload) {
                case 1:
                    state.blockColorThemeTitle = "vivid";
                    break;
                case 2:
                    state.blockColorThemeTitle = "bright";
                    break;
                case 3:
                    state.blockColorThemeTitle = "soft";
                    break;
                case 4:
                    state.blockColorThemeTitle = "reddish";
                    break;
                case 5:
                    state.blockColorThemeTitle = "pale";
                    break;
                case 6:
                    state.blockColorThemeTitle = "custom";
                    break;
                default:
                    state.blockColorThemeTitle = "";
            }
        },
        handleBlockColorThemeTitle: (state, action) => {
            state.blockColorThemeTitle = action.payload;
        },
        isModal: (state, action) => {
            state.isModal = action.payload;
        },
        isCustomPicker: (state, action) => {
            state.isCustomPicker = action.payload;
        },
        handleaxiosBlockColor: (state, action) => {
            state.axiosBlockColor = action.payload;
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
    isCustomPicker,
    handleaxiosBlockColor,
} = SettingSlice.actions;
export default SettingSlice.reducer;
