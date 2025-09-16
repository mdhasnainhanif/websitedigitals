import Link from 'next/link';

export default function WhyChooseSection({ heading, image, features = [], cta }) {
  return (
    <section className="section-padding split-section gradient-circle light-gradient rightCenter-gradient">
      <div className="container">
        <div className="row align-items-center mobile-col-order-change">
          {/* Image column */}
          <div className="col-lg-7 col-md-6 position-relative">
            <div className="lightBlue-area benefits-imagesArea parallax-container">
              <img
                className="w-100"
                loading="lazy"
                src={image?.src}
                width={image?.width ?? 785}
                height={image?.height ?? 555}
                alt={image?.alt || ''}
                decoding="async"
              />
            </div>
          </div>

          {/* Content column */}
          <div className="col-lg-5 col-md-6 position-relative">
            <div className="dark-area">
              <div className="section-heading">
                {heading ? <h2>{heading}</h2> : null}

                {features.map((block, i) => (
                  <div key={i}>
                    {block.title ? <h3 className="subheading-text fw-bold">{block.title}</h3> : null}
                    {(block.paragraphs || []).map((para, j) => (
                      <p key={j} className={para?.isTight ? 'mb-0' : undefined}>
                        {typeof para === 'string' ? para : para.text}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {cta?.href && cta?.label ? (
                <div className="link-area">
                  <Link href={cta.href} className="primary">
                    {cta.label}
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
