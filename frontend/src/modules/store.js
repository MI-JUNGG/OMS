// store.js

import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./module/card";
import monthReducer from "./module/monthPicker";
import viewReducer from "./module/viewSelector";
import yearReducer from "./module/year";
import modalReducer from "./module/modal";
import signReducer from "./module/sign";
import userReducer from "./module/user";
import loginReducer from "./module/login";
import loginModalReducer from "./module/loginModal";
import dateReducer from "./module/date";
import endDateReducer from "./module/endDate";
import repeatEndReducer from "./module/repeatEnd";
import repeatStartReducer from "./module/repeatStart";
import limitReducer from "./module/Limit";

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
        endDateReducer,
        repeatStartReducer,
        repeatEndReducer,
        limitReducer,
    },
});

export default store;
