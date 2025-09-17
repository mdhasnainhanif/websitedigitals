'use client';

import Link from 'next/link';

// Reusable component
function CaseStudySection({ heading, items }) {
  return (
    <section className="section-padding video-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-sm-12 text-center">
            <div className="section-heading">
              <h2>{heading}</h2>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          {items.map((item, idx) => (
            <div className="col-lg-4 col-sm-12" key={idx}>
              <div className="single-videoAnimation-type">
                <div className="videoAnimation-imageArea">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    className="static-image"
                    loading="lazy"
                  />
                </div>

                <div className="videoAnimation-detailsArea">
                  <div className="videoAnimation-details">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <Link href={item.href} style={{ fontSize: '.8rem' }}>
                      Read More <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="glow3"></div>
      <div className="glow4"></div>
    </section>
  );
}

export default CaseStudySection;