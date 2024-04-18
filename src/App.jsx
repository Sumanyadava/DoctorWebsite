import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import FindDoc from './pages/FindDoc'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/find' element={<FindDoc/>} />
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
