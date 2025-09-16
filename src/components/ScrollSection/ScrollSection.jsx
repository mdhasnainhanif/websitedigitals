// /components/ScrollSection.jsx
'use client';

import { useEffect } from 'react';

export default function ScrollSection({
  heading = 'Limited Time? Launch Faster with Designer-Built Templates',
  items = [], // [{ id, step?, title, paragraphs:[...], image:{ src, alt, width, height } }]
  ctaHref = '/portfolio',
  ctaLabel = 'View More Templates',
}) {
  // Keep left-list "active" state in sync with scroll (no class name changes)
  useEffect(() => {
    if (!items.length) return;

    const sections = items
      .map((it, i) => document.getElementById(it.id || `item-${i}`))
      .filter(Boolean);

    const links = Array.from(
      document.querySelectorAll('.scroller-list a')
    );

    const setActive = (id) => {
      links.forEach((a) => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.2, 0.6] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [items]);

  const two = (n) => String(n).padStart(2, '0');

  return (
    <section className="scroller-section pb-5">
      <div className="container">
        <div className="row">
          {/* LEFT column (sticky list) */}
          <div className="col-md-6">
            <div className="scroller-sticky">
              <div className="section-heading">
                <h2>{heading}</h2>
              </div>

              <ul className="scroller-list">
                {items.map((it, i) => (
                  <li key={it.id || i}>
                    <a
                      href={`#${it.id || `item-${i}`}`}
                      className={i === 0 ? 'active' : undefined}
                    >
                      <span>{two(it.step ?? i + 1)}</span>
                      <p>{it.title}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT column (scroller items) */}
          <div className="col-md-6">
            {items.map((it, i) => (
              <div
                className="scroller-item"
                id={it.id || `item-${i}`}
                key={it.id || i}
              >
                <img
                  className="w-100"
                  src={it.image?.src}
                  width={it.image?.width ?? 669}
                  height={it.image?.height ?? 376}
                  alt={it.image?.alt || it.title}
                  loading="lazy"
                  decoding="async"
                />
                <h3>
                  <span>{two(it.step ?? i + 1)}</span>
                  <strong>{it.title}</strong>
                </h3>
                {(it.paragraphs || []).map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* CTA row */}
        {ctaHref && ctaLabel ? (
          <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
              <div className="link-area">
                <a href={ctaHref} className="primary">
                  {ctaLabel}
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
