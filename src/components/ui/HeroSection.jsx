import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Show navbar after 2 seconds
    const navbarTimer = setTimeout(() => {
      // Trigger navbar animation by dispatching a custom event
      window.dispatchEvent(new CustomEvent('showNavbar'));
    }, 2000);

    // Show hero content after 3 seconds (longer delay for initial video-only experience)
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => {
      clearTimeout(navbarTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="hero-container">
      {/* Background Video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={handleVideoLoaded}
        preload="metadata"
      >
        <source
          src="https://cdn.pixabay.com/video/2020/04/30/37664-418005769_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Fallback background if video doesn't load */}
      {!videoLoaded && (
        <div 
          className="hero-video"
          style={{
            background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -2
          }}
        />
      )}

      {/* Overlay - only show when content is visible */}
      {showContent && <div className="hero-overlay"></div>}

      {/* Hero Content - only render when showContent is true */}
      {showContent && (
        <div className="hero-content">
          <div 
            className="hero-badge animate-fade-in-left"
            style={{ animationDelay: '0.1s' }}
          >
            ✨ Premium Organic Products
          </div>
          
          <h1 
            className="hero-title animate-fade-in-left"
            style={{ animationDelay: '0.3s' }}
          >
            Experience
            <br />
            <span className="hero-title-highlight">Naturally Good</span>
          </h1>
          
          <p 
            className="hero-subtitle animate-fade-in-left"
            style={{ animationDelay: '0.5s' }}
          >
            Discover premium organic products crafted with care and passion. 
            From farm to table, we bring you the finest natural ingredients 
            for a healthier lifestyle.
          </p>
          
          <div 
            className="hero-cta-group animate-fade-in-up"
            style={{ animationDelay: '0.7s' }}
          >
            <Link to="/products" className="hero-cta-primary">
              Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            
            <Link to="/about" className="hero-cta-secondary">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 12l2 2 4-4"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
