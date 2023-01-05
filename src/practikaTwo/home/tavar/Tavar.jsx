import React from "react";
import { useDispatch } from "react-redux";
import { data } from "./data";
import { addToCard } from "../../store/slices/cart";
import { useNavigate } from "react-router-dom";
import { setCurrentPoduct } from "../../store/slices/currentProduct";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

function Tavar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onItemClick = (item) => {
    dispatch(setCurrentPoduct(item));
    navigate("/minikorzinka");
  };
  const AddToCard = (item) => {
    dispatch(addToCard(item));
    console.log(item);
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 524, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <h1 className="tavarH1">Лучшие товары</h1>
      <div className="tovarContainer">
        <Carousel responsive={responsive}
                // swipeable={false}
                draggable={true}
                showDots={true}
                // ssr={true} // means to render carousel on server-side.
                // infinite={true}
                autoPlaySpeed={1000}
                // keyBoardControl={false}
                // customTransition="all 1.5"
                // transitionDuration={500}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-80-px"
        >
          {data.map((item, index) =>  (
              <div className="brand" key={index}>
                <img
                  src={item.img}
                  alt={item.title}
                  onClick={() => onItemClick(item)}
                />
                <p>{item.title}</p>
                <p>
                  <i className="tavarTitle">{item.comment}</i>
                </p>
                <span>
                  <img src={item.rank} alt={item.title} />
                  <span>
                    <i> {item.price} </i>
                    <i> {item.currency} </i>
                  </span>
                </span>
                <button onClick={() => AddToCard(item)}>{item.button}</button>
              </div>
            )
          )}
        </Carousel>
      </div>
    </>
  );
}
export default Tavar;
