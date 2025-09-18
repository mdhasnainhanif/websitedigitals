'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface TabContent {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

interface Tab {
  id: string;
  title: string;
  content: TabContent;
}

interface FeaturesSectionProps {
  title: string;
  description: string;
  tabs: Tab[];
}

export default function FeaturesSection({ title, description, tabs }: FeaturesSectionProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="section-padding gradient-circle rightCenter-gradient">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="row rowGap2">
          <div className="col-md-3">
            <div className="basic-tabs vertical-tabs">
              <ul className="nav nav-tabs">
                {tabs.map((tab) => (
                  <li key={tab.id} className="nav-item">
                    <a
                      className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                      data-bs-toggle="tab"
                      href={`#${tab.id}-featureDetail`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab(tab.id);
                      }}
                    >
                      <p>{tab.title}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`tab-pane fade ${activeTab === tab.id ? 'active show' : ''}`}
                  id={`${tab.id}-featureDetail`}
                >
                  <div className="row align-items-center rowGap4 col-reverse-mob">
                    <div className="col-md-7">
                      <div className="section-heading">
                        <h3 className="tabsecheading">{tab.content.title}</h3>
                        <p>{tab.content.description}</p>
                      </div>
                      <div className="link-area">
                        <a href="#" className="book-your-call">
                          Get Started Now
                        </a>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="boxes-bgArea leftBottom web-design-imageArea">
                        <Image
                          src={tab.content.image.src}
                          className="width-100"
                          alt={tab.content.image.alt}
                          width={tab.content.image.width}
                          height={tab.content.image.height}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}