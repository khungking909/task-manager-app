import { useEffect } from 'react';

function useOutsideClick(callback: () => void, ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    function onMouseDown(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener('click', onMouseDown);
    return () => {
      document.removeEventListener('click', onMouseDown);
    };
  }, [callback, ref]);
}

export default useOutsideClick;
