import { motion, reverseEasing } from "framer-motion";
import React from "react";

function Marquee({ imagesUrls, direction }) {
  return (
    <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-x-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 pr-20"
      >
        {imagesUrls.map((url, index) => (
          <img key={index} src={url} alt="" className="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 pr-20"
      >
        {imagesUrls.map((url, index) => (
          <img key={index} src={url} alt="" className="" />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
