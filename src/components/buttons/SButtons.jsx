import React from 'react'

const SButtons = ({content,handleClickS, bg}) => {
  return (
    <div>
      <div className={`buttons px-8 py-3  border border-[#3A643B] text-[#3A643B] rounded-md hover:opacity-80 cursor-pointer  text-center ${bg} ` } onClick={handleClickS}> {content} </div>
    </div>
  )
}

export default SButtons
