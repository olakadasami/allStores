
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaRegArrowAltCircleUp } from 'react-icons/fa'
import { motion } from 'framer-motion';

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

      <HashLink smooth className='p-2 text-white fixed rounded-full hover:shadow bg-primary z-10 right-10 bottom-10' to='#'>
        <FaRegArrowAltCircleUp />
      </HashLink>

      <section className='py-20' id="collection">
        <h1 className='mb-10 text-center text-3xl font-bold text-secondary'>Our Collection</h1>
        <div className='flex flex-col justify-center'>
          <Clothes
            length={3} />
          <Link to="collection/clothing"
            className="font-bold text-lg text-secondary mx-auto my-4 cursor-pointer rounded hover:shadow px-4 py-2"
          >
            Show More...
          </Link>
        </div>

        <div className='flex flex-col justify-center'>
          <Jewelries
            length={3} />
          <Link to={'/collection/jewelries'} className="font-bold text-lg text-secondary mx-auto my-4 cursor-pointer rounded hover:shadow px-4 py-2"
          >
            Show More...
          </Link>
        </div>
        <div className='flex flex-col justify-center'>
          <Shoes
            length={3} />
          <Link to={'/collection/shoes'} className="font-bold text-lg text-secondary mx-auto my-4 cursor-pointer rounded hover:shadow px-4 py-2"
          >
            Show More...
          </Link>
        </div>
      </section>

      <section id='testimonials' className='py-20'>
        <Testimonials />
      </section>

      <motion.section
        whileHover={{ scale: 0.97 }}
        transition={{ delay: 0, duration: 0.3 }}
        className=' bg-white drop-shadow py-20 px-10 mx-auto text-center' id="contact">
        <h1 className='mb-10 text-center text-3xl font-bold text-secondary'>Contact Us</h1>
        <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo  mollitia voluptatum laboriosam.</p>
        <p className='mb-3'>For more info and inquiries </p>
        <Link className='font-bold inline-block rounded text-lg px-3 py-4 w-full text-center sm:w-3/5 md:w-max mx-auto bg-secondary text-white' to='/contact'>
          Contact Us
        </Link>


      </motion.section>
    </div>
  )
}

export default Home;