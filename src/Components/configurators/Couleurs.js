import React from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

function SelectColor() {

    const voiture = useSelector(state => state.CarConfig.colors)

    const loadState = () => {

        console.log(voiture)
    }

    return (
        <>
            <section id="configuration">
                <Button onClick={loadState}> view color </Button>
            </section>
        </>
    )
};
export default SelectColor