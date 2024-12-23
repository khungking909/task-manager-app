import { useEffect, useState } from 'react';

export default function useScrollElement(elementRef: React.RefObject<HTMLElement>) {
  const [space, setSpace] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        setSpace(elementRef.current.getBoundingClientRect().top);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementRef]);

  return space;
}
