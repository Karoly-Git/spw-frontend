import { NavLink } from 'react-router-dom';

import logo from '../assets/images/logo_white.png';

import MainNav from '../components/navigations/MainNav';
import MobileNav from '../components/navigations/MobileNav';

export default function Header() {
    return (
        <header>
            <NavLink to='/'>
                <img src={logo} className='logo' alt='Sparkling Willow Photography Logo'></img>
            </NavLink>

            <MainNav />

            <MobileNav />
        </header>
    )
}
