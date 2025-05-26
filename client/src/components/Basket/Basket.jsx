import React, { useEffect, useState } from "react";
import "./Basket.css";
import { Tag, Button } from "antd";
import { useSelector } from "react-redux";
import alertify from "alertifyjs";
function Basket() {
  const basketProduct = useSelector((state) => state.basket.basket);
  const [isInCompareList, setIsInCompareList] = useState(false);

  useEffect(() => {
    const compareList = JSON.parse(localStorage.getItem("compareList")) || [];
    const newProductKey = basketProduct?.id ?? basketProduct?.slug;

    const isAlreadyInList = compareList.some((item) => {
      const existingKey = item?.id ?? item?.slug;
      return existingKey === newProductKey;
    });

    setIsInCompareList(isAlreadyInList);
  }, [basketProduct]);

  function openWebsiteLink() {
    window.open(basketProduct.website_url, "_blank");
  }

  function handleAddToCompare() {
    const compareList = JSON.parse(localStorage.getItem("compareList")) || [];
    const newProductKey = basketProduct?.id ?? basketProduct?.slug;

    const isAlreadyInList = compareList.some((item) => {
      const existingKey = item?.id ?? item?.slug;
      return existingKey === newProductKey;
    });

    if (!isAlreadyInList) {
      compareList.push(basketProduct);
      localStorage.setItem("compareList", JSON.stringify(compareList));
      alertify.success("Ürün karşılaştırma listesine eklendi.");
      setIsInCompareList(true);
      window.dispatchEvent(new Event("compareListUpdated"));
    } else {
      alertify.warning("Bu ürün zaten karşılaştırma listesinde.");
      setIsInCompareList(true);
    }
  }

  if (!basketProduct) {
    return <div className="summary__container">Sepet boş.</div>;
  }

  return (
    <div className="summary__container">
      <h3>Ürün Özeti</h3>
      <div className="summary__content">
        {!basketProduct?.name ? (
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
          backgroundColor: isInCompareList ? "#ccc" : "#555",
          borderColor: isInCompareList ? "#ccc" : "#555",
          color: isInCompareList ? "#333" : "white",
        }}
        onClick={handleAddToCompare}
        disabled={!basketProduct?.name || isInCompareList}
      >
        {isInCompareList ? "Listeye Eklendi" : "Karşılaştırma Listesine Ekle"}
      </Button>

      <Button
        onClick={openWebsiteLink}
        type="primary"
        block
        style={{ marginTop: "12px" }}
        disabled={!basketProduct?.name}
      >
        Hızlı Sipariş Ver
      </Button>
    </div>
  );
}

export default Basket;
