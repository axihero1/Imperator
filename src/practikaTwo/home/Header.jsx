import React from "react";
import Download from "./Download";
import Footer from "./Footer";
import "./home.css";
import MiniKatigoriya from "./MiniKatigoriya";
import Service from "./Service";
import Skidka from "./Skidka";
import Tavar from "./tavar/Tavar";

function Header() {
  return (
    <div className="parentHead">
      <div className="homeContainer">
        <div className="home">
          <div className="yellow"></div>
          <div className="black black1">
            <div className="right">
              <h1>
                Быстрый и удобный шоппинг,{" "}
                <h1 className="h1None">не выходя из дома.</h1>
              </h1><br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Convallis lectus odio vitae, duis nec ut velit, fermentum.{" "}
                <p className="pNone">
                  Diam sollicitudin arcu euismod morbi. Adipiscing bibendum
                  elementum, fermentum amet quis erat.
                </p>
              </p><br />
              <i>Все товары</i>
            </div>
            <img src="./imgAll/header.png" alt="" />
          </div>
          <div className="yellow yellow1"></div>
        </div>
      </div>
      <div className="companenta">
        <Service />
        <Tavar />
        <MiniKatigoriya/>
        <Download/>
        <Tavar/>
        <Skidka/>
        <Footer/>
      </div>
    </div>
  );
}

export default Header;
