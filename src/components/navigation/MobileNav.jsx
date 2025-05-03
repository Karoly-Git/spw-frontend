import React from 'react';
import { NavLink } from 'react-router-dom';

import SocialNav from './SocialNav';
import SecondaryNav from './SecondaryNav';

export default function MobileNav({ isMobileNavOpen, isMobileNavDisplayed, closeMobileMenu }) {
    const mainMenuItems = [
        { name: 'Home', to: '/', isDisplayed: true },
        { name: 'Gallery', to: '/gallery', isDisplayed: true },
        { name: 'About', to: '/about', isDisplayed: true },
        { name: 'Reviews', to: '/reviews', isDisplayed: true },
        { name: 'Faq', to: '/faq', isDisplayed: true },
        { name: 'Awards', to: '/awards', isDisplayed: true },
        { name: 'Contact', to: '/contact', isDisplayed: true }
    ];

    return (
        <nav className={isMobileNavOpen && isMobileNavDisplayed ? 'mobile-nav mobile-nav-open' : 'mobile-nav'}>
            <ul>
                {mainMenuItems.map((item, itemIndex) =>
                    item.isDisplayed && <li key={itemIndex}>
                        <NavLink to={item.to} onClick={closeMobileMenu}> {/* Close menu on click */}
                            {item.name}
                        </NavLink>
                    </li>
                )}
            </ul>
            <SecondaryNav closeMobileMenu={closeMobileMenu} />
            <SocialNav closeMobileMenu={closeMobileMenu} />
        </nav>
    );
}
