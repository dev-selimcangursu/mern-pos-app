import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Basket.css";
import { Card, Tag, Button } from "antd";
import alertify from "alertifyjs";

function Basket() {
  const [compareList, setCompareList] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("compareList")) || [];
    setCompareList(storedList);
  }, []);

  const clearCompareList = () => {
    alertify.confirm(
      "Onayla",
      "Karşılaştırma listesini temizlemek istediğinize emin misiniz?",
      function () {
        localStorage.removeItem("compareList");
        setCompareList([]);
        alertify.success("Karşılaştırma listesi temizlendi.");
      },
      function () {
        alertify.error("İşlem iptal edildi.");
      }
    );
  };

  return (
    <>
      <Header />
      <div className="compare__container">
        <div className="compare__header">
          <h2>Karşılaştırma Listesi</h2>
          {compareList.length > 0 && (
            <Button
              type="primary"
              onClick={clearCompareList}
              style={{
                fontSize: "13px",
                padding: "6px 14px",
                borderRadius: "6px",
                fontWeight: "500",
                backgroundColor: "#1677ff",
                border: "none",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
              }}
            >
              Listeyi Temizle
            </Button>
          )}
        </div>

        {compareList.length === 0 ? (
          <p className="empty-message">Karşılaştırma listesi boş.</p>
        ) : (
          <div className="compare__flex-container">
            {compareList.map((product, index) => (
              <Card
                key={index}
                hoverable
                bordered={false}
                className="compare__card"
                cover={
                  <img
                    alt={product.slug}
                    src={`http://localhost:5255/assets/products/${product.image_name}`}
                    className="compare__image"
                  />
                }
              >
                <div className="compare__header">
                  <h3 className="compare__title">{product.name}</h3>
                  <div className="compare__price">
                    <span className="price-value">₺{product.price}</span>
                    {product.discount_price && (
                      <span className="discount-price">
                        ₺{product.discount_price}
                      </span>
                    )}
                  </div>
                </div>

                <p className="compare__desc">{product.short_description}</p>

                <p className="compare__stock">
                  <strong>Stok : {product.stock} Adet</strong>
                  <strong>STK : {product.stock} Adet</strong>
                </p>

                <table className="compare__features-table">
                  <tbody>
                    {product.features.map(({ key, name, value }) => (
                      <tr key={key}>
                        <td>{name}</td>
                        <td className="feature-status">
                          {value && value.toLowerCase() !== "yok" ? (
                            <span className="feature-yes">{value}</span>
                          ) : (
                            <span
                              className="feature-no"
                              style={{ color: "red" }}
                            >
                              Yok
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="compare__tags">
                  {product.tags?.map((tag, i) => (
                    <Tag key={i} color="geekblue">
                      {tag}
                    </Tag>
                  ))}
                </div>
                <div>
                  <Button
                    type="primary"
                    style={{ width: "100%" }}
                    onClick={() => {
                      window.location.href = `${product.website_url}`;
                    }}
                  >
                    Hızlı Sipariş Ver
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Basket;
