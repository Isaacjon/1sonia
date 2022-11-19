import React from "react";
import "../assets/styles/layout/introSection.scss";
import googlePlay from "../assets/images/introSection/googlePlay.svg";
import appleStore from "../assets/images/introSection/appleStore.svg";
// import final from "../assets/images/introSection/Group 640.svg";
import arrow from "../assets/images/introSection/arrowDown/arrow1.svg";
import final from '../assets/images/introSection/123.svg'

const introSection = () => {
  return (
    <div className="introSection">
      <div className="container">
        <div className="wrapper">
          <div className="text-content">
            <h1>
              Endi sizda <span>1SONIA </span> bor!
            </h1>
            <p>
              <span>1 SONIA</span> dasturi sizni shaxsiy karyerangiz tomon
              maksimal o’sish maydoniga uloqtiradi!
            </p>
            <div className="playButton">
              <button className="btn"></button>
              <span>
                Bilmaganlaringiz shu <br /> yerda
              </span>
            </div>
            <div className="download">
              <div className="googlePlay">
                <img src={googlePlay} alt="googlePlay" />
              </div>
              <div className="appleStore">
                <img src={appleStore} alt="appleStore" />
              </div>
            </div>
          </div>
          <div className="image-block">
            <img src={final} alt="try" />
          </div>
          <div className="arrowDown">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default introSection;
