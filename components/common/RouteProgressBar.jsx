'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

// A slim, brand-colored progress bar at the top of the viewport that fires
// the instant someone clicks an internal link, and completes once the new
// route has actually rendered. No external dependency required.
export default function RouteProgressBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const isFirstRender = useRef(true);

  const startProgress = () => {
    clearInterval(timerRef.current);
    setVisible(true);
    setProgress(20);
    timerRef.current = setInterval(() => {
      setProgress((p) => (p >= 85 ? p : p + Math.random() * 12));
    }, 200);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = e.target.closest('a');
      if (!anchor) return;
      if (anchor.target === '_blank') return;

      const href = anchor.getAttribute('href');
      if (!href) return;
      if (href.startsWith('#') || /^(tel:|mailto:|sms:)/i.test(href)) return;

      let url;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;

      startProgress();
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    clearInterval(timerRef.current);
    setProgress(100);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 250);
    return () => clearTimeout(hideTimer);
  }, [pathname]);

  useEffect(() => () => clearInterval(timerRef.current), []);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-[3px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#c9a86c] to-[#e8c68a] shadow-[0_0_10px_rgba(201,168,108,0.6)] transition-[width] duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
