import React from 'react'

const ConcerTags = ({content}) => {
  return (
    <div>
      
      <div className="concern_tags flex justify-around items-center">
            <div className="treat bg-[#F7F7FC] ml-2 px-4 py-2 rounded-full">
              {content}
            </div>
          </div>
    </div>
  )
}

export default ConcerTags
