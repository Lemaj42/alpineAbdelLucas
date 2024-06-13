import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./CSS/configurator.css";
import { Button } from "react-bootstrap";
import SelectVersion from "../Components/configurators/Version";
import ColorChange from '../Components/configurators/Couleurs';


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
            <div className="CheckBar">
                <div className="icon-container">
                    {pageIndex >= 0 ? (
                        <i className="fa-regular fa-circle-check fa-xl" style={{ color: '#000000' }}></i>
                    ) : (
                        <i className="fa-regular fa-circle fa-xl" style={{ color: '#000000' }}></i>
                    )}
                    <div className="line"></div>
                    {pageIndex >= 1 ? (
                        <i className="fa-regular fa-circle-check fa-xl" style={{ color: '#000000' }}></i>
                    ) : (
                        <i className="fa-regular fa-circle fa-xl" style={{ color: '#000000' }}></i>
                    )}
                    <div className="line"></div>
                    {pageIndex === 2 ? (
                        <i className="fa-regular fa-circle-check fa-xl" style={{ color: '#000000' }}></i>
                    ) : (
                        <i className="fa-regular fa-circle fa-xl" style={{ color: '#000000' }}></i>
                    )}
                </div>
                <div className="text">
                    <p>Version</p>
                    <p>Couleur</p>
                    <p>Roues</p>
                </div>
            </div>
            <section id="configuration" className="">

                {pageIndex === 0 && <SelectVersion />}
                {pageIndex === 1 && <ColorChange />}


                <Button onClick={changePageMoins}>Passez à l'étape Précedente</Button>
                <Button onClick={changePagePlus}>Passez à l'étape suivante</Button>


            </section>
        </>
    );
}

export default Configurators;
