// /components/BlueCtaSection.jsx
export default function BlueCtaSection({ data, className = '' }) {
    if (!data) return null; // guard if parent forgot to pass
  
    const { heading, description, cta, image } = data;
  
    // add safe rel if opening a new tab
    const rel =
      cta?.target === '_blank'
        ? cta?.rel || 'noopener noreferrer'
        : cta?.rel;
  
    return (
      <section className={`section-padding pt-0 ${className}`}>
        <div className="container">
          <div className="transform-data">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-12">
                <div className="section-heading">
                  <h2>{heading}</h2>
                  <p>{description}</p>
                  <div className="link-area mt-0">
                    {cta?.href ? (
                      <a href={cta.href} target={cta.target} rel={rel}>
                        {cta.label}
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <img
                  className={image?.className || 'w-100'}
                  src={image?.src}
                  alt={image?.alt}
                  width={image?.width || 619}
                  height={image?.height || 389}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  