// components/IndustryTabs.jsx
"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import Link from "next/link";

/**
 * Props:
 * - data: Array of { id, title, items: [{ title, href, normalImg, whiteImg, alt, desc }] }
 * - heading?: string
 * - subheading?: string
 * - grayBgVar?: string  (CSS var name or color for background; default 'var(--gray-bg)')
 */
export default function IndustryTabs({
  data = [],
  heading = "Launch Your Industry Website Today, Don’t Get Left Behind!",
  subheading = "Our user-friendly platform helps you create a website that perfectly suits your unique business and industry requirements.",
  grayBgVar = "var(--gray-bg)",
}) {
  const initial = useMemo(() => data?.[0]?.id ?? "", [data]);
  const [active, setActive] = useState(initial);
  const scrollRef = useRef(null);
  const carouselRef = useRef(null);
  const initialized = useRef(false);

  const handleScroll = (dir = "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const delta = Math.max(200, el.clientWidth * 0.6);
    el.scrollBy({ left: dir === "right" ? delta : -delta, behavior: "smooth" });
  };

  const onKeyActivate = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(id);
    }
  };

  // Initialize Owl Carousel
  useEffect(() => {
    const initializeCarousel = () => {
      if (window.$ && window.$.fn.owlCarousel && carouselRef.current && !initialized.current) {
        $(carouselRef.current).owlCarousel({
          items: 4,
          loop: false,
          autoplay: false,
          nav: true,
          navText: ['<svg width="26" height="26" viewBox="0 0 24 24" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path d="M21 11H5.41l5.3-5.29a1 1 0 1 0-1.42-1.42l-7 7a1 1 0 0 0 0 1.42l7 7a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.41 13H21a1 1 0 0 0 0-2" style="fill:#4448FF"/></svg>', '<svg width="26" height="26" viewBox="0 0 24 24" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path d="m21.71 11.29-7-7a1 1 0 0 0-1.42 1.42l5.3 5.29H3a1 1 0 0 0 0 2h15.59l-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l7-7a1 1 0 0 0 0-1.42" style="fill:#4448FF"/></svg>'],
          dots: false,
          margin: 15,
          slideBy: 1,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          freeDrag: false,
          responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 4 }
          }
        });
        initialized.current = true;
      } else if (!initialized.current) {
        // If scripts are not ready, try again after a short delay
        setTimeout(initializeCarousel, 100);
      }
    };

    initializeCarousel();

    // Cleanup function to destroy the carousel when the component unmounts
    return () => {
      if (window.$ && window.$.fn.owlCarousel && carouselRef.current && initialized.current) {
        $(carouselRef.current).owlCarousel('destroy');
        initialized.current = false;
      }
    };
  }, [data]);

  // Handle carousel navigation
  const handleCarouselNav = (direction) => {
    if (window.$ && carouselRef.current && initialized.current) {
      if (direction === 'left') {
        $(carouselRef.current).trigger('prev.owl.carousel');
      } else {
        $(carouselRef.current).trigger('next.owl.carousel');
      }
    }
  };

  return (
    <section className="section-padding" style={{ background: grayBgVar }}>
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 col-sm-12 text-center">
            <div className="section-heading">
              <h2>{heading}</h2>
              <p>{subheading}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-sm-12">
            {/* Tab Navigation */}
            <div className="scroll-tabs-main mb-4">
              <div
                className="tabs-scroll"
                ref={scrollRef}
                role="tablist"
                aria-label="Industry tabs"
              >
                <div ref={carouselRef} className="owl-carousel nav-tabs industryTabsSlider border-0">
                  {data.map((tab) => (
                    <div className="item nav-item" key={tab.id}>
                      <button
                        type="button"
                        className={`nav-link ${
                          active === tab.id ? "active" : ""
                        }`}
                        role="tab"
                        aria-selected={active === tab.id}
                        tabIndex={0}
                        onClick={() => setActive(tab.id)}
                        onKeyDown={(e) => onKeyActivate(e, tab.id)}
                      >
                        <h3>{tab.title}</h3>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {data.map((tab) => (
                <div
                  key={tab.id}
                  className={`tab-pane fade ${
                    active === tab.id ? "show active" : ""
                  }`}
                  role="tabpanel"
                  aria-labelledby={`${tab.id}-tab`}
                  id={tab.id}
                >
                  <div className="row gy-3">
                    {tab.items.map((item, idx) => (
                      <div
                        className="col-lg-4 col-sm-12"
                        key={`${tab.id}-${idx}`}
                      >
                        <div className="single-contentWriting-card">
                          <div className="head">
                            {/* Normal and white images swap on hover using CSS */}
                            <img
                              src={item.normalImg}
                              width="67"
                              height="67"
                              className="service-normal-img"
                              alt={item.alt}
                              loading="lazy"
                            />
                            <img
                              src={item.whiteImg}
                              width="67"
                              height="67"
                              className="service-white-img"
                              alt={item.alt}
                              loading="lazy"
                            />
                            <p>
                              <Link href={item.href}>{item.title}</Link>
                            </p>
                          </div>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    ))}
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
