import React from 'react'
import Tittle from '../Tittle'
import Card from './Card'

const Specialize = () => {
  return (
    <div>
      <div className="spec h-[25vh] w-[100%] rounded-3xl mt-5 border border-[#DCDCDC] ">
      <Tittle content="I Specialize In" />
      <div className="container h-[70%] w-[70%] flex justify-around items-center overflow-hidden">

      
      <Card content="Women's Health"/>
      <Card content="Skin Care"/>
      <Card content="Immunity"/>
      <Card content="Hair Care" />

      </div>
      </div>
    </div>
  )
}

export default Specialize
