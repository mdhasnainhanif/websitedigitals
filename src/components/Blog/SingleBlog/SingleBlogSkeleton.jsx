'use client';

import React from 'react';
import styles from './SingleBlogPost.module.css';
import skeletonStyles from './SingleBlogSkeleton.module.css';

export default function SingleBlogSkeleton() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrap}>
          {/* Left column – Summary & TOC placeholders */}
          <aside className={styles.sidebar}>
            <div className={styles.box}>
              <div className={`${skeletonStyles.line} ${skeletonStyles.boxTitle}`} />
              <div className={`${skeletonStyles.line} ${skeletonStyles.summary}`} />
              <div className={`${skeletonStyles.line} ${skeletonStyles.summary}`} />
              <div className={`${skeletonStyles.line} ${skeletonStyles.summaryShort}`} />
            </div>
            <div className={styles.box}>
              <div className={`${skeletonStyles.line} ${skeletonStyles.boxTitle}`} />
              <div className={skeletonStyles.tocItem} />
              <div className={skeletonStyles.tocItem} />
              <div className={skeletonStyles.tocItem} />
              <div className={skeletonStyles.tocItemShort} />
            </div>
          </aside>

          {/* Right column – Meta, title, image, content placeholders */}
          <div className={styles.main}>
            <div className={skeletonStyles.meta}>
              <span className={skeletonStyles.metaLine} />
              <span className={skeletonStyles.metaLine} />
            </div>
            <div className={`${skeletonStyles.line} ${skeletonStyles.pageTitle}`} />
            <div className={skeletonStyles.featuredImage} />
            <div className={skeletonStyles.contentLine} />
            <div className={skeletonStyles.contentLine} />
            <div className={skeletonStyles.contentLineShort} />
            <div className={skeletonStyles.contentLine} />
            <div className={skeletonStyles.contentLine} />
            <div className={skeletonStyles.contentLineShort} />
          </div>
        </div>
      </div>
    </section>
  );
}
