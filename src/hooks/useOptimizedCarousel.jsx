'use client';

import { useEffect, useRef, useState } from 'react';

const useOptimizedCarousel = (options = {}) => {
  const carouselRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeCarousel = async () => {
      // Wait for both jQuery and Owl Carousel to be available
      if (typeof window !== 'undefined' && window.$ && window.$.fn.owlCarousel) {
        setIsReady(true);
      } else {
        // Poll for scripts to load
        const checkScripts = setInterval(() => {
          if (typeof window !== 'undefined' && window.$ && window.$.fn.owlCarousel) {
            setIsReady(true);
            clearInterval(checkScripts);
          }
        }, 100);

        // Cleanup after 10 seconds
        setTimeout(() => clearInterval(checkScripts), 10000);
      }
    };

    initializeCarousel();
  }, []);

  useEffect(() => {
    if (!isReady || !carouselRef.current || isInitialized) return;

    const $ = window.$;
    const $carousel = $(carouselRef.current);

    // Initialize carousel with optimized options
    const defaultOptions = {
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      nav: true,
      dots: true,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 }
      },
      // Performance optimizations
      lazyLoad: true,
      lazyLoadEager: 1,
      ...options
    };

    try {
      $carousel.owlCarousel(defaultOptions);
      setIsInitialized(true);
    } catch (error) {
      console.warn('Carousel initialization failed:', error);
    }

    // Cleanup function
    return () => {
      try {
        if ($carousel.data('owl.carousel')) {
          $carousel.trigger('destroy.owl.carousel');
        }
      } catch (error) {
        console.warn('Carousel cleanup failed:', error);
      }
    };
  }, [isReady, isInitialized, options]);

  return {
    carouselRef,
    isReady,
    isInitialized
  };
};

export default useOptimizedCarousel;
