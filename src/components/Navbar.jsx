import React from 'react'
import logos from '../assets/logos.jpg'
import { NavLink , useNavigate } from 'react-router-dom' //NavLink tracks the page we are in and assigns an 'active' class to it so you can take further actions such as assigning a different color to active page

const Navbar = () => {

    const navigate = useNavigate();
  return (
    <div className='navbar'>
        <img src={logos} alt="" width="{130px}" />
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/products'><li>Products</li></NavLink>
            <NavLink to='/contact'><li>Contact</li></NavLink>
        </ul>
        <button onClick={() => navigate('/about')}>Get Started</button>
    </div>
  )
}

export default Navbar