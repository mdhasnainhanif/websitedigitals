import styles from './StepSection.module.css';

export default function StepSection({
    heading = 'How to Build a Professional Website at Zero Cost',
    items = [], // [{ step?: number, title: string, paragraphs: string[], cardClass?: 'website-cost-card1' | 'website-cost-card2' | ... }]
    cta = { href: '#', label: 'Get Free Consultation', className: 'primary book-your-call' },
  }) {
    const two = (n) => String(n).padStart(2, '0');
  
    return (
      <section className={`section-padding ${styles.professionalWebsiteCost}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading text-center">
                <h2>{heading}</h2>
              </div>
            </div>
          </div>
  
          <div className="row">
            {items.map((item, idx) => (
              <div className="col-lg-6 col-md-6 col-12" key={idx}>
                <div className={`${styles.websiteCostCard} ${item.cardClass || ''}`}>
                  <h3>
                    <span>{two(item.step ?? idx + 1)}</span> {item.title}
                  </h3>
  
                  {(item.paragraphs || []).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
  
          <div className="row mt-5">
            <div className="col-12">
              <div className="link-area text-center">
                <a href={cta.href} className={cta.className}>
                  {cta.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  