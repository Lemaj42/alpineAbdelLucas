import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./CSS/configurator.css";
import { Button } from "react-bootstrap";
import SelectVersion from "../Components/configurators/Version";
import SelectColor from '../Components/configurators/Couleurs';

function Configurators() {
    const voiture = useSelector(state => state.CarConfig.MyCar);
    console.log(voiture);

    const [pageIndex, setPageIndex] = useState(0);

    const changePage = () => {
        setPageIndex(prevIndex => prevIndex + 1);
        console.log(pageIndex + 1);
    };

    return (
        <>
            <section id="configuration">
                {pageIndex === 0 && <SelectVersion />}
                {pageIndex === 1 && <SelectColor />}
                
                <Button onClick={changePage}>Passez à l'étape suivante</Button>
            </section>
        </>
    );
}

export default Configurators;
