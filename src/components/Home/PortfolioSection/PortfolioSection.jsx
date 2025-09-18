"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./PortfolioSection.module.css";

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
          <div className={styles.webPortfolio_caseStudyDetailArea}>
             {item.card?.titleImg && <img src={item.card.titleImg} alt="" />}
            <div className={styles.webPortfolio_caseStudyDetail}>
              <p
                dangerouslySetInnerHTML={{
                  __html: item.caseStudy?.detailHTML || "",
                }}
              />
              <div className={styles.linkArea}>
                <a
                  href="#"
                  className={`${styles.primary} ${styles.offer_btn}`}
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
          <div className={styles.webPortfolio_caseStudyDetailArea}>
            {item.card?.titleImg && <img src={item.card.titleImg} alt="" />}
            {item.caseStudy?.dynamicIntroHTML && (
              <div
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
            <div className={`${styles.webPortfolio_caseStudyDetailArea}`}>
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
        <div className={`${styles.webPortfolio_caseStudyDetailArea}`}>
          {item.card?.titleImg && <img src={`${item.card.titleImg}`} alt="" />}
          <div className={styles.webPortfolio_caseStudyDetail}>
            <div
              dangerouslySetInnerHTML={{
                __html: item.caseStudy?.detailHTML || "",
              }}
            />
            {(item.caseStudy?.links?.launchHref ||
              item.caseStudy?.links?.briefHref) && (
              <div className={`${styles.linkArea}`}>
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
       <div className={`row ${styles.webPortfolio_caseStudyArea}`}>
        <div
          className={styles.webPortfolio_caseStudyClose}
          role="button"
          onClick={closeCaseStudy}
        />

        <div className="col-md-8">
          {/* add a stable hook to scope queries */}
          <div className={styles.webPortfolio_caseStudyTabsArea} data-case-study>
            <div className={styles.webPortfolio_caseStudyTabs}>
              <ul className={`nav nav-tabs ${styles.nav_tabs}`}>
                {tabsThumbs.map((src, i) => (
                  <li className={styles.nav_item} key={`thumb-${i}`}>
                    <a
                      href="#"
                      className={`${styles.nav_link} ${i === 0 ? "active" : ""}`}
                      onClick={(e) => {
                          e.preventDefault();
                          const area = e.currentTarget.closest('[data-case-study]');
                          if (!area) return;

                          const links = area.querySelectorAll(`.${styles.nav_link}`);
                          const panes = area.querySelectorAll(':scope .tab-pane');

                          links.forEach((l) => l.classList.remove('active'));
                          e.currentTarget.classList.add('active');

                          panes.forEach((p, idx) => {
                            p.classList.toggle('active', idx === i);
                            p.classList.toggle('show', idx === i);
                          });
                        }}
                    >
                      <img src={src} alt="" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* use the exact CSS-module name that exists in your CSS */}
            <div className={`${styles.tab_content} ${styles.webPortfolio_caseStudy_content}`}>
              {tabsThumbs.map((src, i) => (
                <div
                  key={`pane-${i}`}
                  className={`tab-pane fade ${i === 0 ? "active show" : ""}`}
                  id={`website-caseStudy${i + 1}`}
                >
                  <div
                    className={styles.webPortfolio_CaseStudyImage}
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
            className={`${styles.single_webPortfolio} ${cardCls}`}
            role="button"
            onClick={(e) => {
              e.preventDefault();
              handleCardClick(item, tabId);
            }}
          >
            <div className={styles.single_webPortfolio}>
              <div className={styles.webPortfolio_imageArea}>
                <div className={styles.main_imageArea}>
                  <div className={styles.backImage}>
                    <img
                      src={item.card.backImage}
                      alt={item.card.title}
                      width="480"
                      height="471"
                    />
                  </div>
                  <div className={styles.frontImage}>
                    <img
                      src={item.card.frontImage}
                      alt={item.card.title}
                      width="501"
                      height="471"
                    />
                  </div>
                </div>
                <div className={styles.right_imageArea}>
                  <img
                    src={item.card.rightImage}
                    alt={item.card.title}
                    width="271"
                    height="457"
                  />
                </div>
              </div>
            </div>
            <div className={styles.webPortfolio_content}>
              <div className={styles.webPortfolio_contentArea}>
                <div className={styles.webPortfolio_contentTop}>
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
                <div className={styles.webPortfolio_contentBottom}>
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
            className={`col-12 ${styles.new_content_area}`}
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
          className={`col-12 ${styles.new_content_area}`}
          key="inject-fallback"
          ref={injectedRef} // 👈 also handle fallback
        >
          {openBlock?.content}
        </div>
      );
    }

    return (
      <div className={`row ${styles.rowGap2}`} ref={rowRef}>
        {cols}
        <div id="portfolioModal" className="modal" />
      </div>
    );
  };

  return (
    <>
      <section className={styles.section_padding}>
      <div className='container-fluid'>
          <div className="container">
        <div className="row">
          <div className="col-12">
          <div className={`${styles.section_heading} ${styles.text_center}`}>
              <h2>Proven <span className={styles.color_primary}>Success</span> in Every <span className={styles.color_primary}> Project</span></h2>
              <p className={styles.max_54rem}>At Website Digitals, we are dedicated to providing solutions that not only meet but exceed client expectations. Our best DIY website builder is a testament to our commitment 
              to excellence, enabling users to create professional-grade websites with ease.</p>
            </div>
            <div className={`${styles.basic_tabs} ${styles.home_portfolio_tabs}`}>
              <ul className={`nav ${styles.nav_tabs}`}>
                {tabs.map((t) => (
                  <li className={styles.nav_item} key={t.id}>
                    <a
                      className={`${styles.nav_link} ${activeTab === t.id ? "active" : ""}`}
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
                          
                          className={styles.white_img}
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


        <div className={`tab-content ${styles.web_portfolio_content}`}>
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
    </section>
    </>
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
