import React from 'react';

const SEOImage = ({ 
  src, 
  alt, 
  title, 
  width, 
  height, 
  loading = "lazy",
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  ...props 
}) => {
  // Generate WebP source if original is not WebP
  const getWebPSource = (originalSrc) => {
    if (originalSrc.includes('.webp')) return originalSrc;
    return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  };

  // Fallback alt text generation
  const generateAltText = (src, title) => {
    if (alt) return alt;
    if (title) return title;
    
    // Extract filename and create descriptive alt
    const filename = src.split('/').pop().split('.')[0];
    return `${filename.replace(/[-_]/g, ' ')} - NaturallyGood organic vegetables`;
  };

  const finalAlt = generateAltText(src, title);

  return (
    <picture>
      <source 
        srcSet={getWebPSource(src)} 
        type="image/webp" 
        sizes={sizes}
      />
      <img
        src={src}
        alt={finalAlt}
        title={title || finalAlt}
        width={width}
        height={height}
        loading={loading}
        className={className}
        {...props}
        // Add structured data for images
        itemProp="image"
      />
    </picture>
  );
};

export default SEOImage;