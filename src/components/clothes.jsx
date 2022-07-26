import Item from './Item'

import Jeans1 from '../img/jpgs/jeans-1.jpg';
import Jeans2 from '../img/jpgs/jeans-2.jpg';

import Shirt1 from '../img/jpgs/shirt-1.jpg';
import Shirt2 from '../img/jpgs/shirt-2.jpg';
import Shirt3 from '../img/jpgs/shirt-3.jpg';


function clothes() {

  return (
    <div className='py-10'>
        <h1 className="text-center mb-10">Clothing</h1>
        <div className='flex flex-wrap gap-8 justify-around'>

            <Item 
                img={Jeans1}
                price="$20.0"
                name="Men's Denims"
            />
            

            <Item 
                img={Jeans2}
                price="$24.0"
                name="Men's Stock Jeans"
            />
            

            <Item 
                img={Shirt1}
                price="$24.0"
                name="Men's Stock Jeans"
            />
            

            <Item 
                img={Shirt2}
                price="$24.0"
                name="Men's Stock Jeans"
            />
            

            <Item 
                img={Shirt3}
                price="$24.0"
                name="Men's Stock Jeans"
            />

        </div>
    </div>
  )
}

export default clothes