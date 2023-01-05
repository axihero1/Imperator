import React,{useState} from "react";
import Footer from "../home/Footer";

function Vixod() {

  const [cardNomer, setCardNomer] = useState()
  const NomerCArdValidation =new RegExp ("^[a-zA-Z]{1,}$");
    const EmailValue = (e) => {
      if (NomerCArdValidation.test(e.target.value)) {
        setCardNomer("2px solid green");
      } else {
        setCardNomer("2px solid red");
      }
  };

  const [PasswordNomer, setPasswordNomer] = useState()
  const PasswordCArdValidation =new RegExp ("^[a-zA-Z]{1,}$");
    const PasswordValue = (e) => {
      if (PasswordCArdValidation.test(e.target.value)) {
        setPasswordNomer("2px solid green");
      } else {
        setPasswordNomer("2px solid red");
      }
  };

  return (
    <>
    <div className="vixodContainer">
        <h1>Вход</h1>
        <div className="vixodItem">
            <div className="vixodBox">
                <img src="../imgAll/door.png" alt="" />
            </div>
            <div className="vixodBox">
                <form>
                    <input onChange={(e) => EmailValue (e)} type="email" placeholder="E-mail" style={{border:cardNomer}}/>
                    <input onChange={(e) => PasswordValue (e)} type="password" placeholder="password" style={{border:PasswordNomer}}/>
                    <button type="submit">Войти</button>
                </form>
            </div>
        </div>
    </div>
      <Footer />
    </>
  );
}

export default Vixod;
