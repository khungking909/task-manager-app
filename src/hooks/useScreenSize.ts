import { useEffect, useState } from 'react';
import ResponsiveType from 'src/types/responsive';

const getSize = (width: number): keyof ResponsiveType => {
  if (width >= 1280) {
    return 'xl'; // Extra Large
  }
  if (width >= 1024) {
    return 'lg'; // Large
  }
  if (width >= 768) {
    return 'md'; // Medium
  }
  return 'sm'; // Small
};

export default function useScreenSize() {
  const [responsive, setResponsive] = useState(getSize(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      const newResponsive = getSize(window.innerWidth);

      if (newResponsive !== responsive) {
        setResponsive(newResponsive);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [responsive]);

  return responsive;
}
