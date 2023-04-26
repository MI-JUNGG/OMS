import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./modules/store";
import Router from "./Router"; // Import the Router component from its module
import "./assets/fonts/Font.scss";

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <Router />
    </Provider>,
);
