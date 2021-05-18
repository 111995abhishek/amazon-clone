import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket Is Empty</h2>
                        <p>you have no items in your basket. To buy one or more item click on 'add to basket' next to the Item.</p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout_title">Your Shoppping Basket</h2>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                images={item.images}
                                price={item.price}
                                rating={item.rating} />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal/>
                </div>
            ) }
        </div>
    )
}

export default Checkout;
