import React from "react";
import Navbar from "./../customComponents/CustomNavbar/Navbar";
import Style from "./HelpStyle.module.css";
import image1 from "./../../Assets/Help/Support.png";
import image2 from "./../../Assets/Help/Shop.png";
import image3 from "./../../Assets/Help/Profile.png";
import image4 from "./../../Assets/Help/Donation.png";

const HelpIndex = () => {
  return (
    <>
      <Navbar  title={"Help"}/>
      <div className={Style.HelpSection}>
        <div className={Style.headSection}>
          <p className={Style.headTitle}>Help Centre</p>
        </div>
        <div className={Style.bodySection}>
            <div className={Style.CardsTitleDiv}>
            <p className={Style.bodySectionTitle}>Hi, how can we help you?</p>
            </div>
          <div className={Style.CardsSection}>
          <div className={Style.Cards}>
            <button className={Style.imageButton}>
              <img src={image3} alt="error" />
            </button>

            <p className={Style.CardsTitle}>Account & Profile</p>
          </div>
          <div className={Style.Cards}>
            <button className={Style.imageButton}>
              <img src={image4} alt="error" />
            </button>
            <p className={Style.CardsTitle}>Events & Donations</p>
          </div>
          <div className={Style.Cards}>
            <button className={Style.imageButton}>
              <img src={image2} alt="error" />
            </button>

            <p className={Style.CardsTitle}>Shop & Purchases</p>
          </div>
          <div className={Style.Cards}>
            <button className={Style.imageButton}>
              <img src={image1} alt="error" />
            </button>

            <p className={Style.CardsTitle}>Technical Support</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpIndex;
