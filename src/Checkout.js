import React from 'react';
import {useStateValue} from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <img className="checkout_ad" src=""/>
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket Is Empty</h2>
                    <p>you have no items in your basket. To buy one or more item click on 'add to basket' next to the Item.</p>
                </div>
            ):(
                <div>
                    <h2 className="checkout_title">Your Shoppping Basket</h2>
                    {basket.map(item =>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        images={item.images}
                        price={item.price}
                        rating={item.rating}/>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Checkout;
