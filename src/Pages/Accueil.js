import React from "react";
import History from "./History";
import Header from "./header";
import videoSrc from '../assetes/videos/210611_A110_X_FelipePantone_Main_Edit_45s-1680x951px.mp4';


function Accueil() {
    return <>
        <section className="mt-5">
            <div className="d-flex justify-content-center">
                <Header />
            </div>
            <History />
            <section className="video-section">
                <div className="video-container">
                    <video autoPlay loop muted>
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
        </section>

    </>

}
export default Accueil