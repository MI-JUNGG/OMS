// store.js

import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./card/";
import divcounterReducer from "./divcounter";
import monthReducer from "./monthPicker";
import viewReducer from "./viewSelector";

const store = configureStore({
    reducer: { cardReducer, divcounterReducer, monthReducer, viewReducer },
});

export default store;
