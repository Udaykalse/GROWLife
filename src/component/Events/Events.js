// Events.js
import React from "react";
import style from "./Events.module.css";
import eventone from "./../Assets/Eventsone.png";
import eventtwo from "./../Assets/Eventstwo.png";
import eventfour from "./../Assets/Eventthree.png";
import eventfive from "./../Assets/Eventsthree.png";

const Events = () => {
  // Sample event data
  const events = [
    {
      id: 1,
      title: "GreenLife EcoFest",
      image: eventone,
      para:
        "Join us for a fun-filled day of planting trees, eco-workshops, and live music. GreenLife EcoFest celebrates the beauty of nature and the importance of preserving our environment.",
    },
    {
      id: 2,
      title: "GreenLife EcoFest",
      image: eventtwo,
      para:
        "Join us for a fun-filled day of planting trees, eco-workshops, and live music. GreenLife EcoFest celebrates the beauty of nature and the importance of preserving our environment.",
    },
    {
      id: 3,
      title: "GreenLife EcoFest",
      image: eventfour,
      para:
        "Join us for a fun-filled day of planting trees, eco-workshops, and live music. GreenLife EcoFest celebrates the beauty of nature and the importance of preserving our environment.",
    },
    {
      id: 4,
      title: "GreenLife EcoFest",
      image: eventfive,
      para:
        "Join us for a fun-filled day of planting trees, eco-workshops, and live music. GreenLife EcoFest celebrates the beauty of nature and the importance of preserving our environment.",
    },
  ];

  return (
    <div className={style.eventsContainer}>
      <div className={style.head}>
        <div className={style.mainAbout}>
          <div className={style.rightline}></div>
          <h1 className={style.mainHeading}>SHOP</h1>
          <div className={style.leftline}></div>
        </div>
        <div className={style.submain}>
          {events.map((event) => (
            <div className={style.eventCard} key={event.id}>
              <img
                src={event.image}
                alt={event.title}
                className={style.eventImage}
              />
              <h2 className={style.eventTitle}>{event.title}</h2>
              <p className={style.eventPara}>{event.para}</p>
              <div className={style.centerButton}>
                <button className={style.eventButton}>Know More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
