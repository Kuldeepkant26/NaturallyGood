// SEO Configuration and Analytics Helper
export const seoConfig = {
  defaultTitle: "NaturallyGood - Premium Organic Vegetables Delivered Fresh | Farm to Table",
  titleTemplate: "%s | NaturallyGood",
  defaultDescription: "Experience the finest organic vegetables grown with sustainable farming practices. Fresh, chemical-free produce delivered directly from our certified organic farms to your doorstep.",
  siteUrl: "https://www.naturallygood.in",
  defaultImage: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3",
  twitterHandle: "@naturallygoodin",
  
  // Analytics & Tracking
  analytics: {
    googleAnalyticsId: "GA_TRACKING_ID", // Replace with your GA4 ID
    googleSearchConsole: "YOUR_VERIFICATION_CODE", // Replace with your verification code
    facebookPixelId: "YOUR_PIXEL_ID", // Optional
    linkedInPartnerId: "YOUR_PARTNER_ID" // Optional
  },
  
  // Business Information
  business: {
    name: "NaturallyGood",
    legalName: "Kanpan Organic Farms Private Limited",
    phone: "+91-9643722200",
    email: "Admin@Naturallygood.in",
    whatsapp: "https://wa.me/919643722200",
    playstore: "https://play.google.com/store/apps/details?id=com.naturallygood.app",
    // Add complete address for better local SEO
    address: {
      streetAddress: "Your Street Address", // Add real address
      addressLocality: "Your City", // Add city
      addressRegion: "Your State", // Add state
      postalCode: "Your PIN", // Add PIN code
      addressCountry: "IN"
    }
  },

  // Page-specific SEO data
  pages: {
    home: {
      title: "NaturallyGood - Premium Organic Vegetables Delivered Fresh | Farm to Table",
      description: "Experience the finest organic vegetables grown with sustainable farming practices. Fresh, chemical-free produce delivered directly from our certified organic farms to your doorstep. Order premium organic vegetables online with NaturallyGood.",
      keywords: "organic vegetables online, fresh organic produce delivery, chemical-free vegetables, sustainable farming, farm to table delivery, premium organic food, naturally grown vegetables, organic grocery delivery, fresh vegetables online India"
    },
    about: {
      title: "About NaturallyGood - Your Trusted Organic Farming Partner | Sustainable Agriculture",
      description: "Discover NaturallyGood's journey from farm to table. Learn about our sustainable organic farming practices, commitment to chemical-free produce, and how we're revolutionizing healthy food delivery across India.",
      keywords: "about NaturallyGood, organic farming company, sustainable agriculture, chemical-free farming, farm to table story, organic food company India, Kanpan Organic Farms"
    },
    farmers: {
      title: "Our Farmers - Meet the Heroes Behind NaturallyGood Organic Vegetables",
      description: "Meet our dedicated organic farmers who grow premium vegetables with passion and care. Learn about their sustainable farming practices, stories, and how they're transforming agriculture for a healthier future.",
      keywords: "organic farmers, sustainable farming, farmer stories, agricultural heroes, organic farming practices, local farmers, farm-to-table farmers, organic agriculture India"
    },
    nature: {
      title: "Sustainable Farming & Environmental Impact | NaturallyGood's Green Initiative",
      description: "Discover how NaturallyGood is protecting the environment through sustainable organic farming practices. Learn about our carbon-neutral initiatives, biodegradable packaging, and commitment to preserving nature for future generations.",
      keywords: "sustainable farming, environmental impact, carbon neutral farming, biodegradable packaging, eco-friendly agriculture, green farming practices, sustainable food production, organic environmental benefits"
    },
    you: {
      title: "Your Wellness Journey | Organic Living for Every Age Group - NaturallyGood",
      description: "Discover how NaturallyGood organic vegetables support wellness for every family member - from children to seniors. Learn about the health benefits of organic living and how our fresh produce enhances your family's nutrition and vitality.",
      keywords: "organic wellness, healthy family nutrition, organic vegetables for children, senior nutrition, organic living benefits, family health, wellness nutrition, organic food benefits, healthy lifestyle"
    }
  }
};

// SEO Health Check Function
export const checkSEO = () => {
  const issues = [];
  const recommendations = [];

  // Check if React Helmet is working
  const helmet = document.querySelector('title');
  if (!helmet) {
    issues.push("Title tag not found");
  }

  // Check meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    issues.push("Meta description not found");
  } else if (metaDesc.content.length < 120) {
    recommendations.push("Meta description should be 120-160 characters");
  }

  // Check structured data
  const structuredData = document.querySelector('script[type="application/ld+json"]');
  if (!structuredData) {
    issues.push("Structured data not found");
  }

  // Check Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  const ogImage = document.querySelector('meta[property="og:image"]');
  
  if (!ogTitle) issues.push("Open Graph title missing");
  if (!ogDesc) issues.push("Open Graph description missing");
  if (!ogImage) issues.push("Open Graph image missing");

  return {
    issues,
    recommendations,
    score: Math.max(0, 100 - (issues.length * 10) - (recommendations.length * 5))
  };
};

export default seoConfig;