import Items from './Items'
import { shoeData } from './data'

function Shoes({ length }) {
    return (
        <div>
            <Items
                items={shoeData}
                name="Shoes"
                length={length} />
        </div>
    )
}

export default Shoes