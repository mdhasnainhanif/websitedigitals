import React from "react";
import styles from "./OurWorkSection.module.css";
import { caseStudiesData } from "../../../app/Data/landingPageData";
import Link from "next/link";

const OurWorkSection = () => {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center text-light">
              <h2>
                Our <span className="colorPrimaryDark">Work</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row rowGap2">
          {caseStudiesData.map((item, index) => {
            return (
              <div key={index} className="col-md-4">
                <div
                  className={styles.workCard}
                  
                  style={{ backgroundColor: item.bg }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className={styles.workCardTitle}>{item.title}</h4>
                    <p className={styles.workCardTag}>{item.tag}</p>
                  </div>
                  <img className="my-5" src={item?.image} alt="" />
                  <p className="mt-1">{item.desc}</p>
                  <button className={`btn btn-dark rounded-pill ${styles.viewCaseStudyButton}`}>
                    <Link href={item.href || "#"}>View Case Study</Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
