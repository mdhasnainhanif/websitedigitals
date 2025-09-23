'use client'
import { useState } from 'react';
import styles from './Faq.module.css'

const FAQ = ({ 
  title = "Frequently Asked Questions", 
  faqs = [], 
  className = "",
  sectionClassName = "section-padding gradient-circle rightCenter-gradient"
}) => {
  const [openItem, setOpenItem] = useState(0); // Track which item is open

  const handleToggle = (index) => {
    setOpenItem(openItem === index ? -1 : index); // Toggle or close
  };

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
          
          <div className="col-lg-11">
            <div className={`accordion ${styles.faq_accordion}`} id="faq-accordion">
              {faqs.map((faq, index) => (
                <div key={index} className={`accordion-item ${styles.accordion_item}`}>
                  <h2 className="accordion-header" id={`faq-heading-${index + 1}`}>
                    <button
                      className={`accordion-button ${styles.accordion_button} ${openItem !== index ? 'collapsed' : ''}`}
                      type="button"
                      onClick={() => handleToggle(index)}
                      aria-expanded={openItem === index}
                      aria-controls={`faq-${index + 1}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`faq-${index + 1}`}
                    className={`accordion-collapse collapse ${styles.accordion_collapse} ${openItem === index ? 'show' : ''}`}
                    aria-labelledby={`faq-heading-${index + 1}`}
                    data-bs-parent="#faq-accordion"
                  >
                    <div className={`accordion-body ${styles.accordion_body}`}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default FAQ;