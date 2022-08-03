import Item from './Item'
import { clothesData } from './data'


function clothes() {

  return (
    <div className='p-10'>
        <h1 className="text-center font-bold text-lg mb-10">Clothing</h1>
        
        <div className='flex flex-wrap gap-10 justify-around'>
            {clothesData.map(item => (
                <Item key={item.id} img={item.img} name={item.title} price={item.price} />
            ))}
        </div>
    </div>
  )
}

export default clothes