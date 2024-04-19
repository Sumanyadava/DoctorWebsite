import React from 'react'
import Intro from './Intro'
import Specialize from './Specialize'
import Expe from './Expe'
import Feat from './Feat'
import Concern from './Concern'

const Details = () => {
  return (
    <div>
      <div className="details flex justify-evenly align-top mx-[10%] bg-cyan-200">
        <div className="left_col w-[45%]">
            <Intro />
            <Specialize />
            <Concern />
            <Expe />
            <Feat />
        </div>
        <div className="right_col w-[45%]">
            <Intro />
        </div>
      </div>
    </div>
  )
}

export default Details
