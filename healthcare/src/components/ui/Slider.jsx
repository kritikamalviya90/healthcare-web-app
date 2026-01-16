import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";

const HeroSlider = () => {
    return (
        <Carousel fade controls indicators className="hero-slider">
            {/* Slide 1 */}
            <Carousel.Item>
                <div
                    className="slider-bg"
                    style={{ backgroundImage: `url(${slide1})` }}
                />
                <Carousel.Caption className="slider-content">
                    <h1>
                        We Are Always Open For <br />
                        <span>Your Kids' Healthcare</span>
                    </h1>

                    <div className="slider-buttons">
                        <Link to="/book">
                            <Button className="btn-main">Book A Visit ↗</Button>
                        </Link>

                        <Link to="/about">
                            <Button className="btn-outline">Learn More ↗</Button>
                        </Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
                <div
                    className="slider-bg"
                    style={{ backgroundImage: `url(${slide2})` }}
                />
                <Carousel.Caption className="slider-content">
                    <h1>
                        Trusted Medical Care <br />
                        <span>For Your Family</span>
                    </h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default HeroSlider;
