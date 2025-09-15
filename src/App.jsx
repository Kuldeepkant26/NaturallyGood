import React from 'react'
import { HeroParallaxDemo } from './components/ui/HeroParallaxDemo'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'

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

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/farmers' element={<Farmers></Farmers>}></Route>
          <Route path='/nature' element={<Nature></Nature>}></Route>
          <Route path='/you' element={<You></You>}></Route>
          <Route path='/blog/:slug' element={<BlogDetail></BlogDetail>}></Route>
          <Route path='/privacy-policy.php' element={<PrivacyPolicy></PrivacyPolicy>}></Route>
          <Route path='/terms-and-conditions.php' element={<TermsConditions></TermsConditions>}></Route>
        </Routes>
      </div>
      <Footer />
     
    
    </div>

  )
}

export default App
