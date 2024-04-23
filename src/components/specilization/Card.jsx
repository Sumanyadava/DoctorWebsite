import React from 'react'
import Skincare from '../../assets/Skincare.png'

const Card = ({imgprop,content}) => {
  return (
    <div>
      <div className="card h-16 w-16  bg-[#FFFCF2] flex justify-around items-center ml-5 border border-[#EAEAEA] rounded-lg 
      bg-[url('../assets/avatar.png')]
      ">
        <img src={Skincare} alt={imgprop} />
        

</div>
<h2 className='text-center text-xs'>{content}</h2>
    </div>
  )
}

export default Card
