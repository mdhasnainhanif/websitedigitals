"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from './About.module.css'

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
  hasRunRef.current = true;

  const areaEl = areaRef.current;
  const duration = options?.durationMs || 2000;

  const containers = Array.from(areaEl.querySelectorAll("[class*='progress_container']"));

  containers.forEach((container) => {
    const target = Number(container.getAttribute("data-countto") || 0);
    const countSpan = container.querySelector("[class*='count']");
    const barEl = container.querySelector("[class*='progress_area']");
    const countBox = container.querySelector("[class*='progress_count']");

    // 1️⃣ fixed positions for circle
    let fixedLeft = 0;
    if (target === 99) fixedLeft = 84;
    else if (target === 77) fixedLeft = 62;
    else if (target === 89) fixedLeft = 74;

    // 2️⃣ set circle immediately (before animation)
    if (countBox) {
      const offset = 12;
      countBox.style.left = `${fixedLeft}%`;
      countBox.style.transform = `translate(calc(-50% + ${offset}px), -50%)`;
    }

    // 3️⃣ animate number and bar fill
    let startTs = 0;
const step = (ts) => {
  if (!startTs) startTs = ts;
  const rawP = Math.min(1, (ts - startTs) / duration);
  const p = easeInOutSine(rawP);
  const now = Math.floor(target * p);

  // update bar fill
  container.style.setProperty("--percent", `${now}%`);
  if (countSpan) countSpan.textContent = `${now}%`;  // <-- yaha % add
  if (barEl) barEl.setAttribute("aria-valuenow", String(now));

  // animate circle left with easing
  if (countBox) {
    const offset = 12;
    const circleLeft = Math.floor(p * fixedLeft); // start 0 → fixedLeft
    countBox.style.left = `${circleLeft}%`;
    countBox.style.transform = `translate(calc(-50% + ${offset}px), -50%)`;
  }

  if (rawP < 1) requestAnimationFrame(step);
};

requestAnimationFrame(step);
  });
}, [options?.durationMs]);

  return (
    <section className={`${styles.section_padding} ${styles.pb_half} ${styles.overflow_hidden} ${className}`}>
      <div className="container">
        <div className="row">
          {/* Left column (copy + partner logos) */}
          <div className="col-md-5">
            <div className={styles.section_heading}>
              <h2>{heading}</h2>
              <p>{description}</p>
            </div>

            {bullets && bullets.length > 0 ? (
              <ul className={styles.partnersUl} style={{ listStyle: "disc", paddingLeft: 18 }}>
                {bullets.map((b, i) => (
                  <li key={`b-${i}`}>{b}</li>
                ))}
              </ul>
            ) : null}

            {partners && partners.length > 0 ? (
              <ul className={styles.partnersUl}>
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
            <div className={styles.progress_containerArea} ref={areaRef}>
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
                  className={styles.progress_container}
                  data-countto={m.target}
                  style={{ "--percent": "0%" }}
                >
                  <h3>{m.label}</h3>
                  <div
                    className={`${styles.progress_area} ${styles[m.barClass] || styles.primary}`}
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={0}
                  >
                    <div className={styles.progress_inner}>
                      <div
                        className={`${styles.progress_fill} ${
                          m.target === 99 ? styles.fill99 :
                          m.target === 77 ? styles.fill77 :
                          m.target === 89 ? styles.fill89 : ""
                        }`}
                      ></div>
                    </div>
                    <div className={styles.progress_count}>
                      <span className={styles.count}></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column (badge) */}
          <div className="col-md-1">
            <div className={styles.top_one}>
              <p>{badgeText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
