import React from 'react'
import Footer from '../home/Footer';
import { useNavigate } from 'react-router-dom';

function Nechego() {
    const navigate = useNavigate();
    const onItemClick = () => {
        navigate("/vixod")
    }
  return (
    <>
    <div className="nameContainer">
      <div className="nameItem replaceCont">
        <div className="nameBox replace">
          <h1>Ой Ой, здесь похоже ничего нет.</h1>
          <p>Перейдите к товарам и поплните корзину.</p>
          <button onClick={onItemClick}>Пополнить корзину</button>
        </div>
        <div className="nameBox">
            <img src="../imgAll/yellow.png" alt="" />
        </div>
      </div>
    </div>
      <Footer/>
    </>
  )
}

export default Nechego;