'use client';
import { useEffect } from 'react';

export function useCyclingBlueGradient(targetId = 'bg-change', intervalMs = 3000) {
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;

    // Check if device is mobile
    const isMobile = () => {
      return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    // Don't apply color change effect on mobile devices
    if (isMobile()) {
      return;
    }

    const primaryColor = '#3c7cff';

    const getRandomBlueShade = () => {
      const r = Math.floor(Math.random() * 50);
      const g = Math.floor(Math.random() * 50);
      const b = 255;
      return `rgb(${r}, ${g}, ${b})`;
    };

    const changeBackgroundColor = () => {
      const secondary = getRandomBlueShade();
      el.style.background = `radial-gradient(circle, ${primaryColor}, ${secondary})`;
    };

    // set an initial gradient, then start cycling
    changeBackgroundColor();
    const id = setInterval(changeBackgroundColor, intervalMs);

    return () => clearInterval(id);
  }, [targetId, intervalMs]);
}
