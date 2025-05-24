import React from "react";
import './BasketItem.css'

function BasketItem() {
  return (
    <div className="basket__items">
      <div className="basket__item">
        <img src="" alt="product__image" className="basket__item-image" />
        <div className="basket__item-info">
          <h4>Ürün Adı</h4>
          <p>X Adet</p>
          <p>Fiyat</p>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;
