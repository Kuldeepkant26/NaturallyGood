import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

/**
 * Custom hook for navigating to the products section
 * Works from any page - navigates to home if needed, then scrolls to products
 */
export const useNavigateToProducts = () => {
  const navigate = useNavigate();

  const navigateToProducts = useCallback((e) => {
    if (e) {
      e.preventDefault();
    }

    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== '/') {
      navigate('/', { replace: false });
      
      // Use setTimeout to ensure navigation completes before scrolling
      setTimeout(() => {
        scrollToProducts();
      }, 100);
    } else {
      // If we're already on the home page, just scroll
      scrollToProducts();
    }
  }, [navigate]);

  return navigateToProducts;
};

/**
 * Utility function to scroll to the products section
 */
const scrollToProducts = () => {
  // Try multiple selectors to find the products section
  const selectors = [
    '[data-section="products"]',
    '#products',
    '[id="products"]'
  ];

  let productsSection = null;
  
  for (const selector of selectors) {
    productsSection = document.querySelector(selector);
    if (productsSection) break;
  }

  if (productsSection) {
    productsSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    // Fallback: scroll to approximate position if section not found
    console.warn('Products section not found, scrolling to approximate position');
    window.scrollTo({
      top: window.innerHeight * 1.5, // Approximate position
      behavior: 'smooth'
    });
  }
};

/**
 * Direct navigation function that can be used without hooks
 * Useful for non-component contexts
 */
export const navigateToProductsSection = () => {
  if (window.location.pathname !== '/') {
    window.location.href = '/#products';
  } else {
    scrollToProducts();
  }
};
