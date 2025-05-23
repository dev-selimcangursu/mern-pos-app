import React from "react";
import './BasketItem.css'

function BasketItem() {
  return (
    <div className="basket__items">
      <div className="basket__item">
        <img src="" alt="" className="basket__item-image" />
        <div className="basket__item-info">
          <h4>Wiky Watch 5 Plus</h4>
          <p>1 Adet</p>
          <p>4560₺</p>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;
