"use client";
import { useEffect, useRef, useState } from "react";

export default function PortfolioSection({ tabs = [], itemsByTab = {} }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");
  const [openBlock, setOpenBlock] = useState(null); // { tabId, anchorIndex, content }
  const headerHeightRef = useRef(0);
  const rowRef = useRef(null);
  const injectedRef = useRef(null); // 👈 NEW

  useEffect(() => {
    const h = document.querySelector(".header");
    headerHeightRef.current = h ? h.clientHeight : 0;
  }, []);

  // 👇 NEW: after the injected area renders, scroll to it (with header offset)
  useEffect(() => {
    if (!openBlock || !injectedRef.current) return;
    const el = injectedRef.current;
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeightRef.current - 12;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [openBlock]);

  const handleCardClick = (item, tabId) => {
    // ✅ if data is coming as hidden HTML, parse it once
    if (
      (!item.caseStudy || !item.caseStudy.images?.length) &&
      item.hiddenHTML
    ) {
      const parsed = parseHiddenCaseStudy(item.hiddenHTML);
      item.caseStudy = {
        images: parsed.images,
        detailHTML: parsed.detailHTML,
        links: { launchHref: parsed.launchHref },
      };
    }

    const isMobile = window.innerWidth < 767;
    const e = item.index; // make sure your indices are 1-based (7,8,9...)
    const anchorIndex = isMobile ? e : 3 * Math.ceil(e / 3); // jQuery parity

    const content = renderCaseStudyContent(item);
    setOpenBlock({ tabId, anchorIndex, content });

    // ❌ removed RAF scroll — handled reliably in useEffect after render
  };

  const closeCaseStudy = () => setOpenBlock(null);

  /** CASE STUDY CONTENT (tabs + panes + right side) */
  const renderCaseStudyContent = (item) => {
    const tabsThumbs = item.caseStudy?.images || [];

    const rightSide = (() => {
      if (item.variant === "v2") {
        return (
          <div className="webPortfolio-caseStudyDetailArea">
            {item.card?.titleImg && <img src={item.card.titleImg} alt="" />}
            <div className="webPortfolio-caseStudyDetail">
              <div
                dangerouslySetInnerHTML={{
                  __html: item.caseStudy?.detailHTML || "",
                }}
              />
              <div className="link-area">
                <a
                  href="#"
                  className="primary offer-btn"
                  style={{
                    fontSize: "13px",
                    minHeight: "auto",
                    padding: "13px 18px",
                  }}
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        );
      }

      if (item.variant === "v5") {
        return (
          <div className="webPortfolio-caseStudyDetailArea">
            {item.card?.titleImg && <img src={item.card.titleImg} alt="" />}
            {item.caseStudy?.dynamicIntroHTML && (
              <p
                style={{
                  fontSize: ".9rem",
                  marginBottom: "3rem",
                  padding: "0 2rem 1.5rem 2rem",
                }}
                dangerouslySetInnerHTML={{
                  __html: item.caseStudy.dynamicIntroHTML,
                }}
              />
            )}
            <div className="webPortfolio-caseStudyDetail">
              <div
                dangerouslySetInnerHTML={{
                  __html: item.caseStudy?.detailHTML || "",
                }}
              />
              {item.caseStudy?.beforeAfterHTML && (
                <div className="view-before-after-div">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const modal = document.getElementById("portfolioModal");
                      if (!modal) return;
                      modal.innerHTML = `
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-body">
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <i className="fa-solid fa-xmark"></i>
                              </button>
                              <div className="row">
                                <div className="col-lg-5 col-sm-12 my-auto position-relative">
                                  <div className="section-heading">
                                    <h2>Revitalize Your Website Design</h2>
                                    <p>Compare the before and after to see how a fresh design boosts your site’s performance.</p>
                                  </div>
                                  <img className="arrow-absolute" src="https://www.websitedigitals.com/frontend/assets/images/arrow-blue.png" width="100%" alt="Arrow">
                                </div>
                                <div className="col-lg-7 col-sm-12">
                                  <div className="before-after-div">
                                    ${item.caseStudy.beforeAfterHTML}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>`;
                      modal.style.display = "block";
                      modal.classList.add("show");
                    }}
                    id="portfolioModalopen"
                  >
                    View Before &amp; After
                    <img
                      src="https://www.websitedigitals.com/frontend/assets/images/arrow-blue.png"
                      width="100%"
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        );
      }

      // default: home/static
      return (
        <div className="webPortfolio-caseStudyDetailArea">
          {item.card?.titleImg && <img src={item.card.titleImg} alt="" />}
          <div className="webPortfolio-caseStudyDetail">
            <div
              dangerouslySetInnerHTML={{
                __html: item.caseStudy?.detailHTML || "",
              }}
            />
            {(item.caseStudy?.links?.launchHref ||
              item.caseStudy?.links?.briefHref) && (
              <div className="link-area">
                {item.caseStudy.links.launchHref && (
                  <a
                    href={item.caseStudy.links.launchHref}
                    className="primary"
                    style={{
                      fontSize: "13px",
                      minHeight: "auto",
                      padding: "13px 18px",
                    }}
                  >
                    View Case study
                  </a>
                )}
                {item.caseStudy.links.briefHref && (
                  <a
                    href={item.caseStudy.links.briefHref}
                    style={{
                      fontSize: "13px",
                      minHeight: "auto",
                      fontWeight: 700,
                      background: "transparent",
                      color: "#000",
                    }}
                  >
                    {item.caseStudy.links.briefLabel || "Let's build website"}{" "}
                    <i className="fa-solid fa-angles-right" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      );
    })();

    return (
      <div className="row webPortfolio-caseStudyArea">
        <div
          className="webPortfolio-caseStudyClose"
          role="button"
          onClick={closeCaseStudy}
        >
          <i className="fa-solid fa-xmark" />
        </div>

        <div className="col-md-8">
          <div className="webPortfolio-caseStudyTabsArea">
            <div className="webPortfolio-caseStudyTabs">
              <ul className="nav nav-tabs">
                {tabsThumbs.map((src, i) => (
                  <li className="nav-item" key={`thumb-${i}`}>
                    <a
                      className={`nav-link ${i === 0 ? "active" : ""}`}
                      href={`#website-caseStudy${i + 1}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const area = e.currentTarget.closest(
                          ".webPortfolio-caseStudyTabsArea"
                        );
                        const panes = area.querySelectorAll(".tab-pane");
                        const links = area.querySelectorAll(".nav-link");
                        links.forEach((l) => l.classList.remove("active"));
                        e.currentTarget.classList.add("active");
                        panes.forEach((p, idx) => {
                          p.classList.remove("show", "active");
                          if (idx === i) p.classList.add("show", "active");
                        });
                      }}
                    >
                      <img src={src} alt="" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tab-content webPortfolio-caseStudy-content">
              {tabsThumbs.map((src, i) => (
                <div
                  key={`pane-${i}`}
                  className={`tab-pane fade ${i === 0 ? "active show" : ""}`}
                  id={`website-caseStudy${i + 1}`}
                >
                  <div
                    className="webPortfolio-caseStudyImage"
                    style={{ backgroundImage: `url('${src}')` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-4">{rightSide}</div>
      </div>
    );
  };

  // FLAT grid; inject .new-content-area after computed column
  const renderGridWithInjected = (tabId) => {
    const items = itemsByTab[tabId] || [];
    if (!items.length) return null;

    const cols = [];
    const anchorIndex =
      openBlock?.tabId === tabId ? openBlock.anchorIndex : null;

    items.forEach((item) => {
      const cardCls =
        item.variant === "static-portfolio"
          ? "static-portfolio"
          : item.variant === "static_portfolio_2"
          ? "static_portfolio_2"
          : item.variant === "static_portfolio_5"
          ? "static_portfolio_5"
          : "static_portfolio__home";

      cols.push(
        <div
          className={item.colClass}
          data-index={item.index}
          key={`col-${item.index}`}
        >
          <div
            className={`single-webPortfolio ${cardCls}`}
            role="button"
            onClick={(e) => {
              e.preventDefault();
              handleCardClick(item, tabId);
            }}
          >
            <div className="single-webPortfolio">
              <div className="webPortfolio-imageArea">
                <div className="main-imageArea">
                  <div className="backImage">
                    <img
                      src={item.card.backImage}
                      alt={item.card.title}
                      width="480"
                      height="471"
                    />
                  </div>
                  <div className="frontImage">
                    <img
                      src={item.card.frontImage}
                      alt={item.card.title}
                      width="501"
                      height="471"
                    />
                  </div>
                </div>
                <div className="right-imageArea">
                  <img
                    src={item.card.rightImage}
                    alt={item.card.title}
                    width="271"
                    height="457"
                  />
                </div>
              </div>
            </div>
            <div className="webPortfolio-content">
              <div className="webPortfolio-contentArea">
                <div className="webPortfolio-contentTop">
                  {item.card.titleImg && (
                    <img
                      src={item.card.titleImg}
                      alt={item.card.title}
                      width="279"
                      height="76"
                    />
                  )}
                  <h4>{item.card.title}</h4>
                </div>
                <div className="webPortfolio-contentBottom">
                  <p>{item.card.desc}</p>
                  <a
                    href={item.card.ctaHref || "javascript:void(0);"}
                    aria-label={item.card.ctaLabel}
                  >
                    <i className="fa fa-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

      if (anchorIndex === item.index) {
        cols.push(
          <div
            className="col-12 new-content-area"
            key={`inject-${item.index}`}
            ref={injectedRef} // 👈 attach ref to scroll to this element
          >
            {openBlock?.content}
          </div>
        );
      }
    });

    if (
      anchorIndex &&
      !cols.find((c) => String(c?.key || "").startsWith("inject-"))
    ) {
      cols.push(
        <div
          className="col-12 new-content-area"
          key="inject-fallback"
          ref={injectedRef} // 👈 also handle fallback
        >
          {openBlock?.content}
        </div>
      );
    }

    return (
      <div className="row rowGap2" ref={rowRef}>
        {cols}
        <div id="portfolioModal" className="modal" />
      </div>
    );
  };

  return (
    <div className="container-fluid section-padding">
        <div className="container">
      <div className="row">
        <div className="col-12">
        <div className="section-heading text-center">
            <h2>Proven <span className="color-primary">Success</span> in Every <span className="color-primary"> Project</span></h2>
            <p className="max-54rem">At Website Digitals, we are dedicated to providing solutions that not only meet but exceed client expectations. Our best DIY website builder is a testament to our commitment 
            to excellence, enabling users to create professional-grade websites with ease.</p>
          </div>
          <div className="basic-tabs home-portfolio-tabs">
            <ul className="nav nav-tabs">
              {tabs.map((t) => (
                <li className="nav-item" key={t.id}>
                  <a
                    className={`nav-link ${activeTab === t.id ? "active" : ""}`}
                    href={`#${t.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(t.id);
                      setOpenBlock(null);
                    }}
                  >
                    {t.whiteIcon && (
                      <img
                        src={t.whiteIcon}
                        alt={t.label}
                        
                        className="white-img"
                      />
                    )}
                    {t.colorIcon && (
                      <img
                        src={t.colorIcon}
                        alt={t.label}
                        
                      />
                    )}
                    <h3>{t.label}</h3>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>


      <div className="tab-content web-portfolio-content">
        {tabs.map((t) => (
          <div
            key={t.id}
            className={`tab-pane fade ${
              activeTab === t.id ? "active show" : ""
            }`}
            id={t.id}
          >
            {renderGridWithInjected(t.id)}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */
function parseHiddenCaseStudy(html) {
  if (!html) return { images: [], detailHTML: "", launchHref: "" };
  const doc = new DOMParser().parseFromString(html, "text/html");
  const images = Array.from(doc.querySelectorAll(".images img")).map((img) =>
    img.getAttribute("src")
  );
  const detailNode = doc.querySelector(".detail");
  const detailHTML = detailNode ? detailNode.innerHTML : "";
  const launch = doc.querySelector(".links a.launch");
  const launchHref = launch ? launch.getAttribute("href") : "";
  return { images, detailHTML, launchHref };
}
