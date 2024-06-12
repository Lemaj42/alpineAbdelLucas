import { createSlice } from "@reduxjs/toolkit";
import { version } from "react";

const initialState = {
    MyCar: {
        version: '',
        color: '',
        jantes: '',
        scellerie: '',
        equipement: [],
        accessoire: []
    },
    version: [
        { name: "Pure", price: 54700 },
        { name: "Legende", price: 58500, legende: true },
    ],
    colors: [
        { name: "Bleu Alpine", price: 1800 },
        { name: "Noir Profond", price: 840 },
        { name: "blanc opaque", price: 0 },
    ],
    jantes: [
        { name: "Standard", price: 0 },
        { name: "Serac", price: 1000 },
        { name: "Legende", price: 1000, legende: true },
    ],
    scelleries: [
        { name: "Sièges baquets en cuir noir et Dinamica", price: 0, legende: false },
        { name: "Sièges Confort en cuir noir perforé", price: 800, legende: false },
        { name: "Sièges Confort en cuir noir", price: 0, legende: true },
        { name: "Sièges Confort en cuir brun", price: 800, legende: true },
    ],
};

export const configSlice = createSlice({
    name: "CarConfig",
    initialState,
    reducers: {

        Test: (state) => {
            let newState = { ...state }
            console.log("ca fonctione")
            return newState
        },

        SelectModel: (state, action) => {
             let newState = { ...state, Mycar: { ...state.MyCar, version: action.payload.model} }
             return newState
            }
    }
})

export const { Test, SelectModel } = configSlice.actions

export default configSlice.reducer