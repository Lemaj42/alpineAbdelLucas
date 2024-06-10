import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './CSS/header.css'

function Header() {

    return (
        <Carousel>
            <Carousel.Item>
                <img className="imgNav" src="/headerIMG/Alpine-A110-1.jpg" alt="photo1"/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="imgNav" src="/headerIMG/logoHeader.jpg" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="imgNav" src="/headerIMG/Alpine_A110_GT_-_34-AR.jpg" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Header