import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../../img/main-slider/img1.jpg';
import img2 from '../../img/main-slider/img2.jpg';
import img3 from '../../img/main-slider/img3.jpg';
import img4 from '../../img/main-slider/img4.jpg';

import { FaAngleLeft as PreviousArrow } from "react-icons/fa6";
import { FaAngleRight as NextArrow } from "react-icons/fa6";

function MainSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 6000,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
    };

    return (
        <div className="main-slider">
            <Slider {...settings}>
                <div>
                    <img src={img1} alt="Slide 1" />
                </div>
                <div>
                    <img src={img2} alt="Slide 2" />
                </div>
                <div>
                    <img src={img3} alt="Slide 3" />
                </div>
                <div>
                    <img src={img4} alt="Slide 4" />
                </div>
            </Slider>
        </div>
    );
};

export default MainSlider;
