"use client";

import Image from "next/image";

export default function MomentumSection({ data }) {
  const {
    sectionClass = "section-padding dark-section",
    heading = "The Momentum Process",
    steps = [],
  } = data || {};

  return (
    <section className={sectionClass}>
      <div className="container">
        <div className="row">
          {/* Heading */}
          <div className="col-12">
            <div className="section-heading text-center">
              <h2>{heading}</h2>
            </div>
          </div>

          {/* Steps */}
          <div className="col-12">
            <ul className="process-area" id="process-area">
              {steps.map((step, idx) => (
                <li key={idx}>
                  {/* icon image */}
                  {step.img && (
                    <Image
                      src={step.img}
                      alt={step.alt || step.title}
                      width={step.width || 85}
                      height={step.height || 85}
                    />
                  )}

                  {/* detail */}
                  <div className="process-detail">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <div className="process-text"></div>
                  </div>

                  {/* optional svg */}
                  {step.svg && (
                    <div
                      className={`absoluteImage fillSVG ${step.svg.className || ""}`}
                      dangerouslySetInnerHTML={{ __html: step.svg.code }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
