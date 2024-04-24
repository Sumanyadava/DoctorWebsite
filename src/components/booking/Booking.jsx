import React from "react";
import PButtons from "../buttons/PButtons";

import SessionMode from "./SessionMode";
import SlotsBooking from "./SlotsBooking";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TimeTags from "../TimeTags";

import { faCalendar } from "@fortawesome/free-regular-svg-icons";

import { faChevronRight,  faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import SButtons from "../buttons/SButtons";

const Booking = () => {

  const handleClick = () => {
    alert("hiii")
  }

  return (
    <div>
      <div className="booking w-full  mt-5  border rounded-3xl flex justify-start items-center flex-col ">
        <div className="charge rounded-xl border h-[7vh] w-[90%] mt-5 flex justify-center items-center p-5">
          <h1 className="w-[80%]"> Appointment Fee</h1>

          <div className="rs text-green-800 font-bold ">699.00</div>
        </div>

        <div className="divider w-full flex justify-start items-center pt-3 mb-8">
          <h2 className=" px-9 py-2 font-nunito font-extrabold ">Select your mode of session</h2>
          <div className="line w-[50%] bg-[#797979] h-[0.25vh] "></div>
        </div>

        <div className="charge h-[10vh] w-[90%] flex justify-between items-center font-nunito">
          <SessionMode mode="In-Clinic" minutes="45 Mins" />
          <SessionMode mode="Video" minutes="45 Mins" />

          <SessionMode mode="Chats" minutes="20 Mins" />
        </div>

        
        <div className="divider w-full flex justify-start items-center pt-3 gap-2 mb-8">
          <h2 className="px-9 py-5 font-nunito font-extrabold ">Pick a time slot</h2>
          <div className="line w-[55%] bg-[#797979] h-[0.25vh] "></div>
          <div className="icon border rounded-full p-2 h-10 w-10 flex justify-center items-center">
            <FontAwesomeIcon icon={faCalendar } />
            
          </div>
        </div>


        <div className="charge rounded-3xl h-[10vh] w-[90%] font-nunito ">
          <div className="weekselect flex gap-2 items-center h-auto  border rounded-2xl ">

          <div className="icon border m-2 rounded-full p-2 h-10 w-10 flex justify-center items-center ">
          <FontAwesomeIcon icon={faChevronLeft} />
            
          </div>

            <div className="weekdays overflow-y-scroll  scrollbar-hide flex  items-center mx-2 gap-3">
            
          <SessionMode mode="Monday" minutes="10 slots" bg="text-gray-500" bgm="bg-green-100" />

          
          <SessionMode mode="Tuesday" minutes="02 slots" bg="text-red-500" />

          
          <SessionMode mode="Wednesday" minutes="05 slots" bg="text-yellow-500" />


          <SessionMode mode="Thrusday" minutes="04 slots" bg="text-yellow-500" />
          
          <SessionMode mode="Friday" minutes="10&nbsp;slots" bg="text-gray-500" />

          </div>

            <div className="icon border rounded-full p-2 h-10 w-10 flex justify-center items-center m-2 ">
            <FontAwesomeIcon icon={faChevronRight} />
            
          </div>

            </div>
        </div>

        <SlotsBooking heading_content="Morning" />

        <div className=" p-5 time_tags flex flex-wrap gap-3">


<TimeTags content="9:00 AM" />

<TimeTags content="9:30 AM" />

<TimeTags content="10:00 AM" />

<TimeTags content="10:15 AM" />

<TimeTags content="10:45 AM" />


<TimeTags content="11:00 AM" bg="bg-[#3A643B] text-white hover:text-black" />
</div>


        <SlotsBooking heading_content="Evening" />

         <div className=" p-5 time_tags flex flex-wrap gap-3">


              <TimeTags content="4:00 PM" />
  
              <TimeTags content="4:15 AM" />
  
              <TimeTags content="4:30 AM" />
  
              <TimeTags content="4:45 AM" />
  
              <TimeTags content="5:15 AM" />
              
  
              
            </div>

          <div className="appointment_space w-[90%] p-10  ">
        <PButtons content="Make an appointment" wcon="w-full" handleClick={handleClick} />
        </div>


        
      </div>
    </div>
  );
};

export default Booking;
