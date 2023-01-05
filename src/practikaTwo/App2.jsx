import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./home/Header";
import Onac from "./onac/Onac";
import Kotigoriya from "./katigoriya/Katigoriya";
import Strud from "./strud/Strud";
import "../practikaTwo/home/home.css";
import MiniKorzinka from "./home/minikorzinka/MiniKorzinka";
import Filter from "./home/minikorzinka/Filter";
import Korzinka from "./home/tavar/korzinka/Korzinka";
import Ofarmilina from "./home/tavar/ofarmilina/Ofarmilina";
import { useSelector } from "react-redux";
import Oplata from "./home/tavar/oplata/Oplata";
import Ofarmitzakaz from "./home/tavar/ofarmitzakaz/Ofarmitzakaz";
import Name from "./registratsiya/Name";
import Nomer from "./registratsiya/Nomer";
import Nechego from "./registratsiya/Nechego";
import Vixod from "./registratsiya/Vixod";
import Registratsiya from "./registratsiya/Registratsiya";

function App1() {
  const basket = useSelector((state) => state.cart.basket);
  console.log({ basket });

  const btn = () => {
    let classDiv = document.querySelector(".noneNavbar");
    classDiv.classList.toggle("block");
  };


  return (
    <>
      <div className="container">
        <div className="header">
          <div className="head">
            <span>
              <p>RU</p>
              <p>UZB</p>
            </span>
          </div>
          <div className="fixed">
            <div className="navbar">
              <div className="nav">
                <img className="none12" src="./imgAll/logo1.png" alt="" />
                <ul className="navUl">
                  <li>
                    <Link to="/">Главная</Link>
                  </li>
                  <li>
                    <Link to="onac">О нас</Link>
                  </li>
                  <li>
                    <Link to="kotigoriya">Категории</Link>
                  </li>
                  <li>
                    <Link to="/name">Сотрудничество</Link>
                  </li>
                </ul>
                <div className="noneNavbar">
                  <ul>
                    <li>
                      <Link to="/">Главная</Link>
                    </li>
                    <li>
                      <Link to="onac">О нас</Link>
                    </li>
                    <li>
                      <Link to="kotigoriya">Категории</Link>
                    </li>
                    <li>
                      <Link to="/name">Сотрудничество</Link>
                    </li>
                    <span>
                      <Link to="/registratsiya">
                        <button className="regs none1">
                          Зарегистрироваться
                        </button>
                      </Link>
                      <Link to="/vixod">
                        <button className="regs1 none1">Войти</button>
                      </Link>
                      <img
                        className="profilNone"
                        src="../imgAll/profil.png"
                        alt=""
                      />
                    </span>
                  </ul>
                </div>
              </div>
              <div className="noneDiv">
              <i onClick={btn} class="fa-solid fa-bars"></i>
                <img
                  className="noneImg1"
                  src="./imgAll/footerLogo.png"
                  alt=""
                />
              </div>
              <span className="span">
                <span>
                  <Link to="/vixod">
                    <button className="none1">Войти</button>
                  </Link>
                  <Link to="/registratsiya">
                    <button className="regs none1">Зарегистрироваться</button>
                  </Link>
                  <img
                    className="profilNone"
                    src="../imgAll/profil.png"
                    alt=""
                  />
                </span>
                <Link to="bigkorzinka">
                  <div className="cardItem">
                    <div className="no">{basket.length}</div>
                    <img
                      className="korzinka"
                      src="./imgAll/korzinka.png"
                      alt=""
                    />
                  </div>
                </Link>
              </span>
            </div>
          </div>

          <div className="routes">
            <Routes>
              <Route path="/" element={<Header />}></Route>
              <Route path="/onac" element={<Onac />}></Route>
              <Route path="/kotigoriya" element={<Kotigoriya />}></Route>
              <Route path="/cotrud" element={<Strud />}></Route>
              <Route path="/minikorzinka" element={<MiniKorzinka />}></Route>
              <Route path="/filter" element={<Filter />}></Route>
              <Route path="/bigkorzinka" element={<Korzinka />}></Route>
              <Route path="/ofarmilina" element={<Ofarmilina />}></Route>
              <Route path="/oplata" element={<Oplata />}></Route>
              <Route path="/ofarmitzakaz" element={<Ofarmitzakaz />}></Route>
              <Route path="/name" element={<Name />}></Route>
              <Route path="/nomer" element={<Nomer />}></Route>
              <Route path="/nechego" element={<Nechego />}></Route>
              <Route path="/vixod" element={<Vixod />}></Route>
              <Route path="/registratsiya" element={<Registratsiya />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
export default App1;
