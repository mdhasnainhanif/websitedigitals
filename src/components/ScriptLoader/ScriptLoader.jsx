'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

const ScriptLoader = ({ children }) => {
  const [jqueryLoaded, setJqueryLoaded] = useState(false);
  const [owlLoaded, setOwlLoaded] = useState(false);

  useEffect(() => {
    // Check if scripts are already loaded
    if (typeof window !== 'undefined') {
      if (window.$) setJqueryLoaded(true);
      if (window.$ && window.$.fn.owlCarousel) setOwlLoaded(true);
    }
  }, []);

  return (
    <>
      {/* Load jQuery only when needed */}
      {!jqueryLoaded && (
        <Script
          src="/assets/js/jquery-3.7.1.min.js"
          strategy="lazyOnload"
          onLoad={() => {
            setJqueryLoaded(true);
            // Make jQuery available globally
            if (typeof window !== 'undefined') {
              window.$ = window.jQuery;
            }
          }}
        />
      )}

      {/* Load Owl Carousel only when jQuery is ready */}
      {jqueryLoaded && !owlLoaded && (
        <Script
          src="/assets/js/owl.carousel.min.js"
          strategy="lazyOnload"
          onLoad={() => setOwlLoaded(true)}
        />
      )}

      {children}
    </>
  );
};

export default ScriptLoader;
