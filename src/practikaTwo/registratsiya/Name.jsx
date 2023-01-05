import React,{useState} from "react";
import Footer from "../home/Footer";
import "./registratsiya.css";
import MasketInput from "react-text-mask"


function Name() {
  const [cardName, setCardName] = useState();

  const NameCArdValidation = new RegExp("^[a-zA-Z]{1,}$");
  const NameValue = (e) => {
    if (NameCArdValidation.test(e.target.value)) {
      setCardName("2px solid green");
    } else {
      setCardName("2px solid red");
    }
  };


  const [cardAdress, setCardAdress] = useState();
  const AdressCArdValidation = new RegExp("^[a-zA-Z]{1,}$");
  const AdressValue = (e) => {
    if (AdressCArdValidation.test(e.target.value)) {
      setCardAdress("2px solid green");
    } else {
      setCardAdress("2px solid red");
    }
  };

  return (
    <>
      <div className="nameContainer">
        <div className="nameItem">
          <div className="nameBox">
            <h1>Здравствуйте, оставьте заявку для сотрудничества</h1>
            <span className="span1">
              <strong>Phone</strong>
              <a href="tel:+1 848 493 944">+1 848 493 944</a>
            </span>
            <span className="span1">
              <strong>Address</strong>
              <a href="508 Bridle Avenue Newnan, GA 30263">
                508 Bridle Avenue Newnan, GA 30263
              </a>
            </span>
          </div>
          <div className="nameBox">
            <input onChange={(e) => NameValue (e)} type="text" placeholder="Имя" style={{border:cardName}}/>
            <MasketInput mask={[ '(' , /[1-9]/, /\d/, ')' ,/\d/, /\d/,/\d/, ' ',  /\d/, /\d/, ' ', /\d/, /\d/]} guide={true} placeholder="Номер "></MasketInput>
            <input onChange={(e) => AdressValue (e)} type="text" placeholder="Компания" style={{border:cardAdress}} />
            <textarea
              name="bio"
              cols="30"
              rows="10"
              placeholder="Коротко о вашей компании"
            ></textarea>
            <button className="button">
              Отправить
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Name;
