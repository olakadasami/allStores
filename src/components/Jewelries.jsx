import Item from "./Item"
import { jewData } from './data'


function Jewelries({ moreJewelries, setMoreJewelries}) {

    const showHandler = () => {
        setMoreJewelries(!moreJewelries)
    }

  return (
    <div className='p-10'>
        <h1 className="text-center font-bold text-2xl mb-10"> Jewelries </h1>

        <div className='flex flex-wrap gap-10 justify-around'>
            {moreJewelries ? (
                jewData.map(item => (
                    <Item key={item.id} img={item.img} name={item.title} price={item.price} />
                ))
            ) : (
                jewData.slice(0, 2).map(item => (
                    <Item key={item.id} img={item.img} name={item.title} price={item.price} />
                ))
            ) }
            
        </div>

        <div className="flex justify-center">
            <button className="font-bold text-lg text-secondary mx-auto my-4 cursor-pointer rounded hover:shadow px-4 py-2" 
              onClick={showHandler}>
                {!moreJewelries ? "Show More..." : "Hide..."}
            </button>    
        </div>


    </div>
  )
}

export default Jewelries