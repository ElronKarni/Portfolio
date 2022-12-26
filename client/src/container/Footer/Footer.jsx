import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vwtgu9u",
        "template_eoa5epu",
        form.current,
        "I6vkBubPrYniqUyhV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setLoading(true);

    const contact = {
      _type: "contact",
      name: username,
      email: email,
      message: message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div
          onClick={() => window.open("mailto:elronkarni123@gmail.com")}
          className="app__footer-card "
        >
          <img src={images.email} alt="email" />
          <a href="mailto:elronkarni123@gmail.com" className="p-text">
            elronkarni123@gmail.com
          </a>
        </div>
        <div
          onClick={() => window.open("tel:+972 (052) 622-9015")}
          className="app__footer-card"
        >
          <img src={images.mobile} alt="phone" />
          <a href="tel:+972 (052) 622-9015" className="p-text">
            +972 (052) 622-9015
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="app__footer-form app__flex"
        >
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
      <div className="copyright">
        <p className="p-text">@2022 ELRON KARNI</p>
        <p className="p-text">All rights reserved</p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
