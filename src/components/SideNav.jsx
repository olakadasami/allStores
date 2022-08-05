import React from 'react'
import { Link } from 'react-router-dom';

function SideNav({ closeNav }) {



  return (
    <nav className="w-full text-end md:translate-x-full bg-secondary text-white py-5 px-10">
      <ul className='block'>
        <li className='mb-2'>
          <Link onClick={closeNav} className='flex items-center justify-end text-right' to='/'>
            <h2 className='mr-2'>Home</h2>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
          </Link>
        </li>


        <li className='mb-2'>
          <Link onClick={closeNav} className='flex bold justify-end items-center' to='/collection'>
            <h2 className='mr-2'>
              Collections
            </h2>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </Link>
        </li>

        <li className='mb-2'>
          <Link onClick={closeNav} className='flex bold justify-end items-center' to='/contact'>
            <h2 className='mr-2'>
              Contact
            </h2>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </Link>
        </li>

        <li className='mb-2'>
          <Link onClick={closeNav} className='flex bold justify-end items-center' to='/about'>
            <h2 className='mr-2'>
              About
            </h2>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideNav