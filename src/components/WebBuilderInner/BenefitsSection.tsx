import React from 'react';
import Image from 'next/image';

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
    <section className="section-padding split-section gradient-circle light-gradient rightCenter-gradient">
      <div className="container">
        <div className="row align-items-center mobile-col-order-change">
          <div className="col-lg-7 col-md-6 position-relative">
            <div className="lightBlue-area benefits-imagesArea parallax-container">
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
            <div className="dark-area">
              <div className="section-heading">
                <h2>{title}</h2>
                <p>{description}</p>
                <ul>
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="link-area">
                <a href={cta.href} className="primary">
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