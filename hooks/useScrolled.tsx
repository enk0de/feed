import { useEffect, useState } from 'react';

export default function useScrolled() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const listener = () => {
      const scrollY = window.scrollY;

      window.requestAnimationFrame(() => {
        setScrolled(scrollY > 0);
      });
      // setScrolled(true);
    };
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return scrolled;
}
