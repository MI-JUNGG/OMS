// store.js

import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./module/card";
import monthReducer from "./monthPicker";
import viewReducer from "./viewSelector";
import yearReducer from "./year";
import modalReducer from "./modal";
import signReducer from "./sign";
import userReducer from "./user";
import loginReducer from "./login";
import loginModalReducer from "./loginModal";
import dateReducer from "./module/date";

const store = configureStore({
    reducer: {
        cardReducer,
        monthReducer,
        viewReducer,
        yearReducer,
        yearReducer,
        modalReducer,
        signReducer,
        userReducer,
        loginReducer,
        loginModalReducer,
        dateReducer,
    },
});

export default store;
