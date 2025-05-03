import { NavLink } from 'react-router-dom';

export default function BottomNav() {
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
