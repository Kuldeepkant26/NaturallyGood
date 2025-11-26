import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics script
    const initGA = () => {
      // Create and append gtag script
      const gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-089WGBBMK2';
      document.head.appendChild(gtagScript);

      // Initialize dataLayer and gtag function
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      window.gtag = gtag;
      
      // Wait for script to load before calling gtag
      gtagScript.onload = () => {
        gtag('js', new Date());
        gtag('config', 'G-089WGBBMK2', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: location.pathname
        });
      };
    };

    // Only initialize once
    if (!window.gtag) {
      initGA();
    }
  }, [location.pathname]);

  useEffect(() => {
    // Track page views on route change
    if (window.gtag) {
      window.gtag('config', 'G-089WGBBMK2', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname
      });
    }
  }, [location]);

  return null;
};

export default Analytics;