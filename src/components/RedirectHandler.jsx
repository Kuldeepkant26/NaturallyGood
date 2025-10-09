import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * RedirectHandler component to handle legacy PHP routes and redirect to React Router pages
 * with section scrolling support
 */
const RedirectHandler = ({ from, to, scrollToId = null, delay = 100 }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if current path matches the "from" path
    if (location.pathname === from) {
      // Navigate to the target route
      navigate(to, { replace: true });

      // If scrollToId is provided, scroll to that section after navigation
      if (scrollToId) {
        setTimeout(() => {
          const element = document.getElementById(scrollToId);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start',
              inline: 'nearest'
            });
          } else {
            // Fallback: try to find by class name if id doesn't exist
            const elementByClass = document.querySelector(`.${scrollToId}`);
            if (elementByClass) {
              elementByClass.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
              });
            }
          }
        }, delay);
      }
    }
  }, [location.pathname, from, to, scrollToId, navigate, delay]);

  return null;
};

/**
 * Collection of all redirect routes
 * Add your legacy PHP routes here with their corresponding React routes
 */
export const redirectRoutes = [
  // Example redirects - customize these based on your actual routes
  
  // About/Us page redirects
  { from: '/who-we-are.php', to: '/about', scrollToId: 'who-we-are' },
  { from: '/our-story.php', to: '/about', scrollToId: 'who-we-are' },
  { from: '/about-us.php', to: '/about', scrollToId: null },
  { from: '/why-choose-us.php', to: '/about', scrollToId: 'why-choose-us' },
  { from: '/excellence.php', to: '/about', scrollToId: 'excellence-section' },
  
  // Farmers page redirects
  { from: '/farmers.php', to: '/farmers', scrollToId: null },
  { from: '/our-farmers.php', to: '/farmers', scrollToId: null },
  
  // Nature page redirects
  { from: '/nature.php', to: '/nature', scrollToId: null },
  { from: '/sustainability.php', to: '/nature', scrollToId: null },
  
  // You/Customer page redirects
  { from: '/you.php', to: '/you', scrollToId: null },
  { from: '/for-you.php', to: '/you', scrollToId: null },
  { from: '/how-to-get-healthy.php', to: '/you', scrollToId: null },
  
  // App page redirects
  { from: '/app.php', to: '/our-app', scrollToId: null },
  { from: '/mobile-app.php', to: '/our-app', scrollToId: null },
  { from: '/download.php', to: '/our-app', scrollToId: null },
  
  // Home redirects
  { from: '/index.php', to: '/', scrollToId: null },
  { from: '/home.php', to: '/', scrollToId: null },
  
  // Products/Location redirects - Home page second section
  { from: '/organic-vegetables-in-delhi.php', to: '/', scrollToId: 'products' },
  { from: '/organic-vegetables-in-gurgaon.php', to: '/', scrollToId: 'products' },
];

export default RedirectHandler;
