import React from "react";
import { useDispatch, useSelector, } from "react-redux";
import { Test } from "../features/configuratorSclice";
import "./CSS/configurator.css"
import SelectColor from "../Components/configurators/Couleurs";
import SelectJante from "../Components/configurators/Jantes";
import SelectScellerie from "../Components/configurators/Scelleries";
import SelectVersion from "../Components/configurators/Version";


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
                <SelectVersion />
                <SelectColor />
                <SelectJante />
                <SelectScellerie />
            </section>
        </>
    )
};
export default Configurators