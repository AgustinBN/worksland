"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AstroImg from "../../public/astro.png";

const Astro = () => {
  return (
    <div className="w-full flex justify-center items-center pt-[70px]">
      <motion.div
        animate={{
          y: [0, -10, 0, 10, 0], // Moves up and down
          rotate: [0, -5, 0, 5, 0], // Slight rotation
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity, // Continuous loop
          repeatType: "loop",
        }}
      >
        <Image
          src={AstroImg}
          alt="Astronaut"
          style={{
            width: "200px",
            height: "200px",
            filter: "drop-shadow(5px 5px 15px #6B46C1)",
            opacity: "0.8",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Astro;
