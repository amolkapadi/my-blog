import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import { Routes, Route } from "react-router-dom"
import Reactpage from './pages/Reactpage'
import Javascriptpage from './pages/Javascriptpage'
import Htmlcss from './pages/Htmlcss'
export default function App() {
  return (
    <div>
     <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/reactpage" element={ <Reactpage /> } />
        <Route path="/javascriptpage" element={ <Javascriptpage /> } />
        <Route path="/htmlcss" element={ <Htmlcss /> } />
      </Routes>
      <Footer />
    </div>
  )
}
