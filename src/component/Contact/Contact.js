import React, { useState } from "react";
import sendIcon from "./../Assets/sendIcon.png";
import Style from "./Contact.module.css";
import Contactimage from "./../Assets/contact.png";
import phonepng from "./../Assets/contactone.png";
import emailpng from "./../Assets/contacttwo.png";
import locationpng from "./../Assets/contactthree.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here, e.g., send data to a server
    console.log("Form data submitted:", formData);
  };

  return (
    <div className={Style.contactcontainer}>
      <div className={Style.mainAbout}>
        <div className={Style.rightline}></div>
        <h1 className={Style.mainHeading}>Contact Us</h1>
        <div className={Style.leftline}></div>
      </div>
      <div>
        <img src={Contactimage} alt="error" />
      </div>
      <div className={Style.contactparagraph}>
        <p className={Style.contactParagraph}>
          If you have any questions, feedback, or need assistance, we'd love to
          hear from you! Our dedicated support team is here to help.
        </p>
      </div>
      <div className={Style.contactInfo}>
        <div className={Style.socialmedia}>
          <div className={Style.phone}>
            <img src={phonepng} alt="Phone" />
            <p>+91 8765409862</p>
          </div>
          <div className={Style.email}>
            <img src={emailpng} alt="Email" />
            <p>xyzlife@gmail.com</p>
          </div>
          <div className={Style.location}>
            <img src={locationpng} alt="Location" />
            <p>Delhi, India</p>
          </div>
        </div>
        <div className={Style.form}>
          <form onSubmit={handleSubmit}>
            <div className={Style.formgroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={Style.formgroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={Style.formgroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className={Style.formgroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button className={Style.ContactButton} type="submit">
              <img className={Style.SendIcon} src={sendIcon} alt="Send Message" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
