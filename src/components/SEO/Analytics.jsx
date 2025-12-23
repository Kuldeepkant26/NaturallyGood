import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Meta Pixel
    const initMetaPixel = () => {
      // Prevent double initialization
      if (window.fbq) return;

      // Initialize fbq function
      const n = window.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      
      if (!window._fbq) window._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];

      // Create and append Meta Pixel script
      const fbScript = document.createElement('script');
      fbScript.async = true;
      fbScript.src = 'https://connect.facebook.net/en_US/fbevents.js';
      
      const firstScript = document.getElementsByTagName('script')[0];
      firstScript.parentNode.insertBefore(fbScript, firstScript);

      // Initialize pixel with ID and track initial PageView
      fbScript.onload = () => {
        window.fbq('init', '167463209732226');
        window.fbq('track', 'PageView');
      };
    };

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

    // Initialize both tracking scripts once
    if (!window.gtag) {
      initGA();
    }
    
    if (!window.fbq) {
      initMetaPixel();
    }
  }, [location.pathname]);

  useEffect(() => {
    // Track page views on route change for both analytics
    
    // Google Analytics
    if (window.gtag) {
      window.gtag('config', 'G-089WGBBMK2', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname
      });
    }

    // Meta Pixel
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location]);

  return null;
};

export default Analytics;