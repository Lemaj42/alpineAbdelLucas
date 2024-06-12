import React from "react";
import { useDispatch, useSelector, } from "react-redux";
import { Test } from "../features/configuratorSclice";
import "./CSS/configurator.css"
import { Button } from "react-bootstrap";

import SelectVersion from "../Components/configurators/Version";


function Configurators() {

    const dispatch = useDispatch()
    const voiture = useSelector(state => state.CarConfig.MyCar)
    console.log(voiture)

    const loadState = () => {

        dispatch(Test())
    }


    return (
        <>
            <section id="configuration">
                <SelectVersion />
            </section>
        </>
    )
};
export default Configurators