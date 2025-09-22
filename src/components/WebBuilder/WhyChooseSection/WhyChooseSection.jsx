import Link from "next/link";

export default function WhyChooseSection({
  heading,
  image,           // single image (backward compatibility)
  images = [],     // multiple images
  features = [],
  paragraphs = [],
  bullets = [],
  cta,
  colCount1 = 7,
  colCount2 = 5,
  bothImgClass
}) {
  const hasBullets = Array.isArray(bullets) && bullets.length > 0;
  const hasFeatures = Array.isArray(features) && features.length > 0;
  const hasParas = Array.isArray(paragraphs) && paragraphs.length > 0;

  // normalize images (support both single + multiple)
  const imageList = images.length > 0 ? images : image ? [image] : [];

  return (
    <section className="section-padding split-section gradient-circle light-gradient rightCenter-gradient">
      <div className="container">
        <div className="row align-items-center mobile-col-order-change">
          {/* Image column */}
          <div className={`col-lg-${colCount1} col-md-6 position-relative`}>
            <div className={`lightBlue-area benefits-imagesArea parallax-container ${bothImgClass || ""}`}>
              {imageList.map((img, i) => (
                <img
                  key={`img-${i}`}
                  className={img.className || undefined}
                  loading="lazy"
                  src={img.src}
                  width={img?.width ?? 785}
                  height={img?.height ?? 555}
                  alt={img?.alt || ""}
                  decoding="async"
                />
              ))}
            </div>
          </div>

          {/* Content column */}
          <div className={`col-lg-${colCount2} col-md-6 position-relative`}>
            <div className="dark-area">
              <div className="section-heading">
                {heading ? <h2>{heading}</h2> : null}

                {/* Intro paragraphs */}
                {hasParas &&
                  paragraphs.map((para, i) => (
                    <p key={`para-${i}`}>{typeof para === "string" ? para : para?.text}</p>
                  ))}

                {/* Bullet list */}
                {hasBullets ? (
                  <ul className="feature-bullets">
                    {bullets.map((li, i) => (
                      <li key={`bullet-${i}`}>{li}</li>
                    ))}
                  </ul>
                ) : null}

                {/* Feature blocks */}
                {hasFeatures &&
                  features.map((block, i) => (
                    <div key={`feat-${i}`}>
                      {block.title ? (
                        <h3 className="subheading-text fw-bold">{block.title}</h3>
                      ) : null}
                      {(block.paragraphs || []).map((para, j) => (
                        <p key={`feat-p-${i}-${j}`} className={para?.isTight ? "mb-0" : undefined}>
                          {typeof para === "string" ? para : para?.text}
                        </p>
                      ))}
                    </div>
                  ))}
              </div>

              {/* CTA */}
              {cta?.href && cta?.label ? (
                <div className="link-area">
                  <Link href={cta.href} className={cta.className || "primary"}>
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
