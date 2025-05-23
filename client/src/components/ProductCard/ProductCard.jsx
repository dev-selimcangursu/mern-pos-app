import React from "react";
import { Button, Tag } from "antd";
import "./ProductCard.css";

function ProductCard({ image, name, price, stock, barcodeNo }) {
  return (
    <div className="product__card">
      <div className="product__image">
        <img src={image} alt={name} />
      </div>
      <div className="product__info">
        <h3>{name}</h3>
        <small>Fiyat : {price} ₺</small>
        <br />
        <small>Barkod Numarası : {barcodeNo}</small>
        <br />
        <Tag color="green">Stokta Var</Tag>
        <Tag color="gray">{stock} Adet Stokta</Tag>
        <br />
        <br />
      </div>

      <Button type="primary">Sepete Ekle</Button>
    </div>
  );
}

export default ProductCard;
