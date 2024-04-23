import React from "react";
import Tittle from "../Tittle";
import "../components.css";
import ReviewCard from "./ReviewCard";

const Feat = () => {
  return (
    <div>
      <div className="feat mt-5 w-[100%] rounded-3xl border ">
        <Tittle content="Feat" />
        <div className="container h-[80%] w-full  flex  flex-col overflow-hidden p-1">
          
          
          
          
          <ReviewCard />
          <ReviewCard />
          
        
        </div>

      </div>
    </div>
  );
};

export default Feat;
