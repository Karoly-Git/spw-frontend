import { testimonials } from '../assets/utils/testimonials';
import { categories } from '../assets/utils/categories';

import { FaLocationDot as LocationIcon } from "react-icons/fa6";

import MainSlider from '../components/sliders/MainSlider';
import ReviewSlider from '../components/sliders/ReviewSlider';
import CategoryBox from '../components/CategoryBox';
import Counters from '../components/Counters';
import PhotographyPackages from '../components/PhotographyPackages';

export default function Home() {

    const threeReviews = testimonials.slice(0, 3);

    return (
        <div className='page home-page'>
            <div className='content'>
                <MainSlider />

                <section>
                    <h2 className='slogan'>
                        <span>Today's moments are tomorrow's memories, worth treasuring for a lifetime.</span>
                    </h2>

                    <h1>Welcome to Sparkling Willow Photography!</h1>

                    <p className='info'>
                        Maternity, Newborn and Family photographer based in South London
                    </p>

                    <p className='info'>
                        <LocationIcon className='icon' />Cheam, Sutton and surrounding areas
                    </p>

                    <p className='info'>
                        If you are expecting a baby, congratulations! If you already have a little one, have a milestone
                        birthday
                        coming up, recently got engaged or would simply like to update your family pictures, then you have come
                        to
                        the right place!
                        I specialise in maternity, newborn, sitter, family, cake smash and engagement shoots.
                    </p>
                </section>

                <section>
                    <CategoryBox category={categories.maternity} flipped />
                    <CategoryBox category={categories.newborn} />
                </section>

                <section>
                    <ReviewSlider reviews={threeReviews} />
                </section>

                <section>
                    <CategoryBox category={categories.sitterSession} />
                    <CategoryBox category={categories.family} flipped />
                </section>

                <section>
                    <PhotographyPackages />
                </section>

                <section>
                    <CategoryBox category={categories.cakeSmash} flipped />
                    <CategoryBox category={categories.engagement} />
                </section>

                <section>
                    <Counters />
                </section>
            </div>
        </div>
    )
}
