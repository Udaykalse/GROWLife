import React from "react";
import Style from "./OTPverification.module.css";
import Logo from "./../../Assets/Varification/OTP.png";

const OTPverifcation = () => {
  return (
    <div>
      <div className={Style.verifcationSection}>
        <div className={Style.verifcationLogo}>
          <img src={Logo} alt="error" className={Style.LeftLogo} />
        </div>
        <div className={Style.verifcationLine}></div>
        <div className={Style.verifcationForm}>
          <h1 className={Style.Heading}>OTP Verification</h1>
          <p className={Style.Paragraph}>
          Enter the OTP sent to
          </p>
          <h3 className={Style.Label}>tarachoudhary@gmail.com</h3>
          <div className={Style.EmailInput}>
           <div className={Style.OTPNUMBER}>
           <input type="text" className={Style.InputEmail} />
           </div>
           <div className={Style.OTPNUMBER}>
           <input type="text" className={Style.InputEmail} />
           </div>
           <div className={Style.OTPNUMBER}>
           <input type="text" className={Style.InputEmail} />
           </div>
           <div className={Style.OTPNUMBER}>
           <input type="text" className={Style.InputEmail} />
           </div>
            
          </div>
          <div className={Style.OTPSpan}>
            <p className={Style.OTPPara}>Didn't you receive the OTP ?<span className={Style.optSapn}> Resend OTP</span></p>
          </div>
          <div className={Style.OTPDiv}>
            <button className={Style.OTP}>
              <h1 className={Style.ButtonHeading}>Get OTP</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPverifcation;
