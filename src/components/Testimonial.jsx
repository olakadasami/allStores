import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Testimonial = ({ testimonial }) => {

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 1.5 }}

        className='w-full md:w-3/5 text-center mx-auto py-20 shadow-lg px-0 md:px-20 grid place-items-center'>

        <div className='w-48 rounded-full overflow-hidden h-48'>
          <img className='w-full rounded-full' src={testimonial.src} alt={testimonial.name} />
        </div>

        <div className='rounded-lg text-primary p-10'>
          <p className='mb-5'>
            {testimonial.review}
          </p>

          <p className='font-bold text-lg text-primary'>
            {testimonial.name}
          </p>
        </div>

      </motion.div>
    </AnimatePresence>
  )
}

export default Testimonial