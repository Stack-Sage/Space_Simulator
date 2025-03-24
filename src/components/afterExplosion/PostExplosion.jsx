import React from "react";
import SunLoad from "./SunLoad";
import Button from "../Button";

const PostExplosion = () => {
  return (
    <div className="  h-screen w-screen overflow-hidden ">
      <div className=" fixed h-screen w-screen z-0 overflow-hidden ">
        <SunLoad />
      </div>
      <div className=" absolute w-full  mx-auto bottom-10 ">

          <Button />
       
      </div>


      </div>
  
  );
};

export default PostExplosion;
