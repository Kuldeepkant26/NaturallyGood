import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, scroll to that element
    if (hash) {
      // Remove the '#' from hash to get the element ID
      const id = hash.replace('#', '');
      
      // Retry logic to handle cases where DOM isn't ready yet
      let attempts = 0;
      const maxAttempts = 10;
      
      const tryScroll = () => {
        const element = document.getElementById(id);
        
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
          return true;
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(tryScroll, 150);
        } else {
          // If element not found after all attempts, scroll to top
          console.warn(`Element with id "${id}" not found after ${maxAttempts} attempts`);
        }
        return false;
      };
      
      // Start trying to scroll after a short delay
      setTimeout(tryScroll, 100);
    } else {
      // No hash, scroll to top as usual
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;