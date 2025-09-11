import React from 'react'
import { HeroParallaxDemo } from './components/ui/HeroParallaxDemo'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import ChatBot from './components/ui/ChatBot'
import OrganicTag from './components/ui/OrganicTag'
import './App.css'

import MyProvider from './context/MyProvider'
import About from './pages/About'
import Farmers from './pages/Farmers'
import Nature from './pages/Nature'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/farmers' element={<Farmers></Farmers>}></Route>
          <Route path='/nature' element={<Nature></Nature>}></Route>
        </Routes>
      </div>
      <Footer />
     
    
    </div>

  )
}

export default App
