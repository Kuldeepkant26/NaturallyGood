import React, { useState, useEffect } from 'react'
import { TimelineDemo } from '../components/ui/TimelineDemo'
import HeroSection from '../components/ui/HeroSection'
import SplashScreen from '../components/ui/SplashScreen'
import '../css/Home.css'
import SubscriptionSection from '../components/ui/SubscriptionSection'
import ProductsSection from '../components/ui/ProductsSection'
import FAQSection from '../components/ui/FAQSection'

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
            {/* Main Content - Always rendered */}
            <HeroSection />
            <ProductsSection />
            <SubscriptionSection />
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
