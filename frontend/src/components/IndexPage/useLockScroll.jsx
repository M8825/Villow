import { useEffect } from 'react';

const useLockBodyScroll = () => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const preventDefault = (e) => e.preventDefault();

    // Disable scrolling
    document.body.style.overflow = 'hidden';
    document.body.addEventListener('touchmove', preventDefault, { passive: false });

    // Re-enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = originalStyle;
      document.body.removeEventListener('touchmove', preventDefault, { passive: false });
    };
  }, []);
    };

export default useLockBodyScroll;
