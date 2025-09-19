"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// jQuery "swing" ≈ easeInOutSine
const easeInOutSine = (t) => 0.5 - Math.cos(Math.PI * t) / 2;

export default function RoiSection({ data, className = "" }) {
  const areaRef = useRef(null);
  const hasRunRef = useRef(false);

  const {
    heading = "Improve Your ROI With Scalable PPC Marketing",
    description = "Utilize scalable PPC marketing solutions to increase your return on investment. Our tailored PPC strategies are designed to drive targeted traffic to your website, increase conversions, and maximize your ROI.",
    bullets = [],
    partners = [],
    metrics = [], // [{label, target, barClass}]
    badgeText = "Top 1%",
    options = { durationMs: 2000, threshold: 0.25 },
  } = data || {};

  useEffect(() => {
    if (!areaRef.current || hasRunRef.current) return;

    const areaEl = areaRef.current;
    const duration = options && typeof options.durationMs === "number" ? options.durationMs : 2000;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        hasRunRef.current = true;
        startAnimation();
      },
      { threshold: options && typeof options.threshold === "number" ? options.threshold : 0.25 }
    );

    io.observe(areaEl);
    return () => io.disconnect();

    function startAnimation() {
      const containers = Array.from(areaEl.querySelectorAll(".progress-container"));

      containers.forEach((container) => {
        const target = Number(container.getAttribute("data-countto") || 0);
        const currentCss = getComputedStyle(container).getPropertyValue("--percent") || "0%";
        const startVal = parseFloat(currentCss) || 0;

        const countSpan = container.querySelector(".progress-count .count");
        const barEl = container.querySelector(".progress-area");
        const countBox = container.querySelector(".progress-count");

        let startTs = 0;
        const step = (ts) => {
          if (!startTs) startTs = ts;
          const rawP = Math.min(1, (ts - startTs) / duration);
          const p = easeInOutSine(rawP);
          const now = Math.floor(startVal + (target - startVal) * p);

          container.style.setProperty("--percent", `${now}%`);
          if (countSpan) countSpan.textContent = String(now);
          if (barEl) barEl.setAttribute("aria-valuenow", String(now));

          // move % badge along the bar (same logic as your jQuery)
          if (countBox) {
            const n = target ? Math.floor((now / target) * 115) : 0;
            const x = n ? -1 * n : 0;
            countBox.style.transform = `translate(${x}%, -50%)`;
          }

          if (rawP < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
      });
    }
  }, [options?.durationMs, options?.threshold]);

  return (
    <section className={`section-padding pb-half overflow-hidden ${className}`}>
      <div className="container">
        <div className="row">
          {/* Left column (copy + partner logos) */}
          <div className="col-md-5">
            <div className="section-heading">
              <h2>{heading}</h2>
              <p>{description}</p>
            </div>

            {bullets && bullets.length > 0 ? (
              <ul className="partnersUl" style={{ listStyle: "disc", paddingLeft: 18 }}>
                {bullets.map((b, i) => (
                  <li key={`b-${i}`}>{b}</li>
                ))}
              </ul>
            ) : null}

            {partners && partners.length > 0 ? (
              <ul className="partnersUl">
                {partners.map((p, i) => (
                  <li key={`partner-${i}`}>
                    <Image
                      src={p.src}
                      width={p.width || 112}
                      height={p.height || 52}
                      alt={p.alt || "partner"}
                    />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {/* Middle column (progress meters) */}
          <div className="col-md-6">
            <div className="progress-containerArea" ref={areaRef}>
              {(metrics && metrics.length > 0
                ? metrics
                : [
                    { label: "Clickthrough Rate", target: 99, barClass: "primary" },
                    { label: "The Quality Score", target: 77, barClass: "primary-light" },
                    { label: "The Impression Share", target: 89, barClass: "primary-extraLight" },
                  ]
              ).map((m, i) => (
                <div
                  key={`metric-${i}`}
                  className="progress-container"
                  data-countto={m.target}
                  style={{ "--percent": "0%" }}
                >
                  <h3>{m.label}</h3>
                  <div
                    className={`progress-area ${m.barClass || "primary"}`}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={0}
                  >
                    <div className="progress-inner">
                      <div className="progress-fill"></div>
                    </div>
                    <div className="progress-count">
                      <span className="count"></span>%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column (badge) */}
          <div className="col-md-1">
            <div className="top-one">
              <p>{badgeText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
