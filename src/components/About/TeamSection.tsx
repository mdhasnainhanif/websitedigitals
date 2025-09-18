// components/TeamSection.jsx
'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef } from 'react';

// Inject Owl CSS via <link> tags (no bundling issues)
function useOwlCss() {
  useEffect(() => {
    const hrefs = [
      'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css',
    ];
    const links = hrefs.map((href) => {
      const l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = href;
      document.head.appendChild(l);
      return l;
    });
    return () => links.forEach((l) => l.parentNode && l.parentNode.removeChild(l));
  }, []);
}

const TEAM = [
  { src: '/assets/images/team/1.webp', name: 'Robert Turner',   role: 'CSO' },
  { src: '/assets/images/team/2.webp', name: 'Emily Davis',     role: 'CHRO' },
  { src: '/assets/images/team/3.webp', name: 'David Sullivan',  role: 'CMO' },
  { src: '/assets/images/team/4.webp', name: 'John Maxwell',    role: 'CQO' },
  { src: '/assets/images/team/5.webp', name: 'Sarah Anderson',  role: 'CEO' },
  { src: '/assets/images/team/6.webp', name: 'James Mitchell',  role: 'HOD' },
  { src: '/assets/images/team/7.webp', name: 'Jennifer Roberts',role: 'COO' }, 
];

export default function TeamSection() {
  useOwlCss();
  const carouselRef = useRef(null);
  const initialized = useRef(false);

  const options = useMemo(() => ({
    loop: true,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 3500,
    smartSpeed: 600,
  
    // mobile-first: dots ON, arrows OFF
    nav: false,
    dots: true,
  
    // inline SVG chevrons (kept)
    navText: [
      '<span class="owl-prev-btn" aria-hidden="true" title="Previous">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" ' +
        'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<polyline points="15 18 9 12 15 6"></polyline></svg></span>',
      '<span class="owl-next-btn" aria-hidden="true" title="Next">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" ' +
        'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<polyline points="9 18 15 12 9 6"></polyline></svg></span>',
    ],
  
    responsive: {
      // Mobile
      0:    { items: 1, nav: false, dots: true },
      576:  { items: 2, nav: false, dots: true },
  
      // iPad (non-Pro) & tablets — dots only
      768:  { items: 2, nav: false, dots: true },
      1024: { items: 2, nav: false, dots: true }, // iPad & iPad Pro (portrait)
  
      // iPad Pro (landscape) and desktop — arrows only
      1194: { items: 3, nav: true,  dots: false }, // iPad Pro 11" landscape
      1366: { items: 3, nav: true,  dots: false }, // iPad Pro 12.9" & desktops
    },
  }), []);

  // Initialize Owl Carousel
  useEffect(() => {
    const initializeCarousel = () => {
      if ((window as any).$ && (window as any).$.fn.owlCarousel && carouselRef.current && !initialized.current) {
        (window as any).$(carouselRef.current).owlCarousel(options);
        initialized.current = true;
      } else if (!initialized.current) {
        // If scripts are not ready, try again after a short delay
        setTimeout(initializeCarousel, 100);
      }
    };

    initializeCarousel();

    // Cleanup function to destroy the carousel when the component unmounts
    return () => {
      if ((window as any).$ && (window as any).$.fn.owlCarousel && carouselRef.current && initialized.current) {
        (window as any).$(carouselRef.current).owlCarousel('destroy');
        initialized.current = false;
      }
    };
  }, [options]);
  
  return (
    <section className="section-padding dark-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center">
              <h2>Meet Dedicated Team</h2>
              <p>
                Our team is composed of passionate professionals who are experts in their fields.
                We work together to bring your vision to life with creativity and technical expertise.
              </p>
            </div>
          </div>

          <div className="col-12">
            <div ref={carouselRef} className="teams-carousel owl-carousel">
              {TEAM.map((member, i) => (
                <div className="item" key={i}>
                  <div className="single-team">
                    <Image
                      src={member.src}
                      width={342}
                      height={485}
                      alt={member.name}
                      // style match: keep object-fit cover if your CSS expects it
                      className=""
                    />
                    <div className="team-content">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}