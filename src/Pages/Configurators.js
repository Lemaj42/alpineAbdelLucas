import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Test } from "../features/configuratorSclice";
import "./CSS/configurator.css"
import { Button } from "react-bootstrap";

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

            <img
                src=""
                class="img-fluid rounded-top"
                alt=""
            />

                  
            <Button onClick={loadState}> click to see </Button>
        </section>

        </>
    )
};
export default Configurators