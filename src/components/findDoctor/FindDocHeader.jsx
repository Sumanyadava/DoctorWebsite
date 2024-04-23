import React from "react";
import '../components.css'

const FindDocHeader = () => {
  return (
    <div>
      <header  className=" coverFind bg-green-100 h-[30vh] flex flex-col justify-center items-center">
        <h1 className="text-3xl">Find expert Doctors for an In-clinic session here</h1>

        <div className="search flex">
            <select name="" id="" className=" m-2 p-2 rounded-lg">
                <option selected disabled> Select Location</option>
                <option value="">s</option>
                <option value="">ss</option>
                <option value="">ss</option>
                <option value="">   s</option>
            </select>
            <div className="serch_text m-2 p-2 rounded-lg bg-white flex">
          <input type="text"  className="focus:outline-none" placeholder="Search for a doctor" />
          <button> arrow </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FindDocHeader;
