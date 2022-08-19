import { FaTimes } from 'react-icons/fa'
import CartItem from './CartItem'
import { useCartContext } from '../../hooks/useCartContext'

const Cart = ({ showCart, toogleCart }) => {

    const { ...state } = useCartContext();
    const { products, total } = state;
    console.log(total)

    return (
        // ${showCart ? 'opacity-100 visible' : 'opacity-0 invisible'}
        <div className={` fixed top-1/2 left-1/2 z-100 translate-x-1/2 w-full md:w-2/3 translate-y-1/2 p-8 md:p-16`}>
            <div className='relative'>
                <div>
                    {products.map(product => (
                        <CartItem key={product.id} name={product.name} price={product.price} />
                    ))}
                </div>
                <div onClick={toogleCart} className='absolute top-0 right-0'>
                    <FaTimes />
                </div>
            </div>
        </div>
    )
}

export default Cart