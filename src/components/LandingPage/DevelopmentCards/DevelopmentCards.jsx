"use client";

import React, { useState } from "react";
import Image from "next/image";
import { developmentCardsData } from "../../../app/Data/landingPageData";
import { GoalIcon } from "@/icons";
import styles from "./DevelopmentCards.module.css";

const DevelopmentCards = ({ sectionData = null, cardsData = null, displayClass = "" }) => {
  const defaultSectionData = {
    heading: "Why Landing Page Design Matters for Business Growth",
    description: "A well-planned website is more than a place to showcase your business. It is the foundation for sustainable growth, earning customer trust, and building long-term success. Expert web development blends design, technology, and strategy to create an online presence that not only looks professional but also drives measurable business results.",
    showDescription: true
  };
  
  const section = sectionData || defaultSectionData;
  const cards = cardsData || developmentCardsData;
  const getCardId = (item, idx) => (item && (item.id !== undefined && item.id !== null) ? item.id : idx);
  const defaultActiveId = getCardId(cards[1] || cards[0] || {}, 1);
  const [activeCard, setActiveCard] = useState(defaultActiveId);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className={`row justify-content-center ${displayClass}`}>
          <div className="col-md-10">
            <div className="text-center mb-5">

             {(section.showHeading !== false) && section.heading && (
               <h2 className="fw-bolder fs-1">
                 {section.heading}
               </h2>
             )}
             {section.showDescription && section.description && (
               <p className="text-muted mx-auto" style={{ whiteSpace: 'pre-line' }}>
                 {section.description}
                </p>
              )}
            </div></div>
        </div>
        <div className="row justify-content-center g-0">
          {cards.map((item, index) => {
            const cardId = getCardId(item, index);
            return (
              <div key={cardId} className={`${item.col} d-flex`}>
                <div
                  className={`${styles.card} rounded-4 shadow-sm text-center flex-fill ${activeCard === cardId ? styles.highlighted : ""}`}
                  onMouseEnter={() => setActiveCard(cardId)}
                  onMouseLeave={() => setActiveCard(defaultActiveId)}
                >
                <div className="p-4 position-relative">
                  <div className={`${styles.iconCircle} mb-3 mx-auto`}>
                    {item.image ? <img src={item.image} alt={item.title} className="img-fluid" style={{ ...(item.imageWidth ? { width: item.imageWidth + "px", height: "auto" } : {}), ...(item.borderRadius ? { borderRadius: item.borderRadius } : {}) }} /> : <GoalIcon />}
                  </div>
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p className="text-muted mb-0">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
        </div>

        {/* CTA Button */}
        {section.cta && section.cta.show && (
          <div className="row justify-content-center mt-5">
            <div className="link-area text-center">
              <a href={section.cta.href || "#"} className={section.cta.className || "offer-btn primary"}>
                {section.cta.text || section.cta.label}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DevelopmentCards;
