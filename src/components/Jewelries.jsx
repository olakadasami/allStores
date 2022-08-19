import Items from "./Items"
import { jewData } from './data'

function Jewelries({ length }) {
    return (
        <div>
            <Items
                items={jewData}
                name="Jewelry"
                length={length} />
        </div>
    )
}

export default Jewelries