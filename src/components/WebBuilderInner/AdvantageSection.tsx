'use client';

import React, { useState } from 'react';

interface AdvantageItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

interface AdvantagesSectionProps {
  title: string;
  description: string;
  items: AdvantageItem[];
}

export default function AdvantagesSection({ title, description, items }: AdvantagesSectionProps) {
  const [activeItem, setActiveItem] = useState(items[0]?.id || '');

  const toggleItem = (itemId: string) => {
    // Only set the new item as active if it's different from the current active item
    // This prevents closing when clicking the same open item
    if (activeItem !== itemId) {
      setActiveItem(itemId);
    }
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 my-auto">
            <div className="section-heading">
              <h2>
                {title.split(' ').map((word, index) => 
                  word === 'Ecommerce' ? (
                    <span key={index} className="color-primary">Ecommerce</span>
                  ) : (
                    ` ${word}`
                  )
                )}
              </h2>
              <p>{description}</p>
            </div>
            
            <div className="accordion advantageaccordion mt-4" id="advantagesAccordion">
              {items.map((item, index) => {
                const isActive = activeItem === item.id;
                const itemId = `accordion-${item.id}`;
                
                return (
                  <div key={item.id} className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className={`accordion-button ${isActive ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        aria-expanded={isActive}
                        aria-controls={itemId}
                      >
                        <span className="color-primary me-3">{item.number}</span>
                        {item.title}
                      </button>
                    </h3>
                    <div
                      id={itemId}
                      className={`accordion-collapse collapse ${isActive ? 'show' : ''}`}
                      aria-labelledby={`heading-${item.id}`}
                    >
                      <div className="accordion-body p-0 pt-2 pb-2">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="col-lg-6 col-sm-12">
            <form method="post" action="" className="contactPage-formArea" id="contactformsec">
              <div className="row">
                <div className="col-12 text-center bannerformheading">
                  <p className="mb-0">Chat With Us To</p>
                  <p>Avail 75% Discount</p>
                </div>
                <div className="col-md-12">
                  <div className="basic-inputArea">
                    <input type="text" placeholder="Your Name" name="name" required />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="basic-inputArea">
                    <input type="email" placeholder="Email Address" name="email" required />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="basic-inputArea">
                    <input type="text" className="phone-number" placeholder="Phone Number" name="phone" required />
                  </div>
                </div>
                <div className="col-12">
                  <div className="basic-inputArea">
                    <textarea placeholder="How Can We Help?" name="message"></textarea>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <div className="link-area">
                    <button type="submit" name="submit">Talk To Our Design Consultant</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
