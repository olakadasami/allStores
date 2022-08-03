import { Link } from 'react-router-dom';

import Jewelries from '../components/Jewelries';
import Shoes from '../components/Shoes';
import Clothes from '../components/Clothes';

import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <div className='relative'>
      <section id="hero">
        <Hero />
      </section>

      <Link className='p-10 text-white fixed rounded-full bg-primary z-10 right-4 bottom-4' to='/'>
        Top
      </Link>

      <section className='py-20' id="collection">
        <h1 className='mb-10 text-center text-3xl font-bold text-secondary'>Our Collection</h1>
        <Clothes />
        <Jewelries />
        <Shoes />
      </section>

      <section id='testimonials' className='py-20'>
        <Testimonials />
      </section>

      <section className=' bg-white drop-shadow py-20 px-10 mx-auto text-center' id="contact">
        <h1 className='mb-10 text-center text-3xl font-bold text-secondary'>Contact Us</h1>
        <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo  mollitia voluptatum laboriosam.</p>
        <p className='mb-3'>For more info and inquiries </p> 
        <Link className='font-bold inline-block rounded text-lg px-3 py-4 w-full text-center sm:w-3/5 md:w-max mx-auto bg-secondary text-white' to='/contact'>
          Contact Us
        </Link>

        
      </section>
    </div>
  )
}

export default Home;