"use client";

import React, { useEffect, useState, useRef } from "react";

const LandingPageCounter = ({ statsData = null }) => {
    const defaultCounters = [
        { id: 1, value: 250, suffix: "+", label: "Pages Built" },
        { id: 2, value: 40, suffix: "%", label: "Conversion Lift" },
        { id: 3, value: 15, suffix: "+", label: "Industries" },
        { id: 4, value: 95, suffix: "%", label: "Retention Rate" },
    ];
    
    const counters = statsData || defaultCounters;
    const [counts, setCounts] = useState(counters.map(() => 0));
    const [startCount, setStartCount] = useState(false);
    const counterRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setStartCount(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        if (counterRef.current) observer.observe(counterRef.current);
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        if (!startCount) return;

        const duration = 2000;
        const interval = 30;

        counters.forEach((counter, index) => {
            let start = 0;
            const end = counter.value;
            const increment = end / (duration / interval);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    start = end;
                    clearInterval(timer);
                }
                setCounts((prev) => {
                    const updated = [...prev];
                    updated[index] = Math.floor(start);
                    return updated;
                });
            }, interval);
        });
    }, [startCount]);

    return (
        <div ref={counterRef} className="container text-center my-5">
            <div
                className="row justify-content-center align-items-center text-white section-padding rounded-4 shadow-sm counterBackground">
                {counters.map((counter, index) => (
                    <div
                        key={index}
                        className="col-6 col-md-3 d-flex flex-column align-items-center position-relative mb-md-0"
                    >
                        <h2 className="fw-bold">
                            {counts[index]}
                            {counter.suffix}
                        </h2>
                        <p className="mb-0 small">{counter.label}</p>
                        {index !== counters.length - 1 && (
                            <div
                                className="d-none d-md-block position-absolute end-0 top-50 translate-middle-y"
                                style={{
                                    width: "1px",
                                    height: "40px",
                                    background: "rgba(255,255,255,0.4)",
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LandingPageCounter;
