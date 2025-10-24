"use client";

import { useMemo, useEffect } from "react";
import { useCyclingBlueGradient } from "../../../app/hooks/useCyclingBlueGradient";
import { useOwlCarousel } from "../../../app/hooks/useOwlCarousel";
import { useMouseParallax } from "../../../app/hooks/useMouseParallax";
import styles from "./HeroBanner.module.css";
import Image from "next/image";

export default function HeroBanner() {
  const IMAGE_BASE = useMemo(() => {
    const base = process.env.NEXT_PUBLIC_IMAGE_PATH || "/frontend";
    return base.endsWith("/") ? base.slice(0, -1) : base;
  }, []);

  useCyclingBlueGradient("bg-change", 3000);

  // Initialize Owl Carousel for logos
  useOwlCarousel(`.${styles.homebannerLogos2}`, {
    loop: true,
    margin: 30,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  // Initialize mouse parallax effect
  useMouseParallax(
    [`.${styles.parallexEffect}`, `.${styles.mobileParallexEffect}`],
    {
      selector: "[data-depth]",
      maxTranslate: 28,
      invert: false,
    }
  );

  // Additional useEffect to ensure carousel initializes after DOM is ready
  useEffect(() => {
    const initializeCarousel = () => {
      if (
        typeof window !== "undefined" &&
        window.$ &&
        window.$.fn.owlCarousel
      ) {
        const $carousel = window.$(`.homebannerLogos2`);
        if ($carousel.length > 0 && !$carousel.hasClass("owl-loaded")) {
          try {
            $carousel.owlCarousel({
              loop: true,
              margin: 30,
              dots: false,
              nav: false,
              autoplay: true,
              autoplayTimeout: 2000,
              autoplayHoverPause: true,
              responsive: {
                0: {
                  items: 2,
                },
                600: {
                  items: 3,
                },
                1000: {
                  items: 4,
                },
              },
            });
            console.log("Owl Carousel initialized successfully");
          } catch (error) {
            console.error("Error initializing Owl Carousel:", error);
          }
        }
      } else {
        console.log("jQuery or Owl Carousel not loaded yet, retrying...");
      }
    };

    // Initialize immediately if scripts are loaded
    initializeCarousel();

    // Also try after a short delay to ensure DOM is ready
    const timer = setTimeout(initializeCarousel, 100);

    // Try again after a longer delay to ensure scripts are loaded
    const longTimer = setTimeout(initializeCarousel, 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(longTimer);
    };
  }, []);

  return (
    <section className={styles.homeBannerArea} id="bg-change">
      <section
        className={`${styles.homeBanner} ${styles.gradientCircle} ${styles.leftCenterGradient}`}
      >
        <div
          className={`container ${styles.bannerCenterContainer} ${styles.height100}`}
        >
          <div className={`row justify-content-center ${styles.height100}`}>
            <div
              className={`col-lg-9 col-sm-12 text-center ${styles.bannerColWd1} my-auto`}
            >
              <div className={styles.bannerHeading}>
                <h1>
                  Build Effortlessly with Affordable &amp; Easy Website Builder
                </h1>
                <p className="text-white mx-auto">
                  Simplify your website creation with our affordable and easy
                  website builder. We equip you with all the essential and
                  advanced tools you need to expand your business online.
                </p>
              </div>

              {/* Banner form */}
              <form
                className={`${styles.bannerForm} banner-form text-center`}
                action="/brief"
                method="GET"
                id="bannerForm"
              >
                <Image
                  loading="lazy"
                  src={`/assets/images/banner/pencil.png`}
                  width={24}
                  height={24}
                  alt="pencil"
                />
                <input
                  type="text"
                  name="company_name"
                  placeholder="Enter Your Business Name"
                />
                <button type="submit" className="btn_black">
                  Get Started
                </button>
              </form>

              {/* Desktop Parallax */}
              <div className={styles.parallexEffect}>
                <Image
                  src={`/assets/images/wd-1/1.webp`}
                  width={798}
                  height={375}
                  alt="Website Digitals Banner"
                />
                <div
                  data-relative-input="true"
                  className={`object ${styles.objectOne}`}
                  id="objects"
                >
                  <Image
                    src={`/assets/images/wd-1/02.webp`}
                    data-depth="0.1"
                    style={{ width: "100%" }}
                    width={304}
                    height={156}
                    alt="parallex-effect-left"
                  />
                </div>
                {/* <div data-relative-input="true" className="object object-two" id="object-two">
                  <img loading="lazy" src={`/assets/images/wd-1/6.png`} data-depth="0.1" style={{ width: '100%' }} />
                </div> */}
                <div
                  data-relative-input="true"
                  className={`object ${styles.objectThree}`}
                  id="objects"
                >
                  <Image
                    src={`/assets/images/wd-1/03.webp`}
                    data-depth="0.1"
                    style={{ width: "100%" }}
                    width={228}
                    height={132}
                    alt="parallex-effect-right"
                  />
                </div>
                {/* <div data-relative-input="true" className="object object-four" id="objects">
                  <img loading="lazy" src={`/assets/images/wd-1/3.png`} data-depth="0.1" style={{ width: '95%' }} />
                </div> */}
              </div>

              {/* Mobile Parallax */}
              <div className={styles.mobileParallexEffect}>
                <Image
                  loading="lazy"
                  src={`/assets/images/wd-1/2.png`}
                  className={styles.leftImg}
                  data-depth="0.2"
                  style={{ width: "100%" }}
                  width={217}
                  height={112}
                  alt="mobile-parallex-effect-left"
                />
                <Image
                  loading="lazy"
                  src={`/assets/images/wd-1/5.png`}
                  className={styles.rightImg}
                  data-depth="0.2"
                  style={{ width: "100%" }}
                  width={175}
                  height={159}
                  alt="mobile-parallex-effect-right"
                />
                <Image
                  loading="lazy"
                  src={`/assets/images/wd-1/3.png`}
                  data-depth="0.2"
                  style={{ width: "95%" }}
                  width={387}
                  height={705}
                  alt="mobile-parallex-effect"
                />
              </div>
            </div>
            {/* Logos carousel */}
            <div className="row">
              <div className={`owl-carousel heroLogoSlider ${styles.homebannerLogos2}`}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <div className="item" key={n}>
                    <div className={styles.smallLogos2}>
                      <Image
                        loading="lazy"
                        src={`/assets/images-webp/banner/small-logos/${n}.webp`}
                        className="img-fluid"
                        width={200}
                        height={40}
                        unoptimized={n === 3}
                        alt={
                          {
                            1: "ocean-grill",
                            2: "kingster",
                            3: "concierges",
                            4: "Exclusive",
                            5: "aspire",
                          }[n]
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
