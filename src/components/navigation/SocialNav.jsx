import React from 'react';

import { LuFacebook as FacebookIcon } from "react-icons/lu";
import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";

export default function SocialNav({ closeMobileMenu }) {
    return (
        <nav className='social-nav'>
            <ul>
                <li>
                    <a className='social-link' href="https://www.facebook.com/Sparklingwillowphotography" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                        <FacebookIcon className='icon' />
                    </a>
                </li>
                <li>
                    <a className='social-link' href="https://www.instagram.com/sparklingwillowphotography" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                        <InstagramIcon className='icon' />
                    </a>
                </li>
                <li>
                    <a className='social-link' href="https://wa.me/+447703676264" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                        <WhatsappIcon className='icon' />
                    </a>
                </li>
            </ul>
        </nav>
    );
}
