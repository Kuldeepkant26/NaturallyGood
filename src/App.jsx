import React from 'react'
import { HeroParallaxDemo } from './components/ui/HeroParallaxDemo'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/ui/Navbar'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

      </Routes>
    </>
  )
}

export default App
