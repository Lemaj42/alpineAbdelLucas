import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../assetes/images/pngwing.com_1.png";


function NavBar() {

    return (
        <>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <NavLink href="/home"></NavLink>
                    <a href="/">
                        <img src={Logo} alt="Logo" style={{ width: "300px" }} />
                    </a>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to={"/"} >Accueil</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to={"/Configurators"}>Configurators</NavLink>
                </Nav.Item>
            </Nav>
        </>
    );
}

export default NavBar