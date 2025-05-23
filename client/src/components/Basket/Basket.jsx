import React from "react";
import "./Basket.css";
import { Button } from "antd";
import BasketItem from '../Basket/BasketItem'
function Basket({ items = [] }) {
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="basket__container">
      <div className="basket__header">
        <h3>Sepetim</h3>
      </div>


        
         <BasketItem/>

          <div className="basket__summary">
            <h3>Ara Toplam: {totalPrice.toFixed(2)} ₺</h3>
            <h3>KDV%: {totalPrice.toFixed(2)} ₺</h3>
            <hr />
            <h3 style={{ marginTop: "15px" }}>
              Toplam Tutar : {totalPrice.toFixed(2)} ₺
            </h3>
            <Button type="primary" block>
              Ödemeye Geç
            </Button>
          </div>
   
 
    </div>
  );
}

export default Basket;
