import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const videoRef = useRef(null);

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
        ref={videoRef}
        className="hero-video active"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={handleVideoLoaded}
        preload="auto"
      >
        <source src="/videos/newHomeHeroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback background if video doesn't load */}
      {!videoLoaded && (
        <div 
          className="hero-video"
          style={{
            background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)',
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
          <h1 
            className="hero-title animate-fade-in-left"
            style={{ animationDelay: '0.3s' }}
          >
            <span className="hero-title-main">Freshly Harvested</span>
            <br />
            <span className="hero-title-highlight">Organic Goodness</span>
          </h1>
          
          <p 
            className="hero-subtitle animate-fade-in-left"
            style={{ animationDelay: '0.5s' }}
          >
            Get 100% organic & fresh vegetables delivered to your doorstep. 
            Farm fresh produce harvested from our certified organic farms 
            for the healthiest meals every day for your family.
          </p>
          
          <div 
            className="hero-cta-group animate-fade-in-up"
            style={{ animationDelay: '0.7s', display: 'flex', gap: '1rem' }}
          >
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
            <a
              href="https://wa.me/919643722200"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-secondary"
              style={{
                backgroundColor: '#79B927',
                color: '#fff',
                border: 'none',
                borderColor: 'transparent'
              }}
            >
              Subscribe Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.704"/>
              </svg>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
