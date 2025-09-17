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

interface ComprehensiveFeaturesSectionProps {
  title: string;
  description: string;
  tabs: Tab[];
}

export default function ComprehensiveFeaturesSection({ 
  title, 
  description, 
  tabs 
}: ComprehensiveFeaturesSectionProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="section-padding pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
          <div className="col-12">
            <div className="basic-tabs">
              <ul className="nav nav-tabs">
                {tabs.map((tab) => (
                  <li key={tab.id} className="nav-item">
                    <a
                      className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                      data-bs-toggle="tab"
                      href={`#${tab.id}-pricing`}
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
          <div className="col-12">
            <div className="tab-content pricing-content">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`tab-pane fade ${activeTab === tab.id ? 'active show' : ''}`}
                  id={`${tab.id}-pricing`}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="inner-bannerHeading">
                        <div className="section-heading">
                          <h3 className="tabsecheading">{tab.content.title}</h3>
                          <p>{tab.content.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="industry-imageArea">
                        <Image
                          className="w-100"
                          src={tab.content.image.src}
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