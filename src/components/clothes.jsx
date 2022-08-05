import Item from './Item'
import { clothesData } from './data'


function clothes({moreClothes, setMoreClothes}) {

    const showHandler = () => {
        setMoreClothes(!moreClothes)
    }

  return (
    <div className='p-10'>
        <h1 className="text-center font-bold text-lg mb-10">Clothing</h1>

        <div className='flex flex-wrap gap-10 justify-around'>
            {moreClothes ? (
                clothesData.map(item => (
                    <Item key={item.id} img={item.img} name={item.title} price={item.price} />
                ))
            ) : (
                clothesData.slice(0, 2).map(item => (
                    <Item key={item.id} img={item.img} name={item.title} price={item.price} />
                ))
            ) }
        </div>

        <div className="flex justify-center">
            <button className="font-bold text-lg text-secondary mx-auto my-4 cursor-pointer rounded hover:shadow px-4 py-2" 
              onClick={showHandler}>
                {!moreClothes ? "Show More..." : "Hide..."}
            </button>    
        </div>

    </div>
  )
}

export default clothes