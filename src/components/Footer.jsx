import {Link } from 'react-router-dom';

function Footer() {
  return (
   <footer className='p-10 '>
    
    <div className=''>
      <Link className='block w-contain py-2 hover:underline rounded transition duration-300 ease-in-out' to="/about">About</Link>
      <Link className='block w-contain py-2 hover:underline rounded transition duration-300 ease-in-out' to="/contact">Contact</Link>
      <Link className='block w-contain py-2 hover:underline rounded transition duration-300 ease-in-out' to="/">Privacy Policy</Link>
      <Link className='block w-contain py-2 hover:underline rounded transition duration-300 ease-in-out' to="/">Terms of Services</Link>
    </div>

    <div className="flex items-center gap-10 justify-center md:justify-between py-4">
      <p>&copy; 2022 Olaks :)</p> 
      <div className=''>
        Social media links
      </div>
    </div>

   </footer>
  )
}

export default Footer