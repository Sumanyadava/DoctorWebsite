import React from 'react'
import Tittle from '../Tittle'
import ConcerTags from './ConcerTags'

const Concern = () => {
  return (
    <div>
      <div className="concern h-[25vh] mt-5 w-[100%] rounded-3xl border border-[#DCDCDC] overflow-hidden">
        <Tittle content="The Concerns I Treat"/>
        <div className="container h-[70%] flex justify-start items-center flex-wrap p-5 text-[#3A643B] text-sm ">

        <ConcerTags content="Skin Treatment" />
        <ConcerTags content="Pregnancy" />
        <ConcerTags content="Period Doubts" />
        
        <ConcerTags content="Endometriosis" />
        <ConcerTags content="Pelvic Pain" />
        <ConcerTags content="Ovarian Cysts" />
        <ConcerTags content="+ 5 More" />


        <ConcerTags />
        </div>
      </div>
    </div>
  )
}

export default Concern
