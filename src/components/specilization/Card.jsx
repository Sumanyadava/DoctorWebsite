import React from 'react'
import Skincare from '../../assets/Skincare.png'
import womenvector from '../../assets/womanvector.png'
import immunity from '../../assets/Immunity.png'
import haircare from '../../assets/haircare.png'

const Card = ({imgprop,content}) => {

  
  return (
    <div className=' w-full flex flex-col justify-center '>
      <div className="card h-16 w-16  bg-[#FFFCF2] flex justify-around items-center ml-5 border border-[#EAEAEA] rounded-lg 
      bg-[url('../assets/avatar.png')]
      ">
        {
          imgprop == 1 && (
            <img src={womenvector} alt="img" />
          )}
          {
          imgprop == 2 && (
            <img src={Skincare} alt="img" />
          )
        }
        {
          imgprop == 3 && (
            <img src={immunity} alt="img" />
          )
        }
        {
          imgprop == 4 && (
            <img src={haircare} alt="img" />
          )
        }

        

</div>
<h2 className='text-center text-xs w-full'>{content}</h2>
    </div>
  )
}

export default Card
