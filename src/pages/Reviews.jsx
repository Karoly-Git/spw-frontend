import React from 'react';

import { reviews } from '../../data/reviews';
import { trimToWords } from '../../data/functions';

export default function Reviews() {
    return (
        <div className='page reviews-page'>
            <div className='content'>

                <h1>What My Clients Say</h1>

                <div className='review-grid'>
                    {
                        reviews.map((review, index) => (
                            <div key={'review' + index} class="review-card">
                                <blockquote>{trimToWords(review.quote, 20)}</blockquote>
                                <h3>{review.name}</h3>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};




