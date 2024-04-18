import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='bg-[#FFF7E2]'>
      <nav className=' h-[10vh] flex justify-between items-center mx-[10%]'>
        <div className="companyBrand url">
          sd
        </div>
        <div className="navlinks">
          <ul>
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
        <div className="loginsignin">
          <button>Login</button>
          <button>Sign-up</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
