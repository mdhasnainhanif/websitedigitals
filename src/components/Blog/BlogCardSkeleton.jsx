'use client';

import styles from './BlogListing.module.css';

/**
 * Skeleton loader for a single blog card.
 * Matches the layout of BlogCard (image, tag, title, date, excerpt, link).
 */
export default function BlogCardSkeleton() {
  return (
    <div className={`single-blog ${styles.card}`}>
      <div className={`blog-imageArea ${styles.imageWrap}`}>
        <div className={styles.skeletonImage} />
      </div>
      <div className={`blog-cardDetail ${styles.cardDetail}`}>
        <div className={styles.skeletonTag} />
        <div className={styles.skeletonTitle} />
        <div className={styles.skeletonDate} />
        <div className={styles.skeletonExcerpt} />
        <div className={styles.skeletonExcerpt} style={{ width: '60%' }} />
        <div className={styles.skeletonLink} />
      </div>
    </div>
  );
}
