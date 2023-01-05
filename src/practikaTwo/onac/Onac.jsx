import React from "react";
import "./onac.css"
import Service from "../home/Service";
import Download from "../home/Download";
import Footer from "../home/Footer";
import Maps from "./Maps";

function Onac() {
  return (
    <div className="onacContainer">
      <div className="onacHead">
        <h1>О нас</h1>
        <div className="onacBody">
          <div className="left">
            <h2>«Потрясающий опыт, мне это нравится много. Спасибо команде.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
              leo, in sit tellus fermentum donec quisque diam molestie. Enim
              purus ullamcorper ultricies nisi. Eu sit laoreet egestas nascetur
              lacinia donec nunc viverra. Eu nullam cras eget egestas dui id
              platea magna. Massa lorem ultrices mauris tellus, mattis eu leo
              bibendum lobortis.{" "}
            </p>
          </div>
          <div className="right">
            <img src="./imgAll/onac.png" alt="" />
          </div>
        </div>
      </div>
      <Service/>
      <Download/>
      <div className="onacSpant"></div>
      <Maps/>
      <Footer/>
    </div>
  );
}

export default Onac;
