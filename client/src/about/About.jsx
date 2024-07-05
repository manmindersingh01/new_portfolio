import React from 'react'
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import './about.css'
const About = () => {
  return (
    <div id='#home' className=' home h-auto w-full bg-bgp flex flex-col justify-center  items-center'>
      <div className=' flex-col md:flex md:flex-row justify-center   md:gap-20     items-center'>
        <div className='mb-20 h-96 p-10 flex flex-col justify-center items-center '>
          <h1 className='text-7xl md:text-8xl font-bold text-heading font-mono name '>Manminder</h1>
          <div className=' text-zinc-100 font-mono flex flex-col justify-center mt-4'>
            <p className='font-mono text-xl text-text'>-I'am a full-stack web developer</p>
            <p className='font-mono text-xl text-text'>-freelancer</p>
            <p className='font-mono text-xl text-text'>-converts air into code </p>
          </div>
        </div>
        <div className=' h-32 flex flex-col justify-center border-4 mr-5 border-heading rounded-3xl'>
          <h2 className=' font-semibold text-yellow text-4xl font-mono'>lets get connected</h2>
          <div className=' flex  justify-around mt-4 text-yellow text-2xl'>
            <motion.a
              whileHover={{ scale: 1.4 }}
              href="">
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.4 }}
              href="">
              <FaLinkedin />
            </motion.a> <motion.a
              whileHover={{ scale: 1.4 }}
              href="">
              <FaSquareTwitter />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.4 }}

              href="">
              <FaSquareInstagram />
            </motion.a>

          </div>
        </div>
      </div>

      <div className=' flex flex-col w-[80%]'>
        <h3 className=' text-yellow   text-lg hover:underline decoration-heading'>Know be better</h3>
        <div className=' text-text ml-4 flex items-center'>
          <FaLongArrowAltRight />
          <p className='ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, magnam?</p>
        </div>
        <div className='  text-text ml-4 flex items-center'>
          <FaLongArrowAltRight />
          <p className='ml-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, excepturi soluta adipisci laboriosam facilis esse!.</p>
        </div>
        <div className='  text-text ml-4 flex items-center'>
          <FaLongArrowAltRight />
          <p className='ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ea.</p>
        </div>

      </div>
    </div>
  )

}

export default About;