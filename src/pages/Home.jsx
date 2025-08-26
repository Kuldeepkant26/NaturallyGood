import React, { useContext, useEffect, useState } from 'react'
import { HeroParallaxDemo } from '../components/ui/HeroParallaxDemo'
import { Link } from 'react-router-dom'
import { TimelineDemo } from '../components/ui/TimelineDemo'
import HeroSection from '../components/ui/HeroSection'
import '../css/Home.css'
import SplashScreen from '@/components/ui/SplashScreen'
import { WobbleCardDemo } from '@/components/ui/WobbleCardDemo'
import SubscriptionSection from '../components/ui/SubscriptionSection'
import ProductsSection from '../components/ui/ProductsSection'
import FAQSection from '../components/ui/FAQSection'
import { MyContext } from '@/context/MyProvider'





function Home() {

    const { splash, setSplash } = useContext(MyContext)
    
    // Auto-hide splash screen after 4 seconds (only when splash is initially shown)
    useEffect(() => {
        if (splash) {
            const timer = setTimeout(() => {
                setSplash(false)
            }, 4000);
            
            // Cleanup timer if component unmounts
            return () => clearTimeout(timer);
        }
    }, [splash, setSplash]);


    return (
        <>
            {splash ? (
                    <SplashScreen onSkip={() => setSplash(false)} />
            ) : (
                <>
                    <HeroSection />
                    <ProductsSection />
                    <SubscriptionSection />
                    <TimelineDemo></TimelineDemo>
                    <FAQSection />
                </>
            )}
        </>
    )
}

export default Home
