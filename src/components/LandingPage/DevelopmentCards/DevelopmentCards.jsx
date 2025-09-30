"use client";

import React, { useState } from "react";
import { developmentCardsData } from "../../../app/Data/landingPageData";
import styles from "./DevelopmentCards.module.css";
import { GoalIcon } from "@/icons";

const DevelopmentCards = () => {
  // default active = 2nd card (index 1)
  const defaultActiveId = developmentCardsData[1]?.id;
  
  const [activeCard, setActiveCard] = useState(defaultActiveId);

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Why Website <span className="colorPrimaryDark">Development</span> Matters</h2>
          <p>
            A well-planned website is more than a place to showcase your
            business. It is the foundation for sustainable growth, earning
            customer trust, and building long-term success. Expert web
            development blends design, technology, and strategy to create an
            online presence that not only looks professional but also drives
            measurable business results.
          </p>
        </div>

        <div className="row">
          <div className={styles.cardsGrid}>
            {developmentCardsData.map((item) => (
              <div
                key={item.id}
                className={`${styles.card} ${
                  activeCard === item.id ? styles.highlighted : ""
                }`}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(defaultActiveId)} // reset to 2nd card
              >
                <div className={styles.cardIcon}>
                  <GoalIcon />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentCards;
