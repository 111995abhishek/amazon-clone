import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';

function Product({ id, title, price, rating, images }) {

    const [{},dispatch] = useStateValue();
    const addToBasket = () =>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                price:price,
                rating:rating,
                images:images
            }
        })
    }

    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_,i) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>
            <img className="product_image" src={images} />
            <button onClick={addToBasket}>add to basket</button>
        </div>
    )
}

export default Product
