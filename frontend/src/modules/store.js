// store.js

import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./card/";
import divcounterReducer from "./divcounter";

const store = configureStore({
    reducer: { cardReducer, divcounterReducer },
});

export default store;
