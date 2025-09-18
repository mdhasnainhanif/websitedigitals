import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

interface BannerImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface CTA {
  text: string;
  href: string;
}

interface WebBuilderBannerProps {
  title: string;
  description: string;
  image: BannerImage;
  breadcrumbs: Breadcrumb[];
  cta: CTA;
}

export default function WebBuilderBanner({
  title,
  description,
  image,
  breadcrumbs,
  cta
}: WebBuilderBannerProps) {
  return (
    <section className="inner-banner gradient-circle leftCenter-gradient">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                {breadcrumbs.map((breadcrumb, index) => (
                  <li 
                    key={index}
                    className={`breadcrumb-item ${breadcrumb.active ? 'active' : ''}`}
                    aria-current={breadcrumb.active ? 'page' : undefined}
                  >
                    {breadcrumb.active ? (
                      breadcrumb.label
                    ) : (
                      <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            
            <div className="inner-bannerHeading">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            
            <div className="link-area">
              <Link href={cta.href} className="book-your-call">
                {cta.text}
              </Link>
            </div>
          </div>

          <div className="col-md-6">
            <div className="industry-imageArea">
              <Image
                className="w-100"
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}