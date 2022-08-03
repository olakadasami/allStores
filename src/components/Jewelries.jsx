import Item from "./Item"
import { jewData } from './data'


function Jewelries() {
  return (
    <div className='p-10'>
        <h1 className="text-center font-bold text-lg mb-10"> Jewelries </h1>

        <div className='flex flex-wrap gap-10 justify-around'>
            {jewData.map(item => (
                <Item key={item.id} img={item.img} name={item.title} price={item.price} />
            ))}
        </div>
    </div>
  )
}

export default Jewelries