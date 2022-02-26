import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface linkProps {
  text: string;
  url: string;
}

import { fadeInUp } from "../animations";

const NavLink = ({ text, url }: linkProps) => {
  return (
    <Link href={url}>
      <a>
        <motion.p
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          variants={fadeInUp}
          className="text-green-400 font-montserrat "
          style={{
            textShadow: "0px 0px 20px green",
          }}
        >
          <strong>{text}</strong>
        </motion.p>
      </a>
    </Link>
  );
};

export default NavLink;
