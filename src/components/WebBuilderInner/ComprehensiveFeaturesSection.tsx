'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './WebBuilderinner.module.css';

interface TabContent {
  title: string;
  description: string;
  bullets: string[];
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
    <section className={`${styles.section_padding} pt-0`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={`${styles.section_heading} ${styles.text_center}`}>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
          <div className="col-12">
            <div className={styles.basic_tabs}>
              <ul className={`nav ${styles.nav_tabs}`}>
                {tabs.map((tab) => (
                  <li key={tab.id} className={styles.nav_item}>
                    <a className={`${styles.nav_link} ${activeTab === tab.id ? styles.active : ''}`}
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
            <div className={`tab-content ${styles.pricing_content}`}>
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`tab-pane fade ${activeTab === tab.id ? 'active show' : ''}`}
                  id={`${tab.id}-pricing`}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className={styles.inner_bannerHeading}>
                        <div className={styles.section_heading}>
                          <h3 className={styles.tabsecheading}>{tab.content.title}</h3>
                          <p>{tab.content.description}</p>
                          {tab.content.bullets && tab.content.bullets.length > 0 && (
                            <ul className={styles.feature_list}>
                              {tab.content.bullets.map((bullet, index) => (
                                <li key={index}>{bullet}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={styles.industry_imageArea}>
                        <Image
                          className={styles.w_100}
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