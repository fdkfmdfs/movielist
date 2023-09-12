import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Users from './pages/Users'
import Movies from './pages/Movies'
import User from './pages/User'
import About from './pages/About'

function App() {
   return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
         <div className='App'>
            <Navbar />
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/movies' element={<Movies />} />
               <Route path='/users' element={<Users />} />
               <Route path='/users/:id' element={<User />} />
               <Route path='/about/:id' element={<About />} />
            </Routes>
         </div>
      </BrowserRouter>
   )
}

export default App
