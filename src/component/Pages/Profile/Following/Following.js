import React from "react";
import Profile from "./../profilePage";
import Style from "./Following.module.css";
import roy1 from "./../../../Assets/Profile/FOLLOWERS/white1.png";
import roy2 from "./../../../Assets/Profile/FOLLOWERS/white2.png";
import roy3 from "./../../../Assets/Profile/FOLLOWERS/white3.png";
import roy4 from "./../../../Assets/Profile/FOLLOWERS/white4.png";
import roy5 from "./../../../Assets/Profile/FOLLOWERS/white5.png";
import roy6 from "./../../../Assets/Profile/FOLLOWERS/white6.png";



const Following = () => {
  const data = [
    {
      id: 1,
      image: roy1,
      name: "Roy",
      number: "+919645348799",
      button: "Remove",
    },
    {
      id: 2,
      image: roy2,
      name: "Ethan",
      number: "+919645348799",
      button: "Remove",
    },
    {
      id: 3,
      image: roy3,
      name: "Eva",
      number: "+919645348799",
      button: "Remove",
    },
    {
        id: 4,
        image: roy4,
        name: "Lima",
        number: "+919645348799",
        button: "Remove",
      },
      {
        id: 5,
        image: roy5,
        name: "Sophia",
        number: "+919645348799",
        button: "Remove",
      },
      {
        id: 6,
        image: roy6,
        name: "Mia",
        number: "+919645348799",
        button: "Remove",
      },
  ];

  return (
    <>
      <Profile />
      <div className={Style.Section}>
        <div className={Style.HorizontalLine}></div>
        <div className={Style.Cards}>
          {data.map((follower) => (
            <div key={follower.id} className={Style.FollowerCard}>
              <img src={follower.image} alt={follower.name} />
              <div className={Style.FollowerInfo}>
                <h3 className={Style.UserName}>{follower.name}</h3>
                <p className={Style.UserNumber}>{follower.number}</p>
              </div>
              <div className={Style.buttonDiv}>
                <button className={Style.FollowButton}>
                  {follower.button}
                </button>
              </div> 
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Following;
