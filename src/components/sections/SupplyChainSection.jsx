import React, { useState, useRef, useEffect } from 'react'
import './SupplyChainSection.css'

const SupplyChainSection = () => {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const supplyChainSteps = [
    {
      id: 1,
      icon: "🌱",
      title: "Seed",
      description: "Carefully selected organic seeds",
      image: "https://cdn.pixabay.com/photo/2019/01/20/18/11/seed-3944361_1280.jpg"
    },
    {
      id: 2,
      icon: "🌿",
      title: "Sapling",
      description: "Nurtured with organic care",
      image: "https://png.pngtree.com/thumb_back/fh260/background/20210831/pngtree-sapling-and-hand-plant-growth-background-image_771585.jpg"
    },
    {
      id: 3,
      icon: "🚜",
      title: "Cultivation",
      description: "Sustainable farming practices",
      image: "https://t4.ftcdn.net/jpg/03/57/54/77/360_F_357547735_aTZvm1ec8Uzgsd1aTukmFiOw4iXX2aKS.jpg"
    },
    {
      id: 4,
      icon: "🌾",
      title: "Harvest",
      description: "Fresh picked at peak ripeness",
      image: "https://images.pexels.com/photos/20317186/pexels-photo-20317186/free-photo-of-farmers-in-india.jpeg"
    },
    {
      id: 5,
      icon: "📋",
      title: "Sorting",
      description: "Quality controlled selection",
      image: "https://media.istockphoto.com/id/690781600/photo/hands-on-on-the-factory-floor.jpg?s=612x612&w=0&k=20&c=9zqgpAaK6e-gxiPdXPPNcxTsl_mBS3bjd43FpVtLn5Q="
    },
    {
      id: 6,
      icon: "📦",
      title: "Packaging",
      description: "Eco-friendly sustainable packaging",
      image: "https://media.istockphoto.com/id/1161394261/photo/single-use-plastic-packaging-issue-fruits-and-vegetables-in-plastic-bags.jpg?s=612x612&w=0&k=20&c=JvMKOl96RJDRENCqYJ0Q1tQvoSRMDOXyosqRcvz69Us="
    },
    {
      id: 7,
      icon: "🚚",
      title: "Delivery",
      description: "Direct to your doorstep",
      image: "https://media.istockphoto.com/id/1369503196/photo/focus-on-senior-women-indian-delivery-boy-giving-groceries-to-senior-women-after-opening-door.jpg?s=612x612&w=0&k=20&c=-xLX0v_8DO2uHN-lKIU4jqKEb55BFJsJgkprmwAnrng="
    }
  ]

  const benefits = [
    {
      icon: "⚡",
      title: "Same-Day Harvest",
      description: "Veggies reach you within hours, not weeks"
    },
    {
      icon: "❄️",
      title: "No Cold Storage",
      description: "Unlike conventional produce, ours is never artificially preserved"
    },
    {
      icon: "🔍",
      title: "Transparency",
      description: "Every bag is traceable to the farm it came from"
    },
    {
      icon: "🌿",
      title: "Eco-Friendly Delivery",
      description: "Powered by electric vehicles and sustainable packaging"
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
        setActiveStep((prev) => (prev + 1) % supplyChainSteps.length)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isVisible, supplyChainSteps.length])

  return (
    <section ref={sectionRef} className={`supply-chain-section ${isVisible ? 'visible' : ''}`}>
      <div className="supply-chain-container">
        
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">
            Our Own <span className="highlight">Supply Chain</span>
          </h2>
          <p className="section-subtitle">
            We don't outsource your food—we <strong>grow it</strong>, <strong>nurture it</strong>, 
            <strong> harvest it</strong>, and <strong>deliver it</strong>.
          </p>
        </div>

        {/* Supply Chain Flow */}
        <div className="supply-chain-flow">
          <div className="flow-timeline">
            {supplyChainSteps.map((step, index) => (
              <div key={step.id} className="timeline-step-wrapper">
                <div 
                  className={`timeline-step ${index === activeStep ? 'active' : ''} ${index < activeStep ? 'completed' : ''}`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </div>
                
                {index < supplyChainSteps.length - 1 && (
                  <div className={`timeline-connector ${index < activeStep ? 'completed' : ''}`}>
                    <div className="connector-line"></div>
                    <div className="connector-arrow">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Active Step Image */}
          <div className="active-step-display">
            <div className="step-image-wrapper">
              <img 
                src={supplyChainSteps[activeStep].image} 
                alt={supplyChainSteps[activeStep].title}
                className="step-image"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <div className="overlay-icon">{supplyChainSteps[activeStep].icon}</div>
                  <h3 className="overlay-title">{supplyChainSteps[activeStep].title}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="benefits-section">
          <h3 className="benefits-title">Our fully controlled supply chain ensures:</h3>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="benefit-card"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <div className="benefit-content">
                  <h4 className="benefit-title">{benefit.title}</h4>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default SupplyChainSection
