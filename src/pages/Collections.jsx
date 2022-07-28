import { Link } from 'react-router-dom';


function Collections() {
  return (
    <div className="py-10 w-4/5 md:w-2/5 mx-auto md:py-20 px-10 md:px-15">
      <Link className='text-lg px-8 py-4 block drop-shadow text-center bg-secondary text-white rounded mb-8' to='/collection/clothing' >
        View Clothing
      </Link>
      <Link className='text-lg px-8 py-4 block drop-shadow text-center bg-secondary text-white rounded mb-8' to='/collection/jewelries' >
        View Jewelries
      </Link>
      <Link className='text-lg px-8 py-4 block drop-shadow text-center bg-secondary text-white roundedsecondary' to='/collection/shoes' >
        View Shoes
      </Link>
    </div>
  )
}

export default Collections