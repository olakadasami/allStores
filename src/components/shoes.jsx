import Shoe from './Item'

import Shoe1 from '../img/jpgs/shoe-1.jpg';
import Shoe2 from '../img/jpgs/shoe-2.jpg';
import Shoe3 from '../img/jpgs/shoe-3.jpg';
import Shoe4 from '../img/jpgs/shoe-4.jpg';
import Shoe5 from '../img/jpgs/shoe-5.jpg';

function Shoes() {
  return (
    <div className='py-10'>
        <h1 className="text-center text-lg bold mb-10"> Shoes </h1>
        <div className='flex flex-wrap gap-8 justify-around p-10'>

            <Shoe
                img={Shoe1} 
                name="Men's Sneakers"
                price='$12.5'
            />

            <Shoe 
                img={Shoe2} 
                name="Unisex All Stars Sneakers"
                price='$12.5'
            />

            <Shoe 
                img={Shoe3} 
                name="Female Blue Heels"
                price='$12.5'
            />

            <Shoe 
                img={Shoe4} 
                name="Men's White Trainers"
                price='$12.5'
            />
            

            <Shoe 
                img={Shoe5} 
                name="Ladies Heels Nude"
                price='$12.5'
            />

        </div>
    </div>
  )
}

export default Shoes