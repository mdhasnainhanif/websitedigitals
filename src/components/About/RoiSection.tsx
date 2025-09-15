// components/About/RoiSection.jsx
'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

// small helper: jQuery's "swing" easing ≈ easeInOutSine
const easeInOutSine = (t: number) => 0.5 - Math.cos(Math.PI * t) / 2;

export default function RoiSection() {
  const areaRef = useRef<HTMLDivElement>(null);
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (!areaRef.current || hasRunRef.current) return;

    const areaEl = areaRef.current;

    // Trigger once when the section is in view (like your scroll check with `a` flag)
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        hasRunRef.current = true;
        startAnimation();
      },
      { threshold: 0.25 }
    );

    io.observe(areaEl);
    return () => io.disconnect();

    function startAnimation() {
      const containers = Array.from(
        areaEl.querySelectorAll('.progress-container')
      );

      containers.forEach((container) => {
        const target = Number(container.getAttribute('data-countto') || 0);
        // read existing --percent value (e.g., "0%")
        const currentCss = getComputedStyle(container).getPropertyValue('--percent') || '0%';
        const startVal = parseFloat(currentCss) || 0;

        const countSpan = container.querySelector('.progress-count .count');
        const countBox  = container.querySelector('.progress-count');
        const barEl     = container.querySelector('.progress-area');

        const duration = 2000; // ms (matches your jQuery 2e3)
        let startTs = 0;

        const step = (ts: any) => {
          if (!startTs) startTs = ts;
          const rawP = Math.min(1, (ts - startTs) / duration);
          const p = easeInOutSine(rawP);

          const now = Math.floor(startVal + (target - startVal) * p);

          // Update CSS var for the bar fill
          (container as HTMLElement).style.setProperty('--percent', `${now}%`);

          // Update number text
          if (countSpan) countSpan.textContent = String(now);

          // Update ARIA
          if (barEl) barEl.setAttribute('aria-valuenow', String(now));

          // Inline transform on .progress-count (replicates your jQuery logic)
          // n = parseInt((e / parseInt(o)) * 115);
          // transform: translate(${n ? -1 * n : 0}%, -50%)
          if (countBox) {
            const n = target ? Math.floor((now / target) * 115) : 0;
            const x = n ? -1 * n : 0; // negative translation like your code
            (countBox as HTMLElement).style.transform = `translate(${x}%, -50%)`;
          }

          if (rawP < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
      });
    }
  }, []);

  return (
    <section className="section-padding pb-half overflow-hidden">
      <div className="container">
        <div className="row">
          {/* Left column (copy + partner logos) */}
          <div className="col-md-5">
            <div className="section-heading">
              <h2>Improve Your ROI With Scalable PPC Marketing</h2>
              <p>
                Utilize scalable PPC marketing solutions to increase your return on investment.
                Our tailored PPC strategies are designed to drive targeted traffic to your website,
                increase conversions, and maximize your ROI.
              </p>
            </div>
            <ul className="partnersUl">
              <li>
                <Image src="/assets/images/partners/1.png" width={112} height={52} alt="google partner" />
              </li>
              <li>
                <Image src="/assets/images/partners/3.png" width={112} height={52} alt="trustpilot" />
              </li>
              <li>
                <Image src="/assets/images/partners/2.png" width={112} height={52} alt="clutch" />
              </li>
            </ul>
          </div>

          {/* Middle column (progress meters) */}
          <div className="col-md-6">
            <div className="progress-containerArea" ref={areaRef}>
              {/* 1 */}
              <div className="progress-container" data-countto="99" style={{ ['--percent']: '0%' } as any}>
                <h3>Clickthrough Rate</h3>
                <div className="progress-area primary" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0}>
                  <div className="progress-inner">
                    <div className="progress-fill"></div>
                  </div>
                  <div className="progress-count"><span className="count"></span>%</div>
                </div>
              </div>

              {/* 2 */}
              <div className="progress-container" data-countto="77" style={{ ['--percent']: '0%' } as any}>
                <h3>The Quality Score</h3>
                <div className="progress-area primary-light" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0}>
                  <div className="progress-inner">
                    <div className="progress-fill"></div>
                  </div>
                  <div className="progress-count"><span className="count"></span>%</div>
                </div>
              </div>

              {/* 3 */}
              <div className="progress-container" data-countto="89" style={{ ['--percent']: '0%' } as any}>
                <h3>The Impression Share</h3>
                <div className="progress-area primary-extraLight" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={0}>
                  <div className="progress-inner">
                    <div className="progress-fill"></div>
                  </div>
                  <div className="progress-count"><span className="count"></span>%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column (badge) */}
          <div className="col-md-1">
            <div className="top-one">
              <p>Top 1%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
