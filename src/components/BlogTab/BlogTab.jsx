"use client";
import { useState } from "react";

function BlogCard({ post }) {
  const {
    imgSrc,
    imgAlt = "",
    category,
    title,
    excerpt,
    link = "#",
    external = true,
  } = post;

  return (
    <div className="single-blog">
      <div className="blog-imageArea">
        <img
          loading="lazy"
          src={imgSrc}
          className="card-img-top"
          alt={imgAlt}
          style={{ maxHeight: 300, objectFit: "cover", width: "100%" }}
        />
      </div>
      <div className="blog-cardDetail">
        <ul className="blog-tags"><li>{category}</li></ul>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        {external ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <span>Read More</span>{" "}
            <i className="fa fa-arrow-right-long" aria-hidden="true"></i>
          </a>
        ) : (
          <a href={link}>
            <span>Read More</span>{" "}
            <i className="fa fa-arrow-right-long" aria-hidden="true"></i>
          </a>
        )}
      </div>
    </div>
  );
}

export default function BlogTab({ tabs = [], postsByTab = {}, className }) {
  // tabs[].id should be one of: cms-portfolio, ecom-portfolio, wordpress-portfolio, portal-portfolio, non-profit (or your ids)
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  return (
    <section className={`section-padding ${className || ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* TABS — exact classes/structure you provided */}
            <div className="basic-tabs home-portfolio-tabs">
              <ul className="nav nav-tabs" id="outerTabs" role="tablist">
                {tabs.map((t) => (
                  <li className="nav-item" key={t.id}>
                    <a
                      className={`nav-link ${activeTab === t.id ? "active" : ""}`}
                      data-bs-toggle="tab"
                      href={`#${t.id}`}
                      role="tab"
                      onClick={(e) => {
                        // keep React-controlled panes; remove this block if you want Bootstrap JS to handle tabs
                        e.preventDefault();
                        setActiveTab(t.id);
                      }}
                    >
                      {t.whiteIcon && (
                        <img src={t.whiteIcon} alt={t.label} className="white-img" />
                      )}
                      {t.colorIcon && (
                        <img src={t.colorIcon} alt={t.label} />
                      )}
                      <span>{t.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* PANES */}
        <div className="tab-content" id="outerTabsContent">
          {tabs.map((t) => {
            const posts = postsByTab[t.id] || [];
            return (
              <div
                key={t.id}
                className={`tab-pane fade ${activeTab === t.id ? "show active" : ""}`}
                id={t.id}
                role="tabpanel"
              >
                <div className="row g-3">
                  {posts.map((p) => (
                    <div className="col-md-6 col-lg-3" key={p.id}>
                      <BlogCard post={p} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
