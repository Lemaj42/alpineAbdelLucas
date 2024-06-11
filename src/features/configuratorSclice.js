import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    car: {
        "couleur": "bleu",
        "modele": "Alpine A110",
        "roue": "roue de con",
    },
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

        ChangeWheels: (state, action) => {
            let newState = {
                ...state,
                car: {
                    ...state.car,
                    roue: action.payload.truc
                }
            }


            return newState
        }
    }
})

export const { Test } = configSlice.actions

export default configSlice.reducer