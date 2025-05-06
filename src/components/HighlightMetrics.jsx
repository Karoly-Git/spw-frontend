import React, { useEffect, useRef, useState } from 'react';
import { FaCamera, FaTrophy, FaFaceSmile } from 'react-icons/fa6';

const Counter = ({ end, label, Icon, trigger, onComplete }) => {
    const [count, setCount] = useState(0);
    const [isDone, setIsDone] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        if (!trigger) return;

        let start = 0;
        const duration = 1500;
        const increment = end / (duration / 16); // ~60fps

        const timer = setInterval(() => {
            if (!hasStarted) setHasStarted(true);

            start += increment;
            if (start >= end) {
                setCount(end);
                setIsDone(true);
                clearInterval(timer);
                if (onComplete) onComplete();
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [trigger]);

    const iconClass = `icon ${hasStarted && !isDone ? 'rotate-y' : ''}`;

    return (
        <div className="counter-item">
            <Icon className={iconClass} />
            <h3>
                {hasStarted ? count : '\u00A0'}
                {isDone && '+'}
            </h3>
            <p>{label}</p>
        </div>
    );
};


export default function HighlightMetrics() {
    const ref = useRef();
    const hasAnimatedRef = useRef(false);
    const [step, setStep] = useState(0); // 0 = not started, 1 = first, 2 = second, 3 = third

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimatedRef.current) {
                    hasAnimatedRef.current = true;
                    setStep(1); // Start first counter
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div className="counters" ref={ref}>
            <Counter
                end={1000}
                label="Photos Taken"
                Icon={FaCamera}
                trigger={step === 1}
                onComplete={() => setStep(2)}
            />
            <Counter
                end={50}
                label="Award Winning Photos"
                Icon={FaTrophy}
                trigger={step === 2}
                onComplete={() => setStep(3)}
            />
            <Counter
                end={500}
                label="Happy Clients"
                Icon={FaFaceSmile}
                trigger={step === 3}
                onComplete={() => { }} // Final one
            />
        </div>
    );
}
