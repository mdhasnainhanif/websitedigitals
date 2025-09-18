import React from 'react';
import Image from 'next/image';

interface CTASectionProps {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  cta: {
    text: string;
    href: string;
  };
}

export default function CTASection({ title, description, image, cta }: CTASectionProps) {
  return (
    <section className="section-padding primary-extra-light-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 my-auto">
            <div className="section-heading">
            <h2>
              {title.split(' ').map((word, index) => 
                word === 'Ecommerce' || word === 'Website' || word === 'Builder' ? (
                  <span key={index} className="color-primary">
                    {word === 'Ecommerce' ? ' Ecommerce Website Builder' : ''}
                  </span>
                ) : (
                  ` ${word}`
                )
              )}
            </h2>
              <p>{description}</p>
              <div className="link-area">
                <a href={cta.href} className="primary">
                  {cta.text}
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              className="ecomm-img2"
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}