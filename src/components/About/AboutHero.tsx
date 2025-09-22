// components/About/AboutHero.jsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.css';


export default function AboutHero() {
  return (
    <section className={`${styles.inner_banner} ${styles.gradient_circle} ${styles.leftCenter_gradient}`}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left */}
          <div className="col-md-6">
            <nav aria-label={styles.breadcrumb}>
              <ol className={styles.breadcrumb}>
                <li className={styles.breadcrumb_item}>
                  <Link href="/">Home</Link>
                </li>
                <li className={`${styles.breadcrumb_item} ${styles.active}`} aria-current="page">
                  About Us
                </li>
              </ol>
            </nav>

            <div className={styles.inner_bannerHeading}>
              <h1>About Us</h1>
              <p>
                Are you looking for professional website building services to boost your online presence?
                At Website Digitals, we&apos;re your dedicated team.
              </p>
              <ul>
                <li>Beautiful, responsive designs</li>
                <li>Highly secured coding</li>
                <li>Outperforming branding services</li>
              </ul>
            </div>

            <div className={styles.link_area}>
              <Link href="/brief">Get Started Now</Link>
            </div>
          </div>

          {/* Right */}
          <div className="col-md-6">
            <div className={styles.about_imageArea}>
              <Image
                src="/assets/images/about/banner/circle.png"
                className={`${styles.circle_img} ${styles.rotation_animation}`}
                width={475}
                height={482}
                alt="About Us"
                priority
              />
              <Image
                src="/assets/images/about/banner/banner-img.webp"
                className={styles.banner_img}
                width={669}
                height={607}
                alt="About Us"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
