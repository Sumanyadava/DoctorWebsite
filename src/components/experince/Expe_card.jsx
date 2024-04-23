import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouzz } from '@fortawesome/free-brands-svg-icons/faHouzz'

const Expe_card = () => {
  return (
    <div>
      
      <div className="expe_card h-[40%]  mt-2 flex justify-between">
            <div className="expe_left flex ">
              <div className="expe_icon bg-[#F7F7FC] rounded-lg h-10 w-10 flex items-center justify-center text-xl mr-4">
                <FontAwesomeIcon icon={faHouzz} />
              </div>
              <div className="expe_name">
                <h2 className='text-xm text-[#333548]'>Midtown Medical Clinic</h2>
                <p className='text-xs text-[#33354885]'>Senior doctor</p>
              </div>
            </div>
            <div className="expe_time text-sm text-[#333548a9]">2016-present</div>
          </div>

          
    </div>
  )
}

export default Expe_card
