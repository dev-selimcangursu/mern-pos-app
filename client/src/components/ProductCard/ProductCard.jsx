import React from "react";
import { Button, Tag } from "antd";
import "./ProductCard.css";
import { fetchProductToBasket } from "../../features/basket/basketSlice";
import { useDispatch } from "react-redux";

function ProductCard({
  id,
  image,
  name,
  price,
  stock,
  barcodeNo,
  discountPrice,
  description,
}) {
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    dispatch(fetchProductToBasket(id));
  };

  const stockTag =
    stock > 0 ? (
      <Tag color="success" style={{ fontWeight: "600", borderRadius: 6 }}>
        Stokta Var
      </Tag>
    ) : (
      <Tag color="error" style={{ fontWeight: "600", borderRadius: 6 }}>
        Stokta Yok
      </Tag>
    );

  return (
    <div className="product__card">
      <div className="product__image">
        <img
          src={`http://localhost:5255/assets/products/${image}`}
          alt={name}
          loading="lazy"
        />
      </div>

      <div className="product__info">
        <h3>{name}</h3>

        <div className="price__wrapper">
          <span className="price-original">{price} ₺</span>
          {discountPrice && discountPrice < price && (
            <span className="price-discount">{discountPrice} ₺</span>
          )}
        </div>

        <small className="barcode">Barkod: {barcodeNo}</small>

        <div className="product__tags">
          {stockTag}
          <Tag color="default" style={{ marginLeft: 8 }}>
            {stock} Adet Stokta
          </Tag>
        </div>

        <p className="description">{description}</p>
      </div>

      <div className="product__actions">
        <Button
          onClick={handleAddToBasket}
          type="primary"
          block
          disabled={stock <= 0}
        >
          Ürünü İncele
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
