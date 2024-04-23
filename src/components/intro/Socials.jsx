import React from 'react'
import {} from 'module'

const Socials = ({content}) => {
  return (
    <div>
      
      <div className="social rounded-full p-5 bg-[#F7F7FC] border border-[#8E8E8E] w-5 h-5 flex items-center justify-center">
          <FontAwesomeIcon icon={content} />
        </div>
    </div>
  )
}

export default Socials
