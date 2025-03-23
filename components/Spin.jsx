import React, { useContext, useState ,useEffect} from "react";
import ig from "../assets/asset";
import { CollisionContext } from "../contents/content";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Sound from "./Sound";
import sound from "../songs/songs";

const Spin = () => {
  const {speedLevel,setSpeedLevel,setSpeed, speed, speedCost, setSpeedCost, value, setValue ,highestLevel,allowSound } =
    useContext(CollisionContext);
  const [level, setLevel] = useState(1);
  const ClickSound = new Audio (sound.explosionSound)




  const click = () => {
    if (speedCost <= value) {
      if (speedLevel != highestLevel) {

        setSpeedLevel(speedLevel + 1);
        setValue(value - speedCost);
        setSpeed(speed + 6);
        setSpeedCost(speedCost * 2);
        if (allowSound) {
          ClickSound.currentTime = 0.08;
          ClickSound.playbackRate = 1.2;
          ClickSound.play();
        }
        

        toast.info(`Speed Increased to Level - ${speedLevel} `, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          className: "custom-toast"
        });
      } 
      else {
        toast.success('Congrats! Highest Speed Level Achieved ', {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  className: 'custom-toast', // Add a custom class to the toast
                })
      }
    }
  };
  const buttonStyle = speedCost > value ? "bg-black" : "bg-white";

  return (
    <div className=" relative group  ">
      <button
        className={` group hover:shadow-lg hover:shadow-white border-none ring-1 ring-blue-400 p-2 text-lg px-4 rounded-md active:text-blue-400  hover:ring-blue-600 animate-slide-in ${buttonStyle}`}
      >
        <img
          onClick={click}
          src={ig.spin}
          alt="spin"
          width="35px"
          height="35px"
          className="rounded-sm"
        />
      </button>

      <div className=" hidden absolute group-hover:flex flex-col  shadow-lg bg-gradient-to-br from-black via-slate-900 to-black  shadow-blue-200 brightness-125    p-2 mt-5 min-w-[180px] text-center rounded-lg gap-1  -ml-10  ">
        <p className="text-sm  font-thin">Speed ( Level - {speedLevel} )</p>
        <p className=" text-xs font-light"> Faster Stimulation Gain</p>
        <p className=" text-sm font-light"> Cost: {speedCost} stimulation</p>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Spin;
