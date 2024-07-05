import React from 'react';
import { motion } from 'framer-motion';

const UnderlineText = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="relative inline-block"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-semibold">Smooth Transition Underline</h1>
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-teal-500"
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
};

export default UnderlineText;
