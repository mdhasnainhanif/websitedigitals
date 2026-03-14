'use client';

import Link from 'next/link';
import styles from './BlogListing.module.css';

const DUMMY_IMAGE = 'https://via.placeholder.com/800x500/f0f3f8/808080?text=Blog+Post';

function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return dateStr;
  }
}

export default function BlogCardDynamic({ post }) {
  const title = post.title || '';
  const slug = post.slug || '';
  const href = slug ? `/blog/${slug}` : post.link || '#';
  const date = formatDate(post.date);
  const excerpt = post.excerpt || '';
  const categoryName = post.categoryName || 'Uncategorized';
  const imgSrc = post.imageUrl || DUMMY_IMAGE;
  const imgAlt = post.imageAlt || title;

  return (
    <article className={`single-blog ${styles.card}`}>
      <div className={`blog-imageArea ${styles.imageWrap}`}>
        <img src={imgSrc} alt={imgAlt} loading="lazy" />
      </div>
      <div className={`blog-cardDetail ${styles.cardDetail}`}>
        <span className={styles.categoryTag}>{categoryName.toUpperCase()}</span>
        <h3>{title}</h3>
        {date && (
          <span className={styles.cardDate}>
            <CalendarIcon />
            {date}
          </span>
        )}
        {excerpt && <p className={styles.cardExcerpt}>{excerpt}</p>}
        <Link href={href} className={styles.learnMore}>
          Learn More
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
