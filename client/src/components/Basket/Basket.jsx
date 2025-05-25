import React from "react";
import "./Basket.css";
import { Tag, Button } from "antd";
import { useSelector } from "react-redux";

function Basket() {
  const basketProduct = useSelector((state) => state.basket.basket);

  if (!basketProduct) {
    return <div className="summary__container">Sepet boş.</div>;
  }
  function openWebsiteLink() {
    window.open(basketProduct.website_url, "_blank");
  }
  return (
    <div className="summary__container">
      <h3>Ürün Özeti</h3>
      <div className="summary__content">
        {!basketProduct || !basketProduct.name ? (
          <p>Seçili Ürün Yok</p>
        ) : (
          <>
            <div className="summary__image-container">
              <img
                src={`http://localhost:5255/assets/products/${basketProduct.image_name}`}
                alt={basketProduct.slug}
                className="summary__image"
              />
            </div>

            <div className="summary__info">
              <h4 className="summary__product-name">{basketProduct.name}</h4>
              <p className="summary__description">
                {basketProduct.short_description}
              </p>

              <div className="summary__price">
                <span className="price">Fiyat: ₺{basketProduct.price}</span>
                {basketProduct.discount_price && (
                  <span className="discount-price">
                    İndirimli: ₺{basketProduct.discount_price}
                  </span>
                )}
              </div>

              <p className="summary__stock">Stok: {basketProduct.stk}</p>

              <div className="summary__tags">
                {basketProduct.tags?.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <Button
        block
        style={{
          marginTop: "20px",
          backgroundColor: "#555",
          borderColor: "#555",
          color: "white",
        }}
        disabled={!basketProduct || !basketProduct.name}
      >
        Karşılaştırma Listesine Ekle
      </Button>

      <Button
        onClick={openWebsiteLink}
        type="primary"
        block
        style={{ marginTop: "12px" }}
        disabled={!basketProduct || !basketProduct.name}
      >
        Hızlı Sipariş Ver
      </Button>
    </div>
  );
}

export default Basket;
