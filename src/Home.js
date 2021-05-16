import React from 'react';
import banner from './original_banner.jpg';
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <img className="home_image" src={banner} />
            <div className="home-row">
                <Product
                    id="123421"
                    title="The Lean Start up : How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    images="https://api.time.com/wp-content/uploads/2020/10/The-Name-of-the-Wind-Patrick-Rothfuss-100-best-fantasy-books.jpg" />

                <Product
                    id="123422"
                    title="Redmi smart watch"
                    price={2500}
                    rating={5}
                    images="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/13089672/2021/1/20/52c98624-390f-4aec-b3b2-9a8b81ad431f1611133634601-Realme-Unisex-Black-SpO2-Monitor-and-Large-Color-Touch-Scree-7.jpg" />
            </div>

            <div className="home-row">
                <Product
                    id="123423"
                    title="Real me Smart Phone 64 GB Ram 128 GB Rom"
                    price={10000}
                    rating={5}
                    images="https://static.digit.in/product/thumb_168390_product_td_300.jpeg" />

                <Product
                    id="123424"
                    title="Sun glasses for men"
                    price={1200}
                    rating={5}
                    images="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunglesses-index-1590778931.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*" />

                <Product
                    id="123425"
                    title="Tommy Hilfiger : Boots For Men"
                    price={2200}
                    rating={5}
                    images="http://cdn.shopify.com/s/files/1/0360/4821/products/IronworkerBoot_Brwn_34NoBkgd_grande.png?v=1604980639" />
            </div>

            <div className="home-row">
                <Product
                    id="123426"
                    title="Samsung 32 inch LED Display"
                    price={24000}
                    rating={5}
                    images="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhsTP3L_ElZdgjkPyqLhvTZBa5U4FSDBwBA&usqp=CAU" />

                
            </div>
        </div>
    )
}

export default Home
