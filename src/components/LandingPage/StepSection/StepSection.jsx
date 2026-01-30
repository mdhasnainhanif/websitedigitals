"use client";

import React from "react";
import { stepSectionData } from "../../../app/Data/landingPageData";
import styles from "./StepSection.module.css";
import Image from "next/image";

const StepSection = ({ sectionData = null }) => {
  const data = sectionData || stepSectionData;
  const showDescription = data.showDescription !== false; // Default to true if not specified
  return (
    <section className={`section-padding ${styles.stepSection}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className={`text-center ${styles.sectionHeader}`}>
              <h2 className={styles.sectionTitle}>
                {data.title}
              </h2>
              {showDescription && data.description && (
                <div className={`${styles.sectionDescription} mt-3`}>
                  {Array.isArray(data.description) ? (
                    data.description.map((paragraph, index) => (
                      <p key={index} className="mb-0">{paragraph}</p>
                    ))
                  ) : (
                    <p>{data.description}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.stepsContainer}>
          {data.steps.map((step, index) => (
            <React.Fragment key={index}>
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
                    <Image
                      width={380}
                      height={313}
                      src={step.image}
                      alt={step.title}
                      className={styles.stepImage}
                      style={data.imageWidth ? { width: data.imageWidth, maxWidth: data.imageWidth } : undefined}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              
              {/* Arrow between steps */}
              {index < data.steps.length - 1 && (
                <div className={styles.arrowContainer}>
                  <Image
                    width={465}
                    height={145}
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
