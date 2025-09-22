// /src/components/DigitalMarketingServices/DigitalMarketingServices.jsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { digitalMarketingPageData as defaultData } from "../../../app/Data/digitalMarketingPageData"; // relative import (no alias)

export default function DigitalMarketingServices({ data = defaultData }) {
  const { heading = "Digital Marketing Services", tabs = [] } = data || {};
  if (!tabs.length) return null;

  // remember slide per tab
  const initialIndices = useMemo(() => {
    const obj = {};
    tabs.forEach((t) => (obj[t.id] = 0));
    return obj;
  }, [tabs]);

  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");
  const [indices, setIndices] = useState(initialIndices);

  const go = (tabId, dir) => {
    setIndices((prev) => {
      const max = (tabs.find((t) => t.id === tabId)?.items?.length || 1) - 1;
      const next = Math.max(0, Math.min(max, (prev[tabId] || 0) + dir));
      return { ...prev, [tabId]: next };
    });
  };

  return (
    <section className="section-padding pb-0">
      <div className="container">
        {/* Heading */}
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center">
              <h2 dangerouslySetInnerHTML={{ __html: heading }} />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="row">
          <div className="col-12">
            <div className="basic-tabs small-tabs">
              <ul className="nav nav-tabs" role="tablist">
                {tabs.map((tab) => (
                  <li className="nav-item" key={tab.id}>
                    <button
                      className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                      role="tab"
                      aria-selected={activeTab === tab.id}
                      aria-controls={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") setActiveTab(tab.id);
                      }}
                    >
                      <span>{tab.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Panels */}
        <div className="row">
          <div className="col-12">
            <div className="tab-content digitalMarketing-caseStudy">
              {tabs.map((tab) => {
                const active = activeTab === tab.id;
                const slideIndex = indices[tab.id] || 0;

                return (
                  <div
                    key={tab.id}
                    id={tab.id}
                    role="tabpanel"
                    className={`tab-pane fade ${active ? "active show" : ""}`}
                    aria-hidden={!active}
                  >
                    <div className="digital-marketing-carousel position-relative" data-slider>
                      <div className="slider-rail">
                        {tab.items.map((item, i) => (
                          <div
                            className={`item ${i === slideIndex ? "is-active" : ""}`}
                            key={`${tab.id}-${i}`}
                            aria-hidden={i !== slideIndex}
                            style={{ display: i === slideIndex ? "block" : "none" }}
                          >
                            <div className="row align-items-center">
                              <div className="col-md-6">
                                <div className="digitalMarketing-caseStudy-imageArea">
                                  <h2>{item.brand}</h2>
                                  <Image
                                    src={item.mainImage}
                                    alt={item.mainImageAlt || item.brand}
                                    width={669}
                                    height={641}
                                    priority={active && i === slideIndex}
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="digitalMarketing-caseStudy-detailArea">
                                  <h3 dangerouslySetInnerHTML={{ __html: item.kpiHeading }} />
                                  <ul className="list-unstyled d-flex flex-wrap gap-3">
                                    {item.stats?.map((s, idx) => (
                                      <li key={`stat-${idx}`} style={{ minWidth: 200 }}>
                                        <Image src={s.img} alt={s.label} width={213} height={119} />
                                        <h3>{s.value}</h3>
                                        <p>{s.label}</p>
                                      </li>
                                    ))}
                                  </ul>

                                  <div className="digitalMarketing-caseStudy-details">
                                    <div className="row rowGap2">
                                      <div className="col-md-4">
                                        <h3>Challenges</h3>
                                        <p>{item.details?.challenges}</p>
                                      </div>
                                      <div className="col-md-4">
                                        <h3>Solutions</h3>
                                        <p>{item.details?.solutions}</p>
                                      </div>
                                      <div className="col-md-4">
                                        <h3>Results</h3>
                                        <p>{item.details?.results}</p>
                                        {!!item.details?.resultsImg && (
                                          <Image
                                            src={item.details.resultsImg}
                                            alt="Results"
                                            width={175}
                                            height={55}
                                          />
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Controls */}
                      <div className="slider-controls d-flex gap-2 mt-3">
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={() => go(tab.id, -1)}
                          disabled={(indices[tab.id] || 0) <= 0}
                          aria-label="Previous"
                        >
                          ‹
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={() => go(tab.id, +1)}
                          disabled={(indices[tab.id] || 0) >= tab.items.length - 1}
                          aria-label="Next"
                        >
                          ›
                        </button>

                        <div className="ms-2 d-flex align-items-center gap-1">
                          {tab.items.map((_, dotIdx) => (
                            <button
                              key={`dot-${dotIdx}`}
                              type="button"
                              className={`dot ${dotIdx === (indices[tab.id] || 0) ? "active" : ""}`}
                              onClick={() =>
                                setIndices((prev) => ({ ...prev, [tab.id]: dotIdx }))
                              }
                              aria-label={`Go to slide ${dotIdx + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* tiny styles for dots/animation */}
            <style jsx>{`
              .slider-controls .dot {
                width: 8px;
                height: 8px;
                border-radius: 999px;
                border: 1px solid #999;
                background: transparent;
              }
              .slider-controls .dot.active { background: #333; }
              [data-slider] .item.is-active { animation: fadeIn 280ms ease; }
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(4px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
