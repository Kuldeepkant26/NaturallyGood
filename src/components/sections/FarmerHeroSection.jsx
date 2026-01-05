import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Pause } from 'lucide-react';

// Import fallback images
import farmerhero1 from '../../assets/farmerhero1.png';
import farmerhero2 from '../../assets/farmerhero2.png';

const FarmerHeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Fallback image slider data with synced content
  const fallbackSlides = [
    {
      image: farmerhero1,
      title: "Fresh from",
      highlight: "Farm to Table",
      subtitle: "Naturally."
    },
    {
      image: farmerhero2,
      title: "Grown with",
      highlight: "Love & Care",
      subtitle: "By Our Farmers."
    }
  ];

  // Image slider auto-advance (only when video fails and more than 1 slide)
  useEffect(() => {
    if (!videoError || fallbackSlides.length <= 1) return;
    
    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % fallbackSlides.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(slideInterval);
  }, [videoError, fallbackSlides.length]);

  const handleExploreVegetables = () => {
    // Navigate to home page and scroll to products section
    navigate('/', { replace: false });
    
    // Scroll to products section after navigation
    setTimeout(() => {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    }, 100); // Small delay to ensure navigation completes
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-start bg-black pt-[80px]">
      {/* Video Background */}
      <div className="absolute top-[80px] left-0 w-full h-[calc(100%-80px)] z-[1]">
        {!videoError ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
            onError={handleVideoError}
          >
            <source src="https://res.cloudinary.com/djqodilpf/video/upload/v1764517429/18883013-uhd_3840_2160_24fps_1_cq370q.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="farmer-hero-image-slider w-full h-full">
            {fallbackSlides.map((slide, index) => (
              <div
                key={index}
                className="w-full h-full bg-cover bg-center absolute top-0 left-0"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  opacity: currentSlideIndex === index ? 1 : 0,
                  transition: 'opacity 1.2s ease-in-out',
                  zIndex: currentSlideIndex === index ? 1 : 0
                }}
              />
            ))}
            
            {/* Slide indicators - only show if more than 1 slide */}
            {fallbackSlides.length > 1 && (
              <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                {fallbackSlides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full border-2 border-white/70 transition-all duration-400 ${
                      currentSlideIndex === index 
                        ? 'bg-green-500 border-green-500 scale-125 shadow-lg shadow-green-500/60' 
                        : 'bg-transparent hover:bg-white/50'
                    }`}
                    onClick={() => setCurrentSlideIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 via-black/30 to-black/40 z-[2]" />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-[80px] left-0 right-0 h-32 bg-gradient-to-b from-black/60 via-black/40 to-transparent z-[5] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-[5] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-[6] pl-16 max-w-2xl">
        {videoError ? (
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-none mb-12 tracking-tight">
            <span 
              className="farmer-hero-text-animate inline-block"
              key={`title-${currentSlideIndex}`}
            >
              {fallbackSlides[currentSlideIndex].title}
            </span>
            <br />
            <span 
              className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-300 bg-clip-text text-transparent farmer-hero-text-animate inline-block"
              key={`highlight-${currentSlideIndex}`}
              style={{ animationDelay: '0.1s' }}
            >
              {fallbackSlides[currentSlideIndex].highlight}
            </span>
            <br />
            <span 
              className="farmer-hero-text-animate inline-block"
              key={`subtitle-${currentSlideIndex}`}
              style={{ animationDelay: '0.2s' }}
            >
              {fallbackSlides[currentSlideIndex].subtitle}
            </span>
          </h1>
        ) : (
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-none mb-12 tracking-tight">
            Fresh from
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-300 bg-clip-text text-transparent">
              Farm to Table
            </span>
            <br />
            Naturally.
          </h1>
        )}
        
        <button 
          className="bg-transparent border border-white/70 text-white px-8 py-4 text-sm font-normal cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 backdrop-blur-sm relative overflow-hidden group"
          onClick={handleExploreVegetables}
        >
          <span className="absolute top-0 left-0 w-full h-full bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          <span className="relative z-10">Explore Fresh Vegetables</span>
        </button>
      </div>

      {/* Play/Pause Button */}
      <button 
        className="absolute bottom-8 right-8 z-[15] w-12 h-12 bg-gradient-to-br from-green-500/90 to-emerald-500/90 border border-green-400/60 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:from-green-500 hover:to-emerald-500 backdrop-blur-sm shadow-lg shadow-green-500/30"
        onClick={togglePlayPause}
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white ml-0.5" />
        )}
      </button>

      {/* Footer Info */}
      <div className="absolute bottom-8 left-16 right-16 z-[6] text-xs text-white/80 text-center font-light leading-relaxed">
        Meet our dedicated farmers who grow premium organic vegetables with passion and care. 
        Supporting local farming communities while delivering 100% fresh, naturally grown produce to your table.
      </div>
    </section>
  );
};

export default FarmerHeroSection;
