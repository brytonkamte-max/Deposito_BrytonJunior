import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Nav} from './components/Nav.jsx'
import {Hero} from './components/Hero.jsx'
import {Card} from './components/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Nav />
    <Hero />
    <Card />
    <Card />
    <Card />

  </StrictMode>,
)
