import React, { useEffect, useState } from "react";
import { Button, Tag } from "antd";
import "./ProductCard.css";
import alertify from "alertifyjs";

function ProductCard({
  id,
  image,
  name,
  price,
  stock,
  barcodeNo,
  discountPrice,
  description,
  website_url,
  slug,
  features = [],
  category_id,
}) {
  // Ürünün karşılaştırma listesinde olup olmadığını kontrol eden state
  const [isInCompareList, setIsInCompareList] = useState(false);

  // Bileşen yüklendiğinde veya id değiştiğinde karşılaştırma listesini kontrol et
  useEffect(() => {
    const compareList = JSON.parse(localStorage.getItem("compareList")) || [];
    const isAlreadyInList = compareList.some((item) => {
      const existingKey = item?.id ?? item?.slug;
      return existingKey === id;
    });

    setIsInCompareList(isAlreadyInList);
  }, [id]);
  // Karşılaştırma listesine ürün ekleme fonksiyonu
  function handleAddToCompare() {
    const compareList = JSON.parse(localStorage.getItem("compareList")) || [];

    const isAlreadyInList = compareList.some((item) => {
      const existingKey = item?.id ?? item?.slug;
      return existingKey === id;
    });

    // Eğer liste boş değilse ve ilk ürünün category_id'si ile bu ürününki farklıysa
    if (compareList.length > 0 && compareList[0]?.category_id !== category_id) {
      alertify.error(
        "Sadece aynı kategoriden ürünleri karşılaştırabilirsiniz."
      );
      return;
    }

    if (!isAlreadyInList) {
      const productData = {
        id,
        name,
        image,
        price,
        discountPrice,
        barcodeNo,
        description,
        stock,
        website_url,
        slug,
        features,
        category_id,
      };

      compareList.push(productData);
      localStorage.setItem("compareList", JSON.stringify(compareList));
      alertify.success("Ürün karşılaştırma listesine eklendi.");
      setIsInCompareList(true);
      window.dispatchEvent(new Event("compareListUpdated"));
    } else {
      alertify.warning("Bu ürün zaten karşılaştırma listesinde.");
      setIsInCompareList(true);
    }
  }
  // Ürün web sitesine yönlendirme fonksiyonu
  function openWebsiteLink() {
    if (website_url) {
      window.open(website_url, "_blank");
    }
  }
  // Stok bilgisini gösteren etiket
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

        <small className="barcode">GTIN: {barcodeNo}</small>

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
          block
          style={{
            marginTop: "20px",
            backgroundColor: isInCompareList ? "#ccc" : "#555",
            borderColor: isInCompareList ? "#ccc" : "#555",
            color: isInCompareList ? "#333" : "white",
          }}
          onClick={handleAddToCompare}
          disabled={isInCompareList}
        >
          {isInCompareList ? "Listeye Eklendi" : "Karşılaştırma Listesine Ekle"}
        </Button>

        <Button
          onClick={openWebsiteLink}
          type="primary"
          block
          style={{ marginTop: "12px" }}
        >
          Hızlı Sipariş Ver
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
