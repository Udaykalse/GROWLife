import React from "react";
import NavbarPage from "../NavbarPage/NavbarPage";
import style from "./profilePage.module.css";
import profilePic from "./../../Assets/Profile/ProfilePic.png";

const profilePage = () => {
  return (
    <>
      <NavbarPage />
      <div className={style.MainSection}>
        <div className={style.profilePhoto}>
          <img src={profilePic} alt="error" className={style.ProfilePic} />
          <p className={style.ProfileName}>Tara Choudhary</p>
          <p className={style.userName}>@tara_choudhary</p>
        </div>
        <div className={style.profileFollowers}>
          <div className={style.Posts}>
            <p className={style.profileTitle}>Posts</p>
            <p className={style.profileSubTitle}>4</p>
          </div>
          <div className={style.Followers}>
            <p className={style.profileTitle}>Followers</p>
            <p className={style.profileSubTitle}>100</p>
          </div>
          <div className={style.Following}>
            <p className={style.profileTitle}> Following</p>
            <p className={style.profileSubTitle}>80</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default profilePage;
