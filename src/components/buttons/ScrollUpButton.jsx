import { useState, useEffect } from 'react';
import { FaArrowUp as ArrowIcon } from "react-icons/fa";

export default function ScrollUpButton() {
    const showUpAt = 500;
    const [isScrollBtnVisible, setIsScrollBtnVisible] = useState(false);

    useEffect(() => {
        function getScrollPosition() {
            window.scrollY > showUpAt ? setIsScrollBtnVisible(true) : setIsScrollBtnVisible(false);
        }

        window.addEventListener('scroll', getScrollPosition);

        return () => {
            window.removeEventListener('scroll', getScrollPosition);
        }
    }, [])


    function scrollToTop() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <div
            className='screen-side-btn scroll-up-btn'
            onClick={scrollToTop}
            style={{ right: isScrollBtnVisible ? '0.5rem' : '-3rem' }}
        >
            <ArrowIcon className='icon' />
        </div>
    )
}
