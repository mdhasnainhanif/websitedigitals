'use client'

import Link from 'next/link'
import { useMemo } from 'react'
import styles from './Footer.module.css'
import { FacebookIcon, InstagramIcon, LinkedinIcon, PinterestIcon, YoutubeIcon } from '../../icons'
import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_bgLines}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="container">
        <div className={styles.footer_top}>
          <div className="row">
            <div className="col-lg-4">
              <div className={styles.footer_logoArea}>
                <Link aria-label="Website Digitals" href="/">
                  <Image
                    width={200}
                    height={56}
                    src={`/assets/images-webp/website-digitals-white.webp`}
                    alt="Website Digitals"
                  />
                </Link>
                <p>
                  Website Digitals offers high-performance custom web solutions designed to meet your unique
                  needs. From captivating designs to seamless functionality, we're here to transform your
                  vision into reality.
                </p>
              </div>

              <ul className={styles.partners_rating}>
                <li>
                  <a href="https://clutch.co/profile/website-digitals" target="_blank" rel="noopener noreferrer">
                    <Image
                      width={100}
                      height={30}
                      src={`/assets/images-webp/partners/2.webp`}
                      alt="Clutch"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.trustpilot.com/review/websitedigitals.com" target="_blank" rel="noopener noreferrer">
                    <Image
                      width={150}
                      height={50}
                      src={`/assets/images-webp/partners/trust-logo.svg`}
                      alt="Trustpilot"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-8">
              <div className={`row ${styles.footer_links_div}`}>
                {/* Company */}
                <div className="col-md-4">
                  <div className={styles.footer_linksArea}>
                    <p>Company</p>
                    <ul>
                      <li>
                        <Link href="/portfolio" target="_blank" rel="noopener noreferrer">
                          <span>Webfolio</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" target="_blank" rel="noopener noreferrer">
                          <span>About Us</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" target="_blank" rel="noopener noreferrer">
                          <span>Contact Us</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://websitedigitals.com/blog" target="_blank" rel="noopener noreferrer">
                          <span>Blog</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                          <span>Privacy Policy</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">
                          <span>Terms &amp; Conditions</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/case-study" target="_blank" rel="noopener noreferrer">
                          <span>Case Study</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Services */}
                <div className="col-md-4">
                  <div className={styles.footer_linksArea}>
                    <p>Services</p>
                    <ul>
                      <li>
                        <Link href="/services/content-writing" target="_blank" rel="noopener noreferrer">
                          <span>Content Writing</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/logo-design" target="_blank" rel="noopener noreferrer">
                          <span>Logo Design</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/video-animation" target="_blank" rel="noopener noreferrer">
                          <span>Video Animation</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/digital-marketing" target="_blank" rel="noopener noreferrer">
                          <span>Digital Marketing</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/custom-website-design" target="_blank" rel="noopener noreferrer">
                          <span>Custom Website Design</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/pricing" target="_blank" rel="noopener noreferrer">
                          <span>Pricing</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/sitemap" target="_blank" rel="noopener noreferrer">
                          <span>Sitemap</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Contacts & Inquires */}
                <div className="col-md-4">
                  <div className={styles.footer_linksArea}>
                    <p>Contacts</p>
                    <ul>
                      <li>
                        <a href="tel:(646)-222-3598" target="_blank" rel="noopener noreferrer">
                          <i className="fa fa-phone"></i>
                          <span>(646)-222-3598</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.google.com/maps?q=Street+06,+HA-56+USA,+Florida,+65558&z=15"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-map-marker-alt"></i>
                          <span>175 Pearl Street Dumbo, 1st, 2nd and 3rd Floor, Dumbo, NY 11201</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className={styles.footer_linksArea}>
                    <p>Inquires</p>
                    <ul>
                      <li>
                        <a href="mailto:info@websitedigitals.com" target="_blank" rel="noopener noreferrer">
                          <i className="fa fa-envelope"></i>
                          <span>info@websitedigitals.com</span>
                        </a>
                      </li>
                    </ul>

                    <ul className={styles.footer_social}>
                      <li>
                        <a
                          href="https://www.facebook.com/webdigitals/"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-text="Facebook"
                        >
                          <FacebookIcon/>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/website_digitals/"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-text="Instagram"
                        >
                          <InstagramIcon/>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.pinterest.com/websitedigitals/"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-text="Pinterest"
                        >
                          <PinterestIcon/>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/website-digitals"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-text="Linkedin"
                        >
                          <LinkedinIcon/>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/channel/UCfH5v6yrRLD_mDoAyavM8zg"
                          target="_blank"
                          rel="noopener noreferrer"
                          data-text="Youtube"
                        >
                          <YoutubeIcon/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footer_bottom}>
          <div className="row">
            <div className="col-md-6">
              <p className={styles.copyright}>Copyright @ {year} - All Rights Reserved</p>
            </div>
            <div className="col-md-6">
              <ul className={styles.social_links}>
                <li>
                  <img
                    src={`/assets/images-webp/payment/cards.webp`}
                    alt="Accepted payment methods"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Popups */}
      <div className="popup-bg bookNow-popup-bg hidden-onLoad"></div>
      <div className="popup-area bookNow-popup hidden-onLoad">
        <div className="popup-close">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="row m-0">
          <div className="col-md-6">
            {/* Replace with your React form component */}
            {/* <PopupForm /> */}
            <div className="placeholder-form" />
          </div>
          <div className="col-md-6">
            <div className="bookNow-right gradient-circle rightBottom-gradient">
              <p className="popup-right-col-head">
                <small className="exta-small">
                  Let Your <span>Brand</span> Speak
                </small>
                FOR ITSELF WITH OUR
                <small>
                  <span>Custom Website Development</span>
                </small>
              </p>

              <p>
                We excel in transforming your digital presence with our top-notch custom website development
                services. Our experienced team of developers and designers work tirelessly to create visually
                stunning and highly functional websites to meet your specific business needs.
              </p>

              <ul className="partnersUl">
                <li>
                  <img src={`/assets/images/partners/3.png`} alt="" />
                </li>
                <li>
                  <img src={`/assets/images/partners/2.png`} alt="" />
                </li>
              </ul>
              <ul className="bookNow-contactList">
                <li>
                  <a href="tel:(646)-222-3598">
                    <i className="fa fa-phone"></i>
                    <span>(646)-222-3598</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-map-marker-alt"></i>
                    <span>175 Pearl Street Dumbo, 1st, 2nd and 3rd Floor, Dumbo, NY 11201</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@websitedigitals.com">
                    <i className="fa fa-envelope"></i>
                    <span>info@websitedigitals.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="popup-bg offer-popup-bg hidden-onLoad"></div>
      <div className="popup-area offer-popup hidden-onLoad" id="popupformcomplete">
        <div className="popup-close">
          <i className="fa-solid fa-xmark text-dark"></i>
        </div>
        <div className="row m-0">
          <div className="col-lg-12 col-sm-12">
            {/* Replace with your React solution form component */}
            {/* <SolutionForm /> */}
            <div className="placeholder-form" />
          </div>
        </div>
      </div>

      {/* Lottie button */}
      <a href="http://websitedigitals.com/speech" target="_blank" rel="noopener">
        <lottie-player
          src="/frontend/assets/js/GroPlIvdZq.json"
          background="transparent"
          speed="1"
          style={{ width: 120, height: 120 }}
          loop
          autoPlay
          id="footerLottie"
        ></lottie-player>
      </a>
    </footer>
  )
}
