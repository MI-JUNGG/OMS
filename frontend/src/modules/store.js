// store.js

import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./card";
import monthReducer from "./monthPicker";
import viewReducer from "./viewSelector";
import yearReducer from "./year";
import signReducer from "./sign";

const store = configureStore({
    reducer: {
        cardReducer,
        monthReducer,
        viewReducer,
        yearReducer,
        signReducer,
    },
});

export default store;
