import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2 lg:mt-3">
      <MotionLink
        href="/"
        className="w-14 h-14 text-2xl lg:w-12 lg:h-12 lg:text-xl flex items-center justify-center
        rounded-full font-bold"
        // whileHover={{
        //   backgroundColor: [
        //     "#121212",
        //     "rgba(131,58,180,1)",
        //     "rgba(253,29,29,1)",
        //     "rgba(252,176,69,1)",
        //     "rgba(131,58,180,1)",
        //     "#121212",
        //   ],
        //   transition: { duration: 1, repeat: Infinity },
        // }}
      >
        YZ
      </MotionLink>
    </div>
  );
};

export default Logo;
