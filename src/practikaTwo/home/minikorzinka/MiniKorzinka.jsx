import React from 'react'
import Tavar from '../tavar/Tavar';
import Footer from '../Footer';
import "./miniKor.css"
import { kotigoriya } from '../../katigoriya/kotigoriyaData';
import {useSelector,useDispatch} from "react-redux"
import { addToCard } from '../../store/slices/cart';
 

function MiniKorzinka() {
  const product = useSelector((state) => state.currentProduct)
  console.log(product);

  
  const dispatch = useDispatch();
  const AddToCard = (item) => {
    dispatch(addToCard(item));
    console.log(item);
  };

  return (
    <section>
    <div className="korzinkaContainer">
      <div className="korzinkaHead">
        <div className="imgCont">
          <img className='headImg' src={product.img} alt="" />
          <div className="imgSpan">
            <img className='imgNone' src={product.img} alt="" />
            <img className='imgNone' src={product.img} alt="" />
            <img className='imgNone' src={product.img} alt="" />
            <img className='imgNone' src={product.img} alt="" />
          </div>
        </div>
        <div className="textCont">
          <h1>Lorem ipsum dolor sit amet  </h1>
          <img className='inline' src="./imgAll/rank.png" alt="" />
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            <br />
            faucibus porttitor rutrum at tellus sodales libero. Eleifend non.
          </p>
          <h3>{product.price} {product.currency} </h3>
          <i>Size</i>
          <div className="sizeCont">
            <p>{product.size.size28} </p>
            <p>{product.size.size30}</p>
            <p>{product.size.size32}</p>
            <p>{product.size.size34}</p>
            <p>{product.size.size36}</p>
          </div>
          <div className="btnKorzinka">
            <button onClick={() => AddToCard(product)} className="btn1">{product.button} </button>
            <button className="btn2">Быстрая покупка</button>
          </div>
          <h2>Преимущества</h2>
          <div className="iconBox">
            <span>
              <i class="fa-solid fa-truck"></i>
              <p>Delivery in 7 days</p>
            </span>
            <span>
              <i class="fa-solid fa-truck"></i>
              <p>Delivery in 7 days</p>
            </span>
            <span>
              <i class="fa-solid fa-truck"></i>
              <p>Delivery in 7 days</p>
            </span>
            <span>
              <i class="fa-solid fa-truck"></i>
              <p>Delivery in 7 days</p>
            </span>
          </div>
        </div>
      </div>
      <Tavar />
      <div className="korzinkaBody">
        <h1>Лучшие категории</h1>
        <div className="korzinkaBox">
          {kotigoriya.map((item, index) => {
            if (item.id < 5) {
              return (
                <div className="korzinkaItem" key={index}>
                  <img src={item.img} alt={item.title} title={item.title} />
                  <p>{item.title}</p>
                  <title>{item.title}</title>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
      <Footer />
  </section>
  )
}

export default MiniKorzinka;