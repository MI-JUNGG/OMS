// store.js

import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./card";
import monthReducer from "./monthPicker";
import viewReducer from "./viewSelector";
import yearReducer from "./year";
import signReducer from "./sign";
import userReducer from "./user";
import loginReducer from "./login";

const store = configureStore({
    reducer: {
        cardReducer,
        monthReducer,
        viewReducer,
        yearReducer,
        signReducer,
        userReducer,
        loginReducer,
    },
});

export default store;
