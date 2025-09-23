"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";

/**
 * WebBannerParallaxEffect
 * - data-driven content + parallax decor
 * - mouse parallax on desktop, gentle scroll drift fallback
 * - respects prefers-reduced-motion
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
    image = {},
    decor = [],
  } = data || {};

  // only parallax-enabled decor
  const parallaxDecor = useMemo(
    () => (Array.isArray(decor) ? decor.filter((d) => d?.parallax) : []),
    [decor]
  );

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

  // Mouse + scroll parallax (reduced motion safe)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) return;

    const state = { hasMouse: false, nx: 0, ny: 0 };
    let raf;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      state.nx = (e.clientX - cx) / (rect.width / 2); // -1..1
      state.ny = (e.clientY - cy) / (rect.height / 2);
      state.hasMouse = true;
      schedule();
    };
    const onMouseLeave = () => {
      state.hasMouse = false;
      schedule();
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const tx = state.hasMouse ? state.nx : 0;
        const ty = state.hasMouse ? state.ny : 0;
        Object.entries(itemsRef.current).forEach(([key, el]) => {
          if (!el) return;
          const s = speedsRef.current[key] || {};
          el.style.transform = `translate3d(${tx * s.x}px, ${ty * s.y}px, 0) rotate(${tx * (s.rotate || 0)}deg)`;
          el.style.willChange = "transform";
        });
      });
    };

    const onScroll = () => {
      if (state.hasMouse) return; // mouse wins
      const y = window.scrollY || 0;
      Object.entries(itemsRef.current).forEach(([key, el]) => {
        if (!el) return;
        const s = speedsRef.current[key] || {};
        const dy = (y * (s.scroll || 0.1)) % 24;
        el.style.transform = `translate3d(0, ${dy}px, 0)`;
      });
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
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
                    <Image
                      src={p.src}
                      alt={p.alt || "partner"}
                      width={p.width || 112}
                      height={p.height || 52}
                      priority={!!p.priority}
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
                const baseStyle = { position: "absolute", ...(d.style || {}) };
                return (
                  <Image
                    key={key}
                    ref={(el) => {
                      if (d.parallax) itemsRef.current[key] = el;
                    }}
                    src={d.src}
                    alt={d.alt || ""}
                    width={d.width || 1}
                    height={d.height || 1}
                    className={`decor ${d.className || ""}`.trim()}
                    priority={!!d.priority}
                    style={baseStyle}
                  />
                );
              })}

              {/* Main */}
              <Image
                src={image?.src || "/assets/images/convert-customer/ipad.png"}
                alt={image?.alt || "Banner image"}
                width={image?.width || 468}
                height={image?.height || 613}
                className={image?.className || "main-img"}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* scoped styles */}
      <style jsx>{`
        .convertCustomer-area {
          min-height: ${Math.max(image?.height || 613, 420)}px;
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
        }
        /* default positions (can be overridden via item.style or className) */
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
