'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface CounterData {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
  alt: string;
}

const counterData: CounterData[] = [
  {
    id: 'million-words',
    value: 100,
    suffix: '+',
    label: 'Million Words',
    icon: '/assets/images/contact/feature/1.png',
    alt: 'Million Words'
  },
  {
    id: 'content-delivered',
    value: 100,
    suffix: 'K+',
    label: 'Content Delivered',
    icon: '/assets/images/contact/feature/2.png',
    alt: 'Content Delivered'
  },
  {
    id: 'countries-served',
    value: 15,
    suffix: '+',
    label: 'Countries Served',
    icon: '/assets/images/contact/feature/3.png',
    alt: 'Countries Served'
  },
  {
    id: 'clients-catered',
    value: 100,
    suffix: '+',
    label: 'Clients Catered',
    icon: '/assets/images/contact/feature/4.png',
    alt: 'Clients Catered'
  }
];

export default function GlobalDeliverySection() {
  const [counters, setCounters] = useState<Record<string, number>>({});
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    counterData.forEach((counter) => {
      let currentValue = 0;
      const increment = counter.value / 50; // 50 steps for smooth animation
      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= counter.value) {
          currentValue = counter.value;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [counter.id]: Math.floor(currentValue)
        }));
      }, 30); // 30ms interval for smooth animation
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="section-padding primary-extra-light-bg"
    >
      <div className="container">
        <div className="row align-items-center rowGap4">
          {/* Left Column - Stats */}
          <div className="col-md-6">
            <div className="section-heading pb-half">
              <h2>We Delivered Globally</h2>
              <p>Years of dedication and experience helped us serve:</p>
            </div>
            
            <div className="row rowGap2 counter-container">
              {counterData.map((counter) => (
                <div key={counter.id} className="col-6">
                  <div className="contact-featureArea">
                    <div className="contact-featureImage">
                      <Image
                        src={counter.icon}
                        width={43}
                        height={43}
                        alt={counter.alt}
                      />
                    </div>
                    <div className="contact-featureContent">
                      <h3>
                        <span className="simple-counter">
                          {counters[counter.id] || 0}
                        </span>
                        {counter.suffix}
                      </h3>
                      <p>{counter.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Map Image */}
          <div className="col-md-6">
            <Image
              src="/assets/images/contact/map.png"
              width={669}
              height={392}
              alt="We Delivered Globally"
              className="mapImage"
            />
          </div>
        </div>
      </div>
    </section>
  );
}