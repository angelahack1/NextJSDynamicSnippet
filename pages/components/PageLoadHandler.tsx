'use client';

import { useEffect } from 'react';

interface PageLoadHandlerProps {
  children: React.ReactNode;
}

export default function PageLoadHandler({ children }: PageLoadHandlerProps) {
  useEffect(() => {

    const handleDOMReady = () => {
      console.log('DOM is ready for product catalog!');
      //...      
    };

    const handlePageLoad = () => {
      console.log('Product catalog page is fully loaded!');
      
      window.setTimeout(() => {
        document?.querySelector("body > nextjs-portal")?.setAttribute("style", "display: none !important;");
      }, 100);

      console.log('Page loaded at:', new Date().toISOString());
      console.log('Current URL:', window.location.href);
    };

    if (document.readyState === 'complete') {
      handleDOMReady();
      handlePageLoad();
    } else if (document.readyState === 'interactive') {
      handleDOMReady();
      window.addEventListener('load', handlePageLoad);
    } else {
      document.addEventListener('DOMContentLoaded', handleDOMReady);
      window.addEventListener('load', handlePageLoad);
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMReady);
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  return <>{children}</>;
}
