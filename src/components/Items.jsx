import Item from './Item'

function Items({ items, name, length }) {

    return (
        <div className='p-5 md:p-10'>
            <h1 className="text-center text-lg font-bold mb-10"> {name} </h1>

            <div className='flex flex-wrap gap-10 justify-evenly '>
                {items.slice(0, length).map(item => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Items;