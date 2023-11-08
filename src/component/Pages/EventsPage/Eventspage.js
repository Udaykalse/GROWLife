import React from "react";
import Logo from "../../Assets/GrowLife.png";
import SearchIcon from "../../Assets/PageIconsearch.png";
import NotificationLogo from "../../Assets/PagesIconnotification.png";
import SignupLogo from "../../Assets/PagesIconSignup.png";
import Style from './Eventspage.module.css';
import img1 from "./../../Assets/Events/One.png";
import img2 from './../../Assets/Events/Two.png';
import img3 from './../../Assets/Events/Three.png';
import img4 from './../../Assets/Events/Four.png';
import img5 from './../../Assets/Events/Five.png';
import img6 from './../../Assets/Events/Six.png';
import NavbarPage from "../NavbarPage/NavbarPage";

const Eventspage = () => {
  const upcomingEvents = [
    {
      id: 1,
      image: img1,
      subTitle: "Saturday, Jul 22 , 10:00 AM , PUNE",
      title: 'Green Fest: Planting the Seeds of Change',
      button: 'Know More'
    },
    {
      id: 2,
      image: img2,
      subTitle: "Saturday, Jul 22 , 10:00 AM , Delhi",
      title: 'Roots & Shoots: Tree-Planting Workshop',
      button: 'Know More'
    },
    {
      id: 3,
      image: img3,
      subTitle: "Saturday, Jul 22 , 10:00 AM , Mumbai",
      title: 'Eco Awareness Seminar',
      button: 'Know More'
    },
  ];
  const OngoingEvents = [
    {
      id: 4,
      image: img4,
      subTitle: "Saturday, Jul 22 , 10:00 AM , PUNE",
      title: 'Green Fest: Planting the Seeds of Change',
      button: 'Know More'
    },
    {
      id: 5,
      image: img5,
      subTitle: "Saturday, Jul 22 , 10:00 AM , Delhi",
      title: 'Roots & Shoots: Tree-Planting Workshop',
      button: 'Know More'
    },
    {
      id: 6,
      image: img6,
      subTitle: "Saturday, Jul 22 , 10:00 AM , Mumbai",
      title: 'Eco Awareness Seminar',
      button: 'Know More'
    },
  ];

  return (
    <div className={Style.eventspage}>
      <NavbarPage title="Events"/>

      <div className={Style.Section}>
        <div className={Style.SectionContainer}>
          <p className={Style.SectionContainerParagraph}>Your events</p>
          <a href="#" className={Style.SectionAnchor}>Show all</a>
        </div>
        <div className={Style.CardsSections}>
          <div className={Style.eventsContainer}>
            <div className={Style.upcomingEventsContainer}>
            <div className={Style.EventSchudule}>
              <a href="#" className={Style.EventLinks}>UpcomingEvents</a>
              <a href="#" className={Style.FatureEvents}>Show All</a>
              </div>
              {upcomingEvents.map(event => (
                <div key={event.id} className={Style.EventCard}>
                  <img src={event.image} alt={event.title} className={Style.EventsImage} />
                  <p className={Style.EventssubTitle}>{event.subTitle}</p>
                  <h3 className={Style.EventsTitle}>{event.title}</h3>
                  <button className={Style.EventsButton}>{event.button}</button>
                </div>
              ))}
            </div>
            <div className={Style.ongoingEventsContainer}>
              <div className={Style.EventSchudule}>
              <a href="#" className={Style.EventLinks}>OngoingEvents</a>
              <a href="#" className={Style.FatureEvents}>Show All</a>
              </div>
              {OngoingEvents.map(event => (
                <div key={event.id} className={Style.EventCard}>
                  <img src={event.image} alt={event.title} className={Style.EventsImage} />
                  <p className={Style.EventssubTitle}>{event.subTitle}</p>
                  <h3 className={Style.EventsTitle}>{event.title}</h3>
                  <button className={Style.EventsButton}>{event.button}</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventspage;
