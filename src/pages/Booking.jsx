import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import DatePicker from "react-datepicker";
import { addMonths } from "date-fns";
import Select from "react-select";

import "react-datepicker/dist/react-datepicker.css";
import ActionButton from "../components/buttons/ActionButton";

// Options for the session type dropdown
const sessionOptions = [
    { value: "maternity", label: "Maternity" },
    { value: "newborn", label: "Newborn" },
    { value: "sitter-session", label: "Sitter Session" },
    { value: "family", label: "Family" },
    { value: "cake-smash", label: "Cake Smash" },
    { value: "engagement", label: "Engagement" },
];

export default function Booking() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: null,
        time: "",
        sessionType: sessionOptions[0].value,
        notes: "",
    });

    const [captchaToken, setCaptchaToken] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaToken) {
            alert("Please verify you're not a robot.");
            return;
        }
        console.log("Booking submitted:", formData, "reCAPTCHA token:", captchaToken);
        setSubmitted(true);
    };

    return (
        <div className="page form-page booking-page">
            <h1 className='pg-slogan'>
                Start Your Journey with a Simple Booking<br />
                <span className="pg-slogan-sub">Reserve your session and let’s create something beautiful together</span>
            </h1>

            <div className="page-content">
                <div className="image-box image-box-booking-page">
                    <div className="image-box-content"></div>
                </div>

                <div className="form-box">
                    {submitted ? (
                        <>
                            <h1>Book a Photoshoot</h1>
                            <p>Thank you! Your booking request has been received.</p>
                        </>
                    ) : (
                        <>
                            <h1>Book a Photoshoot</h1>
                            <p>Please complete the form below to request a booking.</p>

                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name">Name *</label>
                                <input
                                    className="input must-be-given"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />

                                <label htmlFor="email">Email *</label>
                                <input
                                    className="input must-be-given"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                                <label htmlFor="phone">Telephone *</label>
                                <input
                                    className="input must-be-given"
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />

                                <label htmlFor="date">Preferred Date *</label>
                                <DatePicker
                                    selected={formData.date}
                                    onChange={(date) =>
                                        setFormData((prev) => ({ ...prev, date }))
                                    }
                                    className="input must-be-given"
                                    placeholderText="Select a date"
                                    dateFormat="dd/MM/yyyy"
                                    minDate={new Date()}
                                    maxDate={addMonths(new Date(), 3)}
                                    id="date"
                                    name="date"
                                    required
                                />

                                <label htmlFor="time">Preferred Time *</label>
                                <DatePicker
                                    selected={formData.time}
                                    onChange={(time) =>
                                        setFormData((prev) => ({ ...prev, time }))
                                    }
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={60}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                    minTime={new Date().setHours(9, 0)}
                                    maxTime={new Date().setHours(18, 0)}
                                    className="input must-be-given"
                                    placeholderText="Select a time"
                                    id="time"
                                    name="time"
                                    required
                                />

                                <label htmlFor="sessionType">Session Type *</label>
                                <Select
                                    id="sessionType"
                                    name="sessionType"
                                    options={sessionOptions}
                                    value={sessionOptions.find(
                                        (option) => option.value === formData.sessionType
                                    )}
                                    onChange={(selectedOption) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            sessionType: selectedOption.value,
                                        }))
                                    }
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                />

                                <label htmlFor="notes">Additional Notes</label>
                                <textarea
                                    className="message"
                                    id="notes"
                                    name="notes"
                                    placeholder="Any special requests or notes?"
                                    value={formData.notes}
                                    onChange={handleChange}
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
                                    text="Submit Booking"
                                />
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
