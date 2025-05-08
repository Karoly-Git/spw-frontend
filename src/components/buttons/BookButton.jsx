import { NavLink } from 'react-router-dom';
import { SlCalender as CalenderIcon } from "react-icons/sl";

export default function BookButton() {
    return (
        <NavLink to="/booking" title="Book a Session" className="action-btn book-btn">
            <CalenderIcon className="icon" />
            <span>Book a Session</span>
        </NavLink>
    );
}
