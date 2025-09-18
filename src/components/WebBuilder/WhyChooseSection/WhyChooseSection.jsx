import Link from 'next/link';

export default function WhyChooseSection({
  heading,
  image,
  features = [],
  paragraphs = [],
  bullets = [],
  cta,
}) {
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

                {/* Optional intro paragraphs */}
                {Array.isArray(paragraphs) &&
                  paragraphs.map((para, i) => (
                    <p key={`para-${i}`}>{typeof para === 'string' ? para : para?.text}</p>
                  ))}

                {/* Optional bullets list */}
                {Array.isArray(bullets) && bullets.length > 0 ? (
                  <ul>
                    {bullets.map((li, i) => (
                      <li key={`bullet-${i}`}>{li}</li>
                    ))}
                  </ul>
                ) : null}

                {/* Optional feature blocks (title + paragraphs) */}
                {features.map((block, i) => (
                  <div key={`feat-${i}`}>
                    {block.title ? <h3 className="subheading-text fw-bold">{block.title}</h3> : null}
                    {(block.paragraphs || []).map((para, j) => (
                      <p key={`feat-p-${i}-${j}`} className={para?.isTight ? 'mb-0' : undefined}>
                        {typeof para === 'string' ? para : para?.text}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {cta?.href && cta?.label ? (
                <div className="link-area">
                  <Link href={cta.href} className={cta.className || 'primary'}>
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
