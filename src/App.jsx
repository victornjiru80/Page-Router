import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {  Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import RootLayout from './layout/RootLayout'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        
      </Route>

    )
  )
  return (
   <RouterProvider router={router}/>
  )
}

export default App