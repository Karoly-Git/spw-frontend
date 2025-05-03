import React from 'react';

import { reviews } from '../../data/reviews';
import { categories } from '../../data/categories';

import { FaLocationDot as LocationIcon } from "react-icons/fa6";

import MainSlider from '../sliders/MainSlider';
import ReviewSlider from '../sliders/ReviewSlider';
import CategoryBox from '../CategoryBox';
import Counters from '../Counters';
import PhotographyPackages from '../PhotographyPackages ';

export default function Home() {

    const threeReviews = reviews.slice(0, 3);

    return (
        <div className='page home-page'>
            <div className='content'>
                <MainSlider />


                <h2 className='slogan'>
                    <span>Today's moments are tomorrow's memories, worth treasuring for a lifetime.</span>
                </h2>

                <h1>Welcome to Sparkling Willow Photography!</h1>

                <p className='info'>Maternity, newborn and family photographer based in South London</p>
                <p className='info'><LocationIcon className='icon' />Cheam, Sutton and surrounding areas</p>

                <p className='info'>
                    If you are expecting a baby, congratulations! If you already have a little one, have a milestone
                    birthday
                    coming up, recently got engaged or would simply like to update your family pictures, then you have come
                    to
                    the right place!
                    I specialise in maternity, newborn, sitter, family, cake smash and engagement shoots.
                </p>

                <CategoryBox category={categories.maternity} flipped />
                <CategoryBox category={categories.newborn} />

                <ReviewSlider reviews={threeReviews} />

                <CategoryBox category={categories.sitterSession} />
                <CategoryBox category={categories.family} flipped />

                <PhotographyPackages />

                <CategoryBox category={categories.cakeSmash} flipped />
                <CategoryBox category={categories.engagement} />

                <Counters />
            </div>
        </div>
    )
}
