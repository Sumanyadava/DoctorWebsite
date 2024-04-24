import React from 'react'
import PButtons from './buttons/PButtons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck,faStar } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const Profile = () => {
  const handleClick = () => {
    alert("Booking an appointment")
  }
  return (
    <motion.div animate={{x:0,scale:1}} initial={{x:-600,scale:0}} >
      <div className="profile  h-[25vh] w-[80vw] mx-[10%] my-[5%] ">
        <div className="cover_image h-[50%] w-full rounded-t-2xl">
          
        
        </div>
        <div className="cover_color h-[50%] bg-[#FFFBF2] border border-[#D8D8D8] flex ">
        <div className="avatar relative top-[-50%] left-[5%] rounded-full border-[3px] border-white  h-[120px] w-[120px]"> </div>

        <div className="avatar_intro  w-[80%] flex justify-around items-center ml-5">
          <div className="avatar_name">
            <h1 className='flex items-center '>Dr. Bruce Willis  &nbsp;
            <FontAwesomeIcon icon={faCircleCheck} />
            </h1>            
            <p className='text-xs text-[#3A643B]'>Gynecologist</p>
            <div className="rating text-xs mt-2"> 4.5 &nbsp; 
            
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />

             </div>
          </div>
          <div className="avatar_follower w-[30%] flex justify-between text-[#3A643B]">
            <div className="followers flex flex-col items-center">
              <div className="follow_tittle text-xs">Followers</div>
              <div className="follow_num text-[#212529]">850</div>
            </div>
            <div className="following flex flex-col items-center">
              
            <div className="following_tittle text-xs">Following</div>
              <div className="following_num text-[#212529] ">18k</div>
            </div>
            <div className="posts flex flex-col items-center">
              
            <div className="post_tittle text-xs">Post</div>
              <div className="post_num text-[#212529] ">250</div>
            </div>
          </div>
          <PButtons content="Book an Appointment" handleClick={handleClick} />
        </div>

        </div>
      </div>
    </motion.div>
  )
}

export default Profile
