import Image from "next/image";
import Link from "next/link";
import styles from './cta.module.css'

export default function GetStartedCta({
  title = "Are you still scrolling?",
  description = "Stop scrolling and start achieving your digital goals with us! Let's make your vision a reality.",
  buttonText = "Get Free Insights",
  buttonHref = "#",
  imageSrc = "/assets/images/cta/getStarted/woman.webp",
  imageAlt = "scroll-img",
  className = "",
}) {
  return (
    <section className={`${styles.section_padding} ${styles.pt_double} ${styles.pt_default_mob}} ${className}`}>
      <div className="container">
        <div className={styles.getStartedCTA}>
          <div className="row">
            <div className="col-md-6">
              <div className={styles.section_heading}>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <div className={styles.link_area}>
                <Link href={buttonHref} className={styles.offer_btn}>
                  {buttonText}
                </Link>
              </div>
            </div>

            <div className="col-md-6">
              <div className={styles.ctaImageArea}>
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={601}
                  height={418}
                  priority={false}
                  style={{ height: "auto", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}