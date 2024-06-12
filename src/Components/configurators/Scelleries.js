import React from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

function SelectScellerie() {

    const voiture = useSelector(state => state.CarConfig.scelleries)

    const loadState = () => {

        console.log(voiture)
    }

    return (
        <>
            <section id="configuration">
                <Button onClick={loadState}> view scelleries </Button>
            </section>
        </>
    )
};
export default SelectScellerie