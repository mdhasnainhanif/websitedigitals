'use client';

import { useEffect, useState, useMemo } from 'react';
import BlogCardDynamic from './BlogCardDynamic';
import BlogCardSkeleton from './BlogCardSkeleton';
import styles from './BlogListing.module.css';

const WP_API_BASE = 'https://www.websitedigitals.com/wordpress-blogs/wp-json/wp/v2/posts';
const PER_PAGE = 100; // WordPress REST API max per request
const DUMMY_IMAGE = 'https://via.placeholder.com/800x500/f0f3f8/808080?text=Blog+Post';

/**
 * Fetches all published posts by paginating through the API until no more results.
 */
async function fetchAllPosts() {
  const all = [];
  let page = 1;
  let hasMore = true;
  while (hasMore) {
    const url = `${WP_API_BASE}?_embed&per_page=${PER_PAGE}&page=${page}`;
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) break;
    all.push(...data);
    hasMore = data.length >= PER_PAGE;
    page += 1;
  }
  return all;
}

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'web-builder', label: 'Web Builder' },
  { id: 'web-development', label: 'Web Development' },
  { id: 'web-design', label: 'Web Design' },
];

function stripHtml(html) {
  if (typeof html !== 'string') return '';
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function truncate(str, maxLen) {
  if (!str) return '';
  const s = str.trim();
  return s.length <= maxLen ? s : s.slice(0, maxLen).trimEnd() + '...';
}

/**
 * Maps WordPress category name/slug to our filter id.
 * WordPress slugs: web-design, web-development, website-builder
 */
function categoryToFilterId(nameOrSlug) {
  if (!nameOrSlug) return null;
  const n = String(nameOrSlug).toLowerCase().trim();
  if (n === 'web-design' || n.includes('web design')) return 'web-design';
  if (n === 'web-development' || n.includes('web development')) return 'web-development';
  if (n === 'website-builder' || n.includes('web builder') || n.includes('website builder')) return 'web-builder';
  return null;
}

function normalizePosts(rawPosts) {
  if (!Array.isArray(rawPosts)) return [];
  return rawPosts.map((p) => {
    const media = p._embedded?.['wp:featuredmedia']?.[0];
    const imageUrl = media?.source_url || DUMMY_IMAGE;
    const imageAlt = media?.alt_text || stripHtml(p.title?.rendered) || 'Blog post';

    const terms = p._embedded?.['wp:term'] || [];
    const categoryArr = terms.find((t) => Array.isArray(t) && t[0]?.taxonomy === 'category') || [];
    const categories = Array.isArray(categoryArr) ? categoryArr : [];
    const categoryFilterIds = [];
    let categoryName = 'Uncategorized';
    for (const cat of categories) {
      const slug = cat?.slug || '';
      const name = cat?.name || '';
      const filterId = categoryToFilterId(slug) || categoryToFilterId(name);
      if (filterId && !categoryFilterIds.includes(filterId)) categoryFilterIds.push(filterId);
      if (name && categoryName === 'Uncategorized') categoryName = name;
    }

    return {
      id: p.id,
      slug: p.slug || '',
      title: stripHtml(p.title?.rendered) || 'Untitled',
      link: p.link || '#',
      date: p.date,
      excerpt: truncate(stripHtml(p.excerpt?.rendered || p.content?.rendered || ''), 120),
      categoryName,
      categoryFilterIds,
      imageUrl,
      imageAlt,
    };
  });
}

export default function BlogListing() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchAllPosts()
      .then((data) => {
        if (cancelled) return;
        setPosts(normalizePosts(data));
      })
      .catch((e) => {
        if (!cancelled) setError(e.message || 'Failed to load posts');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, []);

  const filteredPosts = useMemo(() => {
    if (activeFilter === 'all') return posts;
    return posts.filter((p) => Array.isArray(p.categoryFilterIds) && p.categoryFilterIds.includes(activeFilter));
  }, [posts, activeFilter]);

  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.filterBarWrap}>
          <nav className={styles.filterBar} role="tablist" aria-label="Blog categories">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === f.id}
                className={`${styles.filterBtn} ${activeFilter === f.id ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </nav>
        </div>

        {loading && (
          <div className={styles.grid}>
            {[...Array(8)].map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>
        )}

        {!loading && error && (
          <p className={styles.errorMsg}>Could not load blog posts. ({error})</p>
        )}

        {!loading && !error && filteredPosts.length === 0 && (
          <p className={styles.emptyMsg}>No posts in this category.</p>
        )}

        {!loading && !error && filteredPosts.length > 0 && (
          <div className={styles.grid}>
            {filteredPosts.map((post) => (
              <BlogCardDynamic key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
