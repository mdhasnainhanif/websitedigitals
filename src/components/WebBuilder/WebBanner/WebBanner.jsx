import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WebBuilderBanner({ data, className = "", col = "" , colImgClass = "" }) {
  // Smart CTA visibility:
  // - prefer explicit flags if present (isCta or cta.show)
  // - otherwise show when text+href exist
  const showCta =
    data?.isCta ??
    data?.cta?.show ??
    Boolean(data?.cta?.text && data?.cta?.href);

  return (
    <section className={`inner-banner gradient-circle leftCenter-gradient ${className}`}>
      <div className="container">
        <div className="row align-items-center mb-5">
          {/* Left Column - Content */}
          <div className={`col-md-6 ${col}`}>
            {data?.isBreadcrumb && (
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href={data?.breadcrumb?.home?.href || "/"}>
                    {data?.breadcrumb?.home?.label || "Home"}
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {data?.breadcrumb?.current?.label || "Page"}
                  </li>
                </ol>
              </nav>
            )}

            <div className="inner-bannerHeading">
              <h1>{data?.heading || "Default Heading"}</h1>

              {/* paragraphs (supports string or {text, link, afterText}) */}
              {Array.isArray(data?.description) &&
                data.description.map((item, idx) => (
                  <p key={idx} className="mb-0">
                    {typeof item === "string" ? (
                      item
                    ) : (
                      <>
                        {item?.text || ""}
                        {item?.link ? (
                          <Link
                            href={item.link.href || "#"}
                            target={item.link.target || "_self"}
                            style={{ color: "var(--primary)" }}
                          >
                            {item.link.text || ""}
                          </Link>
                        ) : null}
                        {item?.afterText || ""}
                      </>
                    )}
                  </p>
                ))}

              {/* bullets (optional) */}
              {Array.isArray(data?.bullets) && data.bullets.length > 0 && (
                <ul>
                  {data.bullets.map((b, i) => (
                    <li key={`bullet-${i}`}>{b}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* CTA (optional, safe) */}
            <div className="link-area">
              {showCta && data?.cta?.href && data?.cta?.text ? (
                <Link
                  href={data.cta.href}
                  className={data.cta.className || "book-your-call"}
                >
                  {data.cta.text}
                </Link>
              ) : null}
            </div>
          </div>

          {/* Right Column - Image + optional decor */}
          <div className={`col-md-6 ${col}`}>
            <div className={`contentWriting-imageArea position-relative ${colImgClass}`}>
              {/* Decor images (behind/around main image) */}
              {Array.isArray(data?.decor) &&
                data.decor.map((d, i) => (
                  <Image
                    key={`decor-${i}`}
                    src={d.src}
                    width={d.width || 1}
                    height={d.height || 1}
                    alt={d.alt || ""}
                    className={d.className || ""}
                    priority={Boolean(d.priority)}
                  />
                ))}

              {/* Main image */}
              <Image
                className={data?.image?.className || "width-100"}
                src={
                  data?.image?.src ||
                  "/assets/images-webp/web-builder-Banner.webp"
                }
                width={data?.image?.width || 669}
                height={data?.image?.height || 473}
                alt={data?.image?.alt || "Default Image"}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
