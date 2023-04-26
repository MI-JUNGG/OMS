import { createSlice } from "@reduxjs/toolkit";

const ViewSlice = createSlice({
    name: "view",
    initialState: {
        select: "month",
        view: ["month", "week", "day"],
        element: ["/", "/weekly", "/daily"],
    },
    reducers: {
        view: (state, action) => {
            state.select = action.payload;
        },
    },
});

export const { view } = ViewSlice.actions;
export default ViewSlice.reducer;
