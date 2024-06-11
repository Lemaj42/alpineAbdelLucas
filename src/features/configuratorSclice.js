import { createSlice } from "@reduxjs/toolkit";

const inititalState = {

    car: {
        "couleur": "bleu",
        "modele": "Alpine A110",
        "roue": "roue de con",
    }
} 

export const configSlice = createSlice({
    name: "config",
    inititalState,
    reducers: {

        Test: (state, action) => {
            console.log("ca fonctione")
        }
    }
}) 

export const { Test } = configSlice.actions

export default configSlice.reducer