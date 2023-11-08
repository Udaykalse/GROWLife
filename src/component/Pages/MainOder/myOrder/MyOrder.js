import React from 'react';
import CustomNavbar from './../../customComponents/CustomNavbar/Navbar';
import Style from './MyOrder.module.css'
import Order1 from './../../../Assets/MyOder/MyOder1.png'
import Order2 from './../../../Assets/MyOder/MyOrder2.png'
import Order3 from './../../../Assets/MyOder/MyOrder3.png'
const MyOrder = () => {
  return (
    <div>
      <CustomNavbar title={"MyOrder"} />
      <div className={Style.OrderConatiner}>
        <div className={Style.OrderCard}>
          <div className={Style.OrderImage}>
            <img src={Order1} alt='error'/>
          </div>
          <div className={Style.Paragraph}> 
          <p className={Style.MyOrderParagraph}><span className={Style.GreenSpan}>Delivered</span> on Jun 29 , 2023</p>
          <p className={Style.SecondParagraph}>Fiddle leaf fig<sapn className={Style.Secondspan}>₹120</sapn></p>
          <p className={Style.OrderNumber}>Order No. 20060230</p>
          </div>
          <div className={Style.FeedbackDiv}>
          <p className={Style.OrderFeedback}><button>FEEDBACK</button></p>
          </div>
        </div>
         <div className={Style.OrderCard}>
        <div className={Style.OrderImage}>
            <img src={Order2} alt='error'/>
          </div>
          <div className={Style.Paragraph}> 
          <p className={Style.MyOrderParagraph}><span className={Style.RedSpan}>Delivered</span> on Jun 29 , 2023</p>
          <p className={Style.SecondParagraph}>Fiddle leaf fig<sapn className={Style.Secondspan}>₹120</sapn></p>
          <p className={Style.OrderNumber}>Order No. 20060230</p>
          </div>
          <div className={Style.FeedbackDiv}>
          <p className={Style.OrderFeedback}><button>FEEDBACK</button></p>
          </div>
        </div>
        <div className={Style.OrderCard}>
        <div className={Style.OrderImage}>
            <img src={Order3} alt='error'/>
          </div>
          <div className={Style.Paragraph}> 
          <p className={Style.MyOrderParagraph}><span className={Style.GreenSpan}>Delivered</span> on Jun 29 , 2023</p>
          <p className={Style.SecondParagraph}>Fiddle leaf fig<sapn className={Style.Secondspan}>₹120</sapn></p>
          <p className={Style.OrderNumber}>Order No. 20060230</p>
          </div>
          <div className={Style.FeedbackDiv}>
          <p className={Style.OrderFeedback}><button>FEEDBACK</button></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrder;
