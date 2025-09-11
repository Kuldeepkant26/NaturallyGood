import React from 'react'
import NatureHeroSection from '../components/sections/NatureHeroSection'
import YourPlanetSection from '../components/sections/YourPlanetSection'
import WhyOrganicSection from '../components/sections/WhyOrganicSection'
import SupplyChainSection from '../components/sections/SupplyChainSection'
import PlantTreeSection from '../components/sections/PlantTreeSection'
import CarbonEmissionSection from '../components/sections/CarbonEmissionSection'

import '../css/Nature.css'

function Nature() {
  return (
    <div className="nature-page">
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
