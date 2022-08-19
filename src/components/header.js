import { useState } from 'react';

import Nav from './Nav'
import SideNav from './SideNav';

import { motion } from 'framer-motion'

function Header({ showCart, toogleCart }) {

  const [isOpen, setIsOpen] = useState(false)

  const closeNav = () => {
    setIsOpen(false)
  }


  return (
    <div className="bg-primary relative text-white">
      <Nav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toogleCart={toogleCart}
      />

      <motion.div
        initial={{ opacity: 0, x: "100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className={`${isOpen ? 'block' : 'hidden'} transition-all ease-in-out  duration-500`}>

        <SideNav
          closeNav={closeNav}
        />
      </motion.div>
    </div>
  )
}

export default Header;