import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Test } from "../features/configuratorSclice";
import "./CSS/configurator.css"

function Configurators() {

    const dispatch = useDispatch()
    const voiture = useSelector(state => state.config)
    
    console.log(voiture)

    dispatch(Test())

    return (
        <>
        <section id="configuration">
            
        </section>

        </>
    )
};
export default Configurators