import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './WebBuilderinner.module.css';

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
    <section className={`${styles.inner_banner} ${styles.gradient_circle} ${styles.leftCenter_gradient}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <nav aria-label={styles.breadcrumb}>
              <ol className={styles.breadcrumb}>
                {breadcrumbs.map((breadcrumb, index) => (
                  <li 
                    key={index}
                    className={`${styles.breadcrumb_item} ${breadcrumb.active ? 'active' : ''}`}
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
            
            <div className={styles.inner_bannerHeading}>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            
            <div className={styles.link_area}>
              <Link href={cta.href} className={styles.book_your_call}>
                {cta.text}
              </Link>
            </div>
          </div>

          <div className="col-md-6">
            <div className={styles.industry_imageArea}>
              <Image
                className={styles.w_100}
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