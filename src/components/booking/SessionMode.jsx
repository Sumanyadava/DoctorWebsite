import React from 'react'

const SessionMode = ({mode,minutes,bg,bgm}) => {
  return (
    <div>
      <div className={`session text-center  px-6 py-3 rounded-md border h-[80%] hover:bg-green-50 ${bgm}`}>
        <h1>{mode}</h1>
        <p className={`font-normal text-[#606060] ${bg}`}>{minutes}</p>
      </div>
    </div>
  )
}

export default SessionMode
