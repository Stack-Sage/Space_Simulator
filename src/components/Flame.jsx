import React, { useContext, useEffect, useState } from "react";
import ig from "../assets/asset";
import { CollisionContext } from "../contents/content";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sound from "./Sound";
import sound from "../songs/songs";

const Flame = () => {
  const { allowSound ,value, setValue, collisionCount, hueRotate, setHueRotate } =
    useContext(CollisionContext);
    const ClickSound = new Audio (sound.explosionSound)

  const flameCost = 30;

  const click = () => {
    if (flameCost <= value) {
      if (allowSound) {
        ClickSound.currentTime = 0.08;
        ClickSound.playbackRate = 1.2;
        ClickSound.play();
      }
      setHueRotate(180);
      setValue(value - flameCost);

      toast.success(`Flames Added`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        className: "custom-toast"
      });
    }
  };
  const buttonStyle = 30 > value ? "bg-black" : "bg-white";

  return (
    <div className=" relative group  ">
      <button
        className={` group hover:shadow-lg hover:shadow-white border-none ring-1 ring-blue-400 p-2 text-lg px-4 rounded-md active:text-blue-400  hover:ring-blue-600 animate-slide-in ${buttonStyle}`}
      >
        <img
          onClick={click}
          src={ig.flames}
          alt="spin"
          width="35px"
          height="35px"
          className="rounded-sm"
        />
      </button>

      <div className=" hidden absolute group-hover:flex flex-col  shadow-lg bg-gradient-to-br from-black via-slate-900 to-black  shadow-blue-200 brightness-125    p-2 mt-5 min-w-[180px] text-center rounded-lg gap-1  -ml-10  ">
        <p className="text-sm  font-thin">Heat & Flames </p>
        <p className=" text-xs font-light"> +4 stimulation per Bounce</p>
        <p className=" text-sm font-light"> Cost: {flameCost} stimulation</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Flame;
