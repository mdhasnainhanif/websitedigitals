// /src/components/DigitalMarketingServices/DigitalMarketingServices.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { digitalMarketingPageData as defaultData } from "../../../app/Data/digitalMarketingPageData";


export default function DigitalMarketingServices({ data = defaultData }) {
  const { heading = "Digital Marketing Services", tabs = [] } = data || {};
  if (!tabs.length) return null;

  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");
  const containerRef = useRef(null);

  // ✅ Initialize Owl Carousel (arrows only) for the active tab
  useEffect(() => {
    let cleanupFns = [];

    (async () => {
      if (typeof window === "undefined" || !containerRef.current) return;

      // Ensure jQuery & Owl are loaded on client
      const $ = (await import("jquery")).default;
      window.$ = window.jQuery = $;
      await import("owl.carousel");

      // Find the carousel inside the active tab only
      const $activePanel = $(`#${CSS.escape(activeTab)}`, containerRef.current);
      const $carousel = $activePanel.find(".owl-carousel");

      // If already initialized, skip
      if ($carousel.length && !$carousel.hasClass("owl-loaded")) {
        $carousel.owlCarousel({
          loop: true,
          margin: 10,
          nav: true,  
          dots: false,
          navText: [
            // LEFT (chevron)
            '<span className="owl-prev-btn" aria-hidden="true" title="Previous">' +
              '<svg width="20" height="20" viewBox="0 0 24 24" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path d="M21 11H5.41l5.3-5.29a1 1 0 1 0-1.42-1.42l-7 7a1 1 0 0 0 0 1.42l7 7a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L5.41 13H21a1 1 0 0 0 0-2" style="fill:#000"/></svg>' +
            '</span>',
            // RIGHT (chevron)
            '<svg width="20" height="20" viewBox="0 0 24 24" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color"><path d="m21.71 11.29-7-7a1 1 0 0 0-1.42 1.42l5.3 5.29H3a1 1 0 0 0 0 2h15.59l-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l7-7a1 1 0 0 0 0-1.42" style="fill:#000"/></svg>' +
            '</span>',
          ],
          responsive: {
            // You can change these like your example; keeping 1 per slide makes sense for this layout
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 },
          },
        });

        // Cleanup for this specific instance
        cleanupFns.push(() => {
          try {
            $carousel.trigger("destroy.owl.carousel");
          } catch (_) {}
        });
      }
    })();

    return () => {
      // destroy any initialized instances when tab changes/unmounts
      cleanupFns.forEach((fn) => fn());
      cleanupFns = [];
    };
  }, [activeTab]);

  return (
    <section className="section-padding pb-0">
      <div className="container" ref={containerRef}>
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

                return (
                  <div
                    key={tab.id}
                    id={tab.id}
                    role="tabpanel"
                    className={`tab-pane fade ${active ? "active show" : ""}`}
                    aria-hidden={!active}
                  >
                    <div className="owl-carousel owl-theme digitalMarketingCarousel">
                      {tab.items.map((item, i) => (
                        <div className="item" key={`${tab.id}-${i}`}>
                          <div className="row align-items-center">
                            <div className="col-md-6">
                              <div className="digitalMarketing-caseStudy-imageArea">
                                <h2>{item.brand}</h2>
                                <Image
                                  src={item.mainImage}
                                  alt={item.mainImageAlt || item.brand}
                                  width={669}
                                  height={641}
                                  // priority only matters when visible; Owl handles visibility
                                  priority={active}
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
                    {/* /owl-carousel */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* (Optional) tiny style touch-ups if needed */}
        <style jsx>{`
          /* Hide dots globally just in case some theme adds them */
          :global(.owl-dots) {
            display: none !important;
          }
          /* Make owl nav (arrows) nicely spaced */
          :global(.owl-nav) {
            display: flex;
            justify-content: space-between;
            margin-top: 12px;
          }
          :global(.owl-nav button.owl-prev),
          :global(.owl-nav button.owl-next) {
            border: 1px solid #ddd;
            padding: 6px 12px;
            border-radius: 6px;
          }
        `}</style>
      </div>
    </section>
  );
}
