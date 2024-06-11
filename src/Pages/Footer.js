import React from "react";
import './CSS/Footer.css';
import Logo from '../assetes/images/Logo2.jpg'
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <section>
            <footer className="BgSection1 bg-body-tertiary text-center">
                <div className="container p-4">

                    <section className="LogoFooter mb-5">
                        <h1>
                            UNE MARQUE AVEC DES VALEURS
                        </h1>
                    </section>
                    <section>
                        <div className="row text-white">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">SERVICE CLIENT</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a className="text-white" target="_blank" rel="noreferrer" href="https://www.alpinecars.fr/contactez-nous.html">Contacter Alpine</a>
                                    </li>
                                    <li>
                                        <a className="text-white" target="_blank" rel="noreferrer" href="https://www.alpinecars.fr/product-update.html">Campagnes de rappel</a>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">AUTRES SITES</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a className="text-white" target="_blank" rel="noreferrer" href="https://www.alpineelfcupseries.com/">Alpine Elf Cup Series</a>
                                    </li>
                                    <li>
                                        <a className="text-white" target="_blank" rel="noreferrer" href="https://boutique.alpinecars.com/">Boutique</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">LIENS DIRECTS</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a className="text-white" target="_blank" rel="noreferrer" href="http://localhost:3001/Configurators">Configurators</a>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Links</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a className="text1" target="_blank" rel="noreferrer" href="https://fr-fr.facebook.com/alpinesportscars/">Facebook</a>
                                    </li>
                                    <li>
                                        <a className="text3" target="_blank" rel="noreferrer" href="https://x.com/AlpineF1Team?s=20&t=HaDDdmh5jRqowXRevmR_aQ">X</a>
                                    </li>
                                    <li>
                                        <a className="text3" target="_blank" rel="noreferrer" href="https://www.instagram.com/alpinecars/?hl=fr">Instagram</a>
                                    </li>
                                    <li>
                                        <a className="text2" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCzH4Iwlm8kI09wXbgHvFfIg">Youtube</a>
                                    </li>
                                </ul>
                            </div>
                            <div className=" LogoFooter">
                                <NavLink to="/"><img src={Logo} alt="Logo" style={{ width: "200px" }} /></NavLink>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </section>
    );
}

export default Footer;
