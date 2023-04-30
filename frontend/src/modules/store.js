// store.js

import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./card";
import monthReducer from "./monthPicker";
import viewReducer from "./viewSelector";
import yearReducer from "./year";
import modalReducer from "./modal";
import signReducer from "./sign";

const store = configureStore({
    reducer: {
        cardReducer,
        monthReducer,
        viewReducer,
        yearReducer,
        yearReducer,
        modalReducer,
        signReducer,
    },
});

export default store;