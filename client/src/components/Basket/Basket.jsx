import React from "react";
import "./Basket.css";
import { Button } from "antd";
import BasketItem from "../Basket/BasketItem";
function Basket() {
 
  return (
    <div className="basket__container">
      <div className="basket__header">
        <h3>Sepetim</h3>
      </div>
      <BasketItem />
      <div className="basket__summary">
        <h3>Ara Toplam: ₺</h3>
        <h3>KDV%:  ₺</h3>
        <hr />
        <h3 style={{ marginTop: "15px" }}>
          Toplam Tutar : ₺
        </h3>
        <Button type="primary" block>
          Sepete Git
        </Button>
      </div>
    </div>
  );
}
export default Basket;
