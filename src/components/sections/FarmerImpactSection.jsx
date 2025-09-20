import React from 'react'
import { IndianRupee, Wheat, Users, UserCheck, Heart } from 'lucide-react'
import './FarmerImpactSection.css'

const FarmerImpactSection = () => {
  const impactData = [
    {
      icon: IndianRupee,
      title: "Fair Pricing",
      description: "Farmers earn more, without middlemen.",
      stats: "40% HIGHER INCOME",
      color: "#f59e0b"
    },
    {
      icon: Wheat,
      title: "Rural Development",
      description: "Investments in better tools, seeds, and irrigation.",
      stats: "300+ FARMERS EQUIPPED",
      color: "#10b981"
    },
    {
      icon: Users,
      title: "Generational Change",
      description: "Training the next generation of farmers in sustainable practices.",
      stats: "150+ YOUTH TRAINED",
      color: "#6366f1"
    },
    {
      icon: UserCheck,
      title: "Women Empowerment",
      description: "Many women farmers are part of our growing community.",
      stats: "60% WOMEN FARMERS",
      color: "#ec4899"
    }
  ]

  return (
    <section className="farmer-impact-section">
      <div className="impact-container">
        {/* Header Section */}
        <div className="impact-header">
          
          <h2 className="impact-title">
            <span className="title-gradient">Farmer's Impact</span>
          </h2>
          
          <div className="title-underline"></div>

          <p className="impact-subtitle">
            Every Naturally Good order drives direct impact
          </p>
        </div>

        {/* Impact Cards */}
        <div className="impact-cards-grid">
          {impactData.map((impact, index) => {
            const IconComponent = impact.icon
            return (
              <div key={index} className="impact-card">
                <div className="card-content">
                  <div className="impact-icon">
                    <IconComponent />
                  </div>
                  
                  <h3 className="impact-card-title">{impact.title}</h3>
                  
                  <p className="impact-card-description">
                    {impact.description}
                  </p>
                  
                  <div className="impact-stats">
                    <div className="stats-number">
                      {impact.stats}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Impact Statement */}
        <div className="impact-statement">
          <div className="statement-content">
            <div className="statement-icon">
              <Heart className="w-8 h-8 text-green-500" fill="currentColor" />
            </div>
            
            <p className="statement-text">
              <span className="highlight-text">Sustainability</span> isn't just a word for us—it's our commitment to creating a 
              <span className="highlight-text"> better future</span> for farmers and the planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FarmerImpactSection