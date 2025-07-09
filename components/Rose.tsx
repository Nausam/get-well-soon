"use client";
import { motion } from "framer-motion";

export const Rose = ({ delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay }}
      className="w-16 h-16 mx-2"
    >
      <img src="/rose.svg" alt="Red Rose" className="w-full h-full" />
    </motion.div>
  );
};
