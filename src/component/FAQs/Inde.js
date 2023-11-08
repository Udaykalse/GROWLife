import React from "react";
import style from "./Index.module.css";
import Iconpng from "./../Assets/LogoONe.png"

const FAQs = () => {
  const faqData = [
    {
      id: 1,
      question: "What is GrowLife NGO's mission?",
      answer: "GrowLife's mission is to raise awareness about tree plantation, promote environmental conservation, and foster a love for nature among communities.",
    },
    {
      id: 2,
      question: "How can I get involved with GrowLife's initiatives?",
      answer: "",
    },
    {
      id: 3,
      question: "Does GrowLife offer any educational resources on sustainability?",
      answer: "",
    },
    {
      id: 4,
      question: "Can I donate to GrowLife's cause?",
      answer: "",
    },
    {
      id: 5,
      question: "Are the products in GrowLife's shop eco-friendly?",
      answer: "",
    },
    {
      id: 6,
      question: "How does GrowLife ensure the success of its tree-planting events?",
      answer: "",
    },
  ];

  return (
    <div className={style.faqContainer}>
      <div className={style.mainAbout}>
        <div className={style.rightline}></div>
        <h1 className={style.mainHeading}>FAQs</h1>
        <div className={style.leftline}></div>
      </div>
      {faqData.map((faq) => (
        <div key={faq.id} className={style.faqCard}>
          <div className={style.faqIcon}>
            <img src={Iconpng} alt="Plus Icon" />
          </div>
          <div className={style.faqContent}>
            <div className={style.faqQuestion}>{faq.question}</div>
            <div className={style.faqAnswer}>{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
