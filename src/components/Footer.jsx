import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

import { motion } from 'framer-motion';

const socialVariant = {
  start: {
    rotate: -180,
    opacity: 0
  },
  end: {
    rotate: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5
    }
  },
  hover: {
    rotate: 360,
    transition: {
      delay: 0.5,
      duration: 0.5
    }
  }
}

function Footer() {
  return (
    <footer className='p-10 '>

      <div className='w-fit'>
        <Link className='block w-contain py-2 hover:translate-x-4 rounded transition duration-300 ease-in-out' to="/about">About</Link>
        <Link className='block w-contain py-2 hover:translate-x-4 rounded transition duration-300 ease-in-out' to="/contact">Contact</Link>
        <Link className='block w-contain py-2 hover:translate-x-4 rounded transition duration-300 ease-in-out' to="/">Privacy Policy</Link>
        <Link className='block w-contain py-2 hover:translate-x-4 rounded transition duration-300 ease-in-out' to="/">Terms of Services</Link>
      </div>

      <div className="flex items-center gap-4 font-bold justify-center flex-wrap md:justify-between py-4">
        <div className='flex justify-between'>
          <motion.div
            variants={socialVariant}
            initial="start"
            whileHover="hover"
            whileInView="end"
            className='p-2'>
            <Link to='/'><FaFacebook size={32} /></Link>
          </motion.div>
          <motion.div
            variants={socialVariant}
            initial="start"
            whileHover="hover"
            whileInView="end"
            className='p-2'>
            <Link to='/'><FaInstagram size={32} /></Link>
          </motion.div>
          <motion.div
            variants={socialVariant}
            initial="start"
            whileHover="hover"
            whileInView="end"
            className='p-2'>
            <Link to='/'><FaWhatsapp size={32} /></Link>
          </motion.div>
          <motion.div
            variants={socialVariant}
            initial="start"
            whileHover="hover"
            whileInView="end"
            className='p-2'>
            <Link to='/'><FaTwitter size={32} /></Link>
          </motion.div>
        </div>

        <p >&copy; 2022 Olaks :)</p>
      </div>

    </footer >
  )
}

export default Footer