import React, { useState, useRef, useEffect } from 'react'
import { Car, Package, Globe, BarChart, Sprout, Leaf, TreePine, RotateCcw, MapPin } from 'lucide-react'
import './CarbonEmissionSection.css'

const CarbonEmissionSection = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  const carbonInitiatives = [
        {
      id: 1,
      icon: <Car className="w-6 h-6" />,
      title: "Electric vehicles for last-mile delivery",
      description: "100% electric fleet reducing emissions by 85%",
      image: "https://static.vecteezy.com/system/resources/previews/002/716/711/non_2x/ecology-and-environmental-cityscape-concept-car-symbol-with-green-leaves-around-cities-help-the-world-with-eco-friendly-ideas-free-vector.jpg",
      stat: "85% Less CO2",
      color: "#81c784",
      impact: "Zero tailpipe emissions"
    },
    {
      id: 2,
      icon: <Package className="w-6 h-6" />,
      title: "Zero-waste packaging system",
      description: "Biodegradable packaging made from agricultural waste",
      image: "https://cdn.shopify.com/s/files/1/0656/1094/0666/files/small-shops-embrace-eco-friendly-practices-with-plastic-free-packaging-photo_480x480.jpg?v=1735824048",
      stat: "100% Compostable",
      color: "#81c784",
      impact: "Circular economy model"
    },
    {
      id: 2,
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Minimal, biodegradable, and reusable packaging",
      description: "Sustainable packaging solutions for eco-conscious delivery",
      image: "https://thumbs.dreamstime.com/b/fresh-organic-green-vegetables-displayed-reusable-glass-bottles-eco-friendly-shopping-bag-promoting-sustainable-391614460.jpg",
      stat: "90% Biodegradable",
      color: "#81c784",
      impact: "Plastic-free future"
    },
    {
      id: 3,
      icon: <MapPin className="w-6 h-6" />,
      title: "Hyperlocal farming—produce grown close to you",
      description: "Reducing transport distance and supporting local communities",
      image: "https://images.unsplash.com/photo-1713658564577-d918e2834d80?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      stat: "50km Average",
      color: "#66bb6a",
      impact: "Local community support"
    },
    {
      id: 4,
      icon: <BarChart className="w-6 h-6" />,
      title: "Efficient crop planning to reduce waste",
      description: "Smart agriculture and precision farming techniques",
      image: "https://i.pinimg.com/1200x/11/2c/f7/112cf7c9c4ff450be0badf151b31c1c8.jpg",
      stat: "95% Efficiency",
      color: "#aed581",
      impact: "Zero waste farming"
    }
  ]

  const carbonStats = [
    { label: "CO2 Reduced", value: "2.5k", unit: "tons/year" },
    { label: "Trees Equivalent", value: "65k", unit: "trees saved" },
    { label: "Plastic Avoided", value: "1.2M", unit: "pieces" },
    { label: "Local Miles", value: "50", unit: "avg distance" }
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

  return (
    <section ref={sectionRef} className={`carbon-emission-section ${isVisible ? 'visible' : ''}`}>
      <div className="carbon-emission-container">
        
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-icon"><Sprout className="w-8 h-8" /></span>
            Carbon <span className="highlight">Emission</span>
          </h2>
          <p className="section-subtitle">
            We are committed to reducing our <strong>carbon footprint</strong> at every step:
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="main-content">
          
          {/* Left: Initiatives Tabs */}
          <div className="initiatives-section">
            <div className="initiatives-tabs">
              {carbonInitiatives.map((initiative, index) => (
                <div 
                  key={initiative.id}
                  className={`tab-item ${index === activeTab ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                  style={{ '--delay': `${index * 0.1}s`, cursor: 'pointer' }}
                >
                  <div className="tab-icon">{initiative.icon}</div>
                  <div className="tab-content">
                    <h3 className="tab-title">{initiative.title}</h3>
                    <p className="tab-description">{initiative.description}</p>
                  </div>
                  <div className="tab-accent" style={{ backgroundColor: initiative.color }}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Active Initiative Display */}
          <div className="active-display">
            <div className="display-image-wrapper">
              <img 
                src={carbonInitiatives[activeTab].image} 
                alt={carbonInitiatives[activeTab].title}
                className="display-image"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <div className="overlay-icon">{carbonInitiatives[activeTab].icon}</div>
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="progress-indicators">
              {carbonInitiatives.map((_, index) => (
                <div 
                  key={index}
                  className={`progress-dot ${index === activeTab ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                ></div>
              ))}
            </div>
          </div>

        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <h3 className="stats-title">Our Environmental Impact</h3>
          <div className="stats-grid">
            {carbonStats.map((stat, index) => (
              <div 
                key={index}
                className="stat-card"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-unit">{stat.unit}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Background Elements */}
      <div className="floating-elements">
        <div className="element leaf-1"><Leaf className="w-6 h-6" /></div>
        <div className="element leaf-2"><TreePine className="w-6 h-6" /></div>
        <div className="element earth-1"><Globe className="w-6 h-6" /></div>
        <div className="element recycle-1"><RotateCcw className="w-6 h-6" /></div>
      </div>
    </section>
  )
}

export default CarbonEmissionSection
