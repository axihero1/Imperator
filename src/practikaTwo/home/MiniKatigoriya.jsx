import React from 'react'
import {data} from "./tavar/DataTavar"
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {setCurrentPoduct} from "../store/slices/currentProduct"

function MiniKatigoriya() {
  let navigate = useNavigate();
  let dispatch = useDispatch();


  const onItemClick = (item) => {
    dispatch(setCurrentPoduct(item));
    navigate("/filter")
  }

  return (
    <div className="kotigoriyaContainer">
      <h1>Категории</h1>
      <div className="kotigoriyaBody">
        {data.map((item, index) => {
          return (
            <div className="kotigoriyaBox" key={index}>
              <img src={item.img} alt="bu rasm" />
              <button onClick={() => onItemClick(item)} >Женская обувь</button>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default MiniKatigoriya;