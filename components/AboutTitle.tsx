import { motion } from "framer-motion";
import React from "react";

import { fadeInBelow } from "../animations";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const AboutTitle = () => {
  return (
    <motion.div variants={stagger}>
      <div className=" text-red-400 flex align-middle justify-center">
        <motion.h1
          className=" text-8xl "
          style={{
            textShadow: "0px 0px 20px rgb(248, 113, 133)",
          }}
          variants={fadeInBelow}
        >
          About Me
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default AboutTitle;
