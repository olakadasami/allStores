import { useState, useEffect } from "react";
import Reviews from "../TestimonialData";
import Testimonial from "./Testimonial";

import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'

const Testimonials = () => {

    const [currentIndex, setCurrentIndex] = useState(0)


    const leftHandler = () => {
        const firstIndex = currentIndex === 0
        const newIndex = firstIndex ? Reviews.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex);
    }

    const rightHandler = () => {
        const lastIndex = currentIndex === (Reviews.length - 1)
        const newIndex = lastIndex ? 0 : currentIndex + 1
        setCurrentIndex(newIndex);
    }

    useEffect(() => {
      
      const changeIndex = setInterval(() => {
        const lastIndex = currentIndex === (Reviews.length - 1)
        const newIndex = lastIndex ? 0 : currentIndex + 1
        setCurrentIndex(newIndex);
      }, 5000)
    
      return () => {
        clearInterval(changeIndex)
      }
    }, [setCurrentIndex, currentIndex])
    


  return (
    <div className="mx-auto w-4/5 relative">

        <h1 className="font-bold text-4xl text-secondary mb-10 text-center">What others have to say</h1>
        <Testimonial testimonial={Reviews[currentIndex]} />
        <div className="absolute z-10 top-1/2 left-10 cursor-pointer hover:shadow-lg p-2 rounded-full" onClick={leftHandler}><FaArrowLeft /></div>
        <div className="absolute z-10 top-1/2 right-10 cursor-pointer hover:shadow-lg p-2 rounded-full" onClick={rightHandler}><FaArrowRight /></div>
    </div>
  )
}

export default Testimonials