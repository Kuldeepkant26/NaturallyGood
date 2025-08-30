import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  
  const videos = [
    "https://www.pexels.com/download/video/4578568/",
    "https://www.pexels.com/download/video/10041408/"
  ];

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

  useEffect(() => {
    // Preload the second video when the component mounts
    if (video2Ref.current) {
      video2Ref.current.load();
    }
  }, []);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const handleVideoEnded = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      
      // Start the transition
      const nextVideoIndex = currentVideoIndex === 0 ? 1 : 0;
      const currentVideo = currentVideoIndex === 0 ? video1Ref.current : video2Ref.current;
      const nextVideo = nextVideoIndex === 0 ? video1Ref.current : video2Ref.current;
      
      // Fade out current video and fade in next video
      if (currentVideo) {
        currentVideo.style.opacity = '0';
      }
      
      if (nextVideo) {
        nextVideo.style.opacity = '1';
        nextVideo.currentTime = 0;
        nextVideo.play();
      }
      
      // Update the current video index after transition
      setTimeout(() => {
        setCurrentVideoIndex(nextVideoIndex);
        setIsTransitioning(false);
        
        // Reset the opacity of the previous video and prepare it for next cycle
        if (currentVideo) {
          currentVideo.style.opacity = '1';
          currentVideo.currentTime = 0;
        }
      }, 1000); // 1 second transition time
    }
  };

  return (
    <section className="hero-container">
      {/* Background Videos */}
      <video
        ref={video1Ref}
        className={`hero-video ${currentVideoIndex === 0 ? 'active' : 'inactive'}`}
        autoPlay
        muted
        playsInline
        onLoadedData={handleVideoLoaded}
        onEnded={handleVideoEnded}
        preload="metadata"
        style={{
          opacity: currentVideoIndex === 0 ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
          zIndex: currentVideoIndex === 0 ? -2 : -3
        }}
      >
        <source src={videos[0]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video
        ref={video2Ref}
        className={`hero-video ${currentVideoIndex === 1 ? 'active' : 'inactive'}`}
        muted
        playsInline
        onEnded={handleVideoEnded}
        preload="metadata"
        style={{
          opacity: currentVideoIndex === 1 ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
          zIndex: currentVideoIndex === 1 ? -2 : -3
        }}
      >
        <source src={videos[1]} type="video/mp4" />
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
            Get delivered 100% organic fresh vegetables to your door step. 
            Farm-fresh produce sourced directly from our certified organic farms 
            for the healthiest meals every day.
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
