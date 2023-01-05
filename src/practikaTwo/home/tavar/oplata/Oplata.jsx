import React, { useState } from "react";
import Footer from "../../Footer";
import "../tavar.css";
import { useNavigate } from "react-router-dom";
import MasketInput from "react-text-mask"

function Oplata() {
  const [nameCarta, setNameCart] = useState();


  const NameCartTest = new RegExp("^[a-zA-Z]{1,}$");



  const NameCart = (e) => {
    if (NameCartTest.test(e.target.value)) {
      setNameCart("2px solid green");
    } else {
      setNameCart("2px solid red");
    }
  };


  let navigate = useNavigate();
  function handleClick() {
    navigate("/ofarmitzakaz");
  }
  return (
    <>
      <div className="oplata-container">
        <h1 className="oplatah1">Оплата</h1>
        <div className="oplata-head">
          <img src="../imgAll/karta01.png" alt="" />
          <div className="oplata-form">
            <input
              onChange={(e) => NameCart(e)}
              type="text"
              placeholder="Имя на карте"
              style={{ border: nameCarta }}
            />
            <MasketInput mask={[ /[1-9]/, /\d/,  /\d/, /\d/, ' ', /\d/, /\d/, /\d/,  /\d/, ' ', /\d/, /\d/,  /\d/, /\d/,' ' ,/\d/, /\d/, /\d/,  /\d/]} guide={true} placeholder="Номер карты"></MasketInput>

            <label htmlFor="MFY">Cрок хранения</label>
            <MasketInput mask={[ /[1-9]/, /\d/, '/', /\d/, /\d/]} guide={true} placeholder="MM/YY" ></MasketInput>
            <button onClick={handleClick}>Оплатить</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Oplata;
