import { configureStore } from "@reduxjs/toolkit";
import { configSlice } from "../features/configuratorSclice";

export const store = configureStore({
    reducer: {
        car: configSlice
    },
})