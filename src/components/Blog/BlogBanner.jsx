'use client';

import React from 'react';
import Link from 'next/link';
import styles from './BlogBanner.module.css';

const defaultBreadcrumb = {
  home: { label: 'Home', href: '/' },
  current: { label: 'Blog', href: '/blog' },
};

export default function BlogBanner({
  breadcrumb = defaultBreadcrumb,
  heading = 'Explore Our Latest Blog',
}) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`row ${styles.row}`}>
          <div className="col-12">
            <nav aria-label="breadcrumb" className={styles.breadcrumbWrap}>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href={breadcrumb?.home?.href || '/'}>
                    {breadcrumb?.home?.label || 'Home'}
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {breadcrumb?.current?.label || 'Blog'}
                </li>
              </ol>
            </nav>
            <h1 className={styles.heading}>{heading}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
