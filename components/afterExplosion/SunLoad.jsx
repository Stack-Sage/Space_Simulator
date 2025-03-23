import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SunParticleScene from "../ui/SunScene";

const SunLoad = () => {
  const [showSun, setShowSun] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSun(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative z-10 min-w-screen min-h-screen w-full h-full flex items-center justify-center">
      {showSun && (
        <motion.div
          initial={{ opacity: 0, scale: 1.3 }}

          animate={{  opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease : "easeInOut" }}
        >
          <SunParticleScene />
        </motion.div>
      )}
    </div>
  );
};

export default SunLoad;
