import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: {
        eMail: "",
        name: "",
        nickName: "",
        password: "",
        confirmPassword: "",
    },
    reducers: {
        eMail: (state, action) => {
            state.eMail = action.payload;
        },
        name: (state, action) => {
            state.name = action.payload;
        },
        nickName: (state, action) => {
            state.nickName = action.payload;
        },
        password: (state, action) => {
            state.password = action.payload;
        },
        confirmPassword: (state, action) => {
            state.confirmPassword = action.payload;
        },
    },
});

export const { name, nickName, password, eMail, confirmPassword } =
    UserSlice.actions;
export default UserSlice.reducer;
