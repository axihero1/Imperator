import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Onac from "../onac/Onac";
import Header from "./Header";
import Katigoriya from "../katigoriya/Katigoriya";
import Strud from "../strud/Strud";
function Footer() {
  return (
    <div>
      <div className="footerContainer">
        <div className="footerBox">
          <h3>про imperia</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
            pretium aenean dignissim sit cursus dictumst adipiscing nunc.
          </p>
          <img src="./imgAll/footerLogo.png" alt="" />
        </div>
        <div className="footerBox">
          <h3>контакты</h3>
          <a href="tel:+998 88 898 07 57">+998 88 898 07 57</a>
          <a href="ahrortemirov@gmail.com">ahrortemirov@gmail.com</a>
          <h3>рабочее время</h3>
          <p>По будням 9:00 to 18:00</p>
          <p>В выходные 11:00 to 18:00</p>
        </div>
        <div className="footerBox">
          <h3>Меню</h3>
          <ul>
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <Link to="/onac">О нас</Link>
            </li>
            <li>
              <Link to="/kotigoriya">Категории</Link>
            </li>
            <li>
              <Link to="/cotrud">Сотрудничество</Link>
            </li>
          </ul>
          <Routes>
            <Route path="home1" element={<Header />}></Route>
            <Route path="/onac" element={<Onac />}></Route>
            <Route path="/kotigoriya" element={<Katigoriya />}></Route>
            <Route path="/cotrud" element={<Strud />}></Route>
          </Routes>
        </div>
        <div className="footerBox">
          <h3>категории</h3>
          <p>Женская одежда</p>
          <p>Мужская одежда</p>
          <p>Детская одежда</p>
          <p>Обувь</p>
          <p>Сумки</p>
          <p>Аксесуары</p>
        </div>
      </div>
      <div className="footerRes">
        <div className="resFooter">
          <p>
            High fidelity wireframes include more real content, specific
            typography choices.
          </p>
          <div className="item">
            <div className="resItem">
              <h3>Catalog</h3>
              <h3>Popular</h3>
              <h3>Pricing</h3>
              <h3>Features</h3>
            </div>
            <div className="resItem">
              <Link to="/">
                <h3>About</h3>
              </Link>
              <Link to="/onac">
                <h3>Blog</h3>
              </Link>
              <Link to="/kotigoriya">
                <h3>Contact</h3>
              </Link>
            </div>
          </div>
          <hr />
          <div className="iconSpan">
            <i class="fa-solid fa-location-pin"></i>
            <p>Los Angeles, 359 Hidden Valley Road</p>
          </div>
          <div className="iconSpan">
            <i class="fa-solid fa-envelope"></i>
            <p>Hellohero@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
