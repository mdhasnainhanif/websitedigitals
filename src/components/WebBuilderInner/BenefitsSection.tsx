import React from 'react';
import Image from 'next/image';
import styles from './WebBuilderinner.module.css';

interface ParallaxImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  dataSpeed?: string;
}

interface BenefitsSectionProps {
  title: string;
  description: string;
  image: {
    main: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    parallax: ParallaxImage[];
  };
  features: string[];
  cta: {
    text: string;
    href: string;
  };
}

export default function BenefitsSection({ 
  title, 
  description, 
  image, 
  features, 
  cta 
}: BenefitsSectionProps) {
  return (
    <section className={`${styles.section_padding} ${styles.split_section} ${styles.gradient_circle} ${styles.light_gradient} ${styles.rightCenter_gradient}`}>
      <div className="container">
        <div className={`row align-items-center ${styles.mobile_col_order_change}`}>
          <div className="col-lg-7 col-md-6 position-relative">
            <div className={`lightBlue-area benefits-imagesArea parallax-container ${styles.lightBlue_area} ${styles.benefits_imagesArea} ${styles.parallax_container}`}>
              <Image
                loading="lazy"
                src={image.main.src}
                width={image.main.width}
                height={image.main.height}
                alt={image.main.alt}
              />
              <div className="benefits-images">
                {image.parallax.map((parallaxImg, index) => (
                  <Image
                    key={index}
                    loading="lazy"
                    src={parallaxImg.src}
                    alt={parallaxImg.alt}
                    className={parallaxImg.className}
                    width={parallaxImg.width}
                    height={parallaxImg.height}
                    data-speed={parallaxImg.dataSpeed}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 position-relative">
            <div className={styles.dark_area}>
              <div className={styles.section_heading}>
                <h2>{title}</h2>
                <p>{description}</p>
                <ul>
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.link_area}>
                <a href={cta.href} className={styles.primary}>
                  {cta.text}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}