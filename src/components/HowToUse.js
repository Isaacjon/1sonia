import React from "react";
import "../assets/styles/layout/howToUse.scss";
import phone1 from "../assets/images/howToUse/phone1.svg";
import phone2 from "../assets/images/howToUse/phone2.svg";
import phone3 from "../assets/images/howToUse/phone3.svg";
import dotRectangle from "../assets/images/howToUse/dots-rectangle.svg";
import cheronSmall from "../assets/images/howToUse/cheronSmall.svg";
import googlePlay from "../assets/images/introSection/googlePlay.svg";
import appleStore from "../assets/images/introSection/appleStore.svg";
import pathLine from "../assets/images/howToUse/pathLine.svg";
import cheron from "../assets/images/howToUse/cheron.svg";

import sixtangle from "../assets/images/howToUse/6tangle.svg";
import sixtangleSm from "../assets/images/howToUse/6tangleSmall.svg";

const HowToUse = () => {
  return (
    <div className="howToUse">
      <img src={sixtangle} alt="sixtangle" />
      <img src={sixtangleSm} alt="sixtangleSm" />
      <img src={sixtangle} alt="sixtangle" />
      <img src={sixtangleSm} alt="sixtangleSm" />
      <img src={sixtangle} alt="sixtangle" />
      <img src={sixtangleSm} alt="sixtangleSm" />

      <div className="container">
        <div className="helperDiv">
          <img src={cheron} alt="aweq" className="cheron" />

          <h3 className="howToUse-title">
            Dasturdan foydalanish uchun nima qilish <span>kerak?</span>
          </h3>
          <div className="wrapper">
            <div className="item">
              <div className="img-block">
                <img src={phone1} alt="enter-number" />
                <img src={pathLine} alt="enter-number" />
              </div>
              <div className="texts">
                <div className="card-num">
                  <div>
                    <span>1</span>
                  </div>
                </div>
                <h4 className="card-title">Raqamingizni kiriting</h4>
                <p className="card-subtitle">
                  Shaxsiy telefon raqamingizni kiriting hamda dastur
                  imkoniyatlaridan foydalanish huquqini to'laqonli qo'lga
                  kiriting.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="img-block">
                <img src={phone2} alt="enter-number" />
              </div>
              <div className="texts">
                <div className="card-num">
                  <div>
                    <span>2</span>
                  </div>
                </div>
                <h4 className="card-title">Kerakli kategoriyani tanlang</h4>
                <p className="card-subtitle">
                  Shaxsiy telefon raqamingizni kiriting hamda dastur
                  imkoniyatlaridan foydalanish huquqini to'laqonli qo'lga
                  kiriting.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <img src={phone3} alt="phone3" />
          <img src={dotRectangle} alt="dotRectangle" />
          <div className="texts">
            <div className="card-num">
              <div>
                <span>3</span>
              </div>
            </div>
            <h4 className="card-title">Qani ketdik! Hoziroq yuklab oling!</h4>
            <p className="card-subtitle">
              <span>1 SONIA </span> dasturi sizni shaxsiy karyerangiz tomon
              maksimal o’sish maydoniga uloqtiradi!
            </p>
            <div className="download">
              <img src={googlePlay} alt="googlePlay" />
              <img src={appleStore} alt="appleStore" />
            </div>
          </div>
          <img src={cheronSmall} alt="cheronSmall" />
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
