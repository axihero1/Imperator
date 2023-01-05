import React from "react";
import "./miniKor.css";
import {useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";
import { setCurrentPoduct } from "../../store/slices/currentProduct";
import { useDispatch } from "react-redux";



function Filter() {
  const product = useSelector((state) => state.currentProduct)
  console.log(product);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onItemClick = (item) => {
    dispatch(setCurrentPoduct(product));
    navigate("/minikorzinka")
  }



  const btn = () => {
    let classDiv = document.querySelector(".category");
    classDiv.classList.toggle("active");
  };
  const btn1 = () => {
    let classDiv1 = document.querySelector(".cotigory1");
    classDiv1.classList.toggle("active");
  };
  const btn2 = () => {
    let classDiv2 = document.querySelector(".cotigory2");
    classDiv2.classList.toggle("active");
  };
  const rotate1 = () => {
    let classRotate = document.querySelectorAll(".rotate");
    console.log(classRotate);
  };
  return (
    <div className="filterContainer">
      <div className="filterHead">
        <div className="filter">
          <h2>Filter</h2>
          <div className="category">
            <span onClick={btn} className="catHead">
              <h4>Catigory</h4>
              <i
                onClick={rotate1}
                className="fa-solid fa-caret-down rotate"
              ></i>
            </span>
            <div className="check">
              <p for="chec1">Women’s wear</p>
              <input type="checkbox" id="chec1" />
            </div>
            <div className="check">
              <p for="chec">Men’s wear</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p>Kid’s wear</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p>Shoes</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p>Сумки</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p>Accessories</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p>Underwear</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p>Decorations</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p>Home textiles</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p for="chec10">Wholesale</p>
              <input type="checkbox" id="chec10" />
            </div>
          </div>
          <div className="category cotigory1">
            <span onClick={btn1} className="catHead">
              <h4>Gender</h4>
              <i className="fa-solid fa-caret-down rotate"></i>
            </span>
            <div className="check">
              <p for="chec1">Women’s wear</p>
              <input type="checkbox" id="chec1" />
            </div>
            <div className="check">
              <p for="chec">Men’s wear</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p>Kid’s wear</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p>Shoes</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p>Сумки</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p>Accessories</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p>Underwear</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p>Decorations</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p>Home textiles</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p for="chec10">Wholesale</p>
              <input type="checkbox" id="chec10" />
            </div>
          </div>
          <div className="category cotigory2">
            <span onClick={btn2} className="catHead">
              <h4>Price</h4>
              <i className="fa-solid fa-caret-down rotate3"></i>
            </span>
            <div className="check">
              <p for="chec1">Women’s wear</p>
              <input type="checkbox" id="chec1" />
            </div>
            <div className="check">
              <p for="chec">Men’s wear</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p>Kid’s wear</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p>Shoes</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p>Сумки</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p>Accessories</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p>Underwear</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p>Decorations</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p>Home textiles</p>
              <input type="checkbox" id="chec2" />
            </div>
            <div className="check">
              <p for="chec10">Wholesale</p>
              <input type="checkbox" id="chec10" />
            </div>
          </div>
          <div className="btn-container">
            <button className="btn">Clean filter</button>
          </div>
        </div>
        <div className="filterBody">
          <div className="filterCont">
            <span>
              <img onClick={() => onItemClick (product)} className="brandimg" src={product.img} alt="" />
              <p>{product.title} </p>
              <img src="../imgAll/rank.png" alt="" />
            </span>
            <span>
              <img className="brandimg" src={product.img} alt="" />
              <p>Lorem ipsum dolor sit amet</p>
              <img src="../imgAll/rank.png" alt="" />
            </span>
            <span>
              <img className="brandimg" src={product.img} alt="" />
              <p>Lorem ipsum dolor sit amet</p>
              <img src="../imgAll/rank.png" alt="" />
            </span>
            <span>
              <img className="brandimg" src={product.img} alt="" />
              <p>Lorem ipsum dolor sit amet</p>
              <img src="../imgAll/rank.png" alt="" />
            </span>
            <span>
              <img className="brandimg" src={product.img} alt="" />
              <p>Lorem ipsum dolor sit amet</p>
              <img src="../imgAll/rank.png" alt="" />
            </span>
            <span>
              <img className="brandimg" src={product.img} alt="" />
              <p>Lorem ipsum dolor sit amet</p>
              <img src="../imgAll/rank.png" alt="" />
            </span>
            <span>
              <img className="brandimg" src={product.img} alt="" />
              <p>Lorem ipsum dolor sit amet</p>
              <img src="../imgAll/rank.png" alt="" />
            </span>
            <span>
              <img className="brandimg" src={product.img} alt="" />
              <p>Lorem ipsum dolor sit amet</p>
              <img src="../imgAll/rank.png" alt="" />
            </span>
            <span>
              <img className="brandimg" src={product.img} alt="" />
              <p>Lorem ipsum dolor sit amet</p>
              <img src="../imgAll/rank.png" alt="" />
            </span>
            <span>
              <img className="brandimg" src={product.img} alt="" />
              <p>Lorem ipsum dolor sit amet</p>
              <img src="../imgAll/rank.png" alt="" />
            </span>
            <span>
              <img className="brandimg" src={product.img} alt="" />
              <p>Lorem ipsum dolor sit amet</p>
              <img src="../imgAll/rank.png" alt="" />
            </span>
            <span>
              <img className="brandimg" src={product.img} alt="" />
              <p>Lorem ipsum dolor sit amet</p>
              <img src="../imgAll/rank.png" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
