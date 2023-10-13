import React from 'react';
import navbar from './Navbar.module.css';
// import Logo from "./../../component/Assets/LOGO.png"

const Navbar = () => {
  return (
    <nav className={navbar.navbar}>
      <div className="navbar-left">
        {/* <img src={Logo} alt="Logo" className={navbar.logo} /> */}
        <h1 className={navbar.logo}>LOGO</h1>
      </div>
      <div className={navbar.navbarmiddle}>
        <ul className={navbar.menu}>
          <li>Home</li>
          <li>About Us</li>
          <li>Shop</li>
          <li>Events</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className={navbar.navbarright}>
        <button className={navbar.helpbutton}>Help Center</button>
      </div>
    </nav>
  );
};

export default Navbar;
