// components/IndustryTabs.jsx
"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import Link from "next/link";

/**
 * Props:
 * - data: Array<{ id, title, items: Array<{
 *      title, href, desc,
 *      // EITHER provide one image:
 *      icon?,
 *      // OR provide two images for hover-swap:
 *      normalImg?, whiteImg?,
 *      alt?
 *   }> }>
 * - heading?: string
 * - subheading?: string
 * - grayBgVar?: string  (CSS var name or color)
 * - imgSize?: number    (default 67)
 */
export default function IndustryTabs({
  data = [],
  heading = "Launch Your Industry Website Today, Don’t Get Left Behind!",
  subheading = "Our user-friendly platform helps you create a website that perfectly suits your unique business and industry requirements.",
  grayBgVar = "var(--gray-bg)",
  imgSize = 67,
}) {
  const firstId = useMemo(() => data?.[0]?.id ?? "", [data]);
  const [active, setActive] = useState(firstId);
  const scrollRef = useRef(null);
  const carouselRef = useRef(null);
  const initialized = useRef(false);

  // keep active in sync if data changes
  useEffect(() => {
    setActive((prev) => (data.some((t) => t.id === prev) ? prev : firstId));
  }, [data, firstId]);

  const onKeyActivate = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(id);
    }
  };

  // Initialize Owl Carousel (no-op if not present)
  useEffect(() => {
    const initializeCarousel = () => {
      if (
        typeof window !== "undefined" &&
        window.$ &&
        window.$.fn?.owlCarousel &&
        carouselRef.current &&
        !initialized.current
      ) {
        window.$(carouselRef.current).owlCarousel({
          items: 4,
          loop: false,
          autoplay: false,
          nav: true,
          navText: [
            '<svg width="26" height="26" viewBox="0 0 24 24" class="icon"><path d="M21 11H5.41l5.3-5.29a1 1 0 1 0-1.42-1.42l-7 7a1 1 0 0 0 0 1.42l7 7a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.41 13H21a1 1 0 0 0 0-2"/></svg>',
            '<svg width="26" height="26" viewBox="0 0 24 24" class="icon"><path d="m21.71 11.29-7-7a1 1 0 0 0-1.42 1.42l5.3 5.29H3a1 1 0 0 0 0 2h15.59l-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l7-7a1 1 0 0 0 0-1.42"/></svg>',
          ],
          dots: false,
          margin: 15,
          slideBy: 1,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,
          freeDrag: false,
          responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 4 },
          },
        });
        initialized.current = true;
      } else if (!initialized.current) {
        // Try again shortly if scripts aren't ready
        setTimeout(initializeCarousel, 120);
      }
    };

    initializeCarousel();

    // Cleanup
    return () => {
      if (
        typeof window !== "undefined" &&
        window.$ &&
        window.$.fn?.owlCarousel &&
        carouselRef.current &&
        initialized.current
      ) {
        try {
          window.$(carouselRef.current).owlCarousel("destroy");
        } catch {}
        initialized.current = false;
      }
    };
  }, [data]);

  const renderIconBlock = (item) => {
    const alt = item.alt || item.title || "Service icon";

    // Two-image (hover swap) mode
    if (item.normalImg && item.whiteImg) {
      return (
        <>
          <img
            src={item.normalImg}
            width={imgSize}
            height={imgSize}
            className="service-normal-img"
            alt={alt}
            loading="lazy"
          />
          <img
            src={item.whiteImg}
            width={imgSize}
            height={imgSize}
            className="service-white-img"
            alt={alt}
            loading="lazy"
          />
        </>
      );
    }

    // Single-image mode (icon)
    if (item.icon) {
      return (
        <img
          src={item.icon}
          width={imgSize}
          height={imgSize}
          className="service-icon-single"
          alt={alt}
          loading="lazy"
        />
      );
    }

    // Fallback: nothing (or you can render a placeholder)
    return null;
  };

  return (
    <section className="section-padding" style={{ background: grayBgVar }}>
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 col-sm-12 text-center">
            <div className="section-heading">
              <h2>{heading}</h2>
              <p>{subheading}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-sm-12">
            {/* Tab Navigation */}
            <div className="scroll-tabs-main mb-4">
              <div
                className="tabs-scroll"
                ref={scrollRef}
                role="tablist"
                aria-label="Industry tabs"
              >
                <div
                  ref={carouselRef}
                  className="owl-carousel nav-tabs industryTabsSlider border-0"
                >
                  {data.map((tab) => (
                    <div className="item nav-item" key={tab.id}>
                      <button
                        type="button"
                        className={`nav-link ${active === tab.id ? "active" : ""}`}
                        role="tab"
                        aria-selected={active === tab.id}
                        aria-controls={tab.id}
                        tabIndex={0}
                        onClick={() => setActive(tab.id)}
                        onKeyDown={(e) => onKeyActivate(e, tab.id)}
                      >
                        <h3>{tab.title}</h3>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {data.map((tab) => (
                <div
                  key={tab.id}
                  className={`tab-pane fade ${active === tab.id ? "show active" : ""}`}
                  role="tabpanel"
                  aria-labelledby={`${tab.id}-tab`}
                  id={tab.id}
                >
                  <div className="row gy-3">
                    {tab.items?.map((item, idx) => (
                      <div className="col-lg-4 col-sm-12" key={`${tab.id}-${idx}`}>
                        <div className="single-contentWriting-card">
                          <div className="head">
                            {renderIconBlock(item)}
                            <p>
                              <Link href={item.href ?? "#"}>{item.title}</Link>
                            </p>
                          </div>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    ))}

                    {/* Graceful empty state */}
                    {!tab.items?.length && (
                      <div className="col-12 text-center text-muted py-4">
                        No items available.
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Graceful empty state for tabs */}
              {!data?.length && (
                <div className="text-center text-muted py-5">No categories found.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
