import React from "react";
import Style from "./NavbarPage.module.css";
import Logo from "./../../Assets/GrowLife.png";
import SearchIcon from "./../../Assets/PageIconsearch.png"
import NotificationLogo from "./../../Assets/PagesIconnotification.png"
import SignupLogo from "./../../Assets/PagesIconSignup.png"

export default function NavbarPage (props){
  return(
    <div className={Style.navbar}>
    <div className={Style.logo}>
      <img src={Logo} alt="Company Logo" />
    </div>
    <div className={Style.navlinks}>
      <a href="/shop">{props.title}</a>
    </div>
    <div className={Style.searchbar}>
      <input type="text" placeholder="        Search" />
      {/* <i className="fa fa-search"></i> */}
      <img src={SearchIcon} alt="error"/>
    </div>
    <div className={Style.notification}>
      {/* <i className="fa fa-bell"></i> */}
      <button><img src={NotificationLogo} alt="Error"/></button>
    </div>
    <div className={Style.signup}>
      <button><img src={SignupLogo} alt="error"/></button>
      {/* <i className="fa fa-user"></i> */}
    </div>
  </div>
  )
}
