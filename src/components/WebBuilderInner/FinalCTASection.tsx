"use client";

import React from 'react';
import Image from 'next/image';

interface FinalCTASectionProps {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  cta: {
    text: string;
    href: string;
  };
}

export default function FinalCTASection({ title, description, image, cta }: FinalCTASectionProps) {
  return (
    <section className="section-padding pt-double pt-default-mob">
      <div className="container">
        <div className="getStartedCTA">
          <div className="row">
            <div className="col-md-6">
              <div className="section-heading">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <div className="link-area">
                <a href={cta.href} className="offer-btn">
                  {cta.text}
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="ctaImageArea">
                <Image 
                  src={image.src} 
                  alt={image.alt}
                  width={image.width || 500}
                  height={image.height || 400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}