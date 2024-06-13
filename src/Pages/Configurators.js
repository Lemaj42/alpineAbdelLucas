import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./CSS/configurator.css";
import { Button } from "react-bootstrap";
import SelectVersion from "../Components/configurators/Version";
import ColorChange from '../Components/configurators/Couleurs';
import Jantes from "../Components/configurators/Jantes";


function Configurators() {
    const voiture = useSelector(state => state.CarConfig.MyCar);

    const [pageIndex, setPageIndex] = useState(0);


    const changePagePlus = () => {
        setPageIndex(prevIndex => prevIndex + 1);
        console.log(voiture);
        console.log(pageIndex + 1);
    };

    const changePageMoins = () => {
        setPageIndex(prevIndex => prevIndex - 1);
        console.log(voiture);
        console.log(pageIndex - 1);
    };

    return (
        <>
            <section id="configuration">
                {pageIndex === 0 && <SelectVersion />}
                {pageIndex === 1 && <ColorChange />}
                {pageIndex === 2 && <Jantes />}
                <div className="d-flex justify-content-around">
                    <Button onClick={changePageMoins} style={{ backgroundColor: "#005A9C" }}>Passez à l'étape Précédente</Button>
                    <Button onClick={changePagePlus} style={{ backgroundColor: "#005A9C" }}>Passez à l'étape suivante</Button>
                </div>
            </section>
        </>
    );
}

export default Configurators;
