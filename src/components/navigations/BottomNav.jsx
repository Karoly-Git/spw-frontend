import { NavLink } from 'react-router-dom';

export default function BottomNav() {
    const menuItems = [
        { name: 'Home', to: '/', isDisplayed: false },
        { name: 'About', to: '/about', isDisplayed: false },
        { name: 'Portfolio', to: '/portfolio', isDisplayed: true },
        { name: 'Testimonials', to: '/testimonials', isDisplayed: true },
        { name: 'FAQ', to: '/frequently-asked-questions', isDisplayed: false },
        { name: 'Awards', to: '/awards', isDisplayed: false },
        { name: 'Contact', to: '/contact', isDisplayed: false }
    ];

    return (
        <nav className='bottom-nav'>
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
