import { useState } from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav'

function Header() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-primary text-white p-4">
      <Nav 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />


      <nav className={`${isOpen ? 'block' : 'hidden'} bg-white text-primary`}>
        <ul className='block'>
            <li>
              <Link className='transition ease-in duration-1000 hover:underline' to='/'>Home</Link>
            </li>

            <li>
              <Link className='transition ease-in duration-1000 hover:underline' to='/collection'>Collections</Link>
            </li>

            <li>
              <Link className='transition ease-in duration-1000 hover:underline' to='/contact'>Contact</Link>
            </li>

            <li>
              <Link className='transition ease-in duration-1000 hover:underline' to='/about'>About</Link>
            </li>
          </ul>
      </nav>
    </div>
  )
}

export default Header;