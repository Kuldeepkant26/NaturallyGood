import React, { useState, useEffect } from 'react';
import './NatureHeroSection.css';

const NatureHeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});

  const images = [
    {
      url: 'https://cdn.pixabay.com/photo/2021/09/27/11/01/man-6660386_1280.jpg',
      alt: 'Farmer working in nature',
      title: 'Connecting with Nature',
      subtitle: 'Experience the harmony between human and earth'
    },
    {
      url: 'https://cdn.pixabay.com/photo/2021/09/27/11/02/man-6660395_1280.jpg',
      alt: 'Sustainable farming practices',
      title: 'Sustainable Agriculture',
      subtitle: 'Growing food with respect for our planet'
    },
    {
      url: 'https://cdn.pixabay.com/photo/2021/09/27/11/02/man-6660401_1280.jpg',
      alt: 'Natural farming methods',
      title: 'Pure & Natural',
      subtitle: 'Cultivating health from the ground up'
    },
    {
      url: 'https://cdn.pixabay.com/photo/2021/09/27/11/01/man-6660394_1280.jpg',
      alt: 'Harmony with nature',
      title: 'Nature\'s Promise',
      subtitle: 'Where tradition meets innovation'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Show content after initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Preload images
  useEffect(() => {
    images.forEach((image, index) => {
      const img = new Image();
      img.onload = () => {
        setImagesLoaded(prev => ({
          ...prev,
          [index]: true
        }));
      };
      img.src = image.url;
    });
  }, []);

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  const goToNext = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('your-planet-section');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="nature-hero">
      {/* Background Image Slider */}
      <div className="nature-hero__slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`nature-hero__slide ${
              index === currentImageIndex ? 'active' : ''
            } ${imagesLoaded[index] ? 'loaded' : ''}`}
            style={{
              backgroundImage: `url(${image.url})`
            }}
          >
            {/* Gradient Overlay */}
            <div className="nature-hero__overlay"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className={`nature-hero__content ${isLoaded ? 'visible' : ''}`}>
        <div className="nature-hero__container">
          <div className="nature-hero__text">
            <h1 className="nature-hero__title">
              {images[currentImageIndex].title}
            </h1>
            <p className="nature-hero__subtitle">
              {images[currentImageIndex].subtitle}
            </p>
            <div className="nature-hero__description">
              <p>
                Discover the beauty of sustainable living where every choice 
                nurtures both health and environment. Join us in celebrating 
                the perfect harmony between nature and nourishment.
              </p>
            </div>
            <div className="nature-hero__cta">
              <button 
                className="nature-hero__btn nature-hero__btn--primary"
                onClick={scrollToNextSection}
              >
              Your Planet
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="nature-hero__controls">
        {/* Previous/Next Arrows */}
        <button 
          className="nature-hero__arrow nature-hero__arrow--prev"
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button 
          className="nature-hero__arrow nature-hero__arrow--next"
          onClick={goToNext}
          aria-label="Next image"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="nature-hero__indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`nature-hero__dot ${
                index === currentImageIndex ? 'active' : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="nature-hero__scroll-indicator">
        <div className="nature-hero__scroll-text">Scroll to explore</div>
        <div className="nature-hero__scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default NatureHeroSection;
