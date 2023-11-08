import React from "react";
import style from "./Style.module.css";
// import videoImage1 from "./../../Assets/Profile/Video1.png";
// import videoImage2 from "./../../Assets/Profile/Video2.png";
// import videoImage3 from "./../../Assets/Profile/Video3.png";
import ProfilePage from "./profilePage";

const profileIndex = () => {
  return (
    <>
      <ProfilePage />
      <div className={style.Section}>
        <div className={style.profileButtons}>
          <div className={style.followButton}>
            <button className={style.Follow}>Follow</button>
          </div>
          <div className={style.followButton}>
            <button className={style.Follow}>Edit Profile</button>
          </div>
        </div>
        <div className={style.profileMedia}>
          <div className={style.mediaSection}>
            <p className={style.Videos}> Videos</p>
            <p className={style.Events}> Events</p>
          </div>
          <div className={style.horizontalLine}></div>
          <div className={style.videoSection}>
            <div className={style.postVideo}>
            <div className={style.backgroundvideo}>
              <span className={style.backgroundvideoSpan}>1:20:42</span>
            </div>
              <div className={style.videoContext}>
                <p className={style.videoTitle}>
                  Nurturing Nature - A Growing Plants Event
                </p>
                <p className={style.videoTime}>1 hr ago</p>
              </div>
            </div>
            <div className={style.postVideo}>
            <div className={style.backgroundvideo}>
            <span className={style.backgroundvideoSpan}>1:20:42</span>
            </div>
              <div className={style.videoContext}>
                <p className={style.videoTitle}>
                  Nurturing Nature - A Growing Plants Event
                </p>
                <p className={style.videoTime}>1 hr ago</p>
              </div>
            </div>
            <div className={style.postVideo}>
              <div className={style.backgroundvideo}>
              <span className={style.backgroundvideoSpan}>1:20:42</span>
              </div>
              <div className={style.videoContext}>
                <p className={style.videoTitle}>
                  Nurturing Nature - A Growing Plants Event
                </p>
                <p className={style.videoTime}>1 hr ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default profileIndex;
