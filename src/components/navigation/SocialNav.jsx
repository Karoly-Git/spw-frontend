import { LuFacebook as FacebookIcon } from "react-icons/lu";
import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";

export default function SocialNav({ closeMobileMenu }) {
    const menuItems = [
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/Sparklingwillowphotography',
            Icon: FacebookIcon,
            isDisplayed: true
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/sparklingwillowphotography',
            Icon: InstagramIcon,
            isDisplayed: true
        },
        {
            name: 'WhatsApp',
            href: 'https://wa.me/447703676264',
            Icon: WhatsappIcon,
            isDisplayed: true
        }
    ];

    return (
        <nav className='social-nav'>
            <ul>
                {menuItems.map(({ name, href, Icon, isDisplayed }) =>
                    isDisplayed && (
                        <li key={name}>
                            <a
                                className='social-link'
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={name}
                                onClick={closeMobileMenu}
                            >
                                <Icon className='icon' />
                            </a>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
}
