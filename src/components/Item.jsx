import React from 'react'

function Item({ name, price, img }) {
  return (
    <div className='w-full bg-white md:w-2/5 lg:w-1/4 rounded drop-shadow-lg'>
        <div>
            <img className='w-full rounded' src={ img } alt={name} />
        </div>
        <div className="p-4">
            <h2 className='mb-3 font-semibold'>{ name }</h2>
            <p className='font-bold'>{ price }</p>
        </div>
    </div>
  )
}

export default Item