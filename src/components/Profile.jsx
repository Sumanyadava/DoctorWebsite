import React from 'react'
import PButtons from './PButtons'

const Profile = () => {
  return (
    <div>
      <div className="profile  h-[25vh] w-[80vw] mx-[10%] my-[5%]">
        <div className="cover_image h-[50%] w-full rounded-t-2xl">
          
        
        </div>
        <div className="cover_color h-[50%] bg-[#FFFBF2] border border-[#D8D8D8] flex ">
        <div className="avatar relative top-[-50%] left-[5%] rounded-full border-[3px] border-white  h-[150px] w-[150px]"> </div>

        <div className="avatar_intro  w-[80%] flex justify-around items-center ml-5">
          <div className="avatar_name">
            <h1>Dr.Bruce</h1>
            <p>Gynecologist</p>
            <div className="rating"> 4.5 </div>
          </div>
          <div className="avatar_follower flex gap-4">
            <div className="followers">850</div>
            <div className="following">18K</div>
            <div className="posts">250</div>
          </div>
          <PButtons content="Book an Appointment" />
        </div>

        </div>
      </div>
    </div>
  )
}

export default Profile
