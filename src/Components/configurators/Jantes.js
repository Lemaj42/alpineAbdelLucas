import React from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

function SelectJante() {

    const voiture = useSelector(state => state.CarConfig.jantes)

    const loadState = () => {

        console.log(voiture)
    }

    return (
        <>
            <section id="configuration">
                <Button onClick={loadState}> view jante </Button>
            </section>
        </>
    )
};
export default SelectJante