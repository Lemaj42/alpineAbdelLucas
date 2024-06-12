import React from "react";
import { useDispatch, useSelector, } from "react-redux";
import "./CSS/configurator.css"

import SelectVersion from "../Components/configurators/Version";



function Configurators() {

    const dispatch = useDispatch()
    const voiture = useSelector(state => state.CarConfig.MyCar)




    return (
        <>
            <section id="configuration">
                <SelectVersion />

            </section>
        </>
    )
};
export default Configurators