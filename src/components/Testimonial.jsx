import React from 'react'

const Testimonial = ({testimonial}) => {
  return (
    <div className='w-full md:w-3/5 text-center mx-auto py-20 shadow-lg px-20 grid place-items-center'>

      <div className='w-48 rounded-full overflow-hidden h-48'>
        <img className='w-full rounded-full' src={testimonial.src} alt={testimonial.name} />
      </div>

      <div className='rounded-lg text-primary p-10'>

        <p className='mb-5'>
          {testimonial.review}
        </p>

        <p className='font-bold text-lg text-primary'>
          {testimonial.name}
        </p>

      </div>

      
    </div>
  )
}

export default Testimonial