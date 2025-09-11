import React from 'react';
import YourFarmersSection from '../components/sections/YourFarmersSection';
import HealthBenefitsSection from '../components/sections/HealthBenefitsSection';
import FarmerImpactSection from '../components/sections/FarmerImpactSection';
import FarmerHeroSection from '@/components/sections/FarmerHeroSection';
import FarmersVoiceSection from '../components/sections/FarmersVoiceSection';

function Farmers() {
    return (
        <div>
            <FarmerHeroSection></FarmerHeroSection>
            <YourFarmersSection />
            <HealthBenefitsSection />
            <FarmerImpactSection />
            <FarmersVoiceSection />
        </div>
    );
}

export default Farmers;
