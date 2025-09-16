import React from 'react'
import { Shield, Sprout, Users, Leaf } from 'lucide-react'
import './HealthBenefitsSection.css'

function HealthBenefitsSection() {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Protect from Harmful Exposure",
      description: "Farmers safeguard themselves from dangerous pesticide exposure, ensuring better health and wellbeing."
    },
    {
      icon: <Sprout className="w-6 h-6" />,
      title: "Restore Soil Fertility",
      description: "Organic practices improve soil health and increase long-term agricultural yield naturally and sustainably."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Secure Family Safety",
      description: "Chemical-free farming ensures safer, healthier food for farmers' own families and communities."
    }
  ];

  return (
    <section className="health-benefits-section">
      <div className="health-benefits-container">
        {/* Left Side - Circular Image */}
        <div className="health-image-container">
          <div className="circular-image-wrapper">
            <img 
              src="https://i.pinimg.com/736x/31/16/66/3116663ba402d95af6c7c3e2e33f0d7c.jpg" 
              alt="Organic farming health benefits" 
              className="circular-image"
            />
            <div className="image-ring"></div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="health-content">
          <div className="content-header">
           
            <h2 className="section-title">Health Benefits of Organic</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="intro-text">
            <p>
              Organic farming benefits aren't just for consumers—they're for farmers too. 
              By growing chemical-free produce, farmers create a healthier environment for everyone.
            </p>
          </div>

          <div className="benefits-list">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <div className="benefit-content">
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="health-stats">
            <div className="health-stat">
              <span className="stat-number">0%</span>
              <span className="stat-label">Chemicals</span>
            </div>
            <div className="health-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Natural</span>
            </div>
            <div className="health-stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Safe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HealthBenefitsSection
