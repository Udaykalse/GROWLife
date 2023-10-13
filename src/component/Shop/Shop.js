// Shop.js
import React from "react";
import style from "./Shop.module.css";
import img1 from "./../Assets/Shop.png";
import star1 from "./../Assets/Shopthree.png"; // Import star images
import star2 from "./../Assets/Shoptwo.png";
import like from "./../Assets/like.png";

const Shop = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      title: "Shop",
      name: "Product 1",
      image: img1,
      price: "$19.99",
      rating: [star2, star2, star2, star2, star1],
    },
    {
      id: 2,
      title: "Shop",
      name: "Product 2",
      image: img1,
      price: "$29.99",
      rating: [star2, star2, star2, star2, star1],
    },
    {
      id: 3,
      title: "Shop",
      name: "Product 3",
      image: img1,
      price: "$39.99",
      rating: [star2, star2, star2, star2, star1],
    },
  ];

  return (
    <div className={style.shopcontainer}>
      <div className={style.head}>
        <div className={style.mainAbout}>
          <div className={style.rightline}></div>
          <h1 className={style.mainHeading}>SHOP</h1>
          <div className={style.leftline}></div>
        </div>
        <div className={style.shopcards}>
          {products.map((product) => (
            <div className={style.productcard} key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className={style.productimage}
              />
              <h2 className={style.productname + " " + style.title}>
                {product.title}
              </h2>

              <div className={style.maindiv}>
                <h3 className={style.productname}>{product.name}</h3>
                <img src={like} alt="like" className={style["like-image"]} />
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
      <div className={style.bottom}>
        <h1 className={style.viewAll}>View All</h1>
      </div>
    </div>
  );
};

export default Shop;
