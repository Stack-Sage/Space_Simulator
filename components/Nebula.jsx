import React, { useContext, useState } from "react";
import ig from "../assets/asset";

import { CollisionContext } from "../contents/content";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Sound from "./Sound";
import sound from "../songs/songs";
import NeutronStar from "./ui/Neutron";


const Nebula = () => {
  
  const [dis, setDis] = useState(false);
  

  const {   nebulaCost,  setNebulaCost, value, setValue, allowSound, highestLevel } =
    useContext(CollisionContext);
    const ClickSound = new Audio (sound.explosionSound)

  const click = () => {
    
    if (nebulaCost <= value ) {

      setDis(true);
     
      setNebulaCost(parseInt(nebulaCost * 2));
      setValue(value - nebulaCost);
     
        if (allowSound) {
          ClickSound.currentTime = 0.08;
          ClickSound.playbackRate = 1.2;
          ClickSound.play();
        }
        
        toast.success(`Neutron Star Added  `, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          className: 'custom-toast', 
        })
      

      }
     
     
    

    
  };
  const buttonStyle = nebulaCost > value ? "bg-black" : "bg-white"; 

  return (
    <>
      <div className=" relative group z-30  ">
        <button className={`  group hover:shadow-lg hover:shadow-white border-none ring-1 ring-blue-400 p-2 text-lg px-4 rounded-lg active:text-blue-400  hover:ring-sky-900 animate-slide-in ${buttonStyle} `} >
          <img
            onClick={click}
            src={ig.nebula}
            alt="Nebula"
            width="35px"
            height="35px"
            className="rounded-sm"
          />
        </button>

        <div className=" hidden absolute group-hover:flex flex-col  shadow-lg bg-gradient-to-br from-black via-slate-900 to-black  shadow-blue-200 brightness-125    p-2 mt-5 min-w-[180px] text-center rounded-lg gap-1  -ml-10  ">
          <p className="text-sm  font-thin">Neutron Star </p>
          
          <p className=" text-xs font-light"> +1 stimulation per Rotation</p>
          <p className=" text-sm font-light"> Cost: {parseInt(nebulaCost)} stimulation</p>
        </div>
      </div>

      <div className=" z-40  ">
        {dis && (
          <div className=" -z-30 absolute h-full  w-full min-h-screen min-w-screen ">
            <NeutronStar/>
          </div>
        )}
         <ToastContainer />
      </div>
      
    </>

  );
};

export default Nebula;
