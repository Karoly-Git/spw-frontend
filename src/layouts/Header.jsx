import { NavLink } from 'react-router-dom';

import { CiMenuBurger as HamburgerIcon } from "react-icons/ci";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";

import MainNav from '../components/navigation/MainNav';
import logo from '../assets/images/logo_white.png';

export default function Header({ isMobileNavOpen, toggleHamburger, toggleMenu }) {
    const handleToggle = () => {
        toggleHamburger();
        toggleMenu();
    };

    return (
        <header>
            <NavLink to='/'>
                <img src={logo} className='logo' alt='Sparkling Willow Photography Logo'></img>
            </NavLink>

            <MainNav />

            {!isMobileNavOpen ? (
                <button onClick={handleToggle} className="icon-button" aria-label="Open menu">
                    <HamburgerIcon className="icon hamburger-icon" />
                </button>
            ) : (
                <button onClick={handleToggle} className="icon-button" aria-label="Close menu">
                    <CloseIcon className="icon close-icon" />
                </button>
            )}
        </header>
    )
}
