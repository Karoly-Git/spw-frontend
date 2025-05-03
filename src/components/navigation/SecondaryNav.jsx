import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SecondaryNav({ closeMobileMenu }) {
    return (
        <nav className='secondary-nav'>
            <ul>
                <li>
                    <NavLink to="/faq" onClick={closeMobileMenu}> Faq </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={closeMobileMenu}> Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/privacy-policy" onClick={closeMobileMenu}> Policy </NavLink>
                </li>
            </ul>
        </nav>
    );
}
