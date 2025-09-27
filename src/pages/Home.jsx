import React, { useState, useEffect } from 'react'
import { TimelineDemo } from '../components/ui/TimelineDemo'
import HeroSection from '../components/ui/HeroSection'
import SplashScreen from '../components/ui/SplashScreen'
import '../css/Home.css'
import SubscriptionSection from '../components/ui/SubscriptionSection'
import AddOnsSection from '../components/ui/AddOnsSection'
import ProductsSection from '../components/ui/ProductsSection'
import FAQSection from '../components/ui/FAQSection'
import SEOHead from '../components/SEO/SEOHead'
import StructuredData from '../components/SEO/StructuredData'

function Home() {
    const [showSplash, setShowSplash] = useState(() => {
        // Use a simple flag to detect if this is React Router navigation
        const isReactRouterNavigation = sessionStorage.getItem('reactRouterNavigation');
        
        console.log('React Router navigation flag:', isReactRouterNavigation);
        
        if (isReactRouterNavigation) {
            // This is React Router navigation - don't show splash
            console.log('React Router navigation detected - no splash');
            return false;
        }
        
        // This is a fresh page load/refresh - show splash
        console.log('Fresh page load - showing splash');
        return true;
    });

    // Set up navigation detection
    useEffect(() => {
        // Clear the navigation flag when component mounts
        sessionStorage.removeItem('reactRouterNavigation');
        
        // Set the flag when component unmounts (navigation away)
        return () => {
            sessionStorage.setItem('reactRouterNavigation', 'true');
        };
    }, []);

    useEffect(() => {
        // If splash is showing, auto-hide it after minimum time
        if (showSplash) {
            const timer = setTimeout(() => {
                setShowSplash(false);
            }, 3000); // 3 second minimum display

            return () => clearTimeout(timer);
        }
    }, [showSplash]);

    const handleSplashComplete = () => {
        setShowSplash(false);
    };

    return (
        <div className="relative">
            <SEOHead 
                title="NaturallyGood - Premium Organic Vegetables Delivered Fresh | Farm to Table"
                description="Experience the finest organic vegetables grown with sustainable farming practices. Fresh, chemical-free produce delivered directly from our certified organic farms to your doorstep. Order premium organic vegetables online with NaturallyGood."
                keywords="organic vegetables online, fresh organic produce delivery, chemical-free vegetables, sustainable farming, farm to table delivery, premium organic food, naturally grown vegetables, organic grocery delivery, fresh vegetables online India"
                url="https://www.naturallygood.in"
                image="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3"
            />
            <StructuredData type="localbusiness" />
            {/* Main Content - Always rendered */}
            <HeroSection />
            <ProductsSection />
            <SubscriptionSection />
            <AddOnsSection />
            <TimelineDemo />
            <FAQSection />
            
            {/* Splash Screen Overlay - Only on page load/refresh */}
            {showSplash && (
                <SplashScreen onComplete={handleSplashComplete} />
            )}
        </div>
    )
}

export default Home
