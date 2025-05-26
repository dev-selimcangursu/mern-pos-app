import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Basket.css";
import { Card, Tag, Button } from "antd";

function Basket() {
  const [compareList, setCompareList] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("compareList")) || [];
    setCompareList(storedList);
  }, []);

  const clearCompareList = () => {
    localStorage.removeItem("compareList");
    setCompareList([]);
  };

  return (
    <>
      <Header />
      <div className="compare__container">
        <h2>Karşılaştırma Listesi</h2>

        {/* 🆕 Temizle butonu */}
        {compareList.length > 0 && (
          <Button
            type="primary"
            primary
            onClick={clearCompareList}
            style={{ fontSize: "12px" }}
          >
            Listeyi Temizle
          </Button>
        )}

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

                <p
                  className={`compare__stock ${
                    product.stk > 0 ? "in-stock" : "out-of-stock"
                  }`}
                >
                  {product.stk > 0 ? `Stok: ${product.stk}` : "Stokta yok"}
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
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Basket;
