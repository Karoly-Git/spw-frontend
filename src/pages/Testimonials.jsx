import { testimonials } from '../assets/utils/testimonials';
import { trimToWords } from '../assets/utils/functions';

export default function Testimonials() {
    return (
        <div className='page testimonials-page'>
            <div className='content'>

                <h1>What My Clients Say</h1>

                <div className='grid'>
                    {
                        testimonials.map((review, index) => (
                            <div key={'review' + index} className="card">
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




