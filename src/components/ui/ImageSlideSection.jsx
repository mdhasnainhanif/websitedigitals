"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

export default function ImageSlideSection({ imageSlideSectionData = {} , className = "" }) {
  const {
    id = "image-slide-section",
    bgColor = "transparent",
    headingHTML = "",
    description = "",
    cta = null,
    durationSec = 10, // seconds per tab
    tabs = [],
  } = imageSlideSectionData;

  const IMAGE_BASE = useMemo(() => {
    const base = process.env.NEXT_PUBLIC_IMAGE_PATH || "/frontend";
    return base.endsWith("/") ? base.slice(0, -1) : base;
  }, []);

  const resolveSrc = (s) => {
    if (!s) return "";
    if (s.startsWith("http") || s.startsWith("/")) return s;
    return `${IMAGE_BASE}${s}`;
  };

  const hasTabs = tabs && tabs.length > 0;
  const [active, setActive] = useState(0);
  const timeoutRef = useRef(null);

  // cross-fade states
  const [currSrc, setCurrSrc] = useState("");
  const [prevSrc, setPrevSrc] = useState("");
  const [prevShouldFade, setPrevShouldFade] = useState(false);
  const fadeTimeoutRef = useRef(null);
  const raf1Ref = useRef(0);
  const raf2Ref = useRef(0);
  const [imgDims, setImgDims] = useState({ w: 669, h: 631 });

  const getDurMs = (i) => 1000 * (tabs[i]?.durationSec || durationSec || 10);
  const nextIndex = (i) => (i + 1) % (hasTabs ? tabs.length : 1);

  const clearTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  };

  const armTimer = (i) => {
    clearTimer();
    if (!hasTabs) return;
    const total = getDurMs(i);
    timeoutRef.current = setTimeout(
      () => setActive((p) => nextIndex(p)),
      total
    );
  };

  // Auto-advance whenever active changes
  useEffect(() => {
    armTimer(active);
    return clearTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, durationSec, tabs?.length]);

  // Initialize first image
  useEffect(() => {
    if (!hasTabs) return;
    if (!currSrc) {
      const first = resolveSrc(tabs[0]?.image?.src || "");
      setCurrSrc(first);
      setImgDims({
        w: tabs[0]?.image?.width || 669,
        h: tabs[0]?.image?.height || 631,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasTabs]);

  // On tab (active) change: cross-fade
  useEffect(() => {
    if (!hasTabs) return;
    const next = resolveSrc(tabs[active]?.image?.src || "");
    const nextDims = {
      w: tabs[active]?.image?.width || 669,
      h: tabs[active]?.image?.height || 631,
    };
    if (!next || next === currSrc) return;

    // Bootstrap tab style fade: first fade out current, then fade in next
    setPrevSrc(currSrc);
    setPrevShouldFade(false);
    setImgDims(nextDims);

    // Start fade out of current image
    if (raf1Ref.current) cancelAnimationFrame(raf1Ref.current);
    if (raf2Ref.current) cancelAnimationFrame(raf2Ref.current);
    raf1Ref.current = requestAnimationFrame(() => {
      raf2Ref.current = requestAnimationFrame(() => {
        setPrevShouldFade(true);

        // After fade out completes, set new image and fade it in
        setTimeout(() => {
          setCurrSrc(next);
          setPrevSrc("");
        }, 300); // Match CSS transition duration
      });
    });

    return () => {
      if (raf1Ref.current) cancelAnimationFrame(raf1Ref.current);
      if (raf2Ref.current) cancelAnimationFrame(raf2Ref.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <section
      className={`section-padding gray-section position-relative {className}`}
      id={id}
      style={{ background: bgColor }}
    >
      <div className="container">
        <div className="row">
          {/* Left: copy + tabs */}
          <div className="col-lg-6 col-md-6 col-12 my-auto">
            <div className="section-heading">
              {headingHTML ? (
                <h2 dangerouslySetInnerHTML={{ __html: headingHTML }} />
              ) : null}
              {description ? <p>{description}</p> : null}
            </div>

            {cta?.label ? (
              <div className="link-area mb-5">
                {cta.href ? (
                  <Link
                    href={cta.href}
                    className={
                      cta.className || "offer-btn primary business-report-btn"
                    }
                  >
                    {cta.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className={
                      cta.className || "offer-btn primary business-report-btn"
                    }
                    onClick={cta.onClick}
                  >
                    {cta.label}
                  </button>
                )}
              </div>
            ) : null}

            {/* React-driven tabs (no Bootstrap JS) */}
            <nav className="mt-5">
              <div
                className="custom-tabs2 nav nav-tabs border-0"
                role="tablist"
                style={{
                  ["--duration"]: `${
                    tabs[active]?.durationSec || durationSec
                  }s`,
                }}
              >
                {hasTabs &&
                  tabs.map((t, i) => (
                    <button
                      key={t.key || i}
                      className={`nav-link ${
                        i === active ? "active activeAnimation" : ""
                      }`}
                      type="button"
                      role="tab"
                      aria-selected={i === active}
                      onClick={() => setActive(i)}
                    >
                      <h3>{t.title}</h3>
                      {t.text ? <p>{t.text}</p> : null}
                      <div className="scrollanimation-bar">
                        <div
                          className="scrollanimation-bar-timer"
                          key={i === active ? `timer-${active}` : `idle-${i}`}
                        />
                      </div>
                    </button>
                  ))}
              </div>
            </nav>
          </div>

          {/* Right: cross-fade images */}
          <div className="col-lg-6 col-md-6 col-12">
            <div className="tab-content">
              <div className="image-fader" style={{ minHeight: imgDims.h }}>
                {prevSrc ? (
                  <img
                    src={prevSrc}
                    className={`img-fluid fader-img is-prev ${
                      prevShouldFade ? "fade-out" : ""
                    }`}
                    width={imgDims.w}
                    height={imgDims.h}
                    alt=""
                    aria-hidden="true"
                  />
                ) : null}
                {currSrc ? (
                  <img
                    src={currSrc}
                    className="img-fluid fader-img is-active"
                    width={imgDims.w}
                    height={imgDims.h}
                    alt={tabs[active]?.image?.alt || tabs[active]?.title || ""}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glow001"></div>
    </section>
  );
}
