import { useState } from 'react';
import { testimonials } from '../assets/utils/testimonials';
import { trimToWords } from '../assets/utils/functions';
import ActionButton from '../components/buttons/ActionButton';
import Modal from '../components/Modal';

export default function Testimonials() {
    const [visibleCount, setVisibleCount] = useState(4);
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const [modalBgColor, setModalBgColor] = useState('#002f4b'); // default

    const showMore = () => {
        setVisibleCount((prevCount) => Math.min(prevCount + 4, testimonials.length));
    };

    const handleCardClick = (review, e) => {
        const bgColor = window.getComputedStyle(e.currentTarget).backgroundColor;
        setModalBgColor(bgColor);
        setSelectedTestimonial(review);
    };

    return (
        <div className='page testimonials-page'>
            <div className='content'>
                <h1>What My Clients Say</h1>

                <div className='grid'>
                    {testimonials.slice(0, visibleCount).map((review, index) => (
                        <div
                            key={'review' + index}
                            className="card"
                            onClick={(e) => handleCardClick(review, e)}
                        >
                            <blockquote>{trimToWords(review.quote, 20)}</blockquote>
                            <h3>{review.name}</h3>
                        </div>
                    ))}
                </div>

                {visibleCount < testimonials.length && (
                    <ActionButton
                        className="action-btn"
                        type=""
                        name=""
                        text="Show More"
                        onClick={showMore}
                    />
                )}

                <Modal
                    isOpen={selectedTestimonial !== null}
                    onClose={() => setSelectedTestimonial(null)}
                    quote={selectedTestimonial?.quote}
                    name={selectedTestimonial?.name}
                    bgColor={modalBgColor}
                />
            </div>
        </div>
    );
}
