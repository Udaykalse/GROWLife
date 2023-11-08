import React from "react";
import style from './OrderDetails.module.css'
import Logo from './../../Assets/GrowLife.png'
import OrderImage from './../../Assets/OrderDetails/OrderDetailsImage.png'


function OrderDetails() {
  return (
    <>
    <nav className={style.OrderNamvbar}>
        <div className={style.Logo}>
            <img src={Logo} alt="error"/>
        </div>
        <div className={style.OrderTitle}>
        <h1>Order Summary</h1>
        </div>
    </nav>

    <div className={style.OrderConatiner}>
        <div  className={style.OrderStepd}>
            <p>Shipping Address:</p>
        </div>
        <div className={style.orderBox}>
            <div className={style.Orderdetails}>
                <div className={style.orderAddress}>
                    <div className={style.AddressDetails}>
                    <p className={style.TitalParagraph}>Deliver to :<span className={style.deatailSpan}>Tara Choudhary</span></p>
                    <p className={style.Addressparagraph}>456, Shanti Nagar, Pune, Maharashtra 
                        411028, India</p>
                        <p className={style.Addressparagraph}>+91 9667839945</p>
                    </div>
                    <div className={style.buttonChange}>
                    <button className={style.Change}>Change</button>
                    </div>
                </div>
                <div className={style.orderInfo}>
                    <div className={style.OrderImage}>
                    <img src={OrderImage} alt="error"/>
                    <button className={style.OrderRemove}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6.96912 6.96936C7.03879 6.89952 7.12155 6.8441 7.21267 6.80629C7.30379 6.76849 7.40147 6.74902 7.50012 6.74902C7.59877 6.74902 7.69645 6.76849 7.78757 6.80629C7.87869 6.8441 7.96145 6.89952 8.03112 6.96936L12.0001 10.9399L15.9691 6.96936C16.0388 6.89963 16.1216 6.84432 16.2127 6.80658C16.3039 6.76884 16.4015 6.74942 16.5001 6.74942C16.5987 6.74942 16.6964 6.76884 16.7875 6.80658C16.8786 6.84432 16.9614 6.89963 17.0311 6.96936C17.1009 7.0391 17.1562 7.12188 17.1939 7.21299C17.2316 7.3041 17.2511 7.40175 17.2511 7.50036C17.2511 7.59898 17.2316 7.69663 17.1939 7.78774C17.1562 7.87885 17.1009 7.96163 17.0311 8.03136L13.0606 12.0004L17.0311 15.9694C17.1009 16.0391 17.1562 16.1219 17.1939 16.213C17.2316 16.3041 17.2511 16.4017 17.2511 16.5004C17.2511 16.599 17.2316 16.6966 17.1939 16.7877C17.1562 16.8788 17.1009 16.9616 17.0311 17.0314C16.9614 17.1011 16.8786 17.1564 16.7875 17.1941C16.6964 17.2319 16.5987 17.2513 16.5001 17.2513C16.4015 17.2513 16.3039 17.2319 16.2127 17.1941C16.1216 17.1564 16.0388 17.1011 15.9691 17.0314L12.0001 13.0609L8.03112 17.0314C7.96139 17.1011 7.8786 17.1564 7.7875 17.1941C7.69639 17.2319 7.59874 17.2513 7.50012 17.2513C7.4015 17.2513 7.30385 17.2319 7.21274 17.1941C7.12164 17.1564 7.03885 17.1011 6.96912 17.0314C6.89939 16.9616 6.84407 16.8788 6.80633 16.7877C6.7686 16.6966 6.74917 16.599 6.74917 16.5004C6.74917 16.4017 6.7686 16.3041 6.80633 16.213C6.84407 16.1219 6.89939 16.0391 6.96912 15.9694L10.9396 12.0004L6.96912 8.03136C6.89927 7.9617 6.84386 7.87893 6.80605 7.78781C6.76824 7.6967 6.74878 7.59901 6.74878 7.50036C6.74878 7.40171 6.76824 7.30403 6.80605 7.21291C6.84386 7.1218 6.89927 7.03903 6.96912 6.96936Z" fill="#515050"/>
                    </svg>Remove
                    </button>
                    </div>
                    <div className={style.orderDetail}>
                    <p>Watering Can</p>
                    <p className={style.Orderparagraph}>Qty : 1</p>
                    <button className={style.infoButton}>3.8 
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M7.5 12.0553L12.135 15L10.905 9.45L15 5.71579L9.6075 5.22632L7.5 0L5.3925 5.22632L0 5.71579L4.0875 9.45L2.865 15L7.5 12.0553Z" fill="white"/>
                        </svg>
                    </button>
                    <p className={style.Orderparagraph}>₹120</p>
                    </div>
                    <div className={style.OrderTime}>
                    <p className={style.TimeParagph}>Delivery by Fir Jul 21| <span className={style.spanGreen}> Free Delivery</span> </p>
                    </div>
                    
                </div>
                <button className={style.Continue}>Continue</button>
            </div>
            <div className={style.Orderbill}>
                <div className={style.Donation}>
                    <div className={style.DonationTitle}>
                        <p  className={style.DonationHeading}>Donate to GrowLife Foundation</p>
                        <p className={style.Donationparagraph}>Support transformation social work in India</p>
                    </div>
                    <hr/>
                    <div className={style.DonationButtons}>
                        <button className={style.donateNow}>₹10</button>
                        <button className={style.donateNow}>₹20</button>
                        <button className={style.donateNow}>₹50</button>
                        <button className={style.donateNow}>₹100</button>
                    </div>
                    <hr className={style.DonationNoteHr}/>
                    <div className={style.DonationNote}>
                        <p className={style.Donationparagraph}>Note :- GST & No Cost EMI will not be applicable</p>
                    </div>
                </div>
                <div className={style.OrderPrice}>
                    <div className={style.ordercount}>
                        <p className={style.Orderparagraph}>Price Details (1 Items)</p>
                    </div>
                    <div className={style.orderbillCount}>
                        <div className={style.OrderlastPrice}>
                            <p className={style.Priceparagraph}>Total Product Price<span className={style.spanbillPrice} >₹120</span></p>
                        </div>
                        <div className={style.delivery}>
                            <p className={style.Priceparagraph}>Delivery Charges<span className={style.spanfree}>FREE</span></p>
                        </div>
                    </div>
                    <div className={style.orderTotal}>
                    <p className={style.Totalparagraph}>Total Amount<span className={style.TotalSpan}>₹120</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={style.OrderFooter}>
        <p className={style.FooterParagraph} >Privacy | Terms and Condition | About Us | Contact Us</p>
    </div>
    
    </>
  );
}

export default OrderDetails;
