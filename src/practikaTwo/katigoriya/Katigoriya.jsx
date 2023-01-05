import React from "react";
import { kotigoriya } from "./kotigoriyaData";
import "./kotigoriya.css"
import Footer from "../home/Footer";
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
import {setCurrentPoduct} from "../store/slices/currentProduct"

function Katigoriya() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const onItemClick = (item) => {
    dispatch(setCurrentPoduct(item));
    navigate("/filter")
  }
  return (
    <div className="contKotigory">
      <h1 className="katigoriyaHeding">Категории</h1>
      <div className="katigoriyaContainer">
        {kotigoriya.map((item, index) => {
          return (
            <div className="kotigoriyaItem" key={index}>
              <img onClick={() => onItemClick(item)}src={item.img} alt={item.title} title={item.title} />
              <p>{item.title}</p>
              <title>{item.title}</title>
            </div>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
}

export default Katigoriya;
