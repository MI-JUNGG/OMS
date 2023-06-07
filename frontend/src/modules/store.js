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
import settingReducer from "./module/setting";
import repeatEndReducer from "./module/repeatEnd";
import repeatStartReducer from "./module/repeatStart";

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
        settingReducer,
        repeatStartReducer,
        repeatEndReducer,
    },
});

export default store;
