import React from "react";
import Navbar from "./../customComponents/CustomNavbar/Navbar";
import waterCan from "./../../Assets/WishList/WateringCan.png";
import GardenGloves from "./../../Assets/WishList/GardenGloves.png";
import RubberPlant from "./../../Assets/WishList/RubberPlant.png";
import Style from "./wishList.module.css";

const WishList = () => {
  // Sample data for wishList cards
  const wishListData = [
    {
      id: 1,
      image: RubberPlant,
      name: "Rubber Plant",
      rating: 3.8,
      svg: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 12.0553L12.135 15L10.905 9.45L15 5.71579L9.6075 5.22632L7.5 0L5.3925 5.22632L0 5.71579L4.0875 9.45L2.865 15L7.5 12.0553Z"
            fill="white"
          />
        </svg>
      ),
      price: "₹120",
      button: "Buy Now",
    },
    {
      id: 2,
      image: GardenGloves,
      name: "Garden Gloves",
      rating: 3.8,
      svg: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 12.0553L12.135 15L10.905 9.45L15 5.71579L9.6075 5.22632L7.5 0L5.3925 5.22632L0 5.71579L4.0875 9.45L2.865 15L7.5 12.0553Z"
            fill="white"
          />
        </svg>
      ),
      price: "₹80",
      button: "Buy Now",
    },
    {
      id: 3,
      image: waterCan,
      name: "Watering Can",
      rating: 3.8,
      svg: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 12.0553L12.135 15L10.905 9.45L15 5.71579L9.6075 5.22632L7.5 0L5.3925 5.22632L0 5.71579L4.0875 9.45L2.865 15L7.5 12.0553Z"
            fill="white"
          />
        </svg>
      ),
      price: "₹100",
      button: "Buy Now",
    },{
      id: 4,
      image: GardenGloves,
      name: "Garden Gloves",
      rating: 3.8,
      svg: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 12.0553L12.135 15L10.905 9.45L15 5.71579L9.6075 5.22632L7.5 0L5.3925 5.22632L0 5.71579L4.0875 9.45L2.865 15L7.5 12.0553Z"
            fill="white"
          />
        </svg>
      ),
      price: "₹80",
      button: "Buy Now",
    },
  ];

  return (
    <div>
      <Navbar title="WishList" />

      <div className={Style.cardcontainer}>
        {wishListData.map((item) => (
          <div key={item.id} className={Style.card}>
            <div className={Style.imageDiv}>
              <img
                src={item.image}
                alt={item.name}
                className={Style.CardImage}
              />
            </div>
            <div className={Style.contextDiv}>
              <h3 className={Style.CardTitle}>{item.name}</h3>
              <div className={Style.ratingDiv}>
                <p className={Style.CardRating}>
                  {item.rating}
                  {item.svg}
                </p>
              </div>
              <p className={Style.cardPrice}>{item.price}</p>
              <div className={Style.buyDiv}>
                <button className={Style.buyButton}>{item.button}</button>
              </div>
            </div>
            <div className={Style.buttonDiv}>
              <button className={Style.DeleteButton}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0007 31.6667C10.0007 33.5 11.5007 35 13.334 35H26.6673C28.5007 35 30.0007 33.5 30.0007 31.6667V11.6667H10.0007V31.6667ZM31.6673 6.66667H25.834L24.1673 5H15.834L14.1673 6.66667H8.33398V10H31.6673V6.66667Z"
                    fill="#777777"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
