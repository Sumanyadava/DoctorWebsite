import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './components.css'
import PButtons from './buttons/PButtons'
import SButtons from './buttons/SButtons'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [move,setMove ] = useState(false)
  return (
    <div className='bg-[#FFF7E2]'>
      <nav className=' h-[10vh] flex justify-between items-center mx-[10%]'>
        <motion.div animate={{x:0,scale:1}} initial={{x:-100,scale:0}} className="companyBrand ">
          
        </motion.div>
        <div className="navlinks ">
          <ul className="flex gap-8 ">
          <motion.li  animate={{y:0,scale:1}} initial={{y:-100,scale:0}} transition={{duration:1}}>
              <NavLink to="/" activeClassName="active" className="font-semibold" >Home</NavLink>
            </motion.li>
            <motion.li  animate={{y:0,scale:1}} initial={{y:-100,scale:0}} transition={{duration:1}}>
            <NavLink to="/find"activeClassName="active"
            className="font-semibold"
             >Find Doctors</NavLink>
            </motion.li>
            <motion.li  animate={{y:0,scale:1}} initial={{y:-100,scale:0}} transition={{duration:1}}>
            <NavLink to="/About" activeClassName="active"
            className="font-semibold"
            >About Us</NavLink>
            </motion.li>
          </ul>
        </div>
        <div  className="loginsignin flex gap-5">
          <motion.div animate={{x:0,scale:1}} initial={{x:100,scale:0}} >
          <SButtons content="Login" />
          </motion.div>
          <motion.div animate={{x:0,scale:1}} initial={{x:100,scale:0}}>
          <PButtons content="Sign-in" />
          </motion.div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
