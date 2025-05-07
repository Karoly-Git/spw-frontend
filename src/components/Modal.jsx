import { useEffect, useState } from 'react';

export default function Modal({ isOpen, onClose, quote, name, bgColor }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => setIsVisible(true), 10); // slight delay for CSS to apply transition
        } else {
            setIsVisible(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className={`modal-overlay ${isVisible ? 'visible' : ''}`}
            onClick={onClose}
        >
            <div
                className={`modal-content ${isVisible ? 'visible' : ''}`}
                onClick={(e) => e.stopPropagation()}
                style={{ backgroundColor: bgColor }}
            >
                <button className="modal-close" onClick={onClose}>×</button>
                <blockquote>{quote}</blockquote>
                <h3 className="name">{name}</h3>
            </div>
        </div>
    );
}
