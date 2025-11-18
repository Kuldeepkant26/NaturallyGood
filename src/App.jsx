import React from 'react'
import { HeroParallaxDemo } from './components/ui/HeroParallaxDemo'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import ContactButton from './components/ui/ContactButton'
import Analytics from './components/SEO/Analytics'

import ScrollToTop from './components/ScrollToTop'
import './App.css'

import MyProvider from './context/MyProvider'
import About from './pages/About'
import Farmers from './pages/Farmers'
import Nature from './pages/Nature'
import You from './pages/You'
import BlogDetail from './pages/BlogDetail'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import NotFound from './pages/NotFound'
import OurAppPage from './pages/OurAppPage'
import { setNavigateFunction } from './utils/navigation'
import { setTabNavigateFunction } from './utils/tabNavigation'
import { useEffect } from 'react'
import RedirectHandler, { redirectRoutes } from './components/RedirectHandler'

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Set up navigation functions for utilities
  useEffect(() => {
    setNavigateFunction(navigate);
    setTabNavigateFunction(navigate);
  }, [navigate]);
  return (
    <div className="app-container">
      <Analytics />
      <ScrollToTop />
      <Navbar />
      <div className="page-content">
        {/* Redirect Handlers for legacy PHP routes */}
        {redirectRoutes.map((route, index) => (
          <RedirectHandler
            key={index}
            from={route.from}
            to={route.to}
            scrollToId={route.scrollToId}
          />
        ))}
        
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/farmers' element={<Farmers></Farmers>}></Route>
          <Route path='/nature' element={<Nature></Nature>}></Route>
          <Route path='/you' element={<You></You>}></Route>
          <Route path='/download' element={<OurAppPage></OurAppPage>}></Route>
          <Route path='/blog/:slug' element={<BlogDetail></BlogDetail>}></Route>
          <Route path='/privacy-policy.php' element={<PrivacyPolicy></PrivacyPolicy>}></Route>
          <Route path='/terms-and-conditions.php' element={<TermsConditions></TermsConditions>}></Route>
          
          {/* Legacy PHP route redirects - These will be caught by RedirectHandler */}
          {redirectRoutes.map((route, index) => (
            <Route 
              key={`route-${index}`} 
              path={route.from} 
              element={null} 
            />
          ))}
          
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
      <Footer />
      {/* Show ContactButton only on About Us page */}
      {location.pathname === '/about' && <ContactButton />}
     
    
    </div>

  )
}

export default App