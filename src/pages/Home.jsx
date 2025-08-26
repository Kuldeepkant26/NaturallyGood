import React from 'react'
import { TimelineDemo } from '../components/ui/TimelineDemo'
import HeroSection from '../components/ui/HeroSection'
import '../css/Home.css'
import SubscriptionSection from '../components/ui/SubscriptionSection'
import ProductsSection from '../components/ui/ProductsSection'
import FAQSection from '../components/ui/FAQSection'





function Home() {
    return (
        <>
            <HeroSection />
            <ProductsSection />
            <SubscriptionSection />
            <TimelineDemo></TimelineDemo>
            <FAQSection />
        </>
    )
}

export default Home
