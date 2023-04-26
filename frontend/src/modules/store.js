// store.js

import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./card/";
import divcounterReducer from "./divcounter";
import monthReducer from "./monthPicker";
import viewReducer from "./viewSelector";
import yearReducer from "./year";

const store = configureStore({
    reducer: {
        cardReducer,
        divcounterReducer,
        monthReducer,
        viewReducer,
        yearReducer,
    },
});

export default store;
