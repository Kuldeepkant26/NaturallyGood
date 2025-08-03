import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import MyProvider from './context/MyProvider'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MyProvider>
        <App />
      </MyProvider>
    </BrowserRouter>
  </StrictMode>,
)
