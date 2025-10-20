'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

const ScriptLoader = ({ children }) => {
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    // Check if scripts are already loaded
    if (typeof window !== 'undefined') {
      if (window.$ && window.$.fn && window.$.fn.owlCarousel) {
        setScriptsLoaded(true);
      }
    }
  }, []);

  return (
    <>
      {/* Load scripts with lazyOnload strategy */}
      <Script
        src="/assets/js/jquery-3.7.1.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          // Make jQuery available globally
          if (typeof window !== 'undefined') {
            window.$ = window.jQuery;
          }
        }}
      />
      
      <Script
        src="/assets/js/owl.carousel.min.js"
        strategy="lazyOnload"
        onLoad={() => setScriptsLoaded(true)}
      />

      {children}
    </>
  );
};

export default ScriptLoader;
