import { BsCartPlus } from 'react-icons/bs'
import { motion, AnimatePresence } from 'framer-motion';

import { useCartContext } from '../hooks/useCartContext'



function Item({ item }) {

  const { title, price, img } = item

  const { dispatch } = useCartContext()

  const addHandler = () => {
    dispatch({ type: "ADD_ITEM", payload: item })
    console.log(title)
  }



  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        exit={{ opacity: 0 }}

        className='w-48 bg-white rounded drop-shadow-lg'>
        <div>
          <img className='w-full rounded' src={img} alt={title} />
        </div>

        <div className="p-4">
          <h2 className='mb-1 text-secondary font-semibold'>{title}</h2>

          <div className='flex items-center justify-between'>
            <p className='font-bold'>{price}</p>
            <div className='cursor-pointer hover:shadow hover:scale-110 transition-all duration-300 rounded-full p-2' onClick={addHandler}><BsCartPlus size={22} /></div>
          </div>
        </div>

      </motion.div>
    </AnimatePresence>
  )
}

export default Item