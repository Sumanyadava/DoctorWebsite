import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ReviewCard = () => {
  return (
    <div>
      <div className="review  w-[90%] bg-[#FAFAFA] m-5 rounded-lg">
            
            <div className="review_tittle flex ">


              <div className="review_tittle_left  flex  w-[70%] h-[50%]">
                <div className="avatar h-10 w-10 m-2"></div>
                <div className="review_name_space m-2">
                  <div className="review_name intro_tittle text-base">Alicent Hightower</div>
                  <div className="review_name text-[#939393] text-xs">
                    <p>Consulted for Skin care</p>
                  </div>
                </div>
              </div>
              <div className="sa m-2 text-[#979797] text-sm">20 Jan 2023</div>
            </div>

            <div className="review_comment">
              <div className="star m-2 text-yellow-600">
                
                <FontAwesomeIcon icon={faStar} />
                
                
                <FontAwesomeIcon icon={faStar} />

                
                <FontAwesomeIcon icon={faStar} />

                
                <FontAwesomeIcon icon={faStar} />

                
                <FontAwesomeIcon icon={faStar} />
                </div>
              <p className="text-sm m-2">
                Might be bit early to confirm but yes I can see noticeable
                difference in my hairfall. will write again after using it for
                longer periods
              </p>
            </div>
          </div>
          
    </div>
  )
}

export default ReviewCard
