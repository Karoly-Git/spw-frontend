import React, { useEffect, useRef, useState } from 'react';
import { FaCamera, FaTrophy, FaFaceSmile } from 'react-icons/fa6';

/* =======================
   Counter Component
======================= */
const Counter = ({
    end,
    label,
    Icon,
    trigger,
    onComplete,
    suffix = ''
}) => {
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
                onComplete && onComplete();
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
                {isDone && suffix}
            </h3>
            <p>{label}</p>
        </div>
    );
};

/* =======================
   HighlightMetrics
======================= */
export default function HighlightMetrics() {
    const ref = useRef(null);
    const hasAnimatedRef = useRef(false);
    const [step, setStep] = useState(0); // 0 = not started

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimatedRef.current) {
                    hasAnimatedRef.current = true;
                    setStep(1);
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
                end={250}
                label="Photos Taken"
                Icon={FaCamera}
                suffix="k+"
                trigger={step === 1}
                onComplete={() => setStep(2)}
            />

            <Counter
                end={50}
                label="Award Winning Photos"
                Icon={FaTrophy}
                suffix="+"
                trigger={step === 2}
                onComplete={() => setStep(3)}
            />

            <Counter
                end={100}
                label="Happy Clients"
                Icon={FaFaceSmile}
                suffix="+"
                trigger={step === 3}
                onComplete={() => { }}
            />
        </div>
    );
}
