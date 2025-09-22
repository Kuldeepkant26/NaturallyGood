import React, { useState } from 'react'
import { Sprout, Droplets, Leaf, Ban } from 'lucide-react'
import './YourPlanetSection.css'

const YourPlanetSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1715766911065-83723bc00d2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Soil in hands - quality control',
      title: 'Soil Regeneration'
    },
    {
      id: 2,
      image: 'https://www.shutterstock.com/image-photo/touches-water-pond-600nw-2113562387.jpg',
      alt: 'Hand touching water surface',
      title: 'Water Conservation'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1682080124679-b65a314aa26a?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Diverse crop rotation',
      title: 'Crop Diversity'
    },
    {
      id: 4,
      image: 'https://media.istockphoto.com/id/647611712/photo/green-chemistry-industry-sign-on-black-wooden-background.jpg?s=612x612&w=0&k=20&c=LnTFak_Z_fvHgTAtpxeHoCP0NBxVNBXGtL-z6lExRuw=',
      alt: 'Green chemistry - no chemicals',
      title: 'Zero Chemical Intervention'
    }
  ]

  const benefits = [
    {
      icon: <Sprout className="w-6 h-6" />,
      title: "Soil regeneration and enrichment",
      description: "through organic manure"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Water conservation",
      description: "with mindful irrigation"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Crop diversity",
      description: "that preserves biodiversity"
    },
    {
      icon: <Ban className="w-6 h-6" />,
      title: "Zero chemical intervention",
      description: "keeping our ecosystem in balance"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Handler for benefit card clicks
  const handleBenefitClick = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section id="your-planet-section" className="your-planet-section">
      <div className="your-planet-container">
        {/* Left Content */}
        <div className="content-side">
          <div className="content-wrapper">
            <h2 className="section-title">
              Your <span className="highlight">Planet</span>
            </h2>
            
            <p className="section-description">
              Every bite of Naturally Good produce is a vote for a greener planet. 
              We believe the earth gives more when it's respected, which is why our 
              farming practices are rooted in:
            </p>

            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className={`benefit-item ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => handleBenefitClick(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="benefit-icon">{benefit.icon}</div>
                  <div className="benefit-content">
                    <h4 className="benefit-title">{benefit.title}</h4>
                    <p className="benefit-description">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="impact-text">
              <p>
                By choosing Naturally Good, you're directly <strong>reducing carbon footprint</strong>, 
                <strong> protecting natural resources</strong>, and <strong>supporting eco-conscious living</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Right Slider */}
        <div className="slider-side">
          <div className="slider-container">
            <div className="slider-wrapper">
              {slides.map((slide, index) => (
                <div 
                  key={slide.id}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                  style={{
                    transform: `translateX(${(index - currentSlide) * 100}%)`
                  }}
                >
                  <div className="slide-image-wrapper">
                    <img 
                      src={slide.image} 
                      alt={slide.alt}
                      className="slide-image"
                    />
                    <div className="slide-overlay">
                      <h3 className="slide-title">{slide.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button className="slider-nav prev" onClick={prevSlide}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="slider-nav next" onClick={nextSlide}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="slider-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default YourPlanetSection
