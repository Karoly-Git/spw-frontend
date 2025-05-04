import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaAngleLeft as PreviousArrow } from "react-icons/fa6";
import { FaAngleRight as NextArrow } from "react-icons/fa6";

import { trimToWords } from '../../assets/utils/functions';

export default function ReviewSlider({ reviews }) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 5000,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
    };

    return (
        <div className='review-slider' >
            <div className='slider-container'>
                <Slider {...settings}>
                    {reviews.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <blockquote>{trimToWords(testimonial.quote, 10)}</blockquote>
                            <h3>{testimonial.name}</h3>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};




