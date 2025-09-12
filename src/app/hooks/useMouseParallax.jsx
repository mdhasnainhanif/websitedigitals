'use client';
import { useEffect } from 'react';

/**
 * Mouse parallax (vanilla JS + React)
 * containerSelectors: array of containers that contain child elems with data-depth
 * options:
 *  - selector: which children to move (default: [data-depth])
 *  - maxTranslate: max px shift at depth=1 (default: 28)
 *  - invert: reverse direction (default: false)
 */
export function useMouseParallax(
  containerSelectors = ['.parallex-effect', '.mobile-parallex-effect'],
  { selector = '[data-depth]', maxTranslate = 28, invert = false } = {}
) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const containers = containerSelectors
      .map((sel) => Array.from(document.querySelectorAll(sel)))
      .flat();

    const cleanups = containers.map((container) => {
      if (!container) return () => {};
      const items = container.querySelectorAll(selector);
      if (!items.length) return () => {};

      let raf = 0;
      const dir = invert ? -1 : 1;

      const onMove = (e) => {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5..0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          items.forEach((el) => {
            const depth = parseFloat(el.getAttribute('data-depth') || '0');
            const tx = dir * x * depth * maxTranslate * 2;
            const ty = dir * y * depth * maxTranslate * 2;
            el.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`;
            el.style.willChange = 'transform';
          });
        });
      };

      const onLeave = () => {
        if (raf) cancelAnimationFrame(raf);
        items.forEach((el) => {
          el.style.transform = 'translate3d(0,0,0)';
        });
      };

      container.addEventListener('mousemove', onMove, { passive: true });
      container.addEventListener('mouseleave', onLeave);

      const prevPerspective = container.style.perspective;
      if (!prevPerspective) container.style.perspective = '1000px';

      return () => {
        container.removeEventListener('mousemove', onMove);
        container.removeEventListener('mouseleave', onLeave);
        if (!prevPerspective) container.style.perspective = '';
        items.forEach((el) => (el.style.transform = ''));
      };
    });

    return () => cleanups.forEach((fn) => fn && fn());
  }, [containerSelectors.join('|'), selector, maxTranslate, invert]);
}
