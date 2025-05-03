import React from 'react';
import { FaCamera, FaTrophy, FaFaceSmile } from 'react-icons/fa6';

export default function Counters() {
    return (
        <div className="counters">
            <div className="counter-item">
                <FaCamera className="icon" />
                <h3>1000+</h3>
                <p>Photos Taken</p>
            </div>
            <div className="counter-item">
                <FaTrophy className="icon" />
                <h3>50+</h3>
                <p>Award Winning Photos</p>
            </div>
            <div className="counter-item">
                <FaFaceSmile className="icon" />
                <h3>500+</h3>
                <p>Happy Clients</p>
            </div>
        </div>
    );
};

