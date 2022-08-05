import React, { useState } from 'react'
import { FaMinusCircle, FaPlusCircle, FaCartPlus } from 'react-icons/fa'

import { motion, AnimatePresence } from 'framer-motion';



function Item({ name, price, img }) {

  const [items, setItems] = useState(null)

  const addHandler = () => {
    setItems(items + 1)
  }

  const subtractHandler = () => {
    if (items < 1) {
      setItems(null)
    } else {
      setItems(items - 1)
    }
  }


  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        exit={{ opacity: 0, x: 100 }}

        className='w-full bg-white md:w-2/5 rounded drop-shadow-lg'>
        <div>
          <img className='w-full rounded' src={img} alt={name} />
        </div>

        <div className="p-4">
          <h2 className='mb-3 font-semibold'>{name}</h2>
          <p className='font-bold'>{price}</p>

          {items && <div className='flex gap-2 py-2 font-semibold items-center'>{`${items} items added to Cart`} <FaCartPlus /></div>}

          <div className='flex items-center gap-5 w-2/5 py-3'>
            <div className='cursor-pointer' onClick={subtractHandler}><FaMinusCircle /></div>
            <div className='cursor-pointer' onClick={addHandler}><FaPlusCircle /></div>
          </div>
        </div>

      </motion.div>
    </AnimatePresence>
  )
}

export default Item