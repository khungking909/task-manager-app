import { useEffect, useState } from 'react';

const WIDTH_MOBILE = 768;
const getIsMobile = () => window.innerWidth <= WIDTH_MOBILE;

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener('change', onChange);

    return () => {
      mediaQuery.removeEventListener('change', onChange);
    };
  }, []);

  return isMobile;
}
