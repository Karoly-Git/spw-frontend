import { NavLink } from 'react-router-dom';

import SocialNav from './SocialNav';
import InfoNav from './InfoNav';

export default function MobileNav({ isMobileNavOpen, isMobileNavDisplayed, closeMobileMenu }) {
    const menuItems = [
        { name: 'Home', to: '/', isDisplayed: true },
        { name: 'Gallery', to: '/gallery', isDisplayed: true },
        { name: 'About', to: '/about', isDisplayed: true },
        { name: 'Reviews', to: '/reviews', isDisplayed: true },
        { name: 'Q&A', to: '/questions-and-answers', isDisplayed: true },
        { name: 'Awards', to: '/awards', isDisplayed: true },
        { name: 'Contact', to: '/contact', isDisplayed: true }
    ];

    return (
        <nav className={`mobile-nav ${isMobileNavOpen && isMobileNavDisplayed ? ' mobile-nav-open' : ''}`}>
            <ul>
                {menuItems.map(({ name, to, isDisplayed }) =>
                    isDisplayed && (
                        <li key={to}>
                            <NavLink
                                to={to}
                                onClick={closeMobileMenu}
                                className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                            >
                                {name}
                            </NavLink>
                        </li>
                    )
                )}
            </ul>
            <InfoNav closeMobileMenu={closeMobileMenu} />
            <SocialNav closeMobileMenu={closeMobileMenu} />
        </nav>
    );
}
