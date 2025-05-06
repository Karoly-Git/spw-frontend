import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import ActionButton from "../components/buttons/ActionButton"; // ✅ Match Contact page

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        sessionType: "portrait",
        notes: "",
    });
    const [captchaToken, setCaptchaToken] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const siteKey = "YOUR_RECAPTCHA_SITE_KEY_HERE"; // Replace with your actual site key

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
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

        // Send `formData` and `captchaToken` to backend/email service
        console.log("Booking submitted:", formData, "reCAPTCHA token:", captchaToken);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="page booking-page">
                <div className="page-content">
                    <div className="form-box">
                        <h1>Book a Photoshoot</h1>
                        <p>Thank you! Your booking request has been received.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="page booking-page">
            <div className="page-content">
                <div className="form-box">
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
                        <input
                            className="input must-be-given"
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="time">Preferred Time *</label>
                        <input
                            className="input must-be-given"
                            type="time"
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="sessionType">Session Type *</label>
                        <select
                            className="input must-be-given"
                            id="sessionType"
                            name="sessionType"
                            value={formData.sessionType}
                            onChange={handleChange}
                            required
                        >
                            <option value="portrait">Portrait</option>
                            <option value="wedding">Wedding</option>
                            <option value="event">Event</option>
                            <option value="family">Family</option>
                        </select>

                        <label htmlFor="notes">Additional Notes</label>
                        <textarea
                            className="message"
                            id="notes"
                            name="notes"
                            placeholder="Any special requests or notes?"
                            value={formData.notes}
                            onChange={handleChange}
                        ></textarea>

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
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
