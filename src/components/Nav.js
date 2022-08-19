import { Link } from 'react-router-dom';

import { useCartContext } from '../hooks/useCartContext'

function Nav({ isOpen, setIsOpen, toogleCart }) {

  const { ...state } = useCartContext()

  const total = state.products.length

  const menuHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='flex p-8 sticky top-0 justify-between items-center'>

      <div className="logo flex gap-4">
        <Link className='text-2xl transition-all font-bold' to='/'>allStores </Link>
        <p className='text-2xl transition-all cursor-pointer font-bold' onClick={toogleCart}>Cart {total} </p>
      </div>

      <ul className='md:justify-between text-lg font-semibold md:w-2/5 hidden md:flex'>
        <li>
          <Link className='hover:underline' to='/'>Home</Link>
        </li>

        <li>
          <Link className='hover:underline' to='/collection'>Collections</Link>
        </li>

        <li>
          <Link className='hover:underline' to='/contact'>Contact</Link>
        </li>

        <li>
          <Link className='hover:underline' to='/about'>About</Link>
        </li>
      </ul>

      <div onClick={menuHandler} className='md:hidden cursor-pointer'>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        )}
      </div>
    </nav>
  )
}

export default Nav