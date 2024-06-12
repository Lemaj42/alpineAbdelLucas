import React from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

function SelectVersion() {
    const voiture = useSelector(state => state.CarConfig.version);

    const loadState = () => {
        console.log(voiture);
    };

    return (
        <section id="configuration">
            <div>
                <h2>Version</h2>
                <Button onClick={loadState}>View Version</Button>
            </div>
        </section>
    );
}

export default SelectVersion;
