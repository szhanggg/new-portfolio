import type { ReactElement } from "react";

import { motion } from "framer-motion";
import { fadeInBelow } from "../animations";

export interface AboutTextProps {}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function AboutText(props: AboutTextProps): ReactElement {
  return (
    <motion.div
      className="w-4/5 h-full flex flex-col align-center justify-center text-yellow-500 text-4xl leading-loose text-center font-josefin"
      variants={stagger}
    >
      <motion.p
        variants={fadeInBelow}
        style={{
          textShadow: "0px 0px 5px rgb(245, 158, 11)",
        }}
      >
        My name is Stephen
      </motion.p>
      <motion.p
        variants={fadeInBelow}
        style={{
          textShadow: "0px 0px 5px rgb(245, 158, 11)",
        }}
      >
        I am a student at Montgomery Blair High School
      </motion.p>
      <motion.p
        variants={fadeInBelow}
        style={{
          textShadow: "0px 0px 5px rgb(245, 158, 11)",
        }}
      >
        I am currently interested in math, competitive programming, and beginner
        front-end development.
      </motion.p>
    </motion.div>
  );
}
