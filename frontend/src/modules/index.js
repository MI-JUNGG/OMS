import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./card";

const store = configureStore({
    reducer: cardReducer,
});

export default store;
