import { useState } from 'react';

import Nav from './Nav'
import SideNav from './SideNav';

function Header() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-primary text-white">
      <Nav 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />


      <SideNav
        isOpen={isOpen} 
        setIsOpen={setIsOpen}
      />
    </div>
  )
}

export default Header;