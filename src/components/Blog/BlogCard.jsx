// src/components/Blog/BlogCard.jsx
'use client';

import { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(
  () => import('react-owl-carousel').then(m => m.default),
  { ssr: false }
);

// Load Owl CSS via <link> tags (avoids Next's CSS parser)
function useOwlCss() {
  useEffect(() => {
    const hrefs = [
      'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css',
    ];
    const links = hrefs.map(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
      return link;
    });
    return () => links.forEach(l => l.parentNode && l.parentNode.removeChild(l));
  }, []);
}

function stripHTML(html = '') {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}
function truncate(s = '', n = 140) {
  const str = (s || '').trim();
  return str.length > n ? str.slice(0, n).trimEnd() + '...' : str;
}

const DEFAULT_API =
  'https://www.websitedigitals.com/blog/wp-json/wp/v2/posts?_embed&per_page=12';

export default function BlogCard({
  title = 'Recent Blogs',
  apiUrl = DEFAULT_API,
  moreHref = 'https://www.websitedigitals.com/blog/',
  carouselOptions,
}) {
  useOwlCss(); // <-- load CSS

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let alive = true;
    const url = `${apiUrl}&_=${Date.now()}`; // cache-bust for fresh data
    console.log('[BlogCard] Fetching:', url);

    fetch(url, { cache: 'no-store' })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => {
        if (!alive) return;

        console.log('[BlogCard] Raw API data:', data);
        try {
          console.table(
            (Array.isArray(data) ? data : []).map((p) => ({
              id: p.id,
              slug: p.slug,
              title: p?.title?.rendered?.replace(/<[^>]*>/g, '').trim(),
              link: p.link,
              hasImage: !!p?._embedded?.['wp:featuredmedia']?.[0]?.source_url,
            }))
          );
        } catch (_) {}

        setPosts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((e) => {
        if (!alive) return;
        console.error('[BlogCard] Fetch error:', e);
        setErr(e.message || 'Failed to load');
        setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, [apiUrl]);

  const options = useMemo(() => ({
    loop: true,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 600,
    // mobile-first: dots on, arrows off
    nav: false,
    dots: true,
    navText: [
      // LEFT (chevron)
      '<span class="owl-prev-btn" aria-hidden="true" title="Previous">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" ' +
        'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<polyline points="15 18 9 12 15 6"></polyline>' +
        '</svg>' +
      '</span>',
      // RIGHT (chevron)
      '<span class="owl-next-btn" aria-hidden="true" title="Next">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" ' +
        'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<polyline points="9 18 15 12 9 6"></polyline>' +
        '</svg>' +
      '</span>',
    ],
    responsive: {
      // Mobile
      0:    { items: 1, nav: false, dots: true },
      576:  { items: 1, nav: false, dots: true },
  
      // Tablets (iPad non-Pro, small tablets)
      768:  { items: 2, nav: false, dots: true },
      1024: { items: 2, nav: false, dots: true }, // iPad & iPad Pro (portrait) => dots only
  
      // iPad Pro (landscape) and up => arrows only
      1194: { items: 3, nav: true,  dots: false }, // iPad Pro 11" landscape
      1366: { items: 4, nav: true,  dots: false }, // iPad Pro 12.9" landscape + desktop
    },
    ...(carouselOptions || {}),
  }), [carouselOptions]);  

  return (
    <section className="section-padding gray-section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="section-heading">
              <h2>{title}</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-sm-12">
            {loading && <p className="text-center">Loading blogs…</p>}
            {!loading && err && <p className="text-center">Could not load blogs. ({err})</p>}
            {!loading && !err && posts.length === 0 && (
              <div className="col-12"><p className="text-center">No blog posts available.</p></div>
            )}

            {!loading && !err && posts.length > 0 && (
              <OwlCarousel className="owl-theme blog-slider" {...options}>
                {posts.map(post => {
                  // Title
                  const rawTitle = stripHTML(post?.title?.rendered || '');
                  const displayTitle = truncate(rawTitle, 40); // <= 40 chars

                  // Link
                  const link = post?.link || '#';

                  // Image
                  const media = post?._embedded?.['wp:featuredmedia']?.[0] || null;
                  const imgSrc = media?.source_url || 'https://via.placeholder.com/800x500?text=No+Image';
                  const imgAlt = media?.alt_text || rawTitle || 'Untitled';

                  // Category
                  const cats = post?._embedded?.['wp:term']?.[0] || [];
                  const category = (cats.find(c => c.taxonomy === 'category')?.name || cats[0]?.name) ?? 'Uncategorized';

                  // Excerpt/content
                  const rawExcerptSource = post?.excerpt?.rendered || post?.content?.rendered || '';
                  const rawExcerpt = stripHTML(rawExcerptSource);
                  const displayExcerpt = truncate(rawExcerpt, 90); // <= 90 chars

                  return (
                    <div className="item" key={post.id}>
                      <div className="single-blog">
                        <div className="blog-imageArea">
                          <img
                            loading="lazy"
                            src={imgSrc}
                            className="card-img-top"
                            alt={imgAlt}
                            style={{ maxHeight: 300, objectFit: 'cover', width: '100%' }}
                          />
                        </div>
                        <div className="blog-cardDetail">
                          <ul className="blog-tags"><li>{category}</li></ul>
                          <h3>{displayTitle}</h3>
                          <p>{displayExcerpt}</p>
                          <a href={link} target="_blank" rel="noopener noreferrer">
                            <span>Read More</span> <i className="fa fa-arrow-right-long" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </OwlCarousel>
            )}
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
            <div className="link-area text-center">
              <a href={moreHref} className="primary">More Blogs</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
