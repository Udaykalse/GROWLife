import React from "react";
import style from "./join.module.css"; // Import your CSS file for styling

const Joinus = () => {
  return (
    <div className={style.container}>
      <h1 className={style.mainheading}>How We Make a Difference</h1>
      <div className={style.cardcontainer}>
        <div className={style.cardone}>
          <span> Plantation Initiatives: </span>We organize and participate in tree plantation
          drives and urban gardening projects, contributing to the revival of
          green spaces in our communities.
        </div>
        <div className={style.cardtwo}>
          <span>Educational Outreach:</span> Our team of dedicated experts conducts
          workshops, webinars, and educational programs to spread awareness
          about sustainable living, environmental conservation.
        </div>
        <div className={style.cardtwo}>
        <span>Community Engagement:</span> We actively involve local communities, schools,
          and volunteers in our initiatives, fostering a sense of responsibility
          and ownership for our environment.
        </div>
        <div className={style.cardone}>
        <span>Eco-Friendly Products:</span> Through our ecofriendly shop, we offer a
          curated selection of plants, gardening tools, and sustainable products
          that promote green living.
        </div>
      </div>
      <h2 className={style.subheading}>Join Us in This Green Journey</h2>
      <p className={style.Joinparagraph}>
        <span  className={style.spantwo}>  GROWLIFE </span> is more than just an NGO; it is a movement fueled by the
        passion and commitment of individuals like you. Whether you are a
        seasoned gardener or a budding enthusiast, there's a place for you in
        our community. Together, let's plant the seeds of change, nurture
        nature, and grow a brighter, greener world for generations to come. Join
        us in our mission and be a part of the transformative power of
        nature.Are you ready to make a positive impact? Come, be a part of
        <span className={style.spantwo}>  GROWLIFE </span> today!
      </p>
    </div>
  );
};

export default Joinus;
