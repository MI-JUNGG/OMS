// store.js

import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./card/";
import monthReducer from "./monthPicker";
import viewReducer from "./viewSelector";

const store = configureStore({
    reducer: { cardReducer, monthReducer, viewReducer },
});

export default store;
