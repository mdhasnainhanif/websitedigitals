"use client";

import { useEffect, useMemo, useRef } from "react";

/**
 * WebBannerParallaxEffect (no width/height required on images)
 * - Accepts data: { sectionClass, headingArea, partners[], image, decor[] }
 * - Mouse parallax (desktop) + gentle scroll fallback (touch)
 * - Respects prefers-reduced-motion
 * - Uses native <img> (no Next/Image width/height needed)
 */
export default function WebBannerParallaxEffect({
  data,
  className = "",
  leftColClass = "",
  rightColClass = "",
}) {
  const containerRef = useRef(null);
  const itemsRef = useRef({});
  const speedsRef = useRef({});

  const {
    sectionClass = "section-padding gradient-circle rightCenter-gradient",
    headingArea = {},
    partners = [],
    image = {},         // { src, alt, className, style }
    decor = [],         // [{ key, src, alt, className, style, parallax, speed, speedX, speedY, rotate, scrollSpeed }]
  } = data || {};

  // parallax-enabled decor only
  const parallaxDecor = useMemo(
    () => (Array.isArray(decor) ? decor.filter((d) => d?.parallax) : []),
    [decor]
  );

  // map speeds for each item
  useEffect(() => {
    speedsRef.current = {};
    parallaxDecor.forEach((d, i) => {
      const key = d.key || `decor-${i}`;
      speedsRef.current[key] = {
        x: d.speedX ?? d.speed ?? 12,
        y: d.speedY ?? d.speed ?? 12,
        rotate: d.rotate ?? 0,
        scroll: d.scrollSpeed ?? 0.12,
      };
    });
  }, [parallaxDecor]);

  // Mouse + scroll parallax
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (reduce) return;

    const state = { hasMouse: false, nx: 0, ny: 0 };
    let raf;

    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      state.nx = (e.clientX - cx) / (rect.width / 2); // -1..1
      state.ny = (e.clientY - cy) / (rect.height / 2);
      state.hasMouse = true;
      schedule();
    };
    const onMouseLeave = () => {
      state.hasMouse = false; // drift back to center
      schedule();
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const tx = state.hasMouse ? state.nx : 0;
        const ty = state.hasMouse ? state.ny : 0;
        Object.entries(itemsRef.current).forEach(([key, node]) => {
          if (!node) return;
          const s = speedsRef.current[key] || {};
          node.style.transform = `translate3d(${tx * s.x}px, ${ty * s.y}px, 0) rotate(${tx * (s.rotate || 0)}deg)`;
          node.style.willChange = "transform";
        });
      });
    };

    const onScroll = () => {
      if (state.hasMouse) return; // mouse wins
      const y = window.scrollY || 0;
      Object.entries(itemsRef.current).forEach(([key, node]) => {
        if (!node) return;
        const s = speedsRef.current[key] || {};
        const dy = (y * (s.scroll || 0.1)) % 24;
        node.style.transform = `translate3d(0, ${dy}px, 0)`;
      });
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [parallaxDecor.length]);

  return (
    <section ref={containerRef} className={`${sectionClass} ${className}`}>
      <div className="container">
        <div className="row">
          {/* LEFT: text */}
          <div className={`col-md-6 ${leftColClass}`}>
            <div className="section-heading">
              {!!headingArea.topHeading && <p className="topHeading">{headingArea.topHeading}</p>}
              {!!headingArea.heading && <h2>{headingArea.heading}</h2>}
              {!!headingArea.description && <p>{headingArea.description}</p>}
            </div>

            {partners?.length > 0 && (
              <ul className="partnersUl d-flex gap-3 align-items-center flex-wrap">
                {partners.map((p, i) => (
                  <li key={`partner-${i}`}>
                    <img
                      src={p.src}
                      alt={p.alt || "partner"}
                      loading="lazy"
                      decoding="async"
                      className={p.className || ""}
                      style={{ maxWidth: "100%", height: "auto", ...(p.style || {}) }}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* RIGHT: main + decor */}
          <div className={`col-md-6 ${rightColClass}`}>
            <div className="convertCustomer-area position-relative" style={{ isolation: "isolate" }}>
              {/* Decor (behind/around) */}
              {decor?.map((d, i) => {
                const key = d.key || `decor-${i}`;
                const baseStyle = {
                  position: "absolute",
                  ...(d.style || {}),
                };
                return (
                  <img
                    key={key}
                    ref={(node) => {
                      if (d.parallax) itemsRef.current[key] = node || undefined;
                    }}
                    src={d.src}
                    alt={d.alt || ""}
                    loading={d.loading || "lazy"}
                    decoding="async"
                    className={`decor ${d.className || ""}`.trim()}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      ...baseStyle,
                    }}
                  />
                );
              })}

              {/* Main image */}
              <img
                src={image?.src || "/assets/images/convert-customer/ipad.png"}
                alt={image?.alt || "Banner image"}
                loading={image?.loading || "eager"}
                decoding="async"
                className={image?.className || "main-img"}
                style={{
                  display: "block",
                  maxWidth: "100%",
                  height: "auto",
                  ...(image?.style || {}),
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* scoped styles */}
      <style jsx>{`
        .convertCustomer-area {
          /* no fixed height; let image size define flow */
        }
        .main-img {
          position: relative;
          z-index: 2;
          border-radius: 12px;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
        }
        .decor {
          transition: transform 0.18s ease-out;
          will-change: transform;
          max-width: 11rem !important;
        }

        /* default positions (override via data.decor[i].className or .style) */
        .decor.top-left    { top: -8px; left: -8px; }
        .decor.bottom-left { bottom: -10px; left: -16px; }
        .decor.bottom-right{ bottom: -12px; right: -12px; }

        @media (prefers-reduced-motion: reduce) {
          .decor { transition: none !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}
