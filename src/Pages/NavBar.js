import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assetes/images/pngwing.com_1.png";
import "./CSS/NavBar.css";

function NavBar() {
    const location = useLocation();

    return (

        <Nav className="navbar" variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <NavLink to="/"><img src={Logo} alt="Logo" style={{ width: "300px" }} /></NavLink>

            </Nav.Item>
            <Nav.Item>
                <NavLink className="ColorText" to={"/"}>Accueil</NavLink>
            </Nav.Item>
            <Nav.Item>
                {location.pathname !== "/Configurators" && (
                    <NavLink to={"/Configurators"} className="ColorText">Configurators</NavLink>
                )}
            </Nav.Item>
        </Nav>

    );
}

export default NavBar;
