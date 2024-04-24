import React from "react";
import SButtons from "../buttons/SButtons";
import PButtons from "../buttons/PButtons";
import "../components.css";
import SessionMode from "../booking/SessionMode";
import FilterRes from "./FilterRes";

import FindDocCard from "./FindDocCard";
import { motion } from "framer-motion";

const FilterDoc = () => {

  const fadeInAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <div className="">
      <div className="filter_head h-[7vh] border flex items-center justify-evenly px-36">
        <select name="" id="" className=" p-2 rounded-lg bg-gray-200">
          <option selected disabled hidden>
            {" "}
            Expertise
          </option>
          <option value="">s</option>
          <option value="">ss</option>
          <option value="">ss</option>
          <option value=""> s</option>
        </select>

        <select name="" id="" className=" p-2 rounded-lg bg-gray-200">
          <option selected disabled hidden>
            {" "}
            Gender
          </option>
          <option value="">s</option>
          <option value="">ss</option>
          <option value="">ss</option>
          <option value=""> s</option>
        </select>

        <select name="" id="" className=" p-2 rounded-lg bg-gray-200">
          <option selected disabled hidden>
            {" "}
            Fees
          </option>
          <option value="">s</option>
          <option value="">ss</option>
          <option value="">ss</option>
          <option value=""> s</option>
        </select>

        <select name="" id="" className=" p-2 rounded-lg bg-gray-200">
          <option selected disabled hidden>
            {" "}
            Language
          </option>
          <option value="">s</option>
          <option value="">ss</option>
          <option value="">ss</option>
          <option value=""> s</option>
        </select>

        <select name="" id="" className=" p-2 rounded-lg bg-gray-200">
          <option selected disabled hidden>
            {" "}
            All filter
          </option>
          <option value="">s</option>
          <option value="">ss</option>
          <option value="">ss</option>
          <option value=""> s</option>
        </select>
      </div>
      <div className="filter_result flex justify-end px-16 mt-5">
        <FilterRes content="Hindi" />
        <FilterRes content="0-Rs.500" />
        <FilterRes content="Female" />
        <FilterRes content="Hair care" />
      </div>
      <div className="doctor_result p-16 flex  justify-evenly ">

      <motion.div variants={fadeInAnimation} initial="initial" whileInView="animate">

        <FindDocCard />
        </motion.div>
        <motion.div variants={fadeInAnimation} initial="initial" whileInView="animate">
        <FindDocCard />
        </motion.div>
        <motion.div variants={fadeInAnimation} initial="initial" whileInView="animate">
        <FindDocCard />
        </motion.div>
        

        <div className="cp h-28 bg-black"></div>
      </div>
    </div>
  );
};

export default FilterDoc;
