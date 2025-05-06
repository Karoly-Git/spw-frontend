import { NavLink } from 'react-router-dom';

export default function MainNav() {
    const menuItems = [
        { name: 'Home', to: '/', isDisplayed: true },
        { name: 'About', to: '/about', isDisplayed: true },
        { name: 'Portfolio', to: '/portfolio', isDisplayed: true },
        { name: 'Testimonials', to: '/testimonials', isDisplayed: true },
        { name: 'FAQ', to: '/frequently-asked-questions', isDisplayed: false },
        { name: 'Booking', to: '/booking', isDisplayed: true },
        { name: 'Awards', to: '/awards', isDisplayed: true },
        { name: 'Contact', to: '/contact', isDisplayed: true }
    ];

    return (
        <nav className='main-nav'>
            <ul>
                {menuItems.map(({ name, to, isDisplayed }) =>
                    isDisplayed && (
                        <li key={to}>
                            <NavLink
                                to={to}
                                className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                            >
                                {name}
                            </NavLink>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
}
