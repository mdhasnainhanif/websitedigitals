"use client";

import { useEffect, useRef, useMemo } from "react";
import { StarIcon } from "../../icons";
import styles from "./Testimonial.module.css";

export default function TestimonialsSection({ data, className }) {
  const { sectionClass, heading, stats = [], items = [], carouselOptions = {} } = data || {};
  const carouselRef = useRef(null);
  const initialized = useRef(false);

  const options = useMemo(
    () => ({
      loop: true,
      margin: 24,
      nav: false,
      items: 3,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3500,
      smartSpeed: 700,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } },
      ...carouselOptions,
    }),
    [carouselOptions]
  );

  // Initialize Owl Carousel
  useEffect(() => {
    const initializeCarousel = () => {
      if (window.$ && window.$.fn.owlCarousel && carouselRef.current && !initialized.current) {
        $(carouselRef.current).owlCarousel(options);
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
  }, [options, items]);

  return (
    <section className={`${sectionClass} ${className || ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={`${styles.section_heading} ${styles.text_center}`}>
              <h2>{heading}</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Stats */}
          <div className="col-lg-3 col-md-4">
            <ul className={styles.testimonials_statsUl}>
              {stats.map((s, i) => (
                <li key={i}>
                  <img src={s.icon} width={s.width} height={s.height} alt={s.alt || ""} />
                  <div className={styles.testimonials_stats_details}>
                    <p>{s.title}</p>
                    <p>{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Carousel */}
          <div className="col-lg-9 col-md-8">
            <div className="testimonial-carousel">
              <div ref={carouselRef} className="owl-carousel owl-theme">
                {items.map((t, i) => (
                  <div className="item" key={i}>
                    <div className={styles.single_testimonial}>
                      <div className={styles.testimonial_imageArea}>
                        <img
                          src={t.image?.src}
                          width={t.image?.width}
                          height={t.image?.height}
                          alt={t.image?.alt || ""}
                        />
                      </div>

                      <div className={styles.testimonial_detail}>
                        <div className={styles.stars}>
                          {Array.from({ length: t.rating || 0 }).map((_, idx) => (
                            <StarIcon key={idx} />
                          ))}
                        </div>
                        <p>{t.text}</p>

                        <div className={styles.testimoinal_userArea}>
                          <img
                            src={t.user?.avatar}
                            width={t.user?.width || 48}
                            height={t.user?.height || 48}
                            alt={t.user?.name || ""}
                          />
                          <div className={styles.testimoinal_userDetail}>
                            <p>
                              <strong>{t.user?.name}</strong>
                            </p>
                            <p>{t.user?.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>    
    </section>
  );
}