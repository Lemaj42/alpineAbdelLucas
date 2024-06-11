import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './CSS/header.css'
import AlpineA110 from '../assetes/images/headerIMG/Alpine-A110-1.jpg';
import logoHeader from '../assetes/images/headerIMG/logoHeader.jpg';
import A110GT from '../assetes/images/headerIMG/Alpine_A110_GT_-_34-AR.jpg';

function Header() {

    return (
        <Carousel>
            <Carousel.Item>
                <img className="imgNav" src={AlpineA110} alt="AlpineA110" />
                <Carousel.Caption>
                    <h3>Alpine A110</h3>
                    <p>L'esprit originel</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="imgNav" src={logoHeader} alt="logoHeader" />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="imgNav" src={A110GT} alt="A110GT" />
                <Carousel.Caption>
                    <h3>Alpine A110 GT</h3>
                    <p>
                        Le grand toursme Alpine
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Header