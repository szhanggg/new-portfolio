import React from "react";

import Image from "next/image";

import menuIcon from "../img/catIcon.jpg";
import { motion } from "framer-motion";

import { fadeInUp } from "../animations";

import NavLink from "./NavLink";
import Link from "next/link";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const NavBar = () => {
  return (
    <motion.div
      className="flex flex-row items-center justify-around w-full h-full"
      variants={stagger}
    >
      <motion.div
        className="h-16 w-16"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        variants={fadeInUp}
      >
        <Link href="/">
          <a>
            <Image
              src={menuIcon}
              alt=""
              layout="responsive"
              objectFit="contain"
              width="100%"
              height="100%"
              className="rounded-full"
            />
          </a>
        </Link>
      </motion.div>
      <div className="flex flex-row justify-around w-1/2">
        <NavLink text="About Me" url="/about" />
        <NavLink text="Projects" url="/projects" />
        <NavLink text="Contact" url="/contact" />
      </div>
    </motion.div>
  );
};

export default NavBar;
