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

// Function to navigate to a specific tab
export const navigateToTab = (tabKey) => {
  // Check if it's a products tab
  if (PRODUCTS_TAB_MAP[tabKey]) {
    scrollToSectionAndActivateTab('products', PRODUCTS_TAB_MAP[tabKey], 'products');
    return;
  }
  
  // Check if it's a premium offerings tab
  if (PREMIUM_TAB_MAP[tabKey]) {
    scrollToSectionAndActivateTab('premium-offerings', PREMIUM_TAB_MAP[tabKey], 'premium');
    return;
  }
  
  console.warn(`Tab key "${tabKey}" not found in tab mappings`);
};

// Helper function to scroll to section and activate tab
const scrollToSectionAndActivateTab = (sectionId, tabValue, sectionType) => {
  // Smooth scroll to the section
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start',
      inline: 'nearest'
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
  }
};

// Function to handle footer link clicks
export const handleFooterTabClick = (e, tabKey) => {
  e.preventDefault();
  navigateToTab(tabKey);
};