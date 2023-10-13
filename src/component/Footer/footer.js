// import React from "react";
import React, { useState } from "react";
import STYLE from "./footer.module.css";

import logoImage from "./../Assets/GrowLife.png";
import phonepng from "./../Assets/contactone.png";
import emailpng from "./../Assets/contacttwo.png";
import locationpng from "./../Assets/contactthree.png";
import footerpngone from "./../Assets/footericonone.png";
import footerpngtwo from "./../Assets/footericontwo.png";
import footerpngthree from "./../Assets/mingcute_linkedin-line.png";
import footerpngfour from "./../Assets/footerfive.png";

const Footer = () => {
  // eslint-disable-next-line no-undef
  const [selectedValue, setSelectedValue] = useState("");

  // An array of options for the dropdown
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  // Event handler to handle changes in the dropdown
  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <footer className={STYLE.footer}>
      <div className={STYLE.footercontainer}>
        <div className={STYLE.Footercontext}>
          <div className={STYLE.leftColumn}>
            <div className={STYLE.one}>
              <div className={STYLE.logo}>
                <img src={logoImage} alt="Logo" />
              </div>
              <p>
                Cultivating a Greener World. We raise awareness about tree
                plantation, promote environmental conservation, and nurture a
                love for nature. Together, we can make a significant impact on
                our planet's well-being.
              </p>
              <br/>
              <div className="footerdropdown">
                <select value={selectedValue} onChange={handleDropdownChange}>
                  <option value="">English (UK)</option>
                  {options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className={STYLE.secondcolumn}>
            <ul className={STYLE.leftMenu}>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>EVENTS</li>
              <li>SHOP</li>
            </ul>
          </div>
          <div className={STYLE.thirdcolumn}>
            <ul className={STYLE.rightMenu}>
              <li>Privacy Policy</li>
              <li>Terms & Policies</li>
              <li>Help Center</li>
              <li>Return Policy</li>
            </ul>
          </div>
          <div className={STYLE.rightColumn}>
            <div className={STYLE.socialmedia}>
              <div className={STYLE.phone}>
                <img src={phonepng} alt="Phone" />
                <p>+91-8765409862</p>
              </div><br/>
              <div className={STYLE.email}>
                <img src={emailpng} alt="Email" />
                <p>xyzlife@gmail.com</p>
              </div><br/>
              <div className={STYLE.location}>
                <img src={locationpng} alt="Location" />
                <p>Delhi, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className={STYLE.footerIcons}>
          <div>
            <img src={footerpngone} alt="Footer" />
          </div>
          <div>
            <img src={footerpngtwo} alt="Footer" />
          </div>
          <div>
            <img src={footerpngthree} alt="Footer" />
          </div>
        </div>
        <div className={STYLE.Bottom}>
          <image src={footerpngfour} alt="error" /> 2023 GrowLife
        </div>
      </div>
    </footer>
  );
};

export default Footer;
