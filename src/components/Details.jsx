import React from "react";
import Intro from "./intro/Intro";
import Specialize from "./specilization/Specialize";
import Expe from "./experince/Expe";
import Feat from "./features/Feat";
import Concern from "./concern/Concern";
import Booking from "./booking/Booking";
import { motion } from "framer-motion";

const Details = () => {
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

    
    <div>
      <div className="details flex justify-between align-top  w-[80vw] mx-[10%] my-[5%]  ">
        <div className="left_col w-[49%]">
          <motion.div variants={fadeInAnimation} initial="initial" whileInView="animate">
            <Intro />
          </motion.div>

          <motion.div variants={fadeInAnimation} initial="initial" whileInView="animate">
            <Specialize />
          </motion.div>

          <motion.div variants={fadeInAnimation} initial="initial" whileInView="animate">
            <Concern />
          </motion.div>

          <motion.div variants={fadeInAnimation} initial="initial" whileInView="animate">
            <Expe />
          </motion.div>

          <motion.div variants={fadeInAnimation} initial="initial" whileInView="animate">
            <Feat />
          </motion.div>
        </div>
        <div className="right_col w-[49%]">
          <motion.div variants={fadeInAnimation} initial="initial" whileInView="animate">
            <Booking />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Details;
