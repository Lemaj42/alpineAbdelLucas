import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Test } from "../features/configuratorSclice";
import "./CSS/configurator.css"
import { Button } from "react-bootstrap";
import SelectColor from "../Components/configurators/Couleurs";


function Configurators() {

    const dispatch = useDispatch()
    const voiture = useSelector(state => state.CarConfig)

    const loadState = () => {

        console.log(voiture)
        dispatch(Test())
    }


    return (
        <>
            <section id="configuration">
                <SelectColor />
            </section>
        </>
    )
};
export default Configurators