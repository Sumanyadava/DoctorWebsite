import React from 'react'

const TimeTags = ({content,bg}) => {
  return (
    <div>
      <div className={`time_tags  h-16 w-28 border rounded-3xl flex justify-center items-center hover:bg-[#F2FBF2] ${bg}` }>
        {content}
      </div>
    </div>
  )
}

export default TimeTags
