"use client";

import React from "react";
import { stepSectionData } from "../../../app/Data/landingPageData";
import styles from "./StepSection.module.css";

const StepSection = () => {
  return (
    <section className={`section-padding ${styles.stepSection}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className={`text-center ${styles.sectionHeader}`}>
              <h2 className={styles.sectionTitle}>
                {stepSectionData.title}
              </h2>
            </div>
          </div>
        </div>

        <div className={styles.stepsContainer}>
          {stepSectionData.steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className={`row align-items-center ${styles.stepRow}`}>
                <div className={`col-md-6 ${step.alignment === 'right' ? 'order-md-1' : 'order-md-2'}`}>
                  <div className={styles.stepContent}>
                    <div className={styles.stepNumber}>{step.number}</div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
                <div className={`col-md-6 ${step.alignment === 'right' ? 'order-md-2' : 'order-md-1'}`}>
                  <div className={styles.stepImageContainer}>
                    <img
                      src={step.image}
                      alt={step.title}
                      className={styles.stepImage}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              
              {/* Arrow between steps */}
              {index < stepSectionData.steps.length - 1 && (
                <div className={styles.arrowContainer}>
                  <img
                    src={`/assets/images/work/arrow${index + 1}.svg`}
                    alt="Arrow"
                    className={styles.connectingArrow}
                    loading="lazy"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepSection;
