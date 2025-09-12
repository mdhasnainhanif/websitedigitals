'use client';
import { useEffect } from 'react';

export function useCyclingBlueGradient(targetId = 'bg-change', intervalMs = 3000) {
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;

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
