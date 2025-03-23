import React, { useContext, useEffect, useState } from "react";
import Nebula from "./Nebula";
import { CollisionContext } from "../contents/content";
import Spin from "./Spin";
import Flame from "./Flame";
import Bang from "./Bang";
import SunParticleScene from "./ui/SunScene";
import sound from "../songs/songs";
import Sound from "./Sound";
import "../App.css";

const Button = () => {
  const ClickSound = new Audio(sound.boop);
  const { value, setValue } = useContext(CollisionContext);
  const [inc, setInc] = useState(1);
  const { collisionCount, allowSound, setAllowSound } =
    useContext(CollisionContext);

  useEffect(() => {
    if (collisionCount > 0) {
      setValue((prevValue) => prevValue + 1);
    }
  }, [collisionCount]);

  const clickValue = (e) => {
    setValue(value + inc);
    ClickSound.currentTime = 0.1;
    ClickSound.playbackRate = 1;
    ClickSound.play();
  };

  return (
    <div className="h-fit w-screen flex flex-col justify-between ">
      <div className=" flex flex-col items-center mt-20 text-white text-xl gap-2">
          <div className=" gap-3 min-h-[200px] mt-14 flex w-full min-w-[400px]   flex-row justify-center  text-white  p-2">
            {value > 1 && (
              <div className="  ">
                <Nebula />
              </div>
            )}

            {value > 2 && (
              <div className="">
                <Spin />
              </div>
            )}
            {value > 6 && (
              <div className="">
                <Flame />
              </div>
            )}

            {value > 10 && (
              <div className="">
                <Sound />
              </div>
            )}
          </div>
       
          <h1 className="italic  text-xl mb-2"> {value} Stimulations </h1>
          

          <button type="button" className="btn  " onClick={clickValue}>
            <strong> Click Me! </strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>
                 
            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>

        
      </div>
    </div>
  );
};

export default Button;
