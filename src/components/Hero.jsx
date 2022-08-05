import React from 'react'
import Image from '../img/bg-2.jpg';

import { motion } from 'framer-motion';


function Hero() {
  return (
    <div id="hero" style={{ backgroundImage: `url(${Image})` }}
      className={`bg-cover bg-fixed flex relative justify-center items-center bg-no-repeat w-full h-sm-screen relative`}>


      <div className='absolute top-0 left-0 h-full w-full z-10 right-0 buttom-0 bg-trans'></div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, type: "tween" }}

        className="p-5 md:p-10 w-4/5 md:w-3/5 my-auto rounded z-20 mx-auto text-white bg-trans">
        <h1 className="text-4xl mb-3 font-bold text-secondary">All round store you can trust</h1>
        <h2 className='text-2xl mb-2 font-bold'>Get Quality at Affordable rates</h2>
        <p className='text-start hidden md:block'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse doloribus eligendi quo, nobis, tenetur assumenda temporibus accusamu.</p>
      </motion.div>
    </div>
  )
}

export default Hero