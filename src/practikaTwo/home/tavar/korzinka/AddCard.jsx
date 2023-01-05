import React from "react";
import { useSelector } from "react-redux";
import {addCountPlus,addCountMinus,removeItem} from "../../../store/slices/cart"
import {useDispatch} from "react-redux"

function AddCard() {
  const basket = useSelector((state) => state.cart.basket);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="countContainer">
        {(basket ?? []).map((item) => (
          <div className="countItem">
            <img src={item.img} alt="" />
            <div className="countBox">
              <span>
                <h3>Худи мужская белая с принтом.</h3>
                <h1><i onClick={() => dispatch(removeItem(item.id))} class='bx bx-x btn-bottom'></i></h1>
              </span>
              <p className="comment">
                {item.comment}
              </p>
              <div className="price">
                <span className="size28">
                  <p>{item.price} Y.E</p>
                  <i>Size: 28</i>
                </span>
                <div className="count">
                  <button onClick={() => dispatch(addCountMinus(item))}>-</button>
                  <h4>{item.counter ?? 1} </h4>
                  <button onClick={() => dispatch(addCountPlus(item))}>+</button>
                </div>
                <i onClick={() => dispatch(removeItem(item.id))} class='bx bx-trash btn-trash'></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default AddCard;