import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        nickName: "",
        password: "",
        eMail: "",
    },
    reducers: {
        name: (state, action) => {
            state.name = action.payload;
        },
        nickName: (state, action) => {
            state.nickName = action.payload;
        },
        password: (state, action) => {
            state.password = action.payload;
        },
        eMail: (state, action) => {
            state.eMail = action.payload;
        },
    },
});

export const { name, nickName, password, eMail } = UserSlice.actions;
export default UserSlice.reducer;
