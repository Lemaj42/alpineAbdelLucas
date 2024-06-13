import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    MyCar: {
        version: '',
        color: '',
        jantes: 'Standard', // valeur par défaut
        scellerie: '',
        equipement: [],
        accessoire: [],
        prix: 0
    },
    version: [
        { name: "Alpine Pure", price: 54700 },
        { name: "Alpine Legende", price: 58500, legende: true },
    ],
    colors: [
        { name: "Bleu Alpine", price: 1800 },
        { name: "Noir Profond", price: 840 },
        { name: "Blanc Opaque", price: 0 },
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
        SelectModel: (state, action) => {
            const { model } = action.payload;
            state.MyCar.version = model;
        },
        SelectColor: (state, action) => {
            const { color } = action.payload;
            state.MyCar.color = color;
        },
        SelectJante: (state, action) => {
            const { jantes } = action.payload;
            state.MyCar.jantes = jantes;
        },
        AddPrice: (state, action) => {
            console.log(action.payload.prix);
            console.log(state.MyCar.prix);
            let newState = {
                ...state,
                MyCar: {
                    ...state.MyCar,
                    prix: parseFloat(action.payload.prix) + parseFloat(state.MyCar.prix)
                }
            };
            return newState;
        },
        AddPriceColor: (state, action) => {
            const color = state.colors.find(
                (color) => color.name === action.payload.color
            );

            if (color && !isNaN(color.price) && !isNaN(state.MyCar.prix)) {
                let newState = {
                    ...state,
                    MyCar: {
                        ...state.MyCar,
                        prix: parseFloat(color.price) + parseFloat(state.MyCar.prix)
                    }
                };
                return newState;
            } else {
                // Gérer le cas où les prix ne sont pas des nombres valides
                console.error("Les prix ne sont pas valides");
                return state;
            }
        }

    }
});

export const { SelectModel, SelectColor, SelectJante, AddPrice, AddPriceColor } = configSlice.actions;

export default configSlice.reducer;