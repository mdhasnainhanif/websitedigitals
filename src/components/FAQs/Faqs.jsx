"use client";
import { useState } from "react";
import styles from "./Faq.module.css";

const FAQ = ({
  title = "Frequently Asked Questions",
  faqs = [],
  className = "",
  sectionClassName = "section-padding gradient-circle rightCenter-gradient",
  isTwoCol = false,
}) => {
  const [openItem, setOpenItem] = useState(0); // Track which item is open

  const handleToggle = (index) => {
    setOpenItem(openItem === index ? -1 : index); // Toggle or close
  };

  // split faqs into 2 columns if isTwoCol true
  const mid = Math.ceil(faqs.length / 2);
  const firstCol = faqs.slice(0, mid);
  const secondCol = faqs.slice(mid);

  return (
    <section className={`section-padding ${sectionClassName} ${className}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className={`${styles.section_heading} ${styles.text_center}`}>
              <h2>{title}</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {isTwoCol ? (
            <>
              <div className="col-lg-6">
                <div
                  className={`accordion ${styles.faq_accordion}`}
                  id="faq-accordion-1"
                >
                  {firstCol.map((faq, index) => (
                    <div
                      key={index}
                      className={`accordion-item ${styles.accordion_item}`}
                    >
                      <h2
                        className="accordion-header"
                        id={`faq-heading-1-${index}`}
                      >
                        <button
                          className={`accordion-button ${
                            styles.accordion_button
                          } ${openItem !== index ? "collapsed" : ""}`}
                          type="button"
                          onClick={() => handleToggle(index)}
                          aria-expanded={openItem === index}
                          aria-controls={`faq-1-${index}`}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div
                        id={`faq-1-${index}`}
                        className={`accordion-collapse collapse ${
                          styles.accordion_collapse
                        } ${openItem === index ? "show" : ""}`}
                        aria-labelledby={`faq-heading-1-${index}`}
                        data-bs-parent="#faq-accordion-1"
                      >
                        <div
                          className={`accordion-body ${styles.accordion_body}`}
                        >
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-6">
                <div
                  className={`accordion ${styles.faq_accordion}`}
                  id="faq-accordion-2"
                >
                  {secondCol.map((faq, index) => {
                    const realIndex = mid + index; // shift index for toggle
                    return (
                      <div
                        key={realIndex}
                        className={`accordion-item ${styles.accordion_item}`}
                      >
                        <h2
                          className="accordion-header"
                          id={`faq-heading-2-${realIndex}`}
                        >
                          <button
                            className={`accordion-button ${
                              styles.accordion_button
                            } ${openItem !== realIndex ? "collapsed" : ""}`}
                            type="button"
                            onClick={() => handleToggle(realIndex)}
                            aria-expanded={openItem === realIndex}
                            aria-controls={`faq-2-${realIndex}`}
                          >
                            {faq.question}
                          </button>
                        </h2>
                        <div
                          id={`faq-2-${realIndex}`}
                          className={`accordion-collapse collapse ${
                            styles.accordion_collapse
                          } ${openItem === realIndex ? "show" : ""}`}
                          aria-labelledby={`faq-heading-2-${realIndex}`}
                          data-bs-parent="#faq-accordion-2"
                        >
                          <div
                            className={`accordion-body ${styles.accordion_body}`}
                          >
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <div className="col-lg-11">
              <div
                className={`accordion ${styles.faq_accordion}`}
                id="faq-accordion-single"
              >
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`accordion-item ${styles.accordion_item}`}
                  >
                    <h2
                      className="accordion-header"
                      id={`faq-heading-single-${index}`}
                    >
                      <button
                        className={`accordion-button ${
                          styles.accordion_button
                        } ${openItem !== index ? "collapsed" : ""}`}
                        type="button"
                        onClick={() => handleToggle(index)}
                        aria-expanded={openItem === index}
                        aria-controls={`faq-single-${index}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`faq-single-${index}`}
                      className={`accordion-collapse collapse ${
                        styles.accordion_collapse
                      } ${openItem === index ? "show" : ""}`}
                      aria-labelledby={`faq-heading-single-${index}`}
                      data-bs-parent="#faq-accordion-single"
                    >
                      <div
                        className={`accordion-body ${styles.accordion_body}`}
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
