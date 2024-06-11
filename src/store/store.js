import { configureStore } from "@reduxjs/toolkit";
import configReducer from "../features/configuratorSclice";

export const store = configureStore({
    reducer: {
        CarConfig: configReducer
    },
})
