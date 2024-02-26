import React from "react";
import "./Hero.css";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="hero_left">
          <img src={img1} alt="" />
        </div>
        <div className="hero_right">
          <div className="hero_right-text1">
            <h3>
              C.R.I WINS PUMPS NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
            </h3>
            <ul>
              <li>
                C.R.I's energy efficient products are well recognized by various
                Government Institutions as trustworthy products for various
                projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IOT enabled control panel.
              </li>
            </ul>
          </div>
          <img src={img2} alt="" />
          <div className="hero_right-text2">
            <p>
              Government of India has awarded the <span> "National Energy Conservation
              Award 2018"</span>. Mr. G. Selvaraj. Joint Managing Director of C.R.I.
              Group received the award from Smt. Sumitra Mahajan. Speaker of Lok
              Sabha & Shri. Raj Kumar Singh. Honorable Minister Of State.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
