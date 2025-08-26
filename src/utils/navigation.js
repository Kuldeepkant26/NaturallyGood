/**
 * Global navigation utilities for smooth scrolling and page navigation
 */

// Global function to navigate to products section
let navigateFunction = null;

// Set the navigate function (called from App component)
export const setNavigateFunction = (navigate) => {
  navigateFunction = navigate;
};

// Navigate to products section with smooth scrolling
export const navigateToProducts = () => {
  const currentPath = window.location.pathname;
  
  if (currentPath === '/') {
    // Already on home page, just scroll to products section
    scrollToProductsSection();
  } else {
    // Navigate to home page first, then scroll to products section
    if (navigateFunction) {
      navigateFunction('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        scrollToProductsSection();
      }, 100);
    }
  }
};

// Scroll to products section
export const scrollToProductsSection = () => {
  // Try multiple times in case the section isn't loaded yet
  let attempts = 0;
  const maxAttempts = 10;
  
  const tryScroll = () => {
    const productsSection = document.querySelector('[data-section="products"]');
    
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      return true;
    } else if (attempts < maxAttempts) {
      attempts++;
      setTimeout(tryScroll, 200);
    }
    return false;
  };
  
  tryScroll();
};

// Alternative method using element ID
export const scrollToElementById = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};
