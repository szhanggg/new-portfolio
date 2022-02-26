import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import Typewriter from "typewriter-effect";

import { fadeInBelow } from "../animations";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const HomeText = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center space-y-6"
      variants={stagger}
    >
      <div className="flex flex-row items-end space-x-4 font-montserrat">
        <motion.p className="text-white text-5xl" variants={fadeInBelow}>
          Hi I&apos;m
        </motion.p>
        <motion.h1
          className="text-green-500 text-7xl"
          style={{
            textShadow: "0px 0px 20px green",
          }}
          variants={fadeInBelow}
        >
          Stephen Zhang
        </motion.h1>
      </div>

      <div className="flex flex-row items-end space-x-4 font-josefin">
        <motion.div
          className="text-yellow-500 text-4xl flex justify-end"
          style={{
            textShadow: "0px 0px 5px rgb(234 179 8)",
          }}
          variants={fadeInBelow}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Student")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Developer")
                .start();
            }}
          />
        </motion.div>
        <motion.p className="text-blue-400 text-4xl" variants={fadeInBelow}>
          {"@"}
        </motion.p>
        <motion.p
          className="text-red-400 text-4xl"
          style={{
            textShadow: "0px 0px 5px red",
          }}
          variants={fadeInBelow}
        >
          Montgomery Blair High School
        </motion.p>
      </div>
      <Link href="/about">
        <a>
          <motion.div
            className="bg-blue-400 rounded-md font-montserrat w-28 h-10 text-white shadow-lg shadow-blue-500/50 flex items-center justify-center hover:cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            variants={fadeInBelow}
          >
            About Me
          </motion.div>
        </a>
      </Link>
    </motion.div>
  );
};

export default HomeText;
