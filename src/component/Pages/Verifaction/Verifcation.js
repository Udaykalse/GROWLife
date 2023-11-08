import React from "react";
import Style from "./Verifcation.module.css";
import Logo from "./../../Assets/Varification/OTP.png";

const Verifcation = () => {
  return (
    <div>
      <div className={Style.verifcationSection}>
        <div className={Style.verifcationLogo}>
          <img src={Logo} alt="error" className={Style.LeftLogo} />
        </div>
        <div className={Style.verifcationLine}></div>
        <div className={Style.verifcationForm}>
          <h1 className={Style.Heading}>Forgot Password</h1>
          <p className={Style.Paragraph}>
            Enter your phone number or the email linked to your account
          </p>
          <h3 className={Style.Label}>Enter Email</h3>
          <div className={Style.EmailInput}>
            <input type="text" className={Style.InputEmail} />
          </div>
          <div className={Style.OTPDiv}>
            <button className={Style.OTP}>
              <h1 className={Style.ButtonHeading}>Get OTP</h1>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verifcation;
