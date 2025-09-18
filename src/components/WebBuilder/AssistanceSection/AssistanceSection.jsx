import { RightArrowIcon } from '../../../icons';
import styles from './AssistanceSection.module.css';


export default function AssistanceSection({
    heading = '24/7 Assistance You Can Rely On',
    background = 'var(--dark-bg)',
    items = [], // [{ href, left, center, extraClasses?, external? }]
  }) {
    return (
      <section className="section-padding" style={{ background }}>
        <div className="container">
          <div className="row mb-3">
            <div className="col-lg-12 col-sm-12">
              <div className="section-heading">
                <h2 className="text-white">{heading}</h2>
              </div>
            </div>
          </div>
  
          <div className="row gy-4">
            {items.map((it, idx) => (
              <div className="col-lg-12 col-sm-12" key={idx}>
                <a
                  href={it.href}
                  className={`${styles.assisstancelink} ${it.extraClasses ? ` ${it.extraClasses}` : ''}`}
                  {...(it.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className={styles.left}>{it.left}</span>
                  <span className={styles.center}>{it.center}</span>
                  <span className={styles.right}>
                  <RightArrowIcon/>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  