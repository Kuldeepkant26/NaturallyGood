import React from 'react'
import { HeroParallaxDemo } from './components/ui/HeroParallaxDemo'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import ChatBot from './components/ui/ChatBot'
import OrganicTag from './components/ui/OrganicTag'
import './App.css'
import Ribbons from '../Reactbits/Ribbons/Ribbons'
import MyProvider from './context/MyProvider'
import About from './pages/About'

function App() {
  return (
    <div className="app-container">
     
        <Ribbons
          baseThickness={30}
          colors={['#10b981', '#34d399', '#6ee7b7']}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={false}
          enableShaderEffect={true}
          offsetFactor={0.02}
        />
     
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
        </Routes>
      </div>
      <Footer />
      <ChatBot />
      <OrganicTag />
    </div>

  )
}

export default App
