import React from "react";
import NavbarPage from "../../NavbarPage/NavbarPage";
import Style from './EventIndex.module.css'

const EventIndex = () => {
  return (
    <div>
      <NavbarPage title={"Events"} />
      <div className={Style.HeadSection}>
      <div className={Style.MainSection}>
        <p className={Style.ParagraphTitle}>Harmony in Green</p>
        <p className={Style.ParagraphHeading}>
          Green Fest: Planting the Seeds of Change
        </p>
        <p className={Style.Paragraph}>
          Embrace Nature's Rhythm at GrowLife EcoFest! Join us on October 15,
          2023, for a day of tree planting, eco-workshops, live music, and
          delicious eco-bites. Experience the joy of green living and be part of
          a greener, sustainable future. Let's harmonize with nature!
        </p>
      </div>
      <div className={Style.Section}>
        <p className={Style.EventTitle}>
          Green Fest: Planting the Seeds of Change
        </p>
        <p className={Style.EventHeading}>Event by GrowLife</p>
        <p className={Style.EventTime}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.6667 21.6668H21.6667C20.75 21.6668 20 22.4168 20 23.3335V28.3335C20 29.2502 20.75 30.0002 21.6667 30.0002H26.6667C27.5833 30.0002 28.3333 29.2502 28.3333 28.3335V23.3335C28.3333 22.4168 27.5833 21.6668 26.6667 21.6668ZM26.6667 5.00016V6.66683H13.3333V5.00016C13.3333 4.0835 12.5833 3.3335 11.6667 3.3335C10.75 3.3335 10 4.0835 10 5.00016V6.66683H8.33333C6.48333 6.66683 5.01667 8.16683 5.01667 10.0002L5 33.3335C5 34.2176 5.35119 35.0654 5.97631 35.6905C6.60143 36.3156 7.44928 36.6668 8.33333 36.6668H31.6667C33.5 36.6668 35 35.1668 35 33.3335V10.0002C35 8.16683 33.5 6.66683 31.6667 6.66683H30V5.00016C30 4.0835 29.25 3.3335 28.3333 3.3335C27.4167 3.3335 26.6667 4.0835 26.6667 5.00016ZM30 33.3335H10C9.08333 33.3335 8.33333 32.5835 8.33333 31.6668V15.0002H31.6667V31.6668C31.6667 32.5835 30.9167 33.3335 30 33.3335Z"
              fill="#8C8B8B"
            />
          </svg>
          Saturday, Jul 22 - Jul 30 , 10:00 AM IST
        </p>
      </div>
      </div>
    </div>
  );
};

export default EventIndex;
