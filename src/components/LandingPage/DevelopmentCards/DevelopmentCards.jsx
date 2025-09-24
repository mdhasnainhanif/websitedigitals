import React from "react";
import { developmentCardsData } from "../../../app/Data/landingPageData";
import styles from "./DevelopmentCards.module.css";
import { GoalIcon } from "@/icons";

const DevelopmentCards = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Why Website Development Matters</h2>
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
          {developmentCardsData.map((card) => (
            <div
              key={card.id}
              className={`${styles.card} ${
                card.isHighlighted ? styles.highlighted : ""
              }`}
            >
              <div className={styles.cardIcon}>
                <GoalIcon />
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default DevelopmentCards;
