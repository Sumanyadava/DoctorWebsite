import React from 'react'
import { NavLink } from 'react-router-dom'
import './components.css'
import PButtons from './buttons/PButtons'
import SButtons from './buttons/SButtons'

const Navbar = () => {
  return (
    <div className='bg-[#FFF7E2]'>
      <nav className=' h-[10vh] flex justify-between items-center mx-[10%]'>
        <div className="companyBrand ">
          
        </div>
        <div className="navlinks ">
          <ul className="flex gap-8 ">
            <li>
              <NavLink to="/" activeClassName="active" className="font-semibold" >Home</NavLink>
            </li>
            <li>
            <NavLink to="/find"activeClassName="active"
            className="font-semibold"
             >Find Doctors</NavLink>
            </li>
            <li>
            <NavLink to="/About" activeClassName="active"
            className="font-semibold"
            >About Us</NavLink>
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
