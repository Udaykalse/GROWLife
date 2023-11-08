// src/components/Home.js
import React from "react";
import style from "./Home.module.css";
import homeImage from "./../Assets/homeimage.png";

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.content}>
        <h1>Welcome to GrowLife: Planting the Seeds of Change</h1>
        <p>
          At GrowLife, we believe in the power of nature to transform lives and
          communities. Our mission is to raise awareness about the importance of
          tree plantation and greenery in our surroundings. Join us in nurturing
          a greener and healthier world.
        </p>
        <button className={style.joinbutton}>Join Us</button>
        <button className={`${style.donatebutton} ${style.donatebuttonMargin}`}>Donate</button>
      </div>
      <div className={style.image}>
        <img src={homeImage} alt="Welcome to Our Website" />
      </div>
    </div>
  );
};

export default Home;
