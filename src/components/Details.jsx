import React from 'react'
import Intro from './intro/Intro'
import Specialize from './specilization/Specialize'
import Expe from './experince/Expe'
import Feat from './features/Feat'
import Concern from './concern/Concern'
import Booking from './booking/Booking'

const Details = () => {
  return (
    <div>
      <div className="details flex justify-between align-top  w-[80vw] mx-[10%] my-[5%]  ">
        <div className="left_col w-[49%]">
            <Intro />
            <Specialize />
            <Concern />
            <Expe />
            <Feat />
        </div>
        <div className="right_col w-[49%]">
            <Booking />
        </div>
      </div>
    </div>
  )
}

export default Details
