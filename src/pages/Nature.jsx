import React from 'react'
import NatureHeroSection from '../components/sections/NatureHeroSection'
import YourPlanetSection from '../components/sections/YourPlanetSection'
import WhyOrganicSection from '../components/sections/WhyOrganicSection'
import SupplyChainSection from '../components/sections/SupplyChainSection'
import PlantTreeSection from '../components/sections/PlantTreeSection'
import CarbonEmissionSection from '../components/sections/CarbonEmissionSection'
import SEOHead from '../components/SEO/SEOHead'

import '../css/Nature.css'

function Nature() {
  return (
    <div className="nature-page">
      <SEOHead 
        title="Sustainable Farming & Environmental Impact | NaturallyGood's Green Initiative"
        description="Discover how NaturallyGood is protecting the environment through sustainable organic farming practices. Learn about our carbon-neutral initiatives, biodegradable packaging, and commitment to preserving nature for future generations."
        keywords="sustainable farming, environmental impact, carbon neutral farming, biodegradable packaging, eco-friendly agriculture, green farming practices, sustainable food production, organic environmental benefits"
        url="https://www.naturallygood.in/nature"
        image="https://images.unsplash.com/photo-1715766911065-83723bc00d2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0"
      />
      <NatureHeroSection />
      <YourPlanetSection />
      <WhyOrganicSection />
      <SupplyChainSection />
      <PlantTreeSection />
      <CarbonEmissionSection />
       
      {/* Additional sections can be added here */}
    </div>
  )
}

export default Nature
