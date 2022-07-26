import { Link } from 'react-router-dom';

function Nav() {
  return (
      <nav className='flex p-3 justify-between items-center'>
        <div className="logo">Logo</div>
        <ul>
          <li>
            <Link className='ml-8 transition ease-in duration-1000 hover:underline' to='/'>Home</Link>
            <Link className='ml-8 transition ease-in duration-1000 hover:underline' to='/collection'>Collections</Link>
            <Link className='ml-8 transition ease-in duration-1000 hover:underline' to='/contact'>Contact</Link>
            <Link className='ml-8 transition ease-in duration-1000 hover:underline' to='/about'>About</Link>
          </li>
        </ul>
      </nav> 
  )
}

export default Nav