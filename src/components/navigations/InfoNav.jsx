import { NavLink } from 'react-router-dom';

export default function InfoNav({ closeMobileMenu }) {
    const menuItems = [
        { name: 'FAQ', to: '/frequently-asked-questions', isDisplayed: true },
        { name: 'Contact', to: '/contact', isDisplayed: true },
        { name: 'Privacy Policy', to: '/privacy-policy', isDisplayed: true }
    ];

    return (
        <nav className='info-nav'>
            <ul>
                {menuItems.map(item =>
                    item.isDisplayed && (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                onClick={closeMobileMenu}
                                className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
}
