// src/components/About.js
import React from "react";
import style from "./About.module.css";
// import leftImage from "./../Assets/Aboutone.png";
// import rightImage from "./../Assets/Abouttwo.png";

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.mainAbout}>
        <div className={style.rightline}></div>
        <h1 className={style.mainHeading}>About us</h1>
        <div className={style.leftline}></div>
      </div>
      <div className={style.header}>
        <div className={style.rightsection}>
          <div className={style.one}>
            <h1>We bring you closer to the earth</h1>
          </div>
          <div className={style.two}>
            <p className={style.rightPara}>
              <h5 className={style.headingone}>
                Our Vision: A World of Abundant Greenery
              </h5>
              <p className={style.rightpara}>
                We envision a world where lush greenery thrives in harmony with
                urban landscapes, providing cleaner air, a healthier ecosystem,
                and a brighter tomorrow. Through our collective efforts, we
                strive to create a greener and sustainable future for all.
              </p>
              <h5 className={style.headingone}>
                Our Mission: Nurturing Nature, Together
              </h5>
              <p className={style.rightpara}>
                Our core mission is to raise awareness about the importance of
                tree plantation, growing plants, and fostering a love for
                nature. We believe that every individual can play a vital role
                in preserving our planet's natural beauty and biodiversity. By
                working together, we can make a profound impact on environmental
                conservation.
              </p>
            </p>
          </div>
        </div>
        <div className={style.Leftsection}>
          <p className={style.leftPara}>
            <span className={style.firstLetter}>W</span>elcome to{" "}
            <span>GROWLIFE</span>! We are passionate about making a positive
            impact on the environment and fostering a greener future. Our
            mission is to promote tree plantation, raise awareness about the
            importance of greenery, and facilitate community engagement in
            environmental initiatives. Here's a glimpse into who we are and what
            we stand for.
          </p>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className={style.Left}>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
