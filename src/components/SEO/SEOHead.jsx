import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({
  title = "NaturallyGood - Fresh Organic Vegetables Delivered to Your Doorstep",
  description = "Premium organic vegetables grown with love and care. Farm-fresh, chemical-free produce delivered directly from our sustainable farms to your home. Experience the finest organic harvests with NaturallyGood.",
  keywords = "organic vegetables, fresh produce, chemical-free vegetables, farm-to-table, sustainable farming, organic delivery, fresh vegetables online, naturally grown, premium vegetables, healthy food delivery",
  image = "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3",
  url = "https://www.naturallygood.in",
  type = "website",
  author = "NaturallyGood - Kanpan Organic Farms",
  siteName = "NaturallyGood",
  locale = "en_IN",
  twitterHandle = "@naturallygoodin"
}) => {
  const canonicalUrl = url;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#00963F" />
      <meta name="msapplication-TileColor" content="#00963F" />
      <meta name="application-name" content={siteName} />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      
      {/* Business Info */}
      <meta name="rating" content="5" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      
      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NaturallyGood",
          "legalName": "Kanpan Organic Farms Private Limited",
          "url": "https://www.naturallygood.in",
          "logo": "https://www.naturallygood.in/favicon.png",
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9643722200",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"]
          },
          "sameAs": [
            "https://wa.me/919643722200",
            "https://play.google.com/store/apps/details?id=com.naturallygood.app"
          ],
          "foundingDate": "2020",
          "founders": [{
            "@type": "Person",
            "name": "NaturallyGood Team"
          }],
          "numberOfEmployees": "50-100",
          "slogan": "Freshly Harvested Organic Goodness",
          "keywords": keywords,
          "serviceArea": {
            "@type": "Country",
            "name": "India"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Organic Vegetables",
            "itemListElement": [{
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Fresh Organic Vegetables",
                "description": "Premium organic vegetables delivered fresh from farm to table"
              }
            }]
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;