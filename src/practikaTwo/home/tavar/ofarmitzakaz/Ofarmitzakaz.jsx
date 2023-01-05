import React from "react";
import Footer from "../../Footer";
import AddCard from "../korzinka/AddCard";

function Ofarmitzakaz() {
  return (
    <div className="ofarmitZakaz-container">
      <div className="ofarmitZakaz-head">
        <AddCard />
      </div>
      <button>сделать заказ</button>
      <Footer />
    </div>
  );
}

export default Ofarmitzakaz;
