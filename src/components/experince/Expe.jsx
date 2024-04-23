import React from "react";
import Tittle from "../Tittle";
import Divider_name from "../Divider_name";
import Expe_card from "./Expe_card";

const Expe = () => {
  return (
    <div>
      <div className="expe h-[35vh] mt-5 w-[100%] rounded-3xl border border-[#DCDCDC] overflow-hidden">
        <Tittle content="My Work Experience" />
        <div className="container h-[70%] p-5">
          <h1 className="text-[#3A643B] ">I have been in practice for : 7+ Years</h1>

          <Divider_name />

          <Expe_card />
          <Expe_card />
        </div>
      </div>
    </div>
  );
};

export default Expe;
