"use client";

import React from "react";
import { webDevelopmentServicesData } from "../../../app/Data/landingPageData";
import { useOwlCarousel } from "../../../app/hooks/useOwlCarousel";
import styles from "./DevelopmentCardSlider.module.css";
import Image from "next/image";

const DevelopmentCardSlider = ({ sectionData = null, servicesData = null, className = "" }) => {
  const defaultSectionData = {
    heading: "Our Comprehensive Web Development Services to Grow Your Business",
    description: "We provide professional web development solutions for businesses across the United States, combining proven practices, industry certifications, and modern technologies to deliver results that drive growth. Explore our specialized services below.",
    showDescription: true
  };
  const section = sectionData || defaultSectionData;
  const services = servicesData || webDevelopmentServicesData;
  useOwlCarousel(`.${styles.developmentCardSlider}`, {
    items: 3,
    margin: 30,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 600,
    dots: true,
    nav: false,
    navText: [
      '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    ],
    responsive: {
      0: { items: 1, margin: 12 },
      640: { items: 1, margin: 16 },
      768: { items: 2, margin: 20 },
      1024: { items: 3, margin: 24 },
    },
  });

  return (
    <section className={`${styles.sliderSection} ${className}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="section-heading text-center text-white">
              <h2 className="mb-0">
                {section.heading}
              </h2>
              {section.showDescription && section.description && (
                <p className={styles.sliderDescription} style={{ whiteSpace: 'pre-line' }}>
                  {section.description}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className={styles.sliderContainer}>
          <div className={`owl-carousel owl-theme newDevCardSlider ${styles.developmentCardSlider}`}>
            {services.map((service, index) => (
              <div key={index} className={`item ${styles.serviceCard}`}>
                <div className={styles.cardIcon}>
                  <div className={styles.iconWrapper}>
                  {typeof service.icon === 'string' && service.icon.startsWith('/') ? (
                      <img 
                        src={service.icon} 
                        alt={service.title} 
                        width={50} 
                        height={50}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : typeof service.icon === 'string' && service.icon === 'target' ? (
                      <GoalIcon />
                    ) : React.isValidElement(service.icon) ? (
                      service.icon
                    ) : null}
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDescription}>
                    {service.description}
                  </p>
                  {service.button && service.button.show && (
                    <div className="link-area">
                      <a
                        href={service.button.href || "#"}
                        className={`${service.button.className || "offer-btn primary"} ${styles.cardButton}`}
                      >
                        {service.button.text}
                      </a>
                    </div>
                  )}
                </div>
                <div className={styles.cardPlus}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
        {section.cta && (
          <div className="row justify-content-center mt-5">
            <div className="link-area">
              <a href={section.cta.href} className="book-your-call d-block mx-auto w_fit">
                {section.cta.label}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DevelopmentCardSlider;
