import Item from "./Item"

import Jew1 from '../img/jpgs/jew-1.jpg';
import Jew2 from '../img/jpgs/jew-2.jpg';
import Jew3 from '../img/jpgs/jew-3.jpg';
import Jew4 from '../img/jpgs/jew-4.jpg';
import Jew5 from '../img/jpgs/jew-5.jpg';


function Jewelries() {
  return (
    <div className='py-10'>
        <h1 className="text-center mb-10"> Jewelries </h1>
        <div className='flex flex-wrap gap-8 justify-around'>

            <Item 
                img={Jew1} 
                name="Gold Ring With Diamonds"
                price='$50.0'
            />

            <Item 
                img={Jew2} 
                name="15 carat beads"
                price='$50.0'
            />

            <Item 
                img={Jew3} 
                name="Ring"
                price='$50.0'
            />

            <Item 
                img={Jew4} 
                name="Diamond Bracelets"
                price='$50.0'
            />

            <Item 
                img={Jew5} 
                name="Gold Necklace"
                price='$50.0'
            />

        </div>
    </div>
  )
}

export default Jewelries