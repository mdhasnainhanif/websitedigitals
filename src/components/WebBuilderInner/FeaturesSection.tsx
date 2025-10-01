'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './WebBuilderinner.module.css';

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
    <section className={`${styles.section_padding} ${styles.gradient_circle} ${styles.rightCenter_gradient}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={`${styles.section_heading} ${styles.text_center}`}>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className={`row ${styles.rowGap2}`}>
          <div className="col-md-3">
            <div className={`${styles.basic_tabs} ${styles.vertical_tabs}`}>
              <ul className={`nav ${styles.nav_tabs}`}>
                {tabs.map((tab) => (
                  <li key={tab.id} className={styles.nav_item}>
                    <a className={`${styles.nav_link} ${activeTab === tab.id ? styles.active : ''}`}
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
                  <div className={`row align-items-center ${styles.rowGap4} ${styles.col_reverse_mob}`}>
                    <div className="col-md-7">
                      <div className={styles.section_heading}>
                        <h3 className={styles.tabsecheading}>{tab.content.title}</h3>
                        <p>{tab.content.description}</p>
                      </div>
                      <div className={styles.link_area}>
                        <a href="#" className={styles.book_your_call}>
                          Get Started Now
                        </a>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className={`${styles.boxes_bgArea} ${styles.leftBottom} ${styles.web_design_imageArea}`}>
                        <Image
                          src={tab.content.image.src}
                          className={styles.width_100}
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