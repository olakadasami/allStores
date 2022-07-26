import React from 'react'

function Shoe({ name, price, img }) {
  return (
    <div className='w-full md:w-1/2 lg:w-1/3 rounded drop-shadow-lg'>
        <img className='w-full rounded' src={ img } alt={name} />
        <div className="p-4">
            <h2 className='mb-3'>{ name }</h2>
            <p>{ price }</p>
        </div>
    </div>
  )
}

export default Shoe