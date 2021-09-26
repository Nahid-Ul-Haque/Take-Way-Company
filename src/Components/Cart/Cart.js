import React from 'react';

const Cart = (props) => {

    const { cart } = props

    const totalReducer = (previousValue, currentValue) => previousValue + currentValue.Price

    const total = cart.reduce(totalReducer, 0)
    const tax = .1 * total
    const totalPrice = total + tax
    return (
        <div>
            <h1 className='text-secondary'>Cart: {cart.length}</h1>

            <ul>
                {
                    cart.map(pd => <li className='text-secondary'>{pd.name}</li>)
                }
            </ul>
            <h4 className='text-secondary'>Total: {total}$</h4>
            <h4 className='text-secondary'>Tax: {tax}$</h4>
            <h4 className='text-secondary'>Total Price: {totalPrice}$</h4>


        </div>
    );
};

export default Cart;