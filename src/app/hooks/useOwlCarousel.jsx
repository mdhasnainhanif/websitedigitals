"use client";

import { useEffect, useRef } from 'react';

export const useOwlCarousel = (selector, options = {}) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    let timeoutId;
    
    const initializeCarousel = () => {
      if (typeof window !== 'undefined' && window.$ && window.$.fn.owlCarousel) {
        const $element = window.$(selector);
        
        if ($element.length > 0) {
          // Destroy existing carousel if it exists
          if ($element.hasClass('owl-loaded')) {
            $element.trigger('destroy.owl.carousel');
          }
          
          // Initialize the carousel
          $element.owlCarousel(options);
          
          // Store reference for cleanup
          carouselRef.current = $element;
        }
      } else {
        // If jQuery or Owl Carousel is not loaded, try again after a short delay
        timeoutId = setTimeout(initializeCarousel, 100);
      }
    };

    // Initialize immediately
    initializeCarousel();

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (carouselRef.current && carouselRef.current.hasClass('owl-loaded')) {
        carouselRef.current.trigger('destroy.owl.carousel');
      }
    };
  }, [selector, JSON.stringify(options)]);

  return carouselRef;
};
