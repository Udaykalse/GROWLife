import React from "react";
import style from "./signStyle.module.css";
import Logo from "./../Assets/signupLogo.png";
import LogoGoogle from "./../Assets/signupGoogle.png";
import LogoFacebook from "./../Assets/signupfacebook.png";
import LogoApple from "./../Assets/signupApple.png";

const SignIndex = () => {
  return (
    <div className={style.signheadContainer}>
      <div
        className={style.signhead}
        style={{ backgroundColor: "#fefefe !important" }}
      >
        <div className={style.signLeft}>
          <div className={style.Banner}>
            <h1>GROWLIFE</h1>
          </div>
          <div className={style.BannerLogo}>
            <img src={Logo} alt="error"></img>
          </div>
          <div className={style.BannerHeading}>
            Welcome to <span>GrowLife</span>
          </div>
          <div className={style.BannerParagrapgh}>
            Discover the beauty of nature & contribute to a greener world
          </div>
        </div>
        <div style={{ backgroundColor: "#333", margin: "0 10px", width: "1px", height: "683px" }} className={style.virticalline}></div>
        <div className={style.signRight}>
          <div className={style.SignUpHead}>Sign Up</div>
          <div className={style.SignupHeadingRight}>
            <h1>Create your new account</h1>
          </div>
          <div className={style.Inputs}>
            <div className={style.InputGroup}>
              {/* <label htmlFor="email">Email</label> */}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="developer.tara@gmail.com"
              />
            </div>
            <div className={style.InputGroup}>
              {/* <label htmlFor="username">Username</label> */}
              <input
                type="text"
                id="username"
                name="username"
                placeholder="tara_choudhary"
              />
            </div>
            <div className={style.InputGroup}>
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="password"
                id="password"
                name="password"
                placeholder="123456"
              />
            </div>
            <div className={style.InputGroup}>
              {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="123456"
              />
            </div>
          </div>
          <div className={style.SignupButton}>
            <button>
              SIGN UP <span>&rarr;</span>
            </button>
          </div>
          <div className={style.SignUpMiddle}>
            <div className={style.horizontalLineLeft}></div>
            <div className={style.MidContent}>or continue with</div>
            <div className={style.horizontalLineright}></div>
          </div>
          <div className={style.SignUpLogo}>
            <div className={style.SignUpGoogle}>
              <img src={LogoGoogle} alt="error"></img>
            </div>
            <div className={style.SignUpFacebook}>
              <img src={LogoFacebook} alt="error"></img>
            </div>
            <div className={style.SignUpApple}>
              <img src={LogoApple} alt="error"></img>
            </div>
          </div>
          <div className={style.SignUpBootom}>
            <h1>
              Already have account? <a href="#">Sign Up</a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIndex;
