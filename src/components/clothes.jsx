import Items from './Items'
import { clothesData } from './data'


function clothes({ length }) {
    return (
        <div>
            <Items
                items={clothesData}
                name="Clothes"
                length={length} />
        </div>
    )
}

export default clothes