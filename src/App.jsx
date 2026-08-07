import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Generate from './Pages/Generate'
import Form from './Pages/Form'
import Steps from './Pages/Steps'
import History from './Pages/History'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/steps" element={<Steps />} />
        <Route path="/generate"  element={<Generate/>}/>
        <Route path="/form"  element={<Form/>}/>
        <Route path="/history" element={<History />} />
      </Routes>
     
      <Footer />
    </>
  )
}

export default App
