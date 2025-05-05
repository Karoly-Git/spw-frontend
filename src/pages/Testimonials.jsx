import { useState } from 'react';
import { testimonials } from '../assets/utils/testimonials';
import { trimToWords } from '../assets/utils/functions';

import ActionButton from '../components/buttons/ActionButton';

export default function Testimonials() {
    const [visibleCount, setVisibleCount] = useState(4);

    const showMore = () => {
        setVisibleCount((prevCount) => Math.min(prevCount + 4, testimonials.length));
    };

    return (
        <div className='page testimonials-page'>
            <div className='content'>

                <h1>What My Clients Say</h1>

                <div className='grid'>
                    {testimonials.slice(0, visibleCount).map((review, index) => (
                        <div key={'review' + index} className="card">
                            <blockquote>{trimToWords(review.quote, 20)}</blockquote>
                            <h3>{review.name}</h3>
                        </div>
                    ))}
                </div>

                {visibleCount < testimonials.length && (
                    <ActionButton
                        className="action-btn btn_submit js-submit-btn"
                        type=""
                        name=""
                        text="Show More"
                        onClick={showMore}
                    />

                )}
            </div>
        </div>
    );
};