import React from 'react';
import SideBar from '../customComponents/SideBar/SideBar';
import NavbarPage from '../NavbarPage/NavbarPage';
import Style from './Home.module.css';
import img1 from './../../Assets/homeAssets/one.png';
import img2 from './../../Assets/homeAssets/two.png';
import img3 from './../../Assets/homeAssets/Three.png';
import user1 from './../../Assets/homeAssets/white.png';
import user2 from './../../Assets/homeAssets/white1.png';
import user3 from './../../Assets/homeAssets/white2.png';

const Home = () => {
  const cardData = [
    {
      id: 1,
      mainImage: img1,
      userImage: user1,
      title: "Nurturing Nature - A Growing Plants Event",
      name: "Emily",
    },
    {
      id: 2,
      mainImage: img2,
      userImage: user2,
      title: "Nurturing Nature - A Growing Plants Event",
      name: "Lucas",
    },
    {
      id: 3,
      mainImage: img3,
      userImage: user3,
      title: "Nurturing Nature - A Growing Plants Event",
      name: "Olivia",
    },
  ];

  return (
    <div>
      <NavbarPage />
      <SideBar />
      <div className={Style.Section}>
        <div className={Style.UpperCards}>
          {cardData.map((card) => (
            <div key={card.id} className={Style.Card}>
              <img src={card.mainImage} alt={`Card ${card.id}`} />
              <div className={Style.UserInfo}>
                <img src={card.userImage} alt={`User ${card.id}`} className={Style.USERImage} />
                <div className={Style.INFO}>
                  <h3>{card.title}</h3>
                  <p>
                    {card.name} <span>2 days ago</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={Style.UpperCards}>
          {cardData.map((card) => (
            <div key={card.id} className={Style.Card}>
              <img src={card.mainImage} alt={`Card ${card.id}`} />
              <div className={Style.UserInfo}>
                <img src={card.userImage} alt={`User ${card.id}`} className={Style.USERImage} />
                <div className={Style.INFO}>
                  <h3>{card.title}</h3>
                  <p>
                    {card.name} <span>2 days ago</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
