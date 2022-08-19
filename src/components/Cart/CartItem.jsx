import React from 'react'

const CartItem = ({ name, price }) => {
    return (
        <div className='flex justify-center items-center py-4 px-8'>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}

export default CartItem