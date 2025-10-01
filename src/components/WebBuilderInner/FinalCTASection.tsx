"use client";

import React from 'react';
import Image from 'next/image';
import styles from './WebBuilderinner.module.css';

interface FinalCTASectionProps {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  cta: {
    text: string;
    href: string;
  };
}

export default function FinalCTASection({ title, description, image, cta }: FinalCTASectionProps) {
  return (
    <>
      <section className={`${styles.section_padding} ${styles.pt_double} ${styles.pt_default_mob}`}>
        <div className="container">
          <div className={styles.getStartedCTA}>
            <div className="row">
              <div className="col-md-6">
                <div className={styles.section_heading}>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
                <div className={styles.link_area}>
                  <a href={cta.href} className={styles.offer_btn}>
                    {cta.text}
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.ctaImageArea}>
                  <Image 
                    src={image.src} 
                    alt={image.alt}
                    width={image.width || 500}
                    height={image.height || 400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}