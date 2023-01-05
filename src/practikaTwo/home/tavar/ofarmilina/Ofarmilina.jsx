import React, { useState } from "react";
import Footer from "../../Footer";
import AddCard from "../korzinka/AddCard";
import "../tavar.css";
import Magazine from "./Magazine";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import MasketInput from "react-text-mask"


function Ofarmilina() {
  // const [Adress, setAdress] = useState();
  // const [Name, setName] = useState();
  // const [Nomer, setNomer] = useState();

// const Obj = {
//   AdressBool: false,
//   NameBool: false,
//   NomerBool: false
// }

const basket = useSelector((state) => state.cart.basket);
console.log({ basket });

const basket1 = useSelector((state) => state.cart.basket)
let total = basket1.reduce((p, c) => (p + (c.counter || 1) * c.price), 0)

const [AdressBool, setAdressBool] = useState(false);
const [NameBool, setNameBool] = useState(false);




  const [CardAdress, setCardAdress] = useState();
  const AdressCArdValidation = new RegExp("^[a-zA-Z]{1,}$");
  const AdressValue = (n) => {
    if (AdressCArdValidation.test(n.target.value)) {
      setAdressBool(true);
      setCardAdress("2px solid green");
    } else {
      setAdressBool(false);
      setCardAdress("2px solid red");
    }
  };

  const [CardName, setCardName] = useState();
  const NameCArdValidation = new RegExp("^[a-zA-Z]{1,}$");
  const NameValue = (n) => {
    if (NameCArdValidation.test(n.target.value)) {
      setNameBool(true);
      setCardName("2px solid green");
    } else {
      setNameBool(false);
      setCardName("2px solid red");
    }
  };
  


  let navigate = useNavigate();
 function handleClick () {
  console.log(setAdressBool,setNameBool);
    if (
      AdressBool &&
      NameBool
    ) {
      navigate("/oplata");
    }
  };


  return (
    <div className="ofarmi">
      <div className="ofarmilina-container">
        <h1>Оформление заказа</h1>
        <div className="ofar-head">
          <div className="left">
            <div className="boxItem1">
              <span>
                <p>Товаров: ({basket.length})</p>
                <p>Сумма: $255 </p>
              </span>
              <span>
                <p>Общая сумма к оплате: </p>
                <p>Y.E {total} </p>
              </span>
            </div>
            <div className="boxItem2">
              <div className="box">
                <input type="radio" name="tanla" id="payme" />
                <label htmlFor="payme">
                  {" "}
                  <img src="./imgAll/payme.png" alt="" />{" "}
                </label>
              </div>
              <div className="box">
                <input type="radio" name="tanla" id="payme1" />
                <label htmlFor="payme1">
                  {" "}
                  <img className="mini" src="./imgAll/click.png" alt="" />{" "}
                </label>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="form">
              <input onChange={(n) => AdressValue(n)} type="text" placeholder="Адресс доставки" style={{border:CardAdress}}/>
              <input onChange={(n) => NameValue(n)} type="text" placeholder="Имя" style={{border:CardName}}/>
              <MasketInput mask={[ /[1-9]/, /\d/, '/', /\d/, /\d/]} guide={true} placeholder="MM/YY" ></MasketInput>
              <button onClick={handleClick}>Перейти к оплате</button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="miniVash">Ваш заказ</h1>
      <AddCard />
      <Magazine />
      <Footer />
    </div>
  );
}

export default Ofarmilina;
