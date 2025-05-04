import React from 'react';
import { NavLink } from 'react-router-dom';
import Question from '../Question';

import { FaMobileAlt as MobileIcon } from "react-icons/fa";
import { MdOutlineMail as EmailIcon } from "react-icons/md";
import { GrFormEdit as WriteIcon } from "react-icons/gr";

export default function QuestionsAndAnswers() {
    return (
        <div className='page faq-page document'>
            <div className='content'>
                <div className='media-container'>
                </div>

                <div className='question-container'>
                    <h1>Frequently Asked Questions</h1>
                    <Question />
                </div>

            </div>

            <div className='contact-help-box'>
                <h2>Didn't find what you are looking for?</h2>
                <p>If you couldn't find the information you're looking for, feel free to contact me directly. I'm here to help!</p>
                <div className='contact-details'>
                    <div className='detail'>
                        <a href="tel:+447703676264" rel="noopener noreferrer">
                            <MobileIcon className='icon mobile-icon' /> <span>+44 7703 676264</span>
                        </a>
                    </div>
                    <div className='detail'>
                        <a href="mailto:nicky@sparklingwillowphotography.co.uk" rel="noopener noreferrer">
                            <EmailIcon className='icon email-icon' /> <span>nicky@sparklingwillowphotography.co.uk</span>
                        </a>
                    </div>
                    <div className='detail'>
                        <NavLink to='/contact'>
                            <WriteIcon className='icon write-icon' /> <span>Contact form</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
