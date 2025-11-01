import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Pause } from 'lucide-react';

const FarmerHeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const navigate = useNavigate();

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

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-start bg-black">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-[1]">
        <video
          ref={videoRef}
          className="w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/farmers-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 via-black/30 to-black/40 z-[2]" />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 via-black/40 to-transparent z-[5] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-[5] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-[6] pl-16 max-w-2xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-none mb-12 tracking-tight">
          Fresh from
          <br />
          <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-300 bg-clip-text text-transparent">
            Farm to Table
          </span>
          <br />
          Naturally.
        </h1>
        
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
