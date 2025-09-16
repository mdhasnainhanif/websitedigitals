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
  const [activeItem, setActiveItem] = useState(items[0].id);

  const toggleParagraph = (itemId: string) => {
    setActiveItem(itemId);
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
            
            <div className="heading-para-div">
              {items.map((item) => (
                <div key={item.id}>
                  <h3 
                    className={`${item.id}-heading ${activeItem === item.id ? 'active' : ''}`}
                    onClick={() => toggleParagraph(item.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <span className="color-primary">{item.number}</span> {item.title}
                  </h3>
                  <p className={`${item.id}-para ${activeItem === item.id ? '' : 'hidden'}`}>
                    {item.description}
                  </p>
                </div>
              ))}
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