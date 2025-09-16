import React, { useState, useRef, useEffect } from 'react'
import { Wind, Mountain, Home, TreePine } from 'lucide-react'
import './PlantTreeSection.css'

const PlantTreeSection = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [treeCount, setTreeCount] = useState(0)
  const [animatedCount, setAnimatedCount] = useState(0)

  const treeImpacts = [
    {
      id: 1,
      icon: <Wind className="w-8 h-8" />,
      title: "Absorb carbon dioxide and purify air",
      description: "Each tree absorbs up to 48 lbs of CO2 annually",
      image: "https://www.shutterstock.com/image-photo/o2-bubbles-middle-lush-forest-600nw-2430119903.jpg",
      stat: "48lbs CO2",
      color: "#4fc3f7"
    },
    {
      id: 2,
      icon: <Mountain className="w-8 h-8" />,
      title: "Prevent soil erosion and restore biodiversity",
      description: "Tree roots stabilize soil and create habitat",
      image: "https://spunout.ie/wp-content/uploads/2023/09/Soil_erosion-1-950x630.jpg",
      stat: "Restore",
      color: "#81c784"
    },
    {
      id: 3,
      icon: <Home className="w-8 h-8" />,
      title: "Provide shade, food, and habitat for rural villages",
      description: "Supporting communities with natural resources",
      image: "https://t4.ftcdn.net/jpg/05/38/43/35/360_F_538433538_pBrMZY8CCGqwhqAvCnFfaF7qEcHCs5vJ.jpg",
      stat: "50+ Villages",
      color: "#66bb6a"
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

  // Simulate tree planting counter
  useEffect(() => {
    if (isVisible) {
      const targetCount = 15647 // Example number
      const duration = 2000
      const increment = targetCount / (duration / 50)
      
      const timer = setInterval(() => {
        setAnimatedCount(prev => {
          if (prev < targetCount) {
            return Math.min(prev + increment, targetCount)
          } else {
            clearInterval(timer)
            return targetCount
          }
        })
      }, 50)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className={`plant-tree-section ${isVisible ? 'visible' : ''}`}>
      <div className="plant-tree-container">
        
        {/* Header with Tree Counter */}
        <div className="section-header">
          <div className="header-content">
            <h2 className="section-title">
              <span className="title-icon"><TreePine className="w-8 h-8" /></span>
              Plant a <span className="highlight">Tree</span>
            </h2>
            
            <div className="tree-counter">
              <div className="counter-display">
                <div className="counter-number">{Math.floor(animatedCount).toLocaleString()}</div>
                <div className="counter-label">Trees Planted</div>
              </div>
              <div className="counter-description">
                For every subscription, Naturally Good contributes to tree-planting drives across local communities.
              </div>
            </div>
          </div>
        </div>

        {/* Impact Cards */}
        <div className="impact-grid">
          {treeImpacts.map((impact, index) => (
            <div 
              key={impact.id}
              className="impact-card"
              style={{ '--delay': `${index * 0.2}s`, '--color': impact.color }}
            >
              <div className="card-header">
                <div className="card-image-wrapper">
                  <img 
                    src={impact.image} 
                    alt={impact.title}
                    className="card-image"
                  />
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="impact-title">{impact.title}</h3>
                <p className="impact-description">{impact.description}</p>
              </div>
              
              <div className="card-accent"></div>
            </div>
          ))}
        </div>

      </div>
      
      {/* Floating Tree Animation */}
      <div className="floating-trees">
        <div className="tree tree-1">🌲</div>
        <div className="tree tree-2">🌳</div>
        <div className="tree tree-3">🌴</div>
        <div className="tree tree-4">🌿</div>
      </div>
    </section>
  )
}

export default PlantTreeSection
