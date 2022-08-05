import Item from './Item'
import { shoeData } from './data'

function Shoes({ moreShoes, setMoreShoes }) {

    const showHandler = () => {
        setMoreShoes(!moreShoes)
    }

  return (
    <div className='p-10'>
        <h1 className="text-center text-lg font-bold mb-10"> Shoes </h1>

        <div className='flex flex-wrap gap-10 justify-around '>
            {moreShoes ? (
                shoeData.map(item => (
                    <Item key={item.id} img={item.img} name={item.title} price={item.price} />
                ))
            ) : (
                shoeData.slice(0, 2).map(item => (
                    <Item key={item.id} img={item.img} name={item.title} price={item.price} />
                ))
            ) }
        </div>

        <div className="flex justify-center">
            <button className="font-bold text-lg text-secondary mx-auto my-4 cursor-pointer rounded hover:shadow px-4 py-2" 
              onClick={showHandler}>
                {!moreShoes ? "Show More..." : "Hide..."}
            </button>    
        </div>
    </div>
  )
}

export default Shoes