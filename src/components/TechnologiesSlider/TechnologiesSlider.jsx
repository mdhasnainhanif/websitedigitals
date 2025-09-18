'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

export default function TechnologiesSlider() {
  const carouselRef = useRef(null);
  const [ready, setReady] = useState(false);
  const initialized = useRef(false);

  // Logo data (kept in the same order, with the same alts and paths)
  const logos = [
    { src: '/assets/images-webp/webdevelopment/webdevelopment/google_cloud.png', alt: 'google_cloud' },
    { src: '/assets/images-webp/webdevelopment/webdevelopment/html5.png', alt: 'html5' },
    { src: '/assets/images-webp/webdevelopment/webdevelopment/java.png', alt: 'java' },
    { src: '/assets/images-webdevelopment/webdevelopment/jquery.png', alt: 'jquery', filterInvert: true }, // fallback path? keep class
  ].map(x => x); // placeholder to keep structure
  // Replace above with full list (copied below verbatim to preserve classes/paths)
  const fullLogos = [
    { src: '/assets/images-webp/webdevelopment/webdevelopment/google_cloud.png', alt: 'google_cloud' },
    { src: '/assets/images-webp/webdevelopment/webdevelopment/html5.png', alt: 'html5' },
    { src: '/assets/images-webp/webdevelopment/webdevelopment/java.png', alt: 'java' },
    { src: '/assets/images-webp/webdevelopment/webdevelopment/jquery.png', alt: 'jquery', filterInvert: true },
    { src: '/assets/images-webp/webdevelopment/webdevelopment/kubernetes.png', alt: 'kubernetes' },
    { src: '/assets/images-webp/webdevelopment/webdevelopment/mongodb.png', alt: 'mongodb' },
    { src: '/assets/images-webp/webdevelopment/webdevelopment/mysql.png', alt: 'mysql' },
    { src: '/assets/images-webp/webdevelopment/webdevelopment/node.png', alt: 'node' },
    { src: '/assets/images-webp/webdevelopment/webdevelopment/php.png', alt: 'php' },
    { src: '/assets/images-webp/webdevelopment/webdevelopment/postgre.png', alt: 'postgre' },
    { src: '/assets/images-webp/webdevelopment/webdevelopment/python.png', alt: 'python' },
    { src: '/assets/images-webp/webdevelopment/webdevelopment/rails.png', alt: 'rails' },
    { src: '/assets/images-webp/webdevelopment/webdevelopment/reactjs.png', alt: 'reactjs' },
    { src: '/assets/images-webp/webdevelopment/webdevelopment/angular.png', alt: 'angular' },
    { src: '/assets/images-webp/webdevelopment/webdevelopment/aws-2.png', alt: 'aws' },
    { src: '/assets/images-webp/webdevelopment/webdevelopment/azure-2.png', alt: 'azure' },
    { src: '/assets/images-webp/webdevelopment/webdevelopment/cassandria.png', alt: 'cassandria' },
    { src: '/assets/images-webp/webdevelopment/webdevelopment/css3.png', alt: 'css3' },
  ];

  // Initialize Owl Carousel once jQuery + plugin are ready
  useEffect(() => {
    if (!ready || initialized.current || !carouselRef.current) return;

    const init = () => {
      const $ = window?.jQuery || window?.$;
      if (!$ || !$.fn?.owlCarousel) {
        // try again shortly if scripts not fully loaded yet
        setTimeout(init, 100);
        return;
      }
      if (initialized.current) return;

      $(carouselRef.current).owlCarousel({
        items: 6,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        smartSpeed: 600,
        dots: false,
        nav: false,
        margin: 0,
        responsive: {
          0: { items: 2 },
          480: { items: 3 },
          768: { items: 4 },
          992: { items: 5 },
          1200: { items: 6 }
        }
      });

      initialized.current = true;
    };

    init();

    // Cleanup on unmount
    return () => {
      try {
        const $ = window?.jQuery || window?.$;
        if ($ && initialized.current && carouselRef.current) {
          const $el = $(carouselRef.current);
          if ($el.data('owl.carousel')) {
            $el.trigger('destroy.owl.carousel');
          }
        }
      } catch {}
      initialized.current = false;
    };
  }, [ready]);

  return (
    <>
      {/* Load jQuery + Owl Carousel JS only; no CSS as requested */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        strategy="afterInteractive"
        onLoad={() => setReady(true)}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
        strategy="afterInteractive"
        onLoad={() => setReady(true)}
      />

      <section className="section-small-padding caseStudy-partners">
        <div className="container">
          <div className="row align-items-center rowGap2">
            <div className="col-md-12">
              <div
                className="caseStudy-partners-carousel caseStudy-partners-carousel2  owl-carousel"
                ref={carouselRef}
              >
                {fullLogos.map((logo, idx) => (
                  <div className="item" key={`${logo.alt}-${idx}`}>
                    <img
                      className={logo.filterInvert ? 'filterInvert' : undefined}
                      src={logo.src}
                      alt={logo.alt}
                      width="273"
                      height="95"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
