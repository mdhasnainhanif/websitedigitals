// Keeps your exact classes/markup; no CSS added.
export default function DesignCustomizeCardSection({ heading, items = [] }) {
    return (
      <section className="section-padding bg-dark01">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading text-center">
                <h2 className="text-white">{heading}</h2>
              </div>
            </div>
          </div>
  
          <div className="row gy-4">
            {items.map((item, idx) => (
              <div className="col-lg-4 col-md-6 col-12" key={idx}>
                <div className="card02">
                  <div className="row gx-0">
                    <div className="col-lg-3">
                      <div className="card02-img">
                        <img
                          src={item.imgOriginal}
                          width={item.width || 71}
                          height={item.height || 71}
                          className="company-orig-icon"
                          alt={item.alt}
                          loading="lazy"
                          decoding="async"
                        />
                        <img
                          src={item.imgWhite}
                          width={item.width || 71}
                          height={item.height || 71}
                          className="company-white-icon"
                          alt={item.alt}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
  
                    <div className="col-lg-9 my-auto">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
  
                  {(item.paragraphs || []).map((p, i) => (
                    <p key={i} className={p.mb0 ? 'mb-0' : undefined}>
                      {typeof p === 'string' ? p : p.text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  