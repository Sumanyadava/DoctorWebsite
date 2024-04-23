import React from 'react'

const PButtons = ({content,wcon,handleClick}) => {
  return (
    <div>
      <button className= {` buttons px-8 py-3 bg-[#3A643B] rounded-md text-white flex items-center justify-center hover:bg-opacity-80 cursor-pointer ${wcon} `} onClick={handleClick}>{content}</button>
    </div>
  )
}

export default PButtons
