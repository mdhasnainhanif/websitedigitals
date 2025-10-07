"use client";

import React, { useState } from "react";
import { developmentCardsData } from "../../../app/Data/landingPageData";
import { GoalIcon } from "@/icons";
import styles from "./DevelopmentCards.module.css";

const DevelopmentCards = () => {
  const defaultActiveId = developmentCardsData[1]?.id;
  const [activeCard, setActiveCard] = useState(defaultActiveId);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="text-center mb-5">
              <h2 className="fw-bolder fs-1">
                Why<span className="textPrimaryBlue"> Landing Page Design</span> Matters for Business Growth
              </h2>
              <p className="text-muted mx-auto">
                A well-planned website is more than a place to showcase your business.
                It is the foundation for sustainable growth, earning customer trust, and
                building long-term success. Expert web development blends design,
                technology, and strategy to create an online presence that not only looks
                professional but also drives measurable business results.
              </p>
            </div></div>
        </div>

        <div className="row justify-content-center g-0">
          {developmentCardsData.map((item) => (
            <div key={item.id} className={`${item.col} d-flex`}>
              <div
                className={`${styles.card} rounded-4 shadow-sm text-center flex-fill ${activeCard === item.id ? styles.highlighted : ""
                  }`}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(defaultActiveId)}
              >
                <div className="p-4 position-relative">
                  <div className={`${styles.iconCircle} mb-3 mx-auto`}>
                    <GoalIcon />
                  </div>
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p className="text-muted mb-0">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentCards;
