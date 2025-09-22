// Tab navigation utility for scrolling to sections and activating specific tabs

// Tab mapping for ProductsSection (What's in Your Bag?)
export const PRODUCTS_TAB_MAP = {
  'veggies-exotics': 'veggies',
  'staples-condiments': 'staples', 
  'salads-assortments': 'salads',
  'greens-herbs': 'greens'
};

// Tab mapping for AddOnsSection (Premium Offerings)
export const PREMIUM_TAB_MAP = {
  'naturally-pure': 'premium-addons',
  'nutrition-packs': 'nutrition-packs',
  'naturally-fit': 'naturally-fit', 
  'naturally-curious': 'naturally-curious'
};

// Tab mapping for FAQSection
export const FAQ_TAB_MAP = {
  'delivery-faqs': 'delivery',
  'return-faqs': 'order'
};

// Store the navigate function from React Router
let navigateFunction = null;

// Set the navigate function (should be called from App or main component)
export const setTabNavigateFunction = (navigate) => {
  navigateFunction = navigate;
};

// Function to navigate to a specific tab
export const navigateToTab = (tabKey) => {
  // Check if it's a products tab
  if (PRODUCTS_TAB_MAP[tabKey]) {
    navigateToHomeAndActivateTab('products', PRODUCTS_TAB_MAP[tabKey], 'products');
    return;
  }
  
  // Check if it's a premium offerings tab
  if (PREMIUM_TAB_MAP[tabKey]) {
    navigateToHomeAndActivateTab('premium-offerings', PREMIUM_TAB_MAP[tabKey], 'premium');
    return;
  }
  
  // Check if it's an FAQ tab
  if (FAQ_TAB_MAP[tabKey]) {
    navigateToHomeAndActivateTab('faqs', FAQ_TAB_MAP[tabKey], 'faqs');
    return;
  }
  
  console.warn(`Tab key "${tabKey}" not found in tab mappings`);
};

// Helper function to navigate to home page and activate tab
const navigateToHomeAndActivateTab = (sectionId, tabValue, sectionType) => {
  // Check if we're on the home page
  if (window.location.pathname !== '/') {
    // Navigate to home page first
    if (navigateFunction) {
      navigateFunction('/');
      
      // Wait for navigation to complete, then scroll and activate tab
      setTimeout(() => {
        scrollToSectionAndActivateTab(sectionId, tabValue, sectionType);
      }, 100);
    } else {
      // Fallback: try to navigate using window.location
      window.location.href = '/';
    }
  } else {
    // Already on home page, just scroll and activate tab
    scrollToSectionAndActivateTab(sectionId, tabValue, sectionType);
  }
};

// Helper function to scroll to section and activate tab
const scrollToSectionAndActivateTab = (sectionId, tabValue, sectionType) => {
  // Find the section using multiple selectors
  const selectors = [
    `[data-section="${sectionId}"]`,
    `#${sectionId}`,
    `[id="${sectionId}"]`
  ];

  let section = null;
  
  for (const selector of selectors) {
    section = document.querySelector(selector);
    if (section) break;
  }

  if (section) {
    // Calculate offset for navbar
    const isMobile = window.innerWidth < 1024;
    const offset = isMobile ? 80 : 60;
    const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Wait for scroll to complete, then trigger tab activation
    setTimeout(() => {
      // Dispatch custom event to activate the tab
      const event = new CustomEvent('activateTab', {
        detail: {
          sectionType,
          tabValue,
          sectionId
        }
      });
      window.dispatchEvent(event);
    }, 800); // Allow time for smooth scrolling
  } else {
    console.warn(`Section with id "${sectionId}" not found`);
  }
};

// Function to handle footer link clicks
export const handleFooterTabClick = (e, tabKey) => {
  e.preventDefault();
  navigateToTab(tabKey);
};