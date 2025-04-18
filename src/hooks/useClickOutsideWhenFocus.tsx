import { useEffect, useRef, useState } from 'react';

export function useClickOutsideWhenFocused<T extends HTMLElement>(callback: () => void) {
  const ref = useRef<T>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const handleFocus = () => setIsFocused(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
        setIsFocused(false);
      }
    };

    const element = ref.current;

    if (element) {
      element.addEventListener('click', handleFocus);
    }

    if (isFocused) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      element?.removeEventListener('click', handleFocus);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isFocused, callback]);

  return { ref };
}
