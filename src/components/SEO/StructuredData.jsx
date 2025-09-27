import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = ({ type = 'organization', data }) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NaturallyGood",
      "legalName": "Kanpan Organic Farms Private Limited",
      "url": "https://www.naturallygood.in",
      "logo": "https://www.naturallygood.in/src/assets/NGlogo.png",
      "description": "Premium organic vegetables grown with love and care. Farm-fresh, chemical-free produce delivered directly from our sustainable farms to your home.",
      "foundingDate": "2020",
      "slogan": "Freshly Harvested Organic Goodness",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9643722200",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "IN"
      },
      "sameAs": [
        "https://wa.me/919643722200",
        "https://play.google.com/store/apps/details?id=com.naturallygood.app"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Organic Vegetables",
        "itemListElement": [{
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Fresh Organic Vegetables",
            "description": "Premium organic vegetables delivered fresh from farm to table",
            "category": "Organic Food",
            "brand": {
              "@type": "Brand",
              "name": "NaturallyGood"
            }
          }
        }]
      },
      "serviceArea": {
        "@type": "Country",
        "name": "India"
      },
      "makesOffer": {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Organic Vegetable Delivery",
          "description": "Fresh organic vegetable delivery service",
          "provider": {
            "@type": "Organization",
            "name": "NaturallyGood"
          }
        }
      }
    };

    // Add specific data based on type
    switch (type) {
      case 'localbusiness':
        return {
          ...baseData,
          "@type": "LocalBusiness",
          "priceRange": "$$",
          "telephone": "+91-9643722200",
          "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 09:00-18:00"
        };
        
      case 'foodestablishment':
        return {
          ...baseData,
          "@type": "FoodEstablishment",
          "servesCuisine": "Organic Vegetables",
          "menu": "https://www.naturallygood.in/",
          "acceptsReservations": "False",
          "priceRange": "$$"
        };
        
      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          ...data
        };
        
      case 'breadcrumblist':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data
        };
        
      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data
        };
        
      default:
        return baseData;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredData;