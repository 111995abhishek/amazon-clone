import React, { useState, useEffect } from 'react';
import banner from './original_banner.jpg';
import './Home.css';
import Product from './Product';
import { db } from './firebase';


function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        db.collection('products').onSnapshot(snapshot => {
            setProducts(snapshot.docs.map(doc => doc.data()))
        })
    }, []);

    return (
        <div className="home">
            <img className="home_image" src={banner} />
            <div className="home-row">
                {
                    products.map((product) => (
                        <Product title={product.title} price={product.price} rating={product.rating} images={product.images} />

                    ))
                }
        
            </div>

        </div>
    )
}

export default Home
