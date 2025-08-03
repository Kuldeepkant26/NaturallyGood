import React, { useContext, useEffect, useState } from 'react'
import { HeroParallaxDemo } from '../components/ui/HeroParallaxDemo'
import { Link } from 'react-router-dom'
import { TimelineDemo } from '../components/ui/TimelineDemo'
import HeroSection from '../components/ui/HeroSection'
import '../css/Home.css'
import SplashScreen from '@/components/ui/SplashScreen'
import ChatBot from '../components/ui/ChatBot'
import { WobbleCardDemo } from '@/components/ui/WobbleCardDemo'
import SubscriptionSection from '../components/ui/SubscriptionSection'
import ProductsSection from '../components/ui/ProductsSection'
import { MyContext } from '@/context/MyProvider'





function Home() {


    const { splash, setSplash } = useContext(MyContext)
    useEffect(() => {
        setTimeout(() => {
            setSplash(false)
        }, 4000)
    },);


    return (
        <>
            {splash ? (
                <SplashScreen />
            ) : (
                <>
                    <HeroSection />
                    <ProductsSection />
                    <SubscriptionSection />
                    <TimelineDemo></TimelineDemo>

                    <ChatBot />
                </>
            )}
        </>
    )
}

export default Home
