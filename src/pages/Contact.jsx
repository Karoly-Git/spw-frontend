import React from 'react';

import { FaLocationDot as LocationIcon } from "react-icons/fa6";
import { FaMobileAlt as MobileIcon } from "react-icons/fa";
import { MdOutlineMail as EmailIcon } from "react-icons/md";

export default function Contact() {
    return (
        <div className='page contact-page'>
            <div className='page-content'>

                <div className='contact-box'>
                    <div className='contact-box-content'>
                        <div className='detail'>
                            <LocationIcon className='icon' />
                            Cheam, Sutton and surrounding areas
                        </div>
                        <div className='detail'>
                            <MobileIcon className='icon' />
                            <a href="tel:+447703676264" rel="noopener noreferrer">+44 7703 676264</a>
                        </div>
                        <div className='detail'>
                            <EmailIcon className='icon' />
                            <a href="mailto:nicky@sparklingwillowphotography.co.uk" rel="noopener noreferrer">nicky@sparklingwillowphotography.co.uk</a>
                        </div>
                    </div>
                </div>

                <div className='form-box'>
                    <h1>Contact Me</h1>

                    <p>
                        If you have any questions or would like to book or discuss your next photoshoot,
                        please send me a message
                        <i className="smile fa-regular fa-face-smile"></i>.
                    </p>

                    <form >
                        <label htmlFor="name">Name *</label>
                        <input
                            className="input must-be-given"
                            type="text"
                            placeholder="Enter your name"
                            id="name"
                            name="sender_name"
                            required
                        />

                        <label htmlFor="email">Email *</label>
                        <input
                            className="input must-be-given"
                            type="email"
                            placeholder="Enter your email"
                            id="email"
                            name="sender_email"
                            required
                        />

                        <label htmlFor="tel">Telephone</label>
                        <input
                            className="input"
                            type="tel"
                            placeholder="Enter your phone number"
                            id="tel"
                            name="sender_phone"
                        />

                        <label htmlFor="message">How can I help? *</label>
                        <textarea
                            className="message must-be-given"
                            placeholder="Type your message here"
                            id="message"
                            name="message"
                            required
                        ></textarea>


                        <button className="btn_submit js-submit-btn" type="submit" name="submit">
                            Get in touch
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
