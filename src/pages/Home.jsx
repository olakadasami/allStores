import React from 'react'
import Jewelries from '../components/Jewelries';
import Shoes from '../components/Shoes';
import Clothes from '../components/Clothes';

import Contact from '../pages/Contact'

function Home() {
  return (
    <div className='py-10 md:py-20'>

      <section className='py-20' id="collection">
        <h1 className='mb-10 text-center text-3xl font-bold text-secondary'>Our Collection</h1>
        <Clothes />
        <Jewelries />
        <Shoes />
      </section>

      <section className=' bg-white drop-shadow py-20' id="contact">
        <h1 className='mb-10 text-center text-3xl font-bold text-secondary'>Contact Us</h1>

        <Contact />
      </section>
    </div>
  )
}

export default Home;