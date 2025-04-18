import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const smoothScrollToTop = () => {
  const startPosition = window.scrollY;
  const duration = 500;
  const startTime = performance.now();

  const scroll = (currentTime: number) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const easing = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

    window.scrollTo(0, startPosition * (1 - easing));

    if (elapsedTime < duration) {
      requestAnimationFrame(scroll);
    }
  };

  requestAnimationFrame(scroll);
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    smoothScrollToTop();
  }, [pathname]);

  return null;
};

export default ScrollToTop;
