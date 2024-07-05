import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import hyy from '../assets/hyy.jpg';
import im1 from '../assets/im1.png';
import im2 from '../assets/im2.png';
import im3 from '../assets/im3.png';

const swingAnimation = {
  initial: { rotate: 0 },
  animate: {
    rotate: [0, 5, -5, 5, -5, 5, 0],
    transition: {
      duration: 6,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

const images = [im1, im2, im3];

const StickyNote = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute top-5 right-5 origin-top-right"
      variants={swingAnimation}
      initial="initial"
      animate="animate"
    >
      <motion.img
        src={images[currentImage]}
        alt="Sticky Note"
        className=" h-80"
        key={currentImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      />
    </motion.div>
  );
};

export default StickyNote;
