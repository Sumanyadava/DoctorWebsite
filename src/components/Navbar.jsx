import React from 'react'
import { NavLink } from 'react-router-dom'
import './components.css'
import PButtons from './PButtons'
import SButtons from './SButtons'

const Navbar = () => {
  return (
    <div className='bg-[#FFF7E2]'>
      <nav className=' h-[10vh] flex justify-between items-center mx-[10%]'>
        <div className="companyBrand url">
          
        </div>
        <div className="navlinks">
          <ul className="flex gap-8">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/">Find Doctors</NavLink>
            </li>
            <li>
            <NavLink to="/">About Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="loginsignin flex gap-5">
          <SButtons content="Login" />
          <PButtons content="Sign-in" />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
