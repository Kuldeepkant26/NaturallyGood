import React, { useState, useRef, useEffect } from 'react'
import { Sprout, Droplets, Wind, Salad } from 'lucide-react'
import './WhyOrganicSection.css'

const WhyOrganicSection = () => {
  const [activeCard, setActiveCard] = useState(0)
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const organicBenefits = [
    {
      id: 1,
      icon: <Sprout className="w-8 h-8" />,
      title: "Healthier Soil",
      description: "Organic manure builds fertility for generations",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      bgColor: "linear-gradient(135deg, #81c784, #66bb6a)"
    },
    {
      id: 2,
      icon: <Droplets className="w-8 h-8" />,
      title: "Cleaner Water",
      description: "No chemical runoff contaminating rivers and lakes",
      image: "https://i.pinimg.com/736x/40/bd/fe/40bdfea182de7fe885a53bc82c350084.jpg",
      bgColor: "linear-gradient(135deg, #4fc3f7, #29b6f6)"
    },
    {
      id: 3,
      icon: <Wind className="w-8 h-8" />,
      title: "Safer Air",
      description: "Reduced greenhouse gases and toxic emissions",
      image: "https://sustainability-news.net/wp-content/uploads/2023/06/shutterstock_1634334151.jpg",
      bgColor: "linear-gradient(135deg, #a5d6a7, #81c784)"
    },
    {
      id: 4,
      icon: <Salad className="w-8 h-8" />,
      title: "Pure Nutrition",
      description: "Vegetables that carry the natural taste and nutrients of the earth",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      bgColor: "linear-gradient(135deg, #aed581, #9ccc65)"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveCard((prev) => (prev + 1) % organicBenefits.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isVisible, organicBenefits.length])

  return (
    <section ref={sectionRef} className={`why-organic-section ${isVisible ? 'visible' : ''}`}>
      <div className="why-organic-container">
        
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">
            Why <span className="highlight">Organic</span>?
          </h2>
          <p className="section-subtitle">
            Organic is not just about "chemical-free"—it's about <strong>harmony of body & soul with nature</strong>.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="benefits-grid">
          {organicBenefits.map((benefit, index) => (
            <div 
              key={benefit.id}
              className={`benefit-card ${index === activeCard ? 'active' : ''}`}
              onMouseEnter={() => setActiveCard(index)}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="card-image-wrapper">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="card-image"
                />
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{benefit.title}</h3>
                <p className="card-description">{benefit.description}</p>
              </div>
              
              <div className="card-accent"></div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="closing-message">
          <div className="message-content">
            <p>
              Choosing organic is choosing a <strong>healthier family</strong>, 
              <strong> community</strong> and <strong>your planet</strong>.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default WhyOrganicSection
