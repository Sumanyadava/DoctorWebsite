import React from 'react'
import Intro from './Intro'

const Details = () => {
  return (
    <div>
      <div className="details flex justify-evenly align-top mx-[10%] bg-cyan-200">
        <div className="left_col w-[45%]">
            <Intro />
            <Intro />
        </div>
        <div className="right_col w-[45%]">
            <Intro />
        </div>
      </div>
    </div>
  )
}

export default Details
