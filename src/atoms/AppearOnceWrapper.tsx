import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const AppearOnceWrapper: React.FC<{
  children: React.ReactNode;
  timeToAppear?: number;
}> = ({ children, timeToAppear = 1 }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: timeToAppear }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AppearOnceWrapper;
