// /components/ScrollSection.jsx
"use client";

import { RightArrowIcon } from "@/icons";
import Image from "next/image";
import { useEffect } from "react";

export default function ScrollSection({ data, className, isIconShow }) {
  const {
    sectionClass = "scroller-section pb-5",
    heading = "Limited Time? Launch Faster with Designer-Built Templates",
    description = [],
    showDescription = true, // Boolean flag to control description display
    items = [],
    cta = "",
  } = data || {};

  // Keep left-list "active" state in sync with scroll (no class name changes)
  useEffect(() => {
    if (!items.length) return;

    const sections = items
      .map((it, i) => document.getElementById(it.id || `item-${i}`))
      .filter(Boolean);

    const links = Array.from(document.querySelectorAll(".scroller-list a"));

    const setActive = (id) => {
      links.forEach((a) => {
        a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
      });
    };

    // ----- IntersectionObserver that picks the most visible section -----
    let lastActiveId = null;

    const observer = new IntersectionObserver(
      (entries) => {
        // keep only visible entries
        const visibles = entries
          .filter((e) => e.isIntersecting || e.intersectionRatio > 0)
          // highest intersectionRatio first
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibles.length) {
          const top = visibles[0].target.id;
          if (top && top !== lastActiveId) {
            lastActiveId = top;
            setActive(top);
          }
        }
      },
      // make the "active window" taller so the last card can intersect
      {
        root: null,
        rootMargin: "-30% 0px -30% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    // ----- Bottom-of-page fallback: force the last item active -----
    const onScrollBottomCheck = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
      if (nearBottom && sections.length) {
        const lastId = sections[sections.length - 1].id;
        if (lastId && lastId !== lastActiveId) {
          lastActiveId = lastId;
          setActive(lastId);
        }
      }
    };

    window.addEventListener("scroll", onScrollBottomCheck, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScrollBottomCheck);
    };
  }, [items]);

  const two = (n) => String(n).padStart(2, "0");

  return (
    <section className={`${sectionClass} ${className}`}>
      <div className="container">
        <div className="row">
          {/* LEFT column (sticky list) */}
          <div className="col-md-6">
            <div className="scroller-sticky">
                  <div className="section-heading">
                    <h2>{heading}</h2>
                    {showDescription && Array.isArray(description) && description.length > 0 && (
                      <div className="mt-3">
                        {description.map((para, idx) => (
                          para.trim() ? (
                            <p key={idx} className="mb-2">{para}</p>
                          ) : (
                            <br key={idx} />
                          )
                        ))}
                      </div>
                    )}
                  </div>

              <ul className="scroller-list">
                {items.map((it, i) => (
                  <li key={it.id || i}>
                    <a
                      href={`#${it.id || `item-${i}`}`}
                      className={i === 0 ? "active" : undefined}
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
                {!isIconShow && (
                  <h3>
                    <span>{two(it.step ?? i + 1)}</span>
                    <strong>{it.title}</strong>
                  </h3>
                )}
                {isIconShow && (
                  <>
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="h1 text-dark">
                        {two(it.step ?? i + 1)}
                      </span>
                      <Image
                        className="scrollIcon"
                        src={it.icon}
                        alt={it.title}
                        width={65}
                        height={65}
                      />
                    </div>
                    <h3>
                      <strong>{it.title}</strong>
                    </h3>
                  </>
                )}
                {(it.paragraphs || []).map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* CTA row */}
        {cta?.href && cta?.label ? (
          <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
              <div className="link-area">
                <a href={cta.href} className="primary">
                  {cta.label}
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
