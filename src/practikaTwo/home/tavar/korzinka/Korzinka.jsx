import React from "react";
import Footer from "../../Footer";
import "../tavar.css";
import Tavar from "../Tavar";
import AddCard from "./AddCard";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Korzinka() {
  const basket = useSelector((state) => state.cart.basket)
  let total = basket.reduce((p, c) => (p + (c.counter || 1) * c.price), 0)

  let navigate = useNavigate();
  function handleClick() {
    if(basket.length===0){
      alert("Mahsulot harid qiling o`z savadingizni to`ldiring")
    }else{
      navigate('/ofarmilina')
    } 
  }
  return (
    <div className="body">
      <AddCard/>
      <div className="bill-container">
          <div className="sena">
            <h3>Общая цена:</h3>
            <p> {total} Y.E</p>
          </div>
          <button onClick={handleClick} className="zakaz">Оформить заказ</button>
        </div>
      <Tavar />
      <Footer/>
    </div>
  );
}

export default Korzinka;
