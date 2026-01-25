import { useState } from 'react'
import Home from './pages/Home.jsx'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import RegisterAuth from './pages/RegisterAuth'

function App() {

 

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/register" element = {<RegisterAuth />}></Route>


      {/* for error handling or page not found*/}
      <Route path="/error" element={<h1>500 Internal Server Error</h1>} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
