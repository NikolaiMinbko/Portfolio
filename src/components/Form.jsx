import React from "react";
import Footer from "./Footer";

const Form = () => (
  <section className="form">
    <div className="form__inner">
      <div className="form__inner-wrap">
        <div className="form__info">
          <h2 className="form__title">Write to us</h2>
          <p className="form__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="form__contacts-wrap">
            <a className="form__tel" href="tel:+71112223344 ">
              +7 (111) 222-33-44
            </a>
            <a className="form__email" href="mailto:order@bu-one.ru">
              order@bu-one.ru
            </a>
          </div>
        </div>
        <form className="form__wrapper">
          <div className="form__items">
            <div className="form__item">
              <p className="form__item-title">Name</p>
              <input
                className="form__item-input"
                type="text"
                placeholder="your name"
                required
              />
            </div>
            <div className="form__item">
              <p className="form__item-title">Email</p>
              <input
                className="form__item-input"
                type="email"
                placeholder="Example@gmai.com"
                required
              />
            </div>
          </div>
          <div className="form__item">
            <p className="form__item-title">Message</p>
            <textarea
              className="form__item-textarea"
              placeholder="your message"
            ></textarea>
          </div>
          <button className="form__btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
    <>
      <Footer />
    </>
  </section>
);

export default Form;
