import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { SlCalender as CalenderIcon } from "react-icons/sl";

export default function BookButton() {
    const [isScrollBtnVisible, setIsScrollBtnVisible] = useState(false);

    useEffect(() => {
        function updateButtonVisibility() {
            const priceBanner = document.getElementById("price-banner");
            const photographyPackages = document.querySelector(".photography-packeges");

            if (!priceBanner || !photographyPackages) return;

            const priceRect = priceBanner.getBoundingClientRect();
            const packagesRect = photographyPackages.getBoundingClientRect();

            const priceReachedBottom = priceRect.bottom <= window.innerHeight;
            const packagesReachedBottom = packagesRect.bottom <= window.innerHeight;

            if (priceReachedBottom && !packagesReachedBottom) {
                setIsScrollBtnVisible(true);
            } else {
                setIsScrollBtnVisible(false);
            }
        }

        window.addEventListener('scroll', updateButtonVisibility);
        updateButtonVisibility(); // run once on mount

        return () => {
            window.removeEventListener('scroll', updateButtonVisibility);
        };
    }, []);

    return (
        <NavLink to="/booking" title='Book a Session'>
            <div
                className='screen-side-btn book-btn'
                style={{ left: isScrollBtnVisible ? '1rem' : '-3rem' }}
            >
                <CalenderIcon className='icon' />
            </div>
        </NavLink>
    );
}
