import React from "react";
import "./hero.css";
import { CiLocationOn } from "react-icons/ci";
import CountUp from "react-countup";

const hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="padding innerwidth flexCenter hero-container">
        <div className=" flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover
              <br />
              Most suitable <br />
              Property
            </h1>
          </div>

          <div className=" flexColStart hero-des ">
            <span>Find a Variety of Properties that suit you very easily</span>
            <span>Forgot all difficulties in finding a residence for you </span>
          </div>
          <div className=" flexCenter search-bar">
            <CiLocationOn color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <span>
                <CountUp start={1999} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span>Premium Products</span>
            </div>

            <div className="flexColStart stat">
              <span>
                <CountUp start={1000} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span> Happy Customers</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp  end={28}  />
                <span>+</span>
              </span>
              <span>Premium Products</span>
            </div>
          </div>
        </div>

        {/*right side*/}
        <div className=" flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
