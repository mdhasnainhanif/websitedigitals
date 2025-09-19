import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function WebBuilderBanner({ data ,className, col }) {
  return (
    <section className={`inner-banner gradient-circle leftCenter-gradient ${className}`}>
      <div className="container">
        <div className="row align-items-center mb-5">
          {/* Left Column - Content */}
          <div className={`col-md-6 ${col}`}>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href={data.breadcrumb?.home?.href || "/"}>{data.breadcrumb?.home?.label || "Home"}</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {data.breadcrumb?.current?.label || "Page"}
                </li>
              </ol>
            </nav>
            
            <div className="inner-bannerHeading">
              <h1>{data.heading || "Default Heading"}</h1>
              {data.description?.map((item, index) => (
                <p key={index} className="mb-0">
                  {typeof item === 'string' ? (
                    item
                  ) : (
                    <>
                      {item.text}
                      {item.link && (
                        <Link 
                          href={item.link.href} 
                          target={item.link.target || "_self"}
                          style={{ color: 'var(--primary)' }}
                        >
                          {item.link.text}
                        </Link>
                      )}
                      {item.afterText}
                    </>
                  )}
                </p>
              ))}
            </div>
            
            <div className="link-area">
              {data.isCta && data.cta && data.cta.href && data.cta.text ? (
                <Link href={data.cta.href}>{data.cta.text}</Link>
              ) : (
                ""
              )}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className={`col-md-6 ${col}`}>
            <div className="industry-imageArea">
              <Image
                className="w-100"
                src={data.image?.src || "/assets/images-webp/web-builder-Banner.webp"}
                width={data.image?.width || 669}
                height={data.image?.height || 473}
                alt={data.image?.alt || "Default Image"}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
