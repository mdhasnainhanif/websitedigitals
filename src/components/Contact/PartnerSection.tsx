import React from 'react';
import Image from 'next/image';

const partners = [
  {
    src: '/assets/images/partners/white/1.webp',
    alt: 'top digital agency',
    width: 143,
    height: 88
  },
  {
    src: '/assets/images/partners/white/2.webp',
    alt: 'Accrucited Professionals Bing ads',
    width: 143,
    height: 88
  },
  {
    src: '/assets/images/partners/white/3.webp',
    alt: 'google partner',
    width: 143,
    height: 88
  },
  {
    src: '/assets/images/partners/white/4.webp',
    alt: 'clutch',
    width: 143,
    height: 88
  },
  {
    src: '/assets/images/partners/white/5.webp',
    alt: 'moz local',
    width: 143,
    height: 88
  }
];

export default function PartnersSection() {
  return (
    <section className="afterBanner-partnersSection dark-section">
      <div className="container">
        <ul className="afterBanner-partners">
          {partners.map((partner, index) => (
            <li key={index}>
              <Image
                src={partner.src}
                width={partner.width}
                height={partner.height}
                alt={partner.alt}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}