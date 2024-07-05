import React from 'react'
import { motion } from "framer-motion"
const Nav = () => {
  return (
    <div className=' bg-bgp h-28 w-full flex justify-center'>
      <div className=' w-[80%]  bg-bgs   border-2 border-heading rounded-xl fixed h-20 top-4 flex justify-around'>



        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          className=' border-2 border-heading bg-bgp h-8 mt-5 p-3 flex justify-center items-center rounded-xl w-28 '>

          <a className=' font-mono text-heading  ' href="#home">about</a>
        </motion.div>



        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          className='  border-2 border-heading shadow-sm bg-bgp h-8 mt-5 p-3 flex justify-center items-center rounded-xl w-28 '>

          <a className=' font-mono text-heading  ' href="#home">projects</a>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          className=' shadow-sm  border-2 border-heading bg-bgp h-8 mt-5 p-3 flex justify-center items-center rounded-xl w-28 '>

          <a className=' font-mono text-heading  ' href="#home">skills</a>
        </motion.div>
      </div >
    </div >
  )
}

export default Nav