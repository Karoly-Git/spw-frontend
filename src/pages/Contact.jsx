import { useState } from "react";
import { FaLocationDot as LocationIcon } from "react-icons/fa6";
import { FaMobileAlt as MobileIcon } from "react-icons/fa";
import { MdOutlineMail as EmailIcon } from "react-icons/md";
import ReCAPTCHA from "react-google-recaptcha";

import ActionButton from "../components/buttons/ActionButton";

export default function Contact() {
    const [captchaToken, setCaptchaToken] = useState(null);
    const siteKey = "6LdB4zErAAAAAIGsGkAvQl75wc7gPCHfCB1c4O-2";

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!captchaToken) {
            alert("Please verify that you are not a robot.");
            return;
        }

        // TODO: Send form data along with captchaToken to backend/email service
        console.log("Form submitted with token:", captchaToken);
    };

    return (
        <div className='page form-page contact-page'>
            <h1 className='pg-slogan'>
                Every Great Story Starts With a Message<br />
                <span className="pg-slogan-sub">Reach out — I’d love to hear from you</span>
            </h1>

            <div className='page-content'>
                <div className='image-box image-box-contact-page'>
                    <address className='image-box-content'>
                        <div className='detail'>
                            <LocationIcon className='icon' />
                            Cheam, Sutton and surrounding areas
                        </div>
                        <div className='detail'>
                            <MobileIcon className='icon' />
                            <a href="tel:+447703676264">+44 7703 676264</a>
                        </div>

                        {false && <div className='detail'>
                            <EmailIcon className='icon' />
                            <a href="mailto:nicky@sparklingwillowphotography.co.uk">
                                nicky@sparklingwillowphotography.co.uk
                            </a>
                        </div>}

                    </address>
                </div>

                <div className='form-box'>
                    <h1>Contact Me</h1>
                    <p>
                        If you have any questions or would like to book or discuss your next photoshoot,
                        please send me a message.
                    </p>

                    <form onSubmit={handleSubmit}>
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

                        <label className="captcha-label">Please verify you're human *</label>
                        <ReCAPTCHA
                            sitekey={siteKey}
                            onChange={handleCaptchaChange}
                            className="recaptcha"
                        />

                        <ActionButton
                            className="action-btn btn_submit js-submit-btn"
                            type="submit"
                            name="submit"
                            text="Get in touch"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
