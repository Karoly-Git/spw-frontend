import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import SocialNav from './SocialNav';
import InfoNav from './InfoNav';

import { CiMenuBurger as HamburgerIcon } from "react-icons/ci";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";

export default function MobileNav() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const menuItems = [
        { name: 'Home', to: '/', isDisplayed: true },
        { name: 'About', to: '/about', isDisplayed: true },
        { name: 'Portfolio', to: '/portfolio', isDisplayed: true },
        { name: 'Testimonials', to: '/testimonials', isDisplayed: true },
        { name: 'Q&A', to: '/questions-and-answers', isDisplayed: true },
        { name: 'Awards', to: '/awards', isDisplayed: true },
        { name: 'Contact', to: '/contact', isDisplayed: true }
    ];


    const toggleMobileMenu = () => {
        setIsMobileNavOpen(prev => !prev)
    }


    return (
        <nav className={isMobileNavOpen ? "mobile-nav open-mobile-nav" : "mobile-nav"}>
            {!isMobileNavOpen ? (
                <button onClick={toggleMobileMenu} className="icon-button" aria-label="Open menu">
                    <HamburgerIcon className="icon hamburger-icon" />
                </button>
            ) : (
                <button onClick={toggleMobileMenu} className="icon-button" aria-label="Close menu">
                    <CloseIcon className="icon close-icon" />
                </button>
            )}

            <div className='mobile-nav-body'>
                <ul className='main-menu-list'>
                    {menuItems.map(({ name, to, isDisplayed }) =>
                        isDisplayed && (
                            <li key={to}>
                                <NavLink
                                    to={to}
                                    onClick={toggleMobileMenu}
                                    className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                                >
                                    {name}
                                </NavLink>
                            </li>
                        )
                    )}
                </ul>

                <InfoNav closeMobileMenu={toggleMobileMenu} />

                <SocialNav closeMobileMenu={toggleMobileMenu} />
            </div>
        </nav>
    );
}
