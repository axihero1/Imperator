import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../home/Footer";
import MasketInput from "react-text-mask"


function Registratsiya() {
    const [AdressBool, setAdressBool] = useState(false);
    const [NameBool, setNameBool] = useState(false);
    const [EmailBool, setEmailBool] = useState(false);



  const [CardName, setCardName] = useState();
  const NameCArdValidation = new RegExp("^[a-zA-Z]{1,}$");
  const NameValue = (e) => {
    if (NameCArdValidation.test(e.target.value)) {
      setNameBool(true);
      setCardName("2px solid green");
    } else {
      setNameBool(false);
      setCardName("2px solid red");
    }
};


  const [CardAdress, setCardAdress] = useState();
  const AdressCArdValidation = new RegExp("^[a-zA-Z]{1,}$");
  const AdressValue = (e) => {
    if (AdressCArdValidation.test(e.target.value)) {
      setAdressBool(true);
      setCardAdress("2px solid green");
    } else {
      setAdressBool(false);
      setCardAdress("2px solid red");
    }
  };

  const [CardEmail, setCardEmail] = useState();
  const EmailCArdValidation = new RegExp("^[a-zA-Z]{1,}$");
  const EmailValue = (e) => {
    if (EmailCArdValidation.test(e.target.value)) {
      setEmailBool(true);
      setCardEmail("2px solid green");
    } else {
      setEmailBool(false);
      setCardEmail("2px solid red");
    }
  };





  let navigate = useNavigate();
 function handleClick () {
  console.log(setAdressBool,setNameBool);
    if (
      AdressBool &&
      NameBool &&
      EmailBool
    ) {
      navigate("/nomer");
    }
  };
  return (
    <div>
      <div className="registratsiyaContainer">
        <div className="registratsiyaItem">
          <div className="registratsiyaBox">
            <img src="../imgAll/door.png" alt="" />
          </div>
          <div className="registratsiyaBox">
            <form>
              <input onChange={(e) => NameValue (e)} type="text" placeholder="Имя" style={{border:CardName}}/>
              <MasketInput mask={[ '(' , /[1-9]/, /\d/, ')' ,/\d/, /\d/,/\d/, ' ',  /\d/, /\d/, ' ', /\d/, /\d/]} guide={true} placeholder="Номер"></MasketInput>
              <input onChange={(e) => AdressValue (e)} type="text" placeholder="Адрес" style={{border:CardAdress}}/>
              <input onChange={(e) => EmailValue (e)} type="email" placeholder="E-mail" style={{border:CardEmail}}/>
              <span>
                <label htmlFor="parol">Пароль</label>
                <input type="password" placeholder="password" />
              </span>
              <button onClick={handleClick}>Войти</button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Registratsiya;
