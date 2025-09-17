'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { RightArrowIcon } from '../../../icons';

// Reusable component
function CaseStudySection({ heading, items, className }) {
  const isSlider = items && items.length > 3;

  useEffect(() => {
    if (isSlider) {
      // Initialize Owl Carousel when component mounts
      const initCarousel = () => {
        if (typeof window !== 'undefined' && window.$) {
          window.$('.case-study-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: ['<svg width="22" height="22" viewBox="0 0 24 24" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path d="M21 11H5.41l5.3-5.29a1 1 0 1 0-1.42-1.42l-7 7a1 1 0 0 0 0 1.42l7 7a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.41 13H21a1 1 0 0 0 0-2" style="fill:#4448FF"/></svg>', '<svg width="22" height="22" viewBox="0 0 24 24" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path d="m21.71 11.29-7-7a1 1 0 0 0-1.42 1.42l5.3 5.29H3a1 1 0 0 0 0 2h15.59l-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l7-7a1 1 0 0 0 0-1.42" style="fill:#4448FF"/></svg>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 700,
            responsive: {
              0: { items: 1 },
              768: { items: 2 },
              1200: { items: 3 }
            }
          });
        }
      };

      // Wait for jQuery to be available
      const checkJQuery = setInterval(() => {
        if (typeof window !== 'undefined' && window.$) {
          clearInterval(checkJQuery);
          initCarousel();
        }
      }, 100);

      return () => {
        clearInterval(checkJQuery);
        if (typeof window !== 'undefined' && window.$) {
          window.$('.case-study-carousel').trigger('destroy.owl.carousel');
        }
      };
    }
  }, [isSlider]);

  return (
    <section className={`section-padding video-section ${className}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-sm-12 text-center">
            <div className="section-heading">
              <h2>{heading}</h2>
            </div>
          </div>
        </div>

        {isSlider ? (
          <div className="case-study-carousel owl-carousel mt-4 caseStudySlider">
            {items.map((item, idx) => (
              <div className="item" key={idx}>
                <div className="single-videoAnimation-type">
                  <div className="videoAnimation-imageArea">
                    <img
                      src={item.image}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      className="static-image"
                      loading="lazy"
                    />
                  </div>

                  <div className="videoAnimation-detailsArea">
                    <div className="videoAnimation-details">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                      <Link href={item.href} style={{ fontSize: '.8rem' }}>
                        Read More <RightArrowIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="row mt-4">
            {items.map((item, idx) => (
              <div className="col-lg-4 col-sm-12" key={idx}>
                <div className="single-videoAnimation-type">
                  <div className="videoAnimation-imageArea">
                    <img
                      src={item.image}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      className="static-image"
                      loading="lazy"
                    />
                  </div>

                  <div className="videoAnimation-detailsArea">
                    <div className="videoAnimation-details">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                      <Link href={item.href} style={{ fontSize: '.8rem' }}>
                        Read More <RightArrowIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="glow3"></div>
      <div className="glow4"></div>
    </section>
  );
}

export default CaseStudySection;