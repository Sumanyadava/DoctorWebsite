import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import SButtons from '../buttons/SButtons';
import PButtons from '../buttons/PButtons';
import { useNavigate } from 'react-router-dom';

const FindDocCard = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        alert("view book a cons")
    }

    const handleClickS = () => {

        alert("wanted to view profile ")
        navigate("/")
        
    }
  return (
    <div>
      <div className="card bg-[#FFF7E2] h-[70vh] rounded-xl flex flex-col items-center justify-start p-5">
          <div className="avatar h-36 w-36 flex items-end justify-center">
            <h1 className="text-center bg-black text-white rounded-full  w-[5vw] ">
              4.5 &nbsp;
              <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            </h1>
          </div>
          <div className="card_nam nunito font-bold text-2xl ">
            DR.Prerna Narang
          </div>
          <div className="card_desc text-sm mt-3">
            <div className="edu_card nunito ">Male-Female Infertility</div>
            <div className="expe_card nunito">7 years of Experience</div>
            <div className="lang_card nunito">
              Speaks: English, Hindi, Marathi
            </div>
          </div>

          <div className="card_price flex h-[15%] w-full gap-3 text-sm mt-5">
            <div className="session text-center  px-4 py-3 rounded-md border  h-[70%] flex flex-col gap-3  items-center justify-center hover:bg-green-50 ">
              <h1>Video&nbsp;Consultation</h1>
              <p className="font-bold text-green-700 ">₹800</p>
            </div>

            <div className="session text-center  px-2 py-1 rounded-md border h-[70%] flex flex-col gap-3  items-center justify-center hover:bg-green-50">
              <h1>Chat&nbsp;Consultation</h1>
              <p className="font-bold text-green-700">Free</p>
            </div>
          </div>

          <div className="buttons gap-3  flex flex-col w-[90%]">
          <SButtons content="View Profile" handleClickS={handleClickS} bg="bg-white"   />
          <PButtons content="Book a consultation" wcon="w-full" handleClick={handleClick}/>
          </div>
        </div>
    </div>
  )
}

export default FindDocCard
