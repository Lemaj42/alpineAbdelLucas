import React from "react";
import './CSS/Accueil.css';
import { NavLink, useLocation } from "react-router-dom";
import History from "./History";
import Header from "./header";
import videoSrc from '../assetes/videos/210611_A110_X_FelipePantone_Main_Edit_45s-1680x951px.mp4';
import Pure from '../assetes/images/configurateur/modele/selection/pure.png';
function Accueil() {
    const location = useLocation();

    return (
        <>
            <section>
                <div className="d-flex justify-content-center">
                    <Header />
                </div>
                <History />
                <section className="Modele">
                    <div className="container">
                        <div className="row text-center mt-5 mb-5">
                            <div className="col-md-12 hover08">
                                <h1 className="mt-2 mb-5">Configurez votre Alpine</h1>
                                <figure>
                                    {location.pathname !== "/Configurators" && (
                                        <NavLink to={"/Configurators"}>
                                            <img src={Pure} alt="legende" style={{ width: "600px" }} />
                                        </NavLink>
                                    )}
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="video-section">
                    <div className="video-container">
                        <video autoPlay loop muted style={{ width: "100%" }}>
                            <source src={videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section>
            </section>
        </>
    );
}
export default Accueil