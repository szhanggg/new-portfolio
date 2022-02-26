import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import NavBar from "../components/NavBar";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const about = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="initial"
      variants={stagger}
    >
      <Head>
        <title>About Me</title>
      </Head>
      <div className="w-full h-screen  bg-gradient-to-t from-gray-900 to-gray-800 absolute -z-10"></div>
      <div className="w-full h-20 pt-8">
        <NavBar />
      </div>
    </motion.div>
  );
};

export default about;
