import React, {useState } from "react";
import Footer from "../home/Footer";
import MasketInput from "react-text-mask"


function Nomer() {


const [cardName, setCardName] = useState()


const NameCArdValidation = new RegExp("^[a-zA-Z]{1,}$");
const NameValue = (e) => {
  if (NameCArdValidation.test(e.target.value)) {
    setCardName("2px solid green");
  } else {
    setCardName("2px solid red");
  }
};
const [cardAdress, setCardAdress] = useState()
const AdressCArdValidation = new RegExp("^[a-zA-Z]{1,}$");
  const AdressValue = (e) => {
    if (AdressCArdValidation.test(e.target.value)) {
      setCardAdress("2px solid green");
    } else {
      setCardAdress("2px solid red");
    }
};
const [img,setImg] = useState(localStorage.getItem("urlImg"))
const onChangeImg = (e) => {
  const onchangeUrl = URL.createObjectURL(e.target.files[0])
  setImg(onchangeUrl)
  localStorage.setItem("urlImg" , onchangeUrl)
  let localUrl = localStorage.getItem("urlImg")
  setImg(localUrl)
}

const clearLocalStroge = (e) => {
  localStorage.clear(e)
  setImg("")
}

  return (
    <div>
      <div className="nomerContainer">
        <form>
          <div className="nomerItem">
            <div className="nomerBox">
              <img src={img} alt="" />
              <i onClick={(e) => clearLocalStroge (e)} className="bx bx-trash btn-trash"></i>
              <span>
                <label className="buttonNomer" htmlFor="img">Изменить</label>
                <input onChange={(e) => onChangeImg (e)} type="file" id="img"/>
              </span>
            </div>
            <div className="nomerBox">
              <label htmlFor="name">Изменить</label>
              <input onChange={(e) => NameValue (e)} type="text" id="name" placeholder="Александр Сергеевич" style={{border:cardName}}/>
              <label htmlFor="nomer">Номер телефона:</label>
              <MasketInput mask={[ '(', /[1-9]/, /\d/, ')', /\d/, /\d/, /\d/,'-', /\d/, /\d/, '-', /\d/, /\d/]} guide={true} placeholder="Номер карты"></MasketInput>
              <label htmlFor="parol">Пароль</label>
              <input type="password" id="parol" />
              <i>Изменить</i>
            </div>
            <div className="nomerBox adi">
              <label htmlFor="adres">Адрес</label>
              <input onChange={(e) => AdressValue (e)} type="text" id="adres" placeholder="Адрес" style={{border:cardAdress}} />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Nomer;
