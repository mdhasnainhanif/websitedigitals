"use client";

import React, { useEffect, useRef } from "react";

export default function AwardSliderSection({ items = [] }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Wait for jQuery and Owl Carousel to be available
    const initCarousel = () => {
      if (
        typeof window !== "undefined" &&
        window.$ &&
        window.$.fn.owlCarousel &&
        sliderRef.current
      ) {
        const $slider = window.$(sliderRef.current);

        // Initialize Owl Carousel
        $slider.owlCarousel({
          items: 6,
          loop: true,
          autoplay: true,
          responsive: {
            0: { items: 2 },
            576: { items: 3 },
            992: { items: 6 },
          },
        });

        // Cleanup function
        return () => {
          if ($slider && $slider.data("owl.carousel")) {
            $slider.trigger("destroy.owl.carousel");
          }
        };
      }
    };

    // Try to initialize immediately
    let cleanup = initCarousel();

    // If not ready, wait a bit and try again
    if (!cleanup) {
      const timer = setTimeout(() => {
        cleanup = initCarousel();
      }, 100);

      return () => {
        clearTimeout(timer);
        if (cleanup) cleanup();
      };
    }

    return cleanup;
  }, [items]);

  return (
    <section className="section-padding pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            {/* Keep Owl classes so your existing carousel init works */}
            <div ref={sliderRef} className="owl-carousel badges-slider">
              {items.map((it, idx) => (
                <div className="item" key={idx}>
                  <a href={it?.href} target="_blank" rel="noopener noreferrer">
                    <img
                      src={it?.src}
                      alt={it?.alt || ""}
                      width={it?.width || 178}
                      height={it?.height || 120}
                      loading="lazy"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
