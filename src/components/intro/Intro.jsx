import React from 'react'
import SButtons from '../buttons/SButtons'
import '../components.css'
import '../../App.css'
import LanguageTag from './LanguageTag'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCentSign } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Intro = () => {
  const follow = () => {
    alert("following")
  }
  return (
    <div>
      <div className="intro h-[45vh] w-[100%] mt-5  rounded-3xl border border-[#DCDCDC] overflow-hidden">


        <div className="intro_tittle h-[7vh] w-full rounded-t-3xl flex justify-between items-center px-5">
        <h1>A Little About me</h1>
        
      <button className="buttons px-3  border border-[#3A643B] text-[#3A643B] rounded-md h-[70%] flex items-center" onClick={follow}>follow +</button>
        </div>
        
        <p className='p-5 text-[#333548b3] text-sm'>Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the </p>

        <div className="divider w-full flex justify-center items-center text-[#2b2b2bcb]">
          <div className="line w-[70%] bg-[#797979] h-[0.25vh] pl-20 "></div>
          <h1 className='pl-5 text-xm'><u>Read more </u></h1>
        </div>

        <div className="language w-full h-5 flex justify-around items-center p-5 py-10">
          <h1 className='pr-5'>Languauge Spoken</h1>

          <div className="language_container flex w-[60%] justify-around">
          <LanguageTag content="English" />

          <LanguageTag content="Hindi" />

          <LanguageTag content="Telugu" />

          </div>
        </div>

        <div className="socials w-[40%] p-5 flex justify-around items-center">

        <div className="social  rounded-full p-5 bg-[#F7F7FC] border border-[#8E8E8E] w-5 h-5 flex items-center justify-center hover:bg-gray-300">
          <FontAwesomeIcon icon={faFacebookF} className='text-[#3A643B]' />
        </div>

        
        <div className="social rounded-full p-5 bg-[#F7F7FC] border border-[#8E8E8E] w-5 h-5 flex items-center justify-center hover:bg-gray-300">
          <FontAwesomeIcon icon={faInstagram} className='text-[#3A643B]' />
        </div>
        
        <div className="social rounded-full p-5 bg-[#F7F7FC] border border-[#8E8E8E] w-5 h-5 flex items-center justify-center hover:bg-gray-300">
          <FontAwesomeIcon icon={faYoutube} className='text-[#3A643B]' />
        </div>

        
        <div className="social rounded-full p-5 bg-[#F7F7FC] border border-[#8E8E8E] w-5 h-5 flex items-center justify-center hover:bg-gray-300">
          <FontAwesomeIcon icon={faXTwitter} className='text-[#3A643B]'/>
        </div>
        
        </div>


      </div>
    </div>
  )
}

export default Intro
