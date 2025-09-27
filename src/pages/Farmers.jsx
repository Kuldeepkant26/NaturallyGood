import React from 'react';
import YourFarmersSection from '../components/sections/YourFarmersSection';
import HealthBenefitsSection from '../components/sections/HealthBenefitsSection';
import FarmerImpactSection from '../components/sections/FarmerImpactSection';
import FarmerHeroSection from '@/components/sections/FarmerHeroSection';
import FarmersVoiceSection from '../components/sections/FarmersVoiceSection';
import SEOHead from '../components/SEO/SEOHead';

function Farmers() {
    return (
        <div>
            <SEOHead 
                title="Our Farmers - Meet the Heroes Behind NaturallyGood Organic Vegetables"
                description="Meet our dedicated organic farmers who grow premium vegetables with passion and care. Learn about their sustainable farming practices, stories, and how they're transforming agriculture for a healthier future."
                keywords="organic farmers, sustainable farming, farmer stories, agricultural heroes, organic farming practices, local farmers, farm-to-table farmers, organic agriculture India"
                url="https://www.naturallygood.in/farmers"
                image="https://images.pexels.com/photos/20317186/pexels-photo-20317186/free-photo-of-farmers-in-india.jpeg"
            />
            <FarmerHeroSection></FarmerHeroSection>
            <YourFarmersSection />
            <HealthBenefitsSection />
            <FarmerImpactSection />
            <FarmersVoiceSection />
        </div>
    );
}

export default Farmers;
