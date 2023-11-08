import React, { Component } from 'react';
import style from './Shopping.module.css';
import img1 from './../../Assets/Shop.png';
import star1 from './../../Assets/Shopthree.png';
import star2 from './../../Assets/Shoptwo.png';
import like from './../../Assets/like.png';
import pone from "./../../Assets/shopaccessories.png"
import ptwo from "./../../Assets/ShopPlates.png"
import pthree from "./../../Assets/ShopFertilizers.png"
import pfour from "./../../Assets/ShopPlanters.png"
import Navbar from "./../NavbarPage/NavbarPage"


class Shopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, Img:ptwo, name: 'Plates' },
        { id: 2,  Img:pone , name: 'accessories' },
        { id: 3,  Img:pthree, name: 'Fertilizers' },
        { id: 4,  Img:pfour , name: 'Planters'},
        // Add more products as needed
      ],
    };
  }

  render() {
    const productData = [
      {
        id: 1,
        title: 'PLANTS',
        name: 'Peace Lily',
        image: img1,
        price: '$19.99',
        rating: [star2, star2, star2, star2, star1],
      },
      {
        id: 2,
        title: 'PLANTS',
        name: 'Peace Lily',
        image: img1,
        price: '$29.99',
        rating: [star2, star2, star2, star2, star1],
      },
      {
        id: 3,
        title: 'PLANTS',
        name: 'Peace Lily',
        image: img1,
        price: '$39.99',
        rating: [star2, star2, star2, star2, star1],
      },{
        id: 4,
        title: "PLANTS",
        name: "Peace Lily",
        image: img1,
        price: "$39.99",
        rating: [star2, star2, star2, star2, star1],
      },
      {
        id: 5,
        title: "PLANTS",
        name: "Peace Lily",
        image: img1,
        price: "$39.99",
        rating: [star2, star2, star2, star2, star1],
      },
      {
        id: 6,
        title: "PLANTS",
        name: "Peace Lily",
        image: img1,
        price: "$39.99",
        rating: [star2, star2, star2, star2, star1],
      },
      {
        id: 7,
        title: "PLANTS",
        name: "Peace Lily",
        image: img1,
        price: "$39.99",
        rating: [star2, star2, star2, star2, star1],
      },
      {
        id: 8,
        title: "PLANTS",
        name: "Peace Lily",
        image: img1,
        price: "$39.99",
        rating: [star2, star2, star2, star2, star1],
      },{
        id: 9,
        title: "PLANTS",
        name: "Peace Lily",
        image: img1,
        price: "$39.99",
        rating: [star2, star2, star2, star2, star1],
      },{
        id: 10,
        title: "PLANTS",
        name: "Peace Lily",
        image: img1,
        price: "$39.99",
        rating: [star2, star2, star2, star2, star1],
      },{
        id: 11,
        title: "PLANTS",
        name: "Peace Lily",
        image: img1,
        price: "$39.99",
        rating: [star2, star2, star2, star2, star1],
      },{
        id: 12,
        title: "PLANTS",
        name: "Peace Lily",
        image: img1,
        price: "$39.99",
        rating: [star2, star2, star2, star2, star1],
      },
      // Add more products as needed
    ];

    return (
      <div>
        {/* <h1 className={style.title}>Shop</h1> */}
        <Navbar NAVBARNAME="Shop Now" />
        <div className={style.productlist}>
          {this.state.products.map((product) => (
            <div key={product.id} className={style.product}>
                <img src={product.Img} alt="Product" />
              <h2>{product.name}</h2>
            </div>
          ))}
        </div>

        <div className={style.shopcards}>
          {productData.map((product) => (
            <div className={style.productcard} key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className={style.productimage}
              />
              <h2 className={style.title}>{product.title}</h2>
              <div className={style.productname}>
                <h3>{product.name}</h3>
                <img src={like} alt="like" className={style.like} />
              </div>
              <div className={style.rating}>
                {product.rating.map((star, index) => (
                  <img
                    key={index}
                    src={star}
                    alt={`Star ${index + 1}`}
                    className={style.star}
                  />
                ))}
              </div>
              <div className={style.productdetails}>
                <span className={style.productprice}>{product.price}</span>
                <button className={style.buybutton}>Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Shopping;
