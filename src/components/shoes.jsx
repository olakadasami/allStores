import Item from './Item'
import { shoeData } from './data'

function Shoes() {
  return (
    <div className='p-10'>
        <h1 className="text-center text-lg font-bold mb-10"> Shoes </h1>

        <div className='flex flex-wrap gap-10 justify-around '>
            {shoeData.map(item => (
                <Item key={item.id} img={item.img} name={item.title} price={item.price} />
            ))}
        </div>
    </div>
  )
}

export default Shoes